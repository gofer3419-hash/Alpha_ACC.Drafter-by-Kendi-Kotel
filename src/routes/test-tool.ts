import {Router} from '@vaadin/router';
import {css, html, LitElement, TemplateResult} from 'lit';
import {customElement, state} from 'lit/decorators.js';
import '@vaadin/button';
import '../components/division-flag';
import {DeckDraftFactory} from '../classes/deck-drafter/DeckDraftFactory';
import {DraftSide} from '../classes/deck-drafter/DeckDraftClientEngine';
import {BundleManagerService} from '../services/bundle-manager';
import {Division} from '../types/deck-builder';
import {Dataset, DATASETS} from '../types/dataset';
import {applySideTheme, saveDraftSide} from '../utils/theme';

/** Data sets offered by the test tool (WiF and WiF Extended) */
const TEST_DATASETS: Dataset[] = ['wif', 'wif-extended'];

const DATASET_STORAGE_KEY = 'acc.testToolDataset';

function loadDataset(): Dataset {
  try {
    const saved = localStorage.getItem(DATASET_STORAGE_KEY) as Dataset | null;
    return saved && TEST_DATASETS.includes(saved) ? saved : 'wif';
  } catch (error) {
    return 'wif';
  }
}

function saveDataset(dataset: Dataset) {
  try {
    localStorage.setItem(DATASET_STORAGE_KEY, dataset);
  } catch (error) {
    console.error(error);
  }
}

/**
 * Test tool: pick any division of WiF (or WiF Extended) from a list and
 * draft its units alone, without the random choice of 3 divisions.
 */
@customElement('test-tool-route')
export class TestToolRoute extends LitElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        justify-content: center;
        min-height: calc(100vh - var(--app-header-height));
        padding: var(--lumo-space-l);
        box-sizing: border-box;
      }

      .card {
        width: 100%;
        max-width: 50rem;
        padding: var(--lumo-space-l);
        border-radius: var(--lumo-border-radius-l);
        background-color: var(--lumo-base-color);
        box-sizing: border-box;
        align-self: flex-start;
      }

      h2 {
        margin: 0 0 var(--lumo-space-s);
      }

      .hint {
        color: var(--lumo-secondary-text-color);
        font-size: var(--lumo-font-size-s);
        margin: 0 0 var(--lumo-space-m);
      }

      .datasets {
        display: flex;
        gap: var(--lumo-space-s);
        margin-bottom: var(--lumo-space-l);
        flex-wrap: wrap;
      }

      .columns {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--lumo-space-l);
      }

      @media (max-width: 600px) {
        .columns {
          grid-template-columns: 1fr;
        }
      }

      h3 {
        margin: 0 0 var(--lumo-space-s);
        font-size: var(--lumo-font-size-l);
      }

      h3.nato {
        color: #4f86ea;
      }

      h3.pact {
        color: #e25353;
      }

      .list {
        display: flex;
        flex-direction: column;
        gap: var(--lumo-space-xs);
      }

      button.division {
        display: flex;
        align-items: center;
        gap: var(--lumo-space-s);
        width: 100%;
        padding: var(--lumo-space-xs) var(--lumo-space-s);
        border: 1px solid var(--lumo-contrast-10pct);
        border-radius: var(--lumo-border-radius-m);
        background-color: var(--lumo-contrast-5pct);
        color: var(--lumo-body-text-color);
        font: inherit;
        text-align: left;
        cursor: pointer;
      }

      button.division:hover:not(:disabled) {
        background-color: var(--lumo-contrast-10pct);
      }

      button.division:disabled {
        cursor: default;
        opacity: 0.5;
      }

      button.division division-flag {
        flex: 0 0 auto;
        height: 2.5rem;
      }

      .error {
        color: var(--lumo-error-text-color);
      }
    `;
  }

  @state()
  dataset: Dataset = loadDataset();

  @state()
  divisions: Division[] = [];

  @state()
  error = '';

  @state()
  starting = false;

  connectedCallback() {
    super.connectedCallback();
    applySideTheme(null);
    this.loadDivisions();
  }

  private async loadDivisions() {
    this.error = '';
    this.divisions = [];
    try {
      const divisions = await BundleManagerService.getDivisions(this.dataset);
      this.divisions = [...divisions].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } catch (error) {
      console.error(error);
      this.error = 'Dane gry dla tego draftera nie są jeszcze dostępne.';
    }
  }

  private chooseDataset(dataset: Dataset) {
    if (dataset === this.dataset) {
      return;
    }
    this.dataset = dataset;
    saveDataset(dataset);
    this.loadDivisions();
  }

  private async startDraft(division: Division) {
    const side: DraftSide =
      division.alliance === 'ECoalition/Allied' ? 'NATO' : 'PACT';
    this.starting = true;
    try {
      applySideTheme(side);
      saveDraftSide(this.dataset, side);
      await DeckDraftFactory.createClientEngine(this.dataset, {
        division: division.descriptor,
      });
      Router.go(`/drafter/${this.dataset}/test`);
    } catch (error) {
      console.error(error);
      applySideTheme(null);
      this.error = 'Nie udało się rozpocząć draftu tej dywizji.';
      this.starting = false;
    }
  }

  private renderColumn(side: DraftSide): TemplateResult {
    const alliance = side === 'NATO' ? 'ECoalition/Allied' : 'ECoalition/Axis';
    const divisions = this.divisions.filter((d) => d.alliance === alliance);
    return html`
      <div>
        <h3 class=${side === 'NATO' ? 'nato' : 'pact'}>
          ${side === 'NATO' ? 'NATO' : 'PAKT'}
        </h3>
        <div class="list">
          ${divisions.map(
            (division) => html`
              <button
                class="division"
                ?disabled=${this.starting}
                @click=${() => this.startDraft(division)}
              >
                <division-flag .division=${division}></division-flag>
                <span>${division.name}</span>
              </button>
            `
          )}
        </div>
      </div>
    `;
  }

  render(): TemplateResult {
    return html`
      <div class="card">
        <h2>Narzędzie testowe</h2>
        <p class="hint">
          Wybierz dywizję i draftuj jej jednostki sam. Bez losowania 3 dywizji;
          dalej wszystko działa jak w zwykłym drafterze.
        </p>
        <div class="datasets">
          ${TEST_DATASETS.map(
            (dataset) => html`
              <vaadin-button
                theme=${dataset === this.dataset ? 'primary' : 'contrast'}
                ?disabled=${this.starting}
                @click=${() => this.chooseDataset(dataset)}
              >
                ${DATASETS[dataset].title.replace(' Deck Drafter', '')}
              </vaadin-button>
            `
          )}
        </div>
        ${this.error ? html`<p class="error">${this.error}</p>` : ''}
        <div class="columns">
          ${this.renderColumn('NATO')} ${this.renderColumn('PACT')}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'test-tool-route': TestToolRoute;
  }
}
