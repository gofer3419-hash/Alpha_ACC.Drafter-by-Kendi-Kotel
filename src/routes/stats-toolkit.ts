/**
 * StatsToolKit (/stats): build the statistics of a new card from an existing
 * unit of WiF Extended.
 *
 * 1. Left: search every unit (name, division, nationality, type);
 *    right: the chosen unit's card and "Wybierz".
 * 2. After "Wybierz" the original card moves left and an editable copy shows
 *    on the right, with tools above it (traits, new weapon columns, ...).
 * 3. The edited card can be copied to the clipboard as a picture.
 */
import {css, html, LitElement, nothing, TemplateResult} from 'lit';
import {customElement, query, state} from 'lit/decorators.js';
import {live} from 'lit/directives/live.js';
import '../components/stats-toolkit/stats-card';
import {CardChangeDetail, COUNTRY_NAMES, StatsCard} from '../components/stats-toolkit/stats-card';
import {
  cardFromUnit,
  collectWeaponPresets,
  emptyWeapon,
  newUid,
  PANEL_TYPES,
  reserveUids,
  PanelType,
  StatCard,
  UNIT_TRAITS,
  unitTraitLabel,
  WEAPON_CATEGORIES,
  WeaponCategory,
  WeaponPreset,
} from '../components/stats-toolkit/stats-model';
import {unitTraitIcon} from '../components/stats-toolkit/stats-icons';
import {BundleManagerService} from '../services/bundle-manager';
import {notificationService} from '../services/notification';
import {Division} from '../types/deck-builder';
import {Unit} from '../types/unit';
import {applySideTheme} from '../utils/theme';

const DATASET = 'wif-extended';
const STORAGE_KEY = 'acc.statsToolkit';
const MAX_RESULTS = 150;
const HISTORY_LIMIT = 100;

const UNIT_TYPES: {value: string; label: string}[] = [
  {value: 'tnk', label: 'Czołgi'},
  {value: 'inf', label: 'Piechota'},
  {value: 'rec', label: 'Rozpoznanie'},
  {value: 'art', label: 'Artyleria'},
  {value: 'aa', label: 'Obrona przeciwlotnicza'},
  {value: 'hel', label: 'Śmigłowce'},
  {value: 'air', label: 'Samoloty'},
  {value: 'log', label: 'Logistyka'},
];

type Tool = 'traits' | 'column' | null;

interface SavedWork {
  original: StatCard;
  edited: StatCard;
}

function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '');
}

function loadWork(): SavedWork | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const work = JSON.parse(raw) as SavedWork;
    return work?.original && work?.edited ? work : null;
  } catch (error) {
    return null;
  }
}

function saveWork(work: SavedWork | null) {
  try {
    if (work) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(work));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  } catch (error) {
    // Too big (uploaded icons) or storage blocked: the work just isn't kept.
    console.warn(error);
  }
}

function notify(content: string, theme = '') {
  notificationService.instance?.addNotification({content, duration: 4000, theme});
}

function fileName(card: StatCard, extension: string): string {
  const base = card.name.trim().replace(/[^\p{L}\p{N}._-]+/gu, '_') || 'karta';
  return `${base}.${extension}`;
}

function download(blob: Blob, name: string) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

@customElement('stats-toolkit-route')
export class StatsToolkitRoute extends LitElement {
  static get styles() {
    return css`
      :host {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
        gap: var(--lumo-space-m);
        height: calc(100vh - var(--app-header-height));
        padding: var(--lumo-space-m);
        box-sizing: border-box;
      }

      @media (max-width: 1000px) {
        :host {
          grid-template-columns: 1fr;
          height: auto;
        }
      }

      .pane {
        display: flex;
        flex-direction: column;
        min-height: 0;
        background-color: var(--lumo-base-color);
        border-radius: var(--lumo-border-radius-l);
        padding: var(--lumo-space-m);
        box-sizing: border-box;
        overflow: hidden;
      }

      .pane-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: var(--lumo-space-s);
        margin-bottom: var(--lumo-space-s);
        flex-wrap: wrap;
      }

      h2 {
        margin: 0;
        font-size: var(--lumo-font-size-xl);
      }

      .hint {
        margin: 0 0 var(--lumo-space-s);
        color: var(--lumo-secondary-text-color);
        font-size: var(--lumo-font-size-s);
      }

      .filters {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: var(--lumo-space-s);
        margin-bottom: var(--lumo-space-s);
      }

      .filters .search {
        grid-column: 1 / -1;
      }

      label.field {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        font-size: var(--lumo-font-size-xs);
        color: var(--lumo-secondary-text-color);
        min-width: 0;
      }

      input,
      select {
        font: inherit;
        font-size: var(--lumo-font-size-s);
        color: var(--lumo-body-text-color);
        background: var(--lumo-contrast-5pct);
        border: 1px solid var(--lumo-contrast-20pct);
        padding: 0.35rem 0.5rem;
        min-width: 0;
      }

      input:focus,
      select:focus {
        outline: 2px solid var(--lumo-primary-color);
      }

      select option {
        background: #1c1c1c;
      }

      .count {
        font-size: var(--lumo-font-size-xs);
        color: var(--lumo-secondary-text-color);
        margin-bottom: var(--lumo-space-xs);
      }

      .results {
        flex: 1 1 auto;
        overflow: auto;
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-height: 0;
      }

      button.unit {
        display: grid;
        grid-template-columns: 6rem 1fr auto;
        align-items: center;
        gap: var(--lumo-space-s);
        padding: 0.2rem var(--lumo-space-s) 0.2rem 0.2rem;
        border: 1px solid transparent;
        background: var(--lumo-contrast-5pct);
        color: var(--lumo-body-text-color);
        font: inherit;
        text-align: left;
        cursor: pointer;
      }

      button.unit:hover {
        background: var(--lumo-contrast-10pct);
      }

      button.unit.selected {
        border-color: var(--lumo-primary-color);
        background: var(--lumo-primary-color-10pct);
      }

      button.unit img {
        width: 6rem;
        height: 3rem;
        object-fit: cover;
        display: block;
      }

      .u-name {
        font-weight: 600;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .u-meta {
        font-size: var(--lumo-font-size-xs);
        color: var(--lumo-secondary-text-color);
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .u-cost {
        font-weight: 700;
        color: #e8a92a;
      }

      .card-area {
        flex: 1 1 auto;
        overflow: auto;
        min-height: 0;
        padding: 1rem 0.25rem 1rem;
      }

      .card-area stats-card {
        width: max-content;
        margin: 0 auto;
      }

      .empty {
        color: var(--lumo-secondary-text-color);
        text-align: center;
        margin-top: 4rem;
      }

      .actions {
        display: flex;
        justify-content: center;
        gap: var(--lumo-space-s);
        padding-top: var(--lumo-space-s);
        flex-wrap: wrap;
      }

      button.btn,
      label.btn {
        font: inherit;
        font-size: var(--lumo-font-size-s);
        padding: 0.45rem 0.9rem;
        border: 1px solid var(--lumo-contrast-30pct);
        background: var(--lumo-contrast-10pct);
        color: var(--lumo-body-text-color);
        cursor: pointer;
        white-space: nowrap;
      }

      button.btn:hover:not(:disabled),
      label.btn:hover {
        background: var(--lumo-contrast-20pct);
      }

      button.btn:disabled {
        opacity: 0.45;
        cursor: default;
      }

      button.btn.primary {
        background: var(--lumo-primary-color);
        border-color: var(--lumo-primary-color);
        color: #fff;
        font-weight: 700;
        padding: 0.55rem 2.5rem;
      }

      button.btn.primary:hover:not(:disabled) {
        filter: brightness(1.15);
      }

      button.btn.active {
        border-color: var(--lumo-primary-text-color);
        color: var(--lumo-primary-text-color);
      }

      /* ---------- tools ---------- */
      .tools {
        display: flex;
        flex-wrap: wrap;
        gap: var(--lumo-space-xs);
        align-items: stretch;
        position: relative;
      }

      .tool {
        position: relative;
      }

      .tool > button.btn {
        height: 100%;
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 0.03em;
      }

      .tool select {
        height: 100%;
      }

      .tools .sep {
        flex: 1 1 auto;
      }

      .popup {
        position: absolute;
        z-index: 10;
        top: 100%;
        left: 0;
        margin-top: 0.25rem;
        width: 22rem;
        max-height: 60vh;
        overflow: auto;
        background: #1d1c1a;
        border: 1px solid var(--lumo-contrast-30pct);
        box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.6);
        padding: var(--lumo-space-s);
      }

      .popup h3 {
        margin: 0 0 var(--lumo-space-xs);
        font-size: var(--lumo-font-size-s);
      }

      .popup label.check {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.2rem 0.25rem;
        font-size: var(--lumo-font-size-s);
        cursor: pointer;
      }

      .popup label.check:hover {
        background: var(--lumo-contrast-5pct);
      }

      .popup .icon {
        width: 1.3rem;
        height: 1.3rem;
        flex: 0 0 auto;
        display: inline-block;
      }

      /* One-colour icons (iconset colour classes clash in one shadow root) */
      .popup .icon [class],
      .popup .icon path,
      .popup .icon rect,
      .popup .icon polygon,
      .popup .icon circle,
      .popup .icon ellipse {
        fill: currentColor;
      }

      .popup .icon [fill='none'] {
        fill: none;
      }

      .popup .text-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 0.55rem;
        font-weight: 700;
      }

      .popup .column-form {
        display: flex;
        flex-direction: column;
        gap: var(--lumo-space-s);
      }

      .picker {
        border: 1px solid var(--lumo-contrast-20pct);
        background: var(--lumo-contrast-5pct);
      }

      .picker.disabled {
        opacity: 0.4;
        pointer-events: none;
      }

      .picker input {
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid var(--lumo-contrast-20pct);
      }

      .picker-list {
        max-height: 18rem;
        overflow: auto;
      }

      .picker-list button {
        display: grid;
        grid-template-columns: 4.5rem 1fr;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
        padding: 0.2rem 0.35rem;
        background: none;
        border: none;
        color: inherit;
        font: inherit;
        font-size: var(--lumo-font-size-s);
        text-align: left;
        cursor: pointer;
      }

      .picker-list button:hover,
      .picker-list button:focus-visible {
        background: var(--lumo-contrast-10pct);
        outline: none;
      }

      .picker-list img {
        width: 4.5rem;
        height: 1.8rem;
        object-fit: contain;
        filter: invert(0.9);
      }

      .picker-list .stats {
        display: block;
        font-size: var(--lumo-font-size-xxs);
        color: var(--lumo-secondary-text-color);
      }

      .note {
        font-size: var(--lumo-font-size-xs);
        color: var(--lumo-secondary-text-color);
        margin: var(--lumo-space-xs) 0 0;
      }

      .error {
        color: var(--lumo-error-text-color);
      }
    `;
  }

  @state() private units: Unit[] = [];
  @state() private divisions: Division[] = [];
  @state() private loading = true;
  @state() private error = '';

  @state() private query = '';
  @state() private division = '';
  @state() private country = '';
  @state() private category = '';
  @state() private shown = MAX_RESULTS;

  @state() private preview: Unit | null = null;
  @state() private original: StatCard | null = null;
  @state() private edited: StatCard | null = null;
  @state() private history: StatCard[] = [];
  @state() private showChanges = true;

  @state() private tool: Tool = null;
  @state() private columnCategory: WeaponCategory | '' = '';
  @state() private presetFilter = '';
  @state() private busy = false;

  @query('stats-card.editor')
  private editor?: StatsCard;

  private presets = new Map<WeaponCategory, WeaponPreset[]>();
  private imageChoices: {url: string; name: string}[] = [];
  private lastCoalesce = '';
  private lastChangeAt = 0;

  private readonly closeTool = (event: MouseEvent) => {
    if (!this.tool) return;
    const inside = event
      .composedPath()
      .some((node) => node instanceof HTMLElement && node.classList?.contains('tool'));
    if (!inside) {
      this.tool = null;
    }
  };

  private readonly keys = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      this.tool = null;
    }
    const target = event.composedPath()[0] as HTMLElement | undefined;
    const typing = target && /^(INPUT|SELECT|TEXTAREA)$/.test(target.tagName);
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'z' && !typing && this.edited) {
      event.preventDefault();
      this.undo();
    }
  };

  connectedCallback() {
    super.connectedCallback();
    applySideTheme(null);
    document.addEventListener('click', this.closeTool);
    document.addEventListener('keydown', this.keys);
    const work = loadWork();
    if (work) {
      reserveUids(work.original);
      reserveUids(work.edited);
      this.original = work.original;
      this.edited = work.edited;
    }
    this.load();
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this.closeTool);
    document.removeEventListener('keydown', this.keys);
  }

  private async load() {
    try {
      const [units, divisions] = await Promise.all([
        BundleManagerService.getUnits(DATASET),
        BundleManagerService.getDivisions(DATASET),
      ]);
      this.units = [...units].sort((a, b) => a.name.localeCompare(b.name, 'pl'));
      this.divisions = [...divisions].sort((a, b) => a.name.localeCompare(b.name, 'pl'));
      this.presets = collectWeaponPresets(units);
      const images = new Map<string, string>();
      for (const unit of units) {
        for (const weapon of unit.weapons) {
          if (weapon.imageTexture && !images.has(weapon.imageTexture)) {
            images.set(weapon.imageTexture, `/images/weapons/${weapon.imageTexture}.png`);
          }
        }
      }
      this.imageChoices = [...images.entries()]
        .map(([name, url]) => ({name, url}))
        .sort((a, b) => a.name.localeCompare(b.name));
    } catch (error) {
      console.error(error);
      this.error = 'Nie udało się wczytać danych WiF Extended.';
    } finally {
      this.loading = false;
    }
  }

  /* ---------------- search ---------------- */

  private get countries(): string[] {
    return [...new Set(this.units.map((u) => u.unitType?.motherCountry).filter(Boolean))].sort();
  }

  private get results(): Unit[] {
    const words = this.query.split(/\s+/).map(normalize).filter(Boolean);
    return this.units.filter((unit) => {
      if (this.division && !unit.divisions.includes(this.division)) return false;
      if (this.country && unit.unitType?.motherCountry !== this.country) return false;
      if (this.category && unit.category !== this.category) return false;
      if (words.length) {
        const text = normalize(`${unit.name} ${unit.descriptorName}`);
        return words.every((w) => text.includes(w));
      }
      return true;
    });
  }

  private divisionName(descriptor: string): string {
    return this.divisions.find((d) => d.descriptor === descriptor)?.name ?? '';
  }

  private setFilter(apply: () => void) {
    apply();
    this.shown = MAX_RESULTS;
  }

  /* ---------------- editing ---------------- */

  private choose() {
    if (!this.preview) return;
    const card = cardFromUnit(this.preview);
    this.original = card;
    this.edited = cloneCardKeepIds(card);
    this.history = [];
    this.tool = null;
    this.persist();
  }

  private backToSearch() {
    this.original = null;
    this.edited = null;
    this.history = [];
    this.tool = null;
    saveWork(null);
  }

  private persist() {
    if (this.original && this.edited) {
      saveWork({original: this.original, edited: this.edited});
    }
  }

  private setEdited(card: StatCard, coalesce?: string) {
    if (!this.edited) return;
    const now = Date.now();
    const sameRun = coalesce && coalesce === this.lastCoalesce && now - this.lastChangeAt < 1500;
    if (!sameRun) {
      this.history = [...this.history, this.edited].slice(-HISTORY_LIMIT);
    }
    this.lastCoalesce = coalesce ?? '';
    this.lastChangeAt = now;
    this.edited = card;
    this.persist();
  }

  private onCardChange(event: CustomEvent<CardChangeDetail>) {
    this.setEdited(event.detail.card, event.detail.coalesce);
  }

  private mutate(mutate: (card: StatCard) => void) {
    if (!this.edited) return;
    const card = JSON.parse(JSON.stringify(this.edited)) as StatCard;
    mutate(card);
    this.setEdited(card);
  }

  private undo() {
    const previous = this.history[this.history.length - 1];
    if (!previous) return;
    this.history = this.history.slice(0, -1);
    this.edited = previous;
    this.lastCoalesce = '';
    this.persist();
  }

  private reset() {
    if (!this.original) return;
    this.setEdited(cloneCardKeepIds(this.original));
  }

  private toggleTool(tool: Exclude<Tool, null>) {
    this.tool = this.tool === tool ? null : tool;
    this.presetFilter = '';
  }

  private toggleTrait(trait: string, on: boolean) {
    this.mutate((card) => {
      card.traits = on ? [...card.traits, trait] : card.traits.filter((t) => t !== trait);
    });
  }

  private addPreset(preset: WeaponPreset) {
    this.mutate((card) => {
      card.weapons.push({...JSON.parse(JSON.stringify(preset.weapon)), uid: newUid()});
    });
    this.tool = null;
    notify(`Dodano kolumnę: ${preset.label}`);
  }

  private addEmptyWeapon() {
    this.tool = null;
    this.mutate((card) => card.weapons.push(emptyWeapon()));
    notify('Dodano nową kolumnę uzbrojenia: kliknij jej ikonę, kafelki i wartości, żeby je ustawić');
  }

  private duplicateWeapon(event: CustomEvent<{uid: number}>) {
    this.mutate((card) => {
      const index = card.weapons.findIndex((w) => w.uid === event.detail.uid);
      if (index >= 0) {
        card.weapons.splice(index + 1, 0, {...card.weapons[index], uid: newUid()});
      }
    });
  }

  private setPanelType(type: PanelType) {
    this.mutate((card) => (card.panelType = type));
  }

  /* ---------------- output ---------------- */

  private async copyScreenshot() {
    if (!this.editor || !this.edited) return;
    this.busy = true;
    try {
      const canClipboard =
        window.isSecureContext && !!navigator.clipboard?.write && typeof ClipboardItem !== 'undefined';
      if (canClipboard) {
        // Safari needs the clipboard call inside the click: pass a promise.
        const blob = this.editor.capture().then((b) => {
          if (!b) throw new Error('Nie udało się zrobić zrzutu');
          return b;
        });
        await navigator.clipboard.write([new ClipboardItem({'image/png': blob})]);
        notify('Skopiowano zrzut statystyk do schowka');
      } else {
        const blob = await this.editor.capture();
        if (!blob) throw new Error('Nie udało się zrobić zrzutu');
        download(blob, fileName(this.edited, 'png'));
        notify(
          'Ta przeglądarka nie pozwala tu wkleić obrazu do schowka (strona bez https): zrzut pobrano jako plik PNG',
          'error'
        );
      }
    } catch (error) {
      console.error(error);
      notify('Nie udało się skopiować zrzutu statystyk', 'error');
    } finally {
      this.busy = false;
    }
  }

  private async downloadScreenshot() {
    if (!this.editor || !this.edited) return;
    this.busy = true;
    try {
      const blob = await this.editor.capture();
      if (!blob) throw new Error('no image');
      download(blob, fileName(this.edited, 'png'));
    } catch (error) {
      console.error(error);
      notify('Nie udało się zapisać zrzutu', 'error');
    } finally {
      this.busy = false;
    }
  }

  private saveJson() {
    if (!this.edited || !this.original) return;
    const blob = new Blob([JSON.stringify({original: this.original, edited: this.edited}, null, 2)], {
      type: 'application/json',
    });
    download(blob, fileName(this.edited, 'json'));
  }

  private loadJson(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) return;
    file
      .text()
      .then((text) => {
        const work = JSON.parse(text) as SavedWork;
        if (!work?.edited?.weapons || !work?.original?.weapons) throw new Error('bad file');
        reserveUids(work.original);
        reserveUids(work.edited);
        this.original = work.original;
        this.edited = work.edited;
        this.history = [];
        this.persist();
        notify('Wczytano statystyki z pliku');
      })
      .catch(() => notify('To nie jest plik statystyk StatsToolKit', 'error'));
  }

  /* ---------------- render: left ---------------- */

  private renderSearch(): TemplateResult {
    const results = this.results;
    return html`
      <div class="pane">
        <div class="pane-head"><h2>StatsToolKit</h2></div>
        <p class="hint">
          Wyszukaj jednostkę z WiF Extended, sprawdź jej kartę i kliknij „Wybierz”, żeby na jej podstawie
          zrobić statystyki nowej karty.
        </p>
        <div class="filters">
          <label class="field search">
            Nazwa
            <input
              type="search"
              placeholder="np. T-72, Leopard, Wagner…"
              .value=${live(this.query)}
              @input=${(e: Event) => this.setFilter(() => (this.query = (e.target as HTMLInputElement).value))}
            />
          </label>
          <label class="field">
            Dywizja
            <select @change=${(e: Event) => this.setFilter(() => (this.division = (e.target as HTMLSelectElement).value))}>
              <option value="" ?selected=${!this.division}>Wszystkie</option>
              ${this.divisions.map(
                (d) => html`<option value=${d.descriptor} ?selected=${d.descriptor === this.division}>
                  ${d.alliance === 'ECoalition/Allied' ? 'NATO' : 'PAKT'} · ${d.name}
                </option>`
              )}
            </select>
          </label>
          <label class="field">
            Narodowość
            <select @change=${(e: Event) => this.setFilter(() => (this.country = (e.target as HTMLSelectElement).value))}>
              <option value="" ?selected=${!this.country}>Wszystkie</option>
              ${this.countries.map(
                (c) => html`<option value=${c} ?selected=${c === this.country}>${COUNTRY_NAMES[c] ?? c}</option>`
              )}
            </select>
          </label>
          <label class="field">
            Typ jednostki
            <select @change=${(e: Event) => this.setFilter(() => (this.category = (e.target as HTMLSelectElement).value))}>
              <option value="" ?selected=${!this.category}>Wszystkie</option>
              ${UNIT_TYPES.map(
                (t) => html`<option value=${t.value} ?selected=${t.value === this.category}>${t.label}</option>`
              )}
            </select>
          </label>
        </div>
        ${this.error ? html`<p class="error">${this.error}</p>` : nothing}
        <div class="count">
          ${this.loading ? 'Wczytywanie jednostek…' : `Znaleziono: ${results.length}`}
        </div>
        <div class="results">
          ${results.slice(0, this.shown).map(
            (unit) => html`<button
              class="unit ${this.preview?.descriptorName === unit.descriptorName ? 'selected' : ''}"
              @click=${() => (this.preview = unit)}
            >
              <img src="/images/units/${unit.descriptorName}.webp" alt="" loading="lazy"
                @error=${(e: Event) => ((e.target as HTMLImageElement).style.visibility = 'hidden')} />
              <span>
                <div class="u-name">${unit.name}</div>
                <div class="u-meta">
                  ${COUNTRY_NAMES[unit.unitType?.motherCountry] ?? unit.unitType?.motherCountry} ·
                  ${UNIT_TYPES.find((t) => t.value === unit.category)?.label ?? unit.category} ·
                  ${unit.divisions.map((d) => this.divisionName(d)).filter(Boolean).join(', ')}
                </div>
              </span>
              <span class="u-cost">${unit.commandPoints}</span>
            </button>`
          )}
          ${results.length > this.shown
            ? html`<button class="btn" @click=${() => (this.shown += MAX_RESULTS)}>
                Pokaż więcej (${results.length - this.shown})
              </button>`
            : nothing}
        </div>
      </div>
    `;
  }

  private renderOriginal(): TemplateResult {
    return html`
      <div class="pane">
        <div class="pane-head">
          <h2>Karta bazowa</h2>
          <button class="btn" @click=${this.backToSearch}>← Wybierz inną jednostkę</button>
        </div>
        <p class="hint">Oryginał do porównania. Zmiany robisz na karcie po prawej.</p>
        <div class="card-area">
          <stats-card .card=${this.original ?? undefined}></stats-card>
        </div>
      </div>
    `;
  }

  /* ---------------- render: right ---------------- */

  private renderPreview(): TemplateResult {
    const card = this.preview ? cardFromUnit(this.preview) : null;
    return html`
      <div class="pane">
        <div class="pane-head"><h2>Podgląd karty</h2></div>
        <div class="card-area">
          ${card
            ? html`<stats-card .card=${card}></stats-card>`
            : html`<p class="empty">Wybierz jednostkę z listy po lewej.</p>`}
        </div>
        <div class="actions">
          <button class="btn primary" ?disabled=${!card} @click=${this.choose}>Wybierz</button>
        </div>
      </div>
    `;
  }

  private renderTraitsPopup(): TemplateResult {
    const card = this.edited!;
    const known = new Set(UNIT_TRAITS.map((t) => t.value));
    const extra = card.traits.filter((t) => !known.has(t));
    const options = [...UNIT_TRAITS.map((t) => t.value), ...extra];
    return html`<div class="popup">
      <h3>Traity jednostki</h3>
      ${options.map((trait) => {
        const checked = card.traits.includes(trait);
        return html`<label class="check">
          <input
            type="checkbox"
            .checked=${live(checked)}
            @change=${(e: Event) => this.toggleTrait(trait, (e.target as HTMLInputElement).checked)}
          />
          ${unitTraitIcon(trait)}
          <span>${unitTraitLabel(trait)}</span>
        </label>`;
      })}
    </div>`;
  }

  private renderColumnPopup(): TemplateResult {
    const category = this.columnCategory;
    const filter = normalize(this.presetFilter);
    const presets = category
      ? (this.presets.get(category) ?? []).filter((p) => !filter || normalize(p.label).includes(filter))
      : [];
    return html`<div class="popup">
      <h3>Nowa kolumna z uzbrojeniem z gry</h3>
      <div class="column-form">
        <label class="field">
          Rodzaj uzbrojenia
          <select
            @change=${(e: Event) => {
              this.columnCategory = (e.target as HTMLSelectElement).value as WeaponCategory | '';
              this.presetFilter = '';
            }}
          >
            <option value="" ?selected=${!category}>— wybierz —</option>
            ${WEAPON_CATEGORIES.map(
              (c) => html`<option value=${c.value} ?selected=${c.value === category}>
                ${c.label} (${this.presets.get(c.value)?.length ?? 0})
              </option>`
            )}
          </select>
        </label>
        <label class="field">
          Uzbrojenie
          <div class="picker ${category ? '' : 'disabled'}" aria-disabled=${category ? 'false' : 'true'}>
            <input
              type="search"
              placeholder=${category ? 'Szukaj…' : 'Najpierw wybierz rodzaj'}
              ?disabled=${!category}
              .value=${live(this.presetFilter)}
              @input=${(e: Event) => (this.presetFilter = (e.target as HTMLInputElement).value)}
            />
            <div class="picker-list">
              ${presets.slice(0, 300).map(
                (preset) => html`<button @click=${() => this.addPreset(preset)}>
                  ${preset.image
                    ? html`<img
                        src=${preset.image}
                        alt=""
                        loading="lazy"
                        @error=${(e: Event) => ((e.target as HTMLImageElement).style.visibility = 'hidden')}
                      />`
                    : html`<span></span>`}
                  <span>
                    ${preset.label}
                    <span class="stats">
                      ${preset.weapon.typeLabel} ·
                      ${preset.weapon.penetration ? `pen. ${preset.weapon.penetration} · ` : ''}
                      ${Math.max(preset.weapon.groundRange, preset.weapon.helicopterRange, preset.weapon.planeRange)} m
                    </span>
                  </span>
                </button>`
              )}
            </div>
          </div>
        </label>
        <p class="note">Kliknięcie pozycji dodaje kolumnę z jej statystykami; potem możesz je zmieniać.</p>
      </div>
    </div>`;
  }

  private renderTools(): TemplateResult {
    const card = this.edited!;
    return html`
      <div class="tools">
        <div class="tool">
          <button class="btn ${this.tool === 'traits' ? 'active' : ''}" @click=${() => this.toggleTool('traits')}>
            Traity
          </button>
          ${this.tool === 'traits' ? this.renderTraitsPopup() : nothing}
        </div>
        <div class="tool">
          <button class="btn ${this.tool === 'column' ? 'active' : ''}" @click=${() => this.toggleTool('column')}>
            Nowa kolumna
          </button>
          ${this.tool === 'column' ? this.renderColumnPopup() : nothing}
        </div>
        <div class="tool">
          <button class="btn" @click=${this.addEmptyWeapon}>Nowe uzbrojenie</button>
        </div>
        <div class="tool">
          <select
            aria-label="Typ karty"
            title="Typ karty (pola na dole karty)"
            @change=${(e: Event) => this.setPanelType((e.target as HTMLSelectElement).value as PanelType)}
          >
            ${PANEL_TYPES.map(
              (t) => html`<option value=${t.value} ?selected=${t.value === card.panelType}>Karta: ${t.label}</option>`
            )}
          </select>
        </div>
        <span class="sep"></span>
        <button class="btn" title="Cofnij (Ctrl+Z)" ?disabled=${this.history.length === 0} @click=${this.undo}>
          Cofnij
        </button>
        <button class="btn" title="Przywróć wartości karty bazowej" @click=${this.reset}>Reset</button>
        <button
          class="btn ${this.showChanges ? 'active' : ''}"
          title="Zaznacz wartości inne niż na karcie bazowej"
          @click=${() => (this.showChanges = !this.showChanges)}
        >
          Zmiany
        </button>
      </div>
    `;
  }

  private renderEditor(): TemplateResult {
    return html`
      <div class="pane">
        <div class="pane-head"><h2>Nowa karta</h2></div>
        ${this.renderTools()}
        <div class="card-area">
          <stats-card
            class="editor"
            editable
            .card=${this.edited ?? undefined}
            .compareTo=${this.showChanges ? this.original ?? undefined : undefined}
            .imageChoices=${this.imageChoices}
            @card-change=${this.onCardChange}
            @duplicate-weapon=${this.duplicateWeapon}
          ></stats-card>
        </div>
        <div class="actions">
          <button class="btn primary" ?disabled=${this.busy} @click=${this.copyScreenshot}>
            Zrzut do schowka
          </button>
          <button class="btn" ?disabled=${this.busy} @click=${this.downloadScreenshot}>Pobierz PNG</button>
          <button class="btn" @click=${this.saveJson}>Zapisz statystyki</button>
          <label class="btn">
            Wczytaj statystyki
            <input type="file" accept="application/json,.json" hidden @change=${this.loadJson} />
          </label>
        </div>
      </div>
    `;
  }

  render(): TemplateResult {
    if (this.original && this.edited) {
      return html`${this.renderOriginal()}${this.renderEditor()}`;
    }
    return html`${this.renderSearch()}${this.renderPreview()}`;
  }
}

/** Copy that keeps weapon ids, so changes can be compared column by column */
function cloneCardKeepIds(card: StatCard): StatCard {
  return JSON.parse(JSON.stringify(card)) as StatCard;
}

declare global {
  interface HTMLElementTagNameMap {
    'stats-toolkit-route': StatsToolkitRoute;
  }
}
