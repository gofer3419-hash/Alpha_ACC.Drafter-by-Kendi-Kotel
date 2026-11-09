/**
 * Icons for the StatsToolKit card as inline SVG.
 *
 * The card is copied to an image with html-to-image, which cannot see inside
 * other components' shadow DOM (vaadin-icon). So icons are drawn as plain
 * <svg> elements: unit icons are copied from the "waryes" and "vaadin"
 * iconsets already on the page, weapon attribute icons are drawn here.
 */
import {html, TemplateResult} from 'lit';
import {unsafeSVG} from 'lit/directives/unsafe-svg.js';
import {iconMap} from '../../utils/get-icon-for-specialty';

const cache = new Map<string, string | null>();

/** Inner SVG of an icon of a loaded <vaadin-iconset>, or null */
function iconsetSvg(iconset: string, name: string): string | null {
  const id = `${iconset}:${name}`;
  if (cache.has(id)) {
    return cache.get(id) ?? null;
  }
  let markup: string | null = null;
  const set = document.querySelector(`vaadin-iconset[name="${iconset}"]`);
  const node = set?.querySelector(`[id="${id}"]`);
  if (node) {
    markup = node.innerHTML;
  }
  cache.set(id, markup);
  return markup;
}

function svgIcon(markup: string, viewBox: number, title?: string): TemplateResult {
  return html`<svg
    class="icon"
    viewBox="0 0 ${viewBox} ${viewBox}"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden=${title ? 'false' : 'true'}
  >
    ${title ? html`<title>${title}</title>` : ''}${unsafeSVG(markup)}
  </svg>`;
}

/** Unit/role icon from the waryes iconset (e.g. "tank"), with a fallback */
export function waryesIcon(name: string, title?: string): TemplateResult {
  const markup = iconsetSvg('waryes', name);
  if (markup) {
    return svgIcon(markup, 24, title);
  }
  return textIcon(name.slice(0, 3).toUpperCase(), title);
}

export function vaadinIcon(name: string, title?: string): TemplateResult {
  const markup = iconsetSvg('vaadin', name);
  if (markup) {
    return svgIcon(markup, 16, title);
  }
  return textIcon('?', title);
}

function textIcon(text: string, title?: string): TemplateResult {
  return html`<span class="icon text-icon" title=${title ?? text}>${text}</span>`;
}

/** Unit traits without a waryes icon: a vaadin icon instead */
const TRAIT_FALLBACK: Record<string, string> = {
  Thermals1: 'eye',
  Thermals2: 'eye',
  MRAP: 'shield',
  Slat: 'grid-small',
  uav: 'airplane',
  uav2: 'airplane',
  _militia: 'users',
  _instructor: 'academy-cap',
  _mountaineer: 'arrow-up',
  Radar: 'signal',
  _reco: 'binoculars',
};

export function unitTraitIcon(trait: string, title?: string): TemplateResult {
  const key = /^_canBeAirlifted\d$/.test(trait) ? '_canBeAirlifted' : trait;
  const waryes = iconMap[key];
  if (waryes && iconsetSvg('waryes', waryes)) {
    return waryesIcon(waryes, title);
  }
  const fallback = TRAIT_FALLBACK[key];
  if (fallback && iconsetSvg('vaadin', fallback)) {
    return vaadinIcon(fallback, title);
  }
  return textIcon(key.replace(/^_/, '').slice(0, 3).toUpperCase(), title);
}

/* Weapon attribute icons: 24x24, white strokes/fills (coloured by CSS) */
const ATTRIBUTE_SVG: Record<string, string> = {
  MOTION:
    '<path d="M12 2l3 3h-2v5h5V8l3 3-3 3v-2h-5v5h2l-3 3-3-3h2v-5H6v2l-3-3 3-3v2h5V5H9z" fill="currentColor"/>',
  STAT:
    '<circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 1v6M12 17v6M1 12h6M17 12h6" stroke="currentColor" stroke-width="2"/><rect x="10" y="10" width="4" height="4" fill="currentColor"/>',
  HE:
    '<path d="M12 1l2 6 5-4-2 6 6 1-5 3 4 5-6-2-1 6-3-5-3 5-1-6-6 2 4-5-5-3 6-1-2-6 5 4z" fill="currentColor"/>',
  HEAT:
    '<path d="M3 12l9-7v14z" fill="currentColor"/><path d="M12 9h9v6h-9" fill="none" stroke="currentColor" stroke-width="2"/>',
  KINETIC:
    '<path d="M2 12l6-3v6z" fill="currentColor"/><path d="M8 12h12" stroke="currentColor" stroke-width="3"/><path d="M17 8l5 4-5 4z" fill="currentColor"/>',
  TANDEM:
    '<path d="M2 12l6-5v10zM10 12l6-5v10z" fill="currentColor"/><path d="M16 12h6" stroke="currentColor" stroke-width="2"/>',
  'F&F':
    '<path d="M3 15l12-8 4 2-12 8z" fill="currentColor"/><path d="M14 18l3 3 5-7" fill="none" stroke="currentColor" stroke-width="2"/>',
  'F&F_boresight':
    '<path d="M3 15l12-8 4 2-12 8z" fill="currentColor"/><circle cx="18" cy="18" r="4" fill="none" stroke="currentColor" stroke-width="2"/>',
  OTA:
    '<path d="M2 16c4-12 16-12 20 0" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="3 2"/><path d="M19 13l3 4-5 0z" fill="currentColor"/><rect x="9" y="18" width="6" height="4" fill="currentColor"/>',
  CLGP:
    '<path d="M2 20L22 4" stroke="currentColor" stroke-width="1.5" stroke-dasharray="2 2"/><path d="M14 14l6-2-2 6z" fill="currentColor"/>',
  RADAR:
    '<path d="M4 20a10 10 0 0 1 0-14" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 17a6 6 0 0 1 0-8" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="13" r="2" fill="currentColor"/><path d="M12 13l9-9" stroke="currentColor" stroke-width="2"/>',
  sead:
    '<path d="M3 21a12 12 0 0 1 0-12" fill="none" stroke="currentColor" stroke-width="2"/><path d="M7 21a8 8 0 0 1 0-8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10 14l10-10 1 3-8 8z" fill="currentColor"/>',
  IND:
    '<path d="M3 20C6 5 18 5 21 20" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="21" cy="20" r="2" fill="currentColor"/><rect x="1" y="19" width="5" height="3" fill="currentColor"/>',
  CAC:
    '<path d="M4 20L16 8M8 20L20 8" stroke="currentColor" stroke-width="2"/><path d="M15 3l6 6-3 1-4-4z" fill="currentColor"/>',
  autoloader:
    '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="6.5" r="2" fill="currentColor"/><circle cx="17" cy="14" r="2" fill="currentColor"/><circle cx="7" cy="14" r="2" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>',
  manual:
    '<path d="M7 21v-8l-2-3 1-1 3 2V4a1.5 1.5 0 0 1 3 0v6-7a1.5 1.5 0 0 1 3 0v7-5a1.5 1.5 0 0 1 3 0v10l-2 6z" fill="currentColor"/>',
  semiAuto:
    '<rect x="3" y="9" width="4" height="6" fill="currentColor"/><rect x="10" y="9" width="4" height="6" fill="currentColor"/><path d="M17 8l5 4-5 4z" fill="currentColor"/>',
  coax:
    '<rect x="2" y="7" width="20" height="3" fill="currentColor"/><rect x="6" y="14" width="16" height="2" fill="currentColor"/><rect x="2" y="12" width="5" height="6" fill="currentColor"/>',
  tripod:
    '<rect x="4" y="5" width="17" height="3" fill="currentColor"/><path d="M11 8l-6 13M12 8v13M13 8l6 13" stroke="currentColor" stroke-width="2"/>',
  silenced:
    '<rect x="2" y="10" width="11" height="4" fill="currentColor"/><rect x="13" y="8" width="9" height="8" rx="2" fill="currentColor"/>',
  smoke:
    '<path d="M6 19a4 4 0 0 1 0-8 6 6 0 0 1 11-2 5 5 0 0 1 1 10z" fill="currentColor"/>',
  cluster:
    '<circle cx="6" cy="6" r="2.5" fill="currentColor"/><circle cx="17" cy="5" r="2.5" fill="currentColor"/><circle cx="12" cy="12" r="2.5" fill="currentColor"/><circle cx="5" cy="17" r="2.5" fill="currentColor"/><circle cx="18" cy="17" r="2.5" fill="currentColor"/>',
  thermobaric:
    '<circle cx="12" cy="13" r="8" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="13" r="4" fill="currentColor"/><path d="M12 1v4" stroke="currentColor" stroke-width="2"/>',
  napalm:
    '<path d="M12 2c2 5 7 7 7 13a7 7 0 0 1-14 0c0-3 2-5 3-6 0 3 1 4 3 5-1-4 0-8 1-12z" fill="currentColor"/>',
  demolition:
    '<rect x="4" y="9" width="12" height="11" fill="currentColor"/><path d="M16 9c3-1 4-4 3-7" fill="none" stroke="currentColor" stroke-width="2"/><path d="M19 1l2 2-2 2-2-2z" fill="currentColor"/>',
  activeprotection:
    '<path d="M12 2l8 3v6c0 6-4 10-8 11-4-1-8-5-8-11V5z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 12l3 3 5-6" fill="none" stroke="currentColor" stroke-width="2"/>',
};

export function weaponAttributeIcon(attribute: string, title?: string): TemplateResult {
  const markup = ATTRIBUTE_SVG[attribute];
  if (markup) {
    return svgIcon(markup, 24, title);
  }
  return textIcon(attribute.slice(0, 4), title);
}
