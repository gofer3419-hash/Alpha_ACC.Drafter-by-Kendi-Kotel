/**
 * Game-style unit card of the StatsToolKit.
 *
 * Read-only by default; with `editable` every value can be changed in place
 * (sliders, number fields, lists). Changes are not applied here: the card
 * sends `card-change` with a new StatCard and the page decides what to keep.
 *
 * Everything lives in this one shadow root (no nested components), so
 * html-to-image can turn the card into a picture (see capture()).
 */
import {css, html, LitElement, nothing, PropertyValues, TemplateResult} from 'lit';
import {customElement, property, query, state} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map.js';
import {live} from 'lit/directives/live.js';
import {repeat} from 'lit/directives/repeat.js';
import {toBlob} from 'html-to-image';
import Belgium from '../../../images/flags/BEL_FLAG.png';
import EastGermany from '../../../images/flags/RDA_FLAG.png';
import France from '../../../images/flags/FR_FLAG.png';
import SovietUnion from '../../../images/flags/SOV_FLAG.png';
import UK from '../../../images/flags/UK_FLAG.png';
import USA from '../../../images/flags/US_FLAG.png';
import WestGermany from '../../../images/flags/RFA_FLAG.png';
import Poland from '../../../images/flags/POL_FLAG.png';
import Netherlands from '../../../images/flags/NL_FLAG.png';
import Luxembourg from '../../../images/flags/LUX_FLAG.png';
import Canada from '../../../images/flags/CAN_FLAG.png';
import Czechoslovakia from '../../../images/flags/TCH_FLAG.png';
import Ukraine from '../../../images/flags/UKR_FLAG.png';
import {
  COST_CATEGORIES,
  levelLabel,
  levelValue,
  MAX_WEAPON_ATTRIBUTES,
  PANEL_LAYOUTS,
  PanelField,
  ROLES,
  SCALES,
  StatCard,
  StatScale,
  StatWeapon,
  unitTraitLabel,
  valueTone,
  WEAPON_ATTRIBUTES,
  WEAPON_TYPE_LABELS,
  weaponAttributeLabel,
} from './stats-model';
import {unitTraitIcon, waryesIcon, weaponAttributeIcon} from './stats-icons';

/** Flag images by country code */
export const FLAGS: Record<string, string> = {
  BEL: Belgium,
  DDR: EastGermany,
  RDA: EastGermany,
  FR: France,
  SOV: SovietUnion,
  UK: UK,
  US: USA,
  RFA: WestGermany,
  POL: Poland,
  NL: Netherlands,
  LUX: Luxembourg,
  CAN: Canada,
  TCH: Czechoslovakia,
  UKR: Ukraine,
};

export const COUNTRY_NAMES: Record<string, string> = {
  SOV: 'ZSRR / Rosja',
  US: 'USA',
  UK: 'Wielka Brytania',
  FR: 'Francja',
  RFA: 'RFN / Niemcy',
  DDR: 'NRD',
  BEL: 'Belgia',
  NL: 'Holandia',
  LUX: 'Luksemburg',
  POL: 'Polska',
  TCH: 'Czechosłowacja',
  CAN: 'Kanada',
  UKR: 'Ukraina',
  ESP: 'Hiszpania',
};

export interface CardChangeDetail {
  card: StatCard;
  /** Same key for a run of small changes (slider drag): one undo step */
  coalesce?: string;
}

type WeaponNumberKey =
  | 'penetration'
  | 'he'
  | 'suppress'
  | 'groundRange'
  | 'helicopterRange'
  | 'planeRange'
  | 'staticAccuracy'
  | 'movingAccuracy'
  | 'rateOfFire'
  | 'aimingTime'
  | 'reloadTime'
  | 'salvo'
  | 'supplyCost';

interface StatRow {
  key: WeaponNumberKey;
  label: string;
  scale: StatScale;
  /** Show the value big (penetration) */
  big?: boolean;
  /** Hide in the read-only card when 0 */
  hideZero?: boolean;
}

const WEAPON_SECTIONS: {title: string; rows: StatRow[]}[] = [
  {
    title: 'OBRAŻENIA OD BRONI',
    rows: [
      {key: 'penetration', label: 'PENETRACJA', scale: SCALES.penetration, big: true, hideZero: true},
      {key: 'he', label: 'OB', scale: SCALES.he},
      {key: 'suppress', label: 'PRZYBICIE', scale: SCALES.suppress},
    ],
  },
  {
    title: 'ODLEGŁOŚĆ DO CELU',
    rows: [
      {key: 'groundRange', label: 'CEL NAZIEMNY', scale: SCALES.range, hideZero: true},
      {key: 'helicopterRange', label: 'ŚMIGŁOWIEC', scale: SCALES.range, hideZero: true},
      {key: 'planeRange', label: 'SAMOLOT', scale: SCALES.range, hideZero: true},
    ],
  },
  {
    title: 'CELNOŚĆ',
    rows: [
      {key: 'staticAccuracy', label: 'POSTÓJ', scale: SCALES.accuracy},
      {key: 'movingAccuracy', label: 'RUCH', scale: SCALES.accuracy},
    ],
  },
  {
    title: 'ATRYBUTY BRONI',
    rows: [
      {key: 'rateOfFire', label: 'SZYBKOSTRZELNOŚĆ', scale: SCALES.rateOfFire},
      {key: 'aimingTime', label: 'CZAS CELOWANIA', scale: SCALES.aimingTime},
      {key: 'reloadTime', label: 'PRZEŁADOWANIE', scale: SCALES.reloadTime},
      {key: 'salvo', label: 'SALWA', scale: SCALES.salvo},
    ],
  },
];

const ARMOR: {key: 'frontArmor' | 'sideArmor' | 'rearArmor' | 'topArmor'; label: string}[] = [
  {key: 'frontArmor', label: 'PRZÓD'},
  {key: 'sideArmor', label: 'BOK'},
  {key: 'rearArmor', label: 'TYŁ'},
  {key: 'topArmor', label: 'GÓRA'},
];

function formatNumber(value: number): string {
  if (!Number.isFinite(value)) {
    return '0';
  }
  return String(Math.round(value * 100) / 100);
}

function formatWithUnit(value: number, scale: StatScale): string {
  const text = formatNumber(value);
  if (!scale.unit) return text;
  return scale.unit === '%' ? `${text}%` : `${text} ${scale.unit}`;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function readNumber(event: Event): number {
  const value = Number((event.target as HTMLInputElement).value.replace(',', '.'));
  return Number.isFinite(value) ? value : 0;
}

/** Popups opened from inside the card */
type Popup =
  | {kind: 'attributes'; uid: number}
  | {kind: 'image'; uid: number}
  | {kind: 'role'}
  | null;

@customElement('stats-card')
export class StatsCard extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        --card-bg-1: #b1aa94;
        --card-bg-2: #918a75;
        --card-ink: #22201b;
        --card-ink-soft: #3d3a32;
        --card-line: #3a372f;
        --box-bg: rgba(42, 38, 30, 0.1);
        --bar-track: rgba(25, 23, 19, 0.45);
        --bar-fill: #2c2a25;
        --tone-red: #d42d2d;
        --tone-yellow: #f2b51d;
        --tone-green: #7ce36c;
        --tone-cyan: #45e2f2;
        --changed: #ff4fd8;
        font-family: 'Roboto Condensed', 'Arial Narrow', Arial, sans-serif;
      }

      .card {
        position: relative;
        box-sizing: border-box;
        padding: 0.9rem 0.75rem 0.75rem;
        background: linear-gradient(170deg, var(--card-bg-1), var(--card-bg-2));
        color: var(--card-ink);
        border: 1px solid #5c574a;
        box-shadow: 0 0.4rem 1.2rem rgba(0, 0, 0, 0.45);
      }

      /* ---------- header ---------- */
      .head {
        display: grid;
        grid-template-columns: auto 1fr auto;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.5rem;
      }

      .flag-cost {
        display: flex;
        align-items: center;
        gap: 0.3rem;
      }

      .flag {
        height: 1.6rem;
        width: 2.6rem;
        object-fit: cover;
        display: block;
      }

      .flag-code {
        font-weight: 700;
        font-size: 0.9rem;
      }

      .cost {
        font-size: 1.5rem;
        font-weight: 700;
        color: #e8a92a;
        text-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
      }

      .title {
        text-align: center;
        font-size: 1.9rem;
        font-weight: 700;
        letter-spacing: 0.04em;
        color: #33302a;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .head-spacer {
        width: 4.2rem;
      }

      .box {
        border: 2px solid var(--card-line);
        background: var(--box-bg);
      }

      .info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 0.4rem;
      }

      .info > div {
        display: flex;
        align-items: center;
        gap: 0.6rem;
        padding: 0.35rem 0.6rem;
        min-height: 3.2rem;
      }

      .info > div + div {
        border-left: 2px solid var(--card-line);
      }

      .info .label {
        font-weight: 700;
        font-size: 0.85rem;
        letter-spacing: 0.02em;
      }

      .info .sub {
        font-size: 0.85rem;
        color: var(--card-ink-soft);
      }

      .role-icons {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.15rem;
        color: #f2efe6;
      }

      .role-chip {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2.8rem;
        height: 2.2rem;
        background: rgba(30, 28, 24, 0.8);
        color: #f2efe6;
      }

      .role-chip .icon {
        width: 2rem;
        height: 1.8rem;
      }

      .traits {
        display: flex;
        flex-wrap: wrap;
        gap: 0.2rem;
        margin-top: 0.25rem;
      }

      .traits .icon {
        width: 1.35rem;
        height: 1.35rem;
        background: rgba(30, 28, 24, 0.75);
        color: #f2efe6;
        padding: 0.12rem;
        box-sizing: border-box;
      }

      .cost-icon {
        width: 1.3rem;
        height: 1.3rem;
        color: #e8a92a;
      }

      .section {
        text-align: center;
        font-size: 0.85rem;
        letter-spacing: 0.05em;
        margin: 0.45rem 0 0.2rem;
        color: var(--card-ink-soft);
      }

      /* ---------- armour ---------- */
      .armor {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
      }

      .armor > div {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 0 0.4rem;
        padding: 0.3rem 0.5rem;
      }

      .armor > div + div {
        border-left: 2px solid var(--card-line);
      }

      .armor .name {
        grid-column: 1 / -1;
        font-size: 0.75rem;
        font-weight: 700;
      }

      .armor .value {
        font-size: 1.9rem;
        line-height: 1.1;
      }

      /* ---------- values, bars ---------- */
      .value {
        font-weight: 700;
        text-shadow: 0 0 2px rgba(0, 0, 0, 0.55);
      }

      :host .tone-red { color: var(--tone-red); }
      :host .tone-yellow { color: var(--tone-yellow); }
      :host .tone-green { color: var(--tone-green); }
      :host .tone-cyan { color: var(--tone-cyan); }
      :host .tone-plain { color: var(--card-ink); text-shadow: none; }

      .bar {
        position: relative;
        height: 0.55rem;
        background: var(--bar-track);
        min-width: 3rem;
      }

      .bar > span {
        position: absolute;
        inset: 0 auto 0 0;
        background: var(--bar-fill);
        border-right: 0.2rem solid #8a8576;
      }

      input[type='range'] {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        min-width: 3rem;
        height: 0.55rem;
        margin: 0;
        background: linear-gradient(
          to right,
          var(--bar-fill) 0 var(--p, 0%),
          var(--bar-track) var(--p, 0%) 100%
        );
        cursor: pointer;
      }

      input[type='range']::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 0.5rem;
        height: 1rem;
        background: #ece7d8;
        border: 1px solid #22201b;
      }

      input[type='range']::-moz-range-thumb {
        width: 0.5rem;
        height: 1rem;
        border-radius: 0;
        background: #ece7d8;
        border: 1px solid #22201b;
      }

      input[type='range']:focus-visible {
        outline: 2px solid #f2efe6;
      }

      input.num,
      input.text,
      select {
        font: inherit;
        color: inherit;
        background: rgba(255, 255, 255, 0.25);
        border: 1px solid rgba(34, 32, 27, 0.6);
        padding: 0.05rem 0.2rem;
        box-sizing: border-box;
        min-width: 0;
      }

      input.num {
        width: 4.3rem;
        text-align: right;
        font-weight: 700;
        text-shadow: 0 0 2px rgba(0, 0, 0, 0.55);
      }

      input.num.small {
        width: 3.6rem;
      }

      input.num:focus,
      input.text:focus,
      select:focus {
        outline: 2px solid #f2efe6;
        background: rgba(255, 255, 255, 0.4);
      }

      select {
        cursor: pointer;
      }

      select option {
        color: #111;
      }

      /* ---------- weapons ---------- */
      .weapons {
        display: grid;
        gap: 0.35rem;
        align-items: start;
      }

      .weapons.editing {
        margin-top: 1.1rem;
      }

      .weapon {
        display: flex;
        flex-direction: column;
        gap: 0.35rem;
        min-width: 0;
      }

      .weapon .w-head {
        position: relative;
        text-align: center;
      }

      .w-type {
        display: block;
        font-weight: 700;
        font-size: 0.8rem;
        padding: 0.25rem 0.2rem;
        border-bottom: 2px solid var(--card-line);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      input.w-type {
        width: 100%;
        text-align: center;
        border: none;
        border-bottom: 2px solid var(--card-line);
      }

      .tiles {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        border-bottom: 2px solid var(--card-line);
      }

      .tile {
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #2a2824;
        background: none;
        border: none;
        padding: 0;
        font: inherit;
      }

      .tile + .tile {
        border-left: 2px solid var(--card-line);
      }

      .tile .icon {
        width: 1.45rem;
        height: 1.45rem;
      }

      button.tile {
        cursor: pointer;
      }

      button.tile:hover,
      button.tile:focus-visible {
        background: rgba(255, 255, 255, 0.25);
        outline: none;
      }

      .w-image {
        height: 4.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background: none;
        border: none;
        width: 100%;
        padding: 0.2rem;
        box-sizing: border-box;
      }

      button.w-image {
        cursor: pointer;
      }

      button.w-image:hover {
        background: rgba(255, 255, 255, 0.2);
      }

      .w-image img {
        max-width: 100%;
        max-height: 100%;
        filter: brightness(0);
        opacity: 0.85;
      }

      .w-image img.custom {
        filter: none;
        opacity: 1;
      }

      .w-image .placeholder {
        font-size: 0.75rem;
        color: var(--card-ink-soft);
      }

      .w-name {
        text-align: center;
        font-size: 1rem;
        font-weight: 700;
      }

      .w-cal {
        text-align: center;
        font-size: 0.95rem;
      }

      .w-name input,
      .w-cal input {
        text-align: center;
      }

      .w-name input.text {
        width: 100%;
      }

      .w-cal {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
      }

      .w-cal input.text {
        width: 4.5rem;
      }

      .w-cal input.num {
        width: 4rem;
      }

      .w-block {
        padding: 0.3rem 0.4rem 0.35rem;
      }

      .w-block .b-title {
        font-weight: 700;
        font-size: 0.75rem;
        margin-bottom: 0.25rem;
      }

      .stat {
        display: grid;
        grid-template-columns: minmax(3rem, 1fr) auto;
        align-items: center;
        gap: 0.1rem 0.4rem;
        min-height: 1.4rem;
      }

      .stat .s-label {
        grid-column: 1 / -1;
        font-size: 0.62rem;
        color: var(--card-ink-soft);
        margin-bottom: -0.1rem;
      }

      .stat .value {
        font-size: 1.15rem;
        text-align: right;
      }

      .stat.big .value {
        font-size: 2.1rem;
        line-height: 1;
      }

      .supply .value {
        font-size: 1.3rem;
      }

      .w-tools {
        position: absolute;
        top: -1.25rem;
        right: 0;
        display: flex;
        gap: 0.15rem;
      }

      .w-tools button,
      .mini {
        font: inherit;
        font-size: 0.7rem;
        line-height: 1;
        padding: 0.15rem 0.3rem;
        border: 1px solid var(--card-line);
        background: #d9d3c2;
        color: var(--card-ink);
        cursor: pointer;
      }

      .w-tools button:hover,
      .mini:hover {
        background: #fff;
      }

      .w-tools button.danger:hover {
        background: #e25353;
        color: #fff;
      }

      /* ---------- bottom panel ---------- */
      .panel {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
      }

      .panel > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.4rem;
        padding: 0.25rem 0.45rem;
        border-bottom: 1px solid rgba(58, 55, 47, 0.6);
        min-height: 1.6rem;
        font-size: 0.85rem;
      }

      .panel > div:nth-child(3n + 2),
      .panel > div:nth-child(3n + 3) {
        border-left: 2px solid var(--card-line);
      }

      .panel .p-label {
        font-weight: 700;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .panel .p-value {
        text-align: right;
        white-space: nowrap;
      }

      .panel select {
        max-width: 7.5rem;
      }

      .pair {
        display: inline-flex;
        align-items: center;
        gap: 0.15rem;
      }

      .pair input.num {
        width: 3rem;
      }

      .tone-weak { color: var(--tone-red); }

      /* Icons are one colour like in the game (the iconset's own colour
         classes would also clash between icons in one shadow root) */
      .icon [class],
      .icon path,
      .icon rect,
      .icon polygon,
      .icon circle,
      .icon ellipse {
        fill: currentColor;
      }

      .icon [fill='none'] {
        fill: none;
      }

      .icon {
        display: inline-block;
        width: 1.2rem;
        height: 1.2rem;
        vertical-align: middle;
        flex: 0 0 auto;
      }

      .text-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-size: 0.55rem;
        font-weight: 700;
        line-height: 1;
        letter-spacing: -0.02em;
      }

      /* changed against the original card */
      .changed {
        box-shadow: inset 0 0 0 2px var(--changed);
      }

      /* ---------- popups ---------- */
      .popup {
        position: absolute;
        z-index: 5;
        left: 0;
        top: 100%;
        margin-top: 0.2rem;
        width: max(100%, 17rem);
        max-height: 22rem;
        overflow: auto;
        background: #1d1c1a;
        color: #ece7d8;
        border: 1px solid #6b665a;
        box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.6);
        padding: 0.4rem;
        text-align: left;
        font-family: var(--lumo-font-family, monospace);
      }

      .popup .p-title {
        font-weight: 700;
        font-size: 0.8rem;
        margin-bottom: 0.3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 0.4rem;
      }

      .popup label.check {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.2rem 0.25rem;
        font-size: 0.8rem;
        cursor: pointer;
      }

      .popup label.check:hover {
        background: rgba(255, 255, 255, 0.08);
      }

      .popup label.check.disabled {
        opacity: 0.45;
        cursor: default;
      }

      .popup label.check .icon {
        width: 1.2rem;
        height: 1.2rem;
      }

      .popup input.search {
        width: 100%;
        box-sizing: border-box;
        margin-bottom: 0.3rem;
        font: inherit;
        padding: 0.25rem 0.35rem;
        background: #2b2a27;
        color: inherit;
        border: 1px solid #6b665a;
      }

      .image-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(5.2rem, 1fr));
        gap: 0.25rem;
      }

      .image-grid button {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.1rem;
        padding: 0.2rem;
        background: #2b2a27;
        border: 1px solid transparent;
        color: inherit;
        font: inherit;
        font-size: 0.6rem;
        cursor: pointer;
        overflow: hidden;
      }

      .image-grid button:hover {
        border-color: #ece7d8;
      }

      .image-grid img {
        height: 2rem;
        max-width: 100%;
        object-fit: contain;
        filter: invert(0.9);
      }

      .image-grid span {
        max-width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .popup .actions {
        display: flex;
        gap: 0.3rem;
        flex-wrap: wrap;
        margin-bottom: 0.4rem;
      }

      .popup .actions button,
      .popup .actions label {
        font: inherit;
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
        border: 1px solid #6b665a;
        background: #2b2a27;
        color: inherit;
        cursor: pointer;
      }

      .popup .actions button:hover,
      .popup .actions label:hover {
        background: #3b3a36;
      }

      .popup .role-list button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
        padding: 0.25rem;
        background: none;
        border: none;
        color: inherit;
        font: inherit;
        font-size: 0.8rem;
        cursor: pointer;
        text-align: left;
      }

      .popup .role-list button:hover {
        background: rgba(255, 255, 255, 0.08);
      }

      .popup .role-list .icon {
        width: 1.8rem;
        height: 1.4rem;
      }

      .rel {
        position: relative;
      }

      /* Popups of the right-hand columns open towards the left */
      .weapon:nth-last-child(-n + 2):not(:first-child) .popup {
        left: auto;
        right: 0;
      }

      .role-button {
        background: none;
        border: 1px dashed rgba(34, 32, 27, 0.5);
        padding: 0.1rem;
        cursor: pointer;
        color: inherit;
      }

      .role-button:hover {
        background: rgba(255, 255, 255, 0.25);
      }
    `;
  }

  @property({attribute: false})
  card?: StatCard;

  /** Card to compare with: changed values get a mark (edit mode only) */
  @property({attribute: false})
  compareTo?: StatCard;

  @property({type: Boolean})
  editable = false;

  /** Weapon images to choose from (url + name) */
  @property({attribute: false})
  imageChoices: {url: string; name: string}[] = [];

  @state()
  private popup: Popup = null;

  @state()
  private imageFilter = '';

  /** Render as read-only for a picture of the card */
  @state()
  private snapshot = false;

  @query('.card')
  private cardElement!: HTMLElement;

  private readonly closeOnOutsideClick = (event: MouseEvent) => {
    if (!this.popup) {
      return;
    }
    const path = event.composedPath();
    const inside = path.some(
      (node) =>
        node instanceof HTMLElement &&
        (node.classList?.contains('popup') || node.dataset?.popupOpener !== undefined)
    );
    if (!inside) {
      this.popup = null;
    }
  };

  private readonly closeOnEscape = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.popup) {
      this.popup = null;
    }
  };

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this.closeOnOutsideClick);
    document.addEventListener('keydown', this.closeOnEscape);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this.closeOnOutsideClick);
    document.removeEventListener('keydown', this.closeOnEscape);
  }

  protected willUpdate(changed: PropertyValues<this>) {
    if (changed.has('editable') && !this.editable) {
      this.popup = null;
    }
  }

  /** PNG of the card as the game would show it (no edit controls) */
  async capture(): Promise<Blob | null> {
    const popup = this.popup;
    this.popup = null;
    this.snapshot = true;
    await this.updateComplete;
    await new Promise((resolve) => requestAnimationFrame(() => resolve(null)));
    try {
      return await toBlob(this.cardElement, {
        pixelRatio: 2,
        cacheBust: false,
        // Fonts of the page are not needed; skipping them avoids fetching
        // every stylesheet of the page again.
        skipFonts: true,
      });
    } finally {
      this.snapshot = false;
      this.popup = popup;
    }
  }

  private get editing(): boolean {
    return this.editable && !this.snapshot;
  }

  /* ---------------- changes ---------------- */

  private change(mutate: (card: StatCard) => void, coalesce?: string) {
    if (!this.card) {
      return;
    }
    const card = JSON.parse(JSON.stringify(this.card)) as StatCard;
    mutate(card);
    this.dispatchEvent(
      new CustomEvent<CardChangeDetail>('card-change', {
        detail: {card, coalesce},
        bubbles: true,
        composed: true,
      })
    );
  }

  private changeWeapon(uid: number, mutate: (weapon: StatWeapon) => void, coalesce?: string) {
    this.change((card) => {
      const weapon = card.weapons.find((w) => w.uid === uid);
      if (weapon) {
        mutate(weapon);
      }
    }, coalesce);
  }

  private moveWeapon(uid: number, step: number) {
    this.change((card) => {
      const index = card.weapons.findIndex((w) => w.uid === uid);
      const target = index + step;
      if (index < 0 || target < 0 || target >= card.weapons.length) return;
      const [weapon] = card.weapons.splice(index, 1);
      card.weapons.splice(target, 0, weapon);
    });
  }

  private removeWeapon(uid: number) {
    this.popup = null;
    this.change((card) => {
      card.weapons = card.weapons.filter((w) => w.uid !== uid);
    });
  }

  private duplicateWeapon(uid: number) {
    this.dispatchEvent(
      new CustomEvent('duplicate-weapon', {detail: {uid}, bubbles: true, composed: true})
    );
  }

  private togglePopup(popup: Exclude<Popup, null>) {
    const same =
      this.popup &&
      this.popup.kind === popup.kind &&
      ('uid' in popup ? 'uid' in this.popup && this.popup.uid === popup.uid : true);
    this.popup = same ? null : popup;
    this.imageFilter = '';
  }

  /* ---------------- compare ---------------- */

  private originalWeapon(uid: number): StatWeapon | undefined {
    return this.compareTo?.weapons.find((w) => w.uid === uid);
  }

  private changedClass(changed: boolean): string {
    return this.editing && this.compareTo && changed ? 'changed' : '';
  }

  /* ---------------- shared controls ---------------- */

  private renderValue(value: number, scale: StatScale, text?: string): TemplateResult {
    return html`<span class="value tone-${valueTone(value, scale)}"
      >${text ?? formatWithUnit(value, scale)}</span
    >`;
  }

  private renderBar(value: number, scale: StatScale): TemplateResult {
    const p = ((clamp(value, scale.min, scale.max) - scale.min) / (scale.max - scale.min)) * 100;
    return html`<div class="bar"><span style="width:${p}%"></span></div>`;
  }

  /** Slider (or read-only bar) + value, for a number on a scale */
  private renderSlider(
    value: number,
    scale: StatScale,
    onChange: (value: number, coalesce: boolean) => void,
    label: string
  ): TemplateResult {
    if (!this.editing) {
      return this.renderBar(value, scale);
    }
    // The slider covers the usual range; typing can go past it.
    const max = Math.max(scale.max, value);
    const p = ((clamp(value, scale.min, max) - scale.min) / (max - scale.min)) * 100;
    return html`<input
      type="range"
      aria-label=${label}
      min=${scale.min}
      max=${max}
      step=${scale.step}
      .value=${live(String(value))}
      style=${styleMap({'--p': `${p}%`})}
      @input=${(e: Event) => onChange(readNumber(e), true)}
    />`;
  }

  private renderNumber(
    value: number,
    scale: StatScale | undefined,
    onChange: (value: number) => void,
    label: string,
    extraClass = ''
  ): TemplateResult {
    const tone = scale ? `tone-${valueTone(value, scale)}` : 'tone-plain';
    return html`<input
      class="num ${tone} ${extraClass}"
      type="number"
      aria-label=${label}
      step=${scale?.step ?? 'any'}
      min=${scale?.min ?? 0}
      .value=${live(formatNumber(value))}
      @change=${(e: Event) => onChange(readNumber(e))}
    />`;
  }

  /* ---------------- header ---------------- */

  private renderHeader(card: StatCard): TemplateResult {
    const flag = FLAGS[card.country];
    const original = this.compareTo;
    return html`
      <div class="head">
        <div class="flag-cost">
          ${this.editing
            ? html`<select
                aria-label="Kraj"
                class=${this.changedClass(!!original && original.country !== card.country)}
                @change=${(e: Event) =>
                  this.change((c) => (c.country = (e.target as HTMLSelectElement).value))}
              >
                ${Object.keys(COUNTRY_NAMES).map(
                  (code) =>
                    html`<option value=${code} ?selected=${code === card.country}>
                      ${code} – ${COUNTRY_NAMES[code]}
                    </option>`
                )}
              </select>`
            : flag
            ? html`<img class="flag" src=${flag} alt=${card.country} />`
            : html`<span class="flag-code">${card.country}</span>`}
          ${this.editing
            ? html`<input
                class="num cost ${this.changedClass(!!original && original.cost !== card.cost)}"
                type="number"
                aria-label="Koszt"
                min="0"
                step="5"
                .value=${live(String(card.cost))}
                @change=${(e: Event) => this.change((c) => (c.cost = readNumber(e)))}
              />`
            : html`<span class="cost">${card.cost}</span>`}
        </div>
        ${this.editing
          ? html`<input
              class="text title ${this.changedClass(!!original && original.name !== card.name)}"
              aria-label="Nazwa jednostki"
              .value=${live(card.name)}
              @input=${(e: Event) =>
                this.change((c) => (c.name = (e.target as HTMLInputElement).value), 'name')}
            />`
          : html`<div class="title">${card.name}</div>`}
        <div class="head-spacer"></div>
      </div>
      <div class="box info">
        <div class="rel">
          <div class="role-icons">
            ${this.editing
              ? html`<button
                  class="role-button"
                  data-popup-opener
                  title="Zmień rodzaj jednostki"
                  @click=${() => this.togglePopup({kind: 'role'})}
                >
                  <span class="role-chip">${waryesIcon(card.roleIcon)}</span>
                </button>`
              : html`<span class="role-chip">${waryesIcon(card.roleIcon)}</span>`}
          </div>
          <div>
            ${this.editing
              ? html`<input
                  class="text label ${this.changedClass(!!original && original.roleLabel !== card.roleLabel)}"
                  aria-label="Rodzaj jednostki"
                  list="role-labels"
                  .value=${live(card.roleLabel)}
                  @input=${(e: Event) =>
                    this.change(
                      (c) => (c.roleLabel = (e.target as HTMLInputElement).value.toUpperCase()),
                      'roleLabel'
                    )}
                />
                <datalist id="role-labels">
                  ${ROLES.map((r) => html`<option value=${r.label}></option>`)}
                </datalist>`
              : html`<div class="label">${card.roleLabel}</div>`}
            <div
              class="traits ${this.changedClass(
                !!original && original.traits.join() !== card.traits.join()
              )}"
            >
              ${card.traits.map((t) => unitTraitIcon(t, unitTraitLabel(t)))}
            </div>
          </div>
          ${this.popup?.kind === 'role' ? this.renderRolePopup() : nothing}
        </div>
        <div>
          <svg class="cost-icon" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M3 21L21 3v18z" fill="none" stroke="currentColor" stroke-width="2.5" />
          </svg>
          <div>
            <div class="label">KOSZT JEDNOSTKI</div>
            ${this.editing
              ? html`<select
                  aria-label="Koszt jednostki"
                  class=${this.changedClass(!!original && original.costCategory !== card.costCategory)}
                  @change=${(e: Event) =>
                    this.change((c) => (c.costCategory = (e.target as HTMLSelectElement).value))}
                >
                  ${COST_CATEGORIES.map(
                    (o) =>
                      html`<option value=${o.value} ?selected=${o.value === card.costCategory}>
                        ${o.label}
                      </option>`
                  )}
                </select>`
              : html`<div class="sub">${card.costCategory}</div>`}
          </div>
        </div>
      </div>
    `;
  }

  private renderRolePopup(): TemplateResult {
    return html`<div class="popup">
      <div class="p-title">Rodzaj jednostki (ikona i nazwa)</div>
      <div class="role-list">
        ${ROLES.map(
          (role) => html`<button
            @click=${() => {
              this.popup = null;
              this.change((c) => {
                c.roleIcon = role.icon;
                c.roleLabel = role.label;
              });
            }}
          >
            ${waryesIcon(role.icon)} ${role.label}
          </button>`
        )}
      </div>
    </div>`;
  }

  /* ---------------- armour ---------------- */

  private renderArmor(card: StatCard): TemplateResult {
    return html`
      <div class="section">PANCERZ</div>
      <div class="box armor">
        ${ARMOR.map(({key, label}) => {
          const value = card[key];
          const changed = !!this.compareTo && this.compareTo[key] !== value;
          return html`<div class=${this.changedClass(changed)}>
            <span class="name">${label}</span>
            ${this.renderSlider(
              value,
              SCALES.armor,
              (v, coalesce) => this.change((c) => (c[key] = v), coalesce ? key : undefined),
              `Pancerz ${label}`
            )}
            ${this.editing
              ? this.renderNumber(value, SCALES.armor, (v) => this.change((c) => (c[key] = v)), `Pancerz ${label}`, 'small')
              : this.renderValue(value, SCALES.armor)}
          </div>`;
        })}
      </div>
    `;
  }

  /* ---------------- weapons ---------------- */

  private renderWeapons(card: StatCard): TemplateResult {
    if (card.weapons.length === 0) {
      return html``;
    }
    const columns = card.weapons.length;
    return html`
      <div class="section">BROŃ</div>
      <div
        class="weapons ${this.editing ? 'editing' : ''}"
        style="grid-template-columns: repeat(${columns}, minmax(0, 1fr))"
      >
        ${repeat(
          card.weapons,
          (w) => w.uid,
          (w, index) => this.renderWeapon(w, index, columns)
        )}
      </div>
    `;
  }

  private renderWeapon(weapon: StatWeapon, index: number, columns: number): TemplateResult {
    const original = this.originalWeapon(weapon.uid);
    const isNew = !!this.compareTo && !original;
    const differs = (key: keyof StatWeapon) =>
      isNew || (!!original && JSON.stringify(original[key]) !== JSON.stringify(weapon[key]));
    return html`
      <div class="weapon">
        <div class="box w-head rel ${this.changedClass(isNew)}">
          ${this.editing
            ? html`<div class="w-tools">
                  <button title="Przesuń w lewo" ?disabled=${index === 0} @click=${() => this.moveWeapon(weapon.uid, -1)}>◀</button>
                  <button title="Przesuń w prawo" ?disabled=${index === columns - 1} @click=${() => this.moveWeapon(weapon.uid, 1)}>▶</button>
                  <button title="Powiel kolumnę" @click=${() => this.duplicateWeapon(weapon.uid)}>⧉</button>
                  <button class="danger" title="Usuń kolumnę" @click=${() => this.removeWeapon(weapon.uid)}>✕</button>
                </div>
                <input
                  class="text w-type ${this.changedClass(differs('typeLabel'))}"
                  aria-label="Rodzaj uzbrojenia"
                  list="weapon-type-labels"
                  .value=${live(weapon.typeLabel)}
                  @input=${(e: Event) =>
                    this.changeWeapon(
                      weapon.uid,
                      (w) => (w.typeLabel = (e.target as HTMLInputElement).value.toUpperCase()),
                      `type-${weapon.uid}`
                    )}
                />`
            : html`<span class="w-type" title=${weapon.typeLabel}>${weapon.typeLabel}</span>`}
          <div class="tiles ${this.changedClass(differs('attributes'))}">
            ${[0, 1, 2].map((slot) => {
              const attribute = weapon.attributes[slot];
              const icon = attribute ? weaponAttributeIcon(attribute, weaponAttributeLabel(attribute)) : nothing;
              return this.editing
                ? html`<button
                    class="tile"
                    data-popup-opener
                    title=${attribute ? weaponAttributeLabel(attribute) : 'Dodaj atrybut broni'}
                    @click=${() => this.togglePopup({kind: 'attributes', uid: weapon.uid})}
                  >
                    ${attribute ? icon : html`<span class="text-icon">+</span>`}
                  </button>`
                : html`<div class="tile">${icon}</div>`;
            })}
          </div>
          ${this.popup?.kind === 'attributes' && this.popup.uid === weapon.uid
            ? this.renderAttributePopup(weapon)
            : nothing}
          ${this.editing
            ? html`<button
                class="w-image ${this.changedClass(differs('image'))}"
                data-popup-opener
                title="Zmień ikonę uzbrojenia"
                @click=${() => this.togglePopup({kind: 'image', uid: weapon.uid})}
              >
                ${this.renderWeaponImage(weapon)}
              </button>`
            : html`<div class="w-image">${this.renderWeaponImage(weapon)}</div>`}
          ${this.popup?.kind === 'image' && this.popup.uid === weapon.uid
            ? this.renderImagePopup(weapon)
            : nothing}
          <div class="w-name">
            ${this.editing
              ? html`<input
                  class="text ${this.changedClass(differs('name'))}"
                  aria-label="Nazwa broni"
                  .value=${live(weapon.name)}
                  @input=${(e: Event) =>
                    this.changeWeapon(weapon.uid, (w) => (w.name = (e.target as HTMLInputElement).value), `name-${weapon.uid}`)}
                />`
              : weapon.name}
          </div>
          <div class="w-cal">
            ${this.editing
              ? html`<input
                    class="text ${this.changedClass(differs('caliber'))}"
                    aria-label="Kaliber"
                    placeholder="kaliber"
                    .value=${live(weapon.caliber)}
                    @input=${(e: Event) =>
                      this.changeWeapon(weapon.uid, (w) => (w.caliber = (e.target as HTMLInputElement).value), `cal-${weapon.uid}`)}
                  />
                  x
                  <input
                    class="num tone-plain ${this.changedClass(differs('ammo'))}"
                    type="number"
                    aria-label="Amunicja"
                    min="0"
                    .value=${live(String(weapon.ammo))}
                    @change=${(e: Event) => this.changeWeapon(weapon.uid, (w) => (w.ammo = readNumber(e)))}
                  />`
              : html`${weapon.caliber ? `${weapon.caliber} x ${weapon.ammo}` : `x ${weapon.ammo}`}`}
          </div>
        </div>
        ${WEAPON_SECTIONS.map((section) => {
          const rows = section.rows.filter(
            (row) => this.editing || !row.hideZero || weapon[row.key] !== 0
          );
          if (rows.length === 0) {
            return nothing;
          }
          return html`<div class="box w-block">
            <div class="b-title">${section.title}</div>
            ${rows.map((row) => this.renderWeaponStat(weapon, row, differs(row.key)))}
          </div>`;
        })}
        <div class="box w-block supply ${this.changedClass(differs('supplyCost'))}">
          <div class="b-title">KOSZT ZAOPATRZENIA</div>
          <div class="stat">
            ${this.renderSlider(
              weapon.supplyCost,
              SCALES.supplyCost,
              (v, coalesce) =>
                this.changeWeapon(weapon.uid, (w) => (w.supplyCost = v), coalesce ? `supply-${weapon.uid}` : undefined),
              'Koszt zaopatrzenia'
            )}
            ${this.editing
              ? this.renderNumber(weapon.supplyCost, undefined, (v) =>
                  this.changeWeapon(weapon.uid, (w) => (w.supplyCost = v)), 'Koszt zaopatrzenia')
              : html`<span class="value tone-red">${weapon.supplyCost}</span>`}
          </div>
        </div>
      </div>
    `;
  }

  private renderWeaponStat(weapon: StatWeapon, row: StatRow, changed: boolean): TemplateResult {
    const value = weapon[row.key];
    return html`<div class="stat ${row.big && !this.editing ? 'big' : ''} ${this.changedClass(changed)}">
      <span class="s-label">${row.label}</span>
      ${this.renderSlider(
        value,
        row.scale,
        (v, coalesce) =>
          this.changeWeapon(weapon.uid, (w) => (w[row.key] = v), coalesce ? `${row.key}-${weapon.uid}` : undefined),
        row.label
      )}
      ${this.editing
        ? this.renderNumber(value, row.scale, (v) => this.changeWeapon(weapon.uid, (w) => (w[row.key] = v)), row.label)
        : this.renderValue(value, row.scale)}
    </div>`;
  }

  private renderWeaponImage(weapon: StatWeapon): TemplateResult {
    if (!weapon.image) {
      return html`<span class="placeholder">${this.editing ? 'Wybierz ikonę' : ''}</span>`;
    }
    const custom = weapon.image.startsWith('data:');
    return html`<img
      class=${custom ? 'custom' : ''}
      src=${weapon.image}
      alt=""
      @error=${(e: Event) => ((e.target as HTMLImageElement).style.visibility = 'hidden')}
      @load=${(e: Event) => ((e.target as HTMLImageElement).style.visibility = '')}
    />`;
  }

  private renderAttributePopup(weapon: StatWeapon): TemplateResult {
    const full = weapon.attributes.length >= MAX_WEAPON_ATTRIBUTES;
    return html`<div class="popup">
      <div class="p-title">
        <span>Atrybuty broni (${weapon.attributes.length}/${MAX_WEAPON_ATTRIBUTES})</span>
        <button class="mini" @click=${() => (this.popup = null)}>Zamknij</button>
      </div>
      ${WEAPON_ATTRIBUTES.map((attribute) => {
        const checked = weapon.attributes.includes(attribute.value);
        const disabled = !checked && full;
        return html`<label class="check ${disabled ? 'disabled' : ''}">
          <input
            type="checkbox"
            .checked=${live(checked)}
            ?disabled=${disabled}
            @change=${(e: Event) => {
              const on = (e.target as HTMLInputElement).checked;
              this.changeWeapon(weapon.uid, (w) => {
                w.attributes = on
                  ? [...w.attributes, attribute.value].slice(0, MAX_WEAPON_ATTRIBUTES)
                  : w.attributes.filter((a) => a !== attribute.value);
              });
            }}
          />
          ${weaponAttributeIcon(attribute.value)}
          <span>${attribute.label}</span>
        </label>`;
      })}
    </div>`;
  }

  private renderImagePopup(weapon: StatWeapon): TemplateResult {
    const filter = this.imageFilter.trim().toLowerCase();
    const choices = this.imageChoices.filter((c) => !filter || c.name.toLowerCase().includes(filter));
    return html`<div class="popup">
      <div class="p-title">
        <span>Ikona uzbrojenia</span>
        <button class="mini" @click=${() => (this.popup = null)}>Zamknij</button>
      </div>
      <div class="actions">
        <label>
          Własna ikona…
          <input
            type="file"
            accept="image/*"
            hidden
            @change=${(e: Event) => this.uploadImage(weapon.uid, e)}
          />
        </label>
        <button @click=${() => this.changeWeapon(weapon.uid, (w) => (w.image = ''))}>Bez ikony</button>
      </div>
      <input
        class="search"
        type="search"
        placeholder="Szukaj ikony (np. 2A46, M2HB)…"
        .value=${this.imageFilter}
        @input=${(e: Event) => (this.imageFilter = (e.target as HTMLInputElement).value)}
      />
      <div class="image-grid">
        ${choices.slice(0, 240).map(
          (choice) => html`<button
            title=${choice.name}
            @click=${() => {
              this.popup = null;
              this.changeWeapon(weapon.uid, (w) => (w.image = choice.url));
            }}
          >
            <img
              src=${choice.url}
              alt=""
              loading="lazy"
              @error=${(e: Event) =>
                ((e.target as HTMLElement).closest('button') as HTMLElement).remove()}
            />
            <span>${choice.name}</span>
          </button>`
        )}
      </div>
    </div>`;
  }

  private uploadImage(uid: number, event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      this.popup = null;
      this.changeWeapon(uid, (w) => (w.image = String(reader.result)));
    };
    reader.readAsDataURL(file);
  }

  /* ---------------- bottom panel ---------------- */

  private renderPanel(card: StatCard): TemplateResult {
    const title =
      card.panelType === 'infantry'
        ? 'CHARAKTERYSTYKA PLUTONU'
        : card.panelType === 'vehicle'
        ? 'CHARAKTERYSTYKA POJAZDU LUB PLUTONU'
        : 'CHARAKTERYSTYKA MASZYNY';
    return html`
      <div class="section">${title}</div>
      <div class="box panel">
        ${PANEL_LAYOUTS[card.panelType].map((field) => this.renderPanelField(card, field))}
      </div>
    `;
  }

  private renderPanelField(card: StatCard, field: PanelField): TemplateResult {
    const value = card.fields[field.key];
    const original = this.compareTo?.fields[field.key];
    const changed = !!this.compareTo && String(original ?? '') !== String(value ?? '');
    return html`<div class=${this.changedClass(changed)}>
      <span class="p-label" title=${field.label}>${field.label}:</span>
      <span class="p-value">${this.renderPanelValue(field, value)}</span>
    </div>`;
  }

  private setField(key: string, value: number | string, coalesce?: string) {
    this.change((c) => (c.fields[key] = value), coalesce);
  }

  private renderPanelValue(field: PanelField, raw: number | string | undefined): TemplateResult {
    const kind = field.kind;
    switch (kind.type) {
      case 'number': {
        const value = Number(raw ?? 0) || 0;
        if (this.editing) {
          return html`<span class="pair">
            <input
              class="num tone-plain"
              type="number"
              aria-label=${field.label}
              min="0"
              step=${kind.step ?? 1}
              .value=${live(formatNumber(value))}
              @change=${(e: Event) => this.setField(field.key, readNumber(e))}
            />
            ${kind.unit ?? ''}
          </span>`;
        }
        return html`${formatNumber(value)}${kind.unit ? ` ${kind.unit}` : ''}`;
      }
      case 'range': {
        const [a, b] = String(raw ?? '0/0').split('/').map((x) => Number(x) || 0);
        if (this.editing) {
          return html`<span class="pair">
            <input
              class="num tone-plain"
              type="number"
              aria-label="${field.label} w terenie"
              min="0"
              .value=${live(String(a))}
              @change=${(e: Event) => this.setField(field.key, `${readNumber(e)}/${b}`)}
            />/<input
              class="num tone-plain"
              type="number"
              aria-label="${field.label} po drodze"
              min="0"
              .value=${live(String(b))}
              @change=${(e: Event) => this.setField(field.key, `${a}/${readNumber(e)}`)}
            />
            km
          </span>`;
        }
        return html`${a}/${b} km`;
      }
      case 'level': {
        const value = Number(raw ?? kind.options[0].value);
        const selected = levelValue(kind.options, value);
        const label = levelLabel(kind.options, value);
        const weakest = selected === kind.options[0].value;
        if (this.editing) {
          return html`<select
            aria-label=${field.label}
            @change=${(e: Event) => this.setField(field.key, Number((e.target as HTMLSelectElement).value))}
          >
            ${kind.options.map(
              (o) => html`<option value=${o.value} ?selected=${o.value === selected}>${o.label}</option>`
            )}
          </select>`;
        }
        return html`<span class=${weakest ? 'tone-weak' : ''}>${label}</span>`;
      }
      case 'select': {
        const value = String(raw ?? kind.options[0].value);
        if (this.editing) {
          return html`<select
            aria-label=${field.label}
            @change=${(e: Event) => this.setField(field.key, (e.target as HTMLSelectElement).value)}
          >
            ${kind.options.map(
              (o) => html`<option value=${o.value} ?selected=${o.value === value}>${o.label}</option>`
            )}
          </select>`;
        }
        return html`${value}`;
      }
    }
  }

  render(): TemplateResult {
    const card = this.card;
    if (!card) {
      return html``;
    }
    const width = Math.max(38, 5 + card.weapons.length * 12.5);
    return html`
      <div class="card" style="width:${width}rem">
        ${this.renderHeader(card)} ${this.renderArmor(card)} ${this.renderWeapons(card)}
        ${this.renderPanel(card)}
      </div>
      ${this.editing
        ? html`<datalist id="weapon-type-labels">
            ${WEAPON_TYPE_LABELS.map((label) => html`<option value=${label}></option>`)}
          </datalist>`
        : nothing}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'stats-card': StatsCard;
  }
}
