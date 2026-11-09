/**
 * StatsToolKit: editable copy of a unit card.
 *
 * A StatCard holds everything the game-style card shows, as plain values, so
 * any of them can be changed without touching the game data. It starts as a
 * copy of a unit from the data (cardFromUnit) and is then edited freely.
 */
import {Unit, Weapon} from '../../types/unit';

/* ------------------------------------------------------------------ */
/* Model                                                               */
/* ------------------------------------------------------------------ */

export type PanelType = 'vehicle' | 'infantry' | 'helicopter' | 'plane';

export type WeaponCategory =
  | 'cannon'
  | 'howitzer'
  | 'infantry'
  | 'rockets'
  | 'atgm'
  | 'vehicle_mg'
  | 'autocannon'
  | 'mortar'
  | 'air'
  | 'other';

export interface StatWeapon {
  /** Unique within the card (lit keys, popups) */
  uid: number;
  category: WeaponCategory;
  /** Column header, e.g. "DZIAŁO CZOŁGU" */
  typeLabel: string;
  /** Weapon attribute keys shown in the 3 tiles (see WEAPON_ATTRIBUTES) */
  attributes: string[];
  /** Image URL (weapon silhouette) or data URL of an uploaded icon */
  image: string;
  name: string;
  /** e.g. "125mm" */
  caliber: string;
  ammo: number;
  penetration: number;
  he: number;
  suppress: number;
  groundRange: number;
  helicopterRange: number;
  planeRange: number;
  staticAccuracy: number;
  movingAccuracy: number;
  rateOfFire: number;
  aimingTime: number;
  reloadTime: number;
  salvo: number;
  supplyCost: number;
}

export interface StatCard {
  name: string;
  /** Country code (flag), e.g. "SOV" */
  country: string;
  cost: number;
  /** Unit role shown in the header box, e.g. "CZOŁG PODSTAWOWY" */
  roleLabel: string;
  /** Key of ROLE_ICONS */
  roleIcon: string;
  costCategory: string;
  frontArmor: number;
  sideArmor: number;
  rearArmor: number;
  topArmor: number;
  /** Unit trait keys (game specialities, see UNIT_TRAITS) */
  traits: string[];
  weapons: StatWeapon[];
  panelType: PanelType;
  /** Bottom panel values, by PanelField key */
  fields: Record<string, number | string>;
  /** Descriptor of the unit the card was made from */
  source: string;
}

let nextUid = 1;
export function newUid(): number {
  return nextUid++;
}

/** After loading a saved card: new ids must not repeat its weapon ids */
export function reserveUids(card: StatCard) {
  for (const weapon of card.weapons) {
    nextUid = Math.max(nextUid, (weapon.uid || 0) + 1);
  }
}

export function cloneCard(card: StatCard): StatCard {
  const copy = JSON.parse(JSON.stringify(card)) as StatCard;
  copy.weapons.forEach((w) => (w.uid = newUid()));
  return copy;
}

/* ------------------------------------------------------------------ */
/* Option lists                                                        */
/* ------------------------------------------------------------------ */

export interface Option {
  value: string;
  label: string;
}

export interface NumericOption {
  value: number;
  label: string;
}

/** Optics levels of ground units (game values), weakest first */
export const OPTICS: NumericOption[] = [
  {value: 42.45, label: 'Słaba'},
  {value: 63.675, label: 'Przeciętna'},
  {value: 84.9, label: 'Średnia'},
  {value: 127.35, label: 'Dobra'},
  {value: 191.025, label: 'Bardzo dobra'},
  {value: 233.475, label: 'Wyjątkowa'},
];

/** Optics against aircraft */
export const AIR_OPTICS: NumericOption[] = [
  {value: 9.424, label: 'Słaba'},
  {value: 37.724, label: 'Przeciętna'},
  {value: 150, label: 'Średnia'},
  {value: 300, label: 'Dobra'},
  {value: 450, label: 'Wyjątkowa'},
];

export const STEALTH: NumericOption[] = [
  {value: 1, label: 'Słaby'},
  {value: 1.25, label: 'Przeciętny'},
  {value: 1.5, label: 'Średni'},
  {value: 2, label: 'Dobry'},
  {value: 2.5, label: 'Bardzo dobry'},
  {value: 3, label: 'Wyjątkowy'},
  {value: 3.5, label: 'Niewidzialny'},
];

export const ECM: NumericOption[] = [0, -10, -20, -30, -40, -50, -60, -70].map(
  (v) => ({value: v, label: v === 0 ? 'Brak' : `${v}%`})
);

export const AGILITY: Option[] = ['Słaba', 'Przeciętna', 'Średnia', 'Dobra', 'Bardzo dobra', 'Wyjątkowa'].map(
  (v) => ({value: v, label: v})
);

export const YES_NO: Option[] = [
  {value: 'Tak', label: 'Tak'},
  {value: 'Nie', label: 'Nie'},
];

export const AMPHIBIOUS: Option[] = [
  {value: 'Nie', label: 'Nie'},
  {value: 'Tak', label: 'Tak'},
  {value: 'Tak (ograniczona)', label: 'Tak (ograniczona)'},
];

export const COST_CATEGORIES: Option[] = ['NISKI', 'ŚREDNI', 'WYSOKI', 'BARDZO WYSOKI'].map(
  (v) => ({value: v, label: v})
);

/** Label of the level a value belongs to (the highest level not above it) */
export function levelLabel(options: NumericOption[], value: number): string {
  let label = options[0].label;
  for (const option of options) {
    if (value >= option.value - 1e-6) {
      label = option.label;
    }
  }
  return label;
}

/** The option a value belongs to, so a select can show it */
export function levelValue(options: NumericOption[], value: number): number {
  let result = options[0].value;
  for (const option of options) {
    if (value >= option.value - 1e-6) {
      result = option.value;
    }
  }
  return result;
}

/** Unit roles for the header box: icon key + default label */
export const ROLES: {icon: string; label: string}[] = [
  {icon: 'tank', label: 'CZOŁG PODSTAWOWY'},
  {icon: 'tank', label: 'CZOŁG LEKKI'},
  {icon: 'ifv', label: 'BWP'},
  {icon: 'transport', label: 'TRANSPORTER OPANCERZONY'},
  {icon: 'infantry', label: 'PIECHOTA'},
  {icon: 'assault-infantry', label: 'PIECHOTA SZTURMOWA'},
  {icon: 'at', label: 'PRZECIWPANCERNA'},
  {icon: 'recon', label: 'ROZPOZNANIE'},
  {icon: 'command', label: 'DOWODZENIE'},
  {icon: 'support', label: 'WSPARCIE'},
  {icon: 'supply', label: 'ZAOPATRZENIE'},
  {icon: 'artillery', label: 'ARTYLERIA'},
  {icon: 'mortar', label: 'MOŹDZIERZ'},
  {icon: 'mlrs', label: 'WYRZUTNIA RAKIET'},
  {icon: 'aa', label: 'OBRONA PRZECIWLOTNICZA'},
  {icon: 'helicopter', label: 'ŚMIGŁOWIEC'},
  {icon: 'jet', label: 'SAMOLOT'},
  {icon: 'sead', label: 'SEAD'},
];

/** Unit traits (game specialities) with Polish names */
export const UNIT_TRAITS: Option[] = [
  {value: '_leader', label: 'Dowódca'},
  {value: '_reco', label: 'Rozpoznanie'},
  {value: '_amphibie', label: 'Amfibia'},
  {value: '_ifv', label: 'BWP (wsparcie piechoty)'},
  {value: '_transport1', label: 'Transport (1 drużyna)'},
  {value: '_transport2', label: 'Transport (2 drużyny)'},
  {value: '_choc', label: 'Szturmowi (CQC)'},
  {value: '_resolute', label: 'Zdeterminowani'},
  {value: '_reservist', label: 'Rezerwiści'},
  {value: '_militia', label: 'Milicja'},
  {value: '_security', label: 'Ochrona'},
  {value: '_mp', label: 'Żandarmeria'},
  {value: '_para', label: 'Spadochroniarze'},
  {value: '_sf', label: 'Siły specjalne'},
  {value: '_sniper', label: 'Snajper'},
  {value: '_mountaineer', label: 'Strzelcy górscy'},
  {value: '_instructor', label: 'Instruktorzy'},
  {value: '_era', label: 'Pancerz reaktywny (ERA)'},
  {value: 'Slat', label: 'Pancerz prętowy (SLAT)'},
  {value: 'MRAP', label: 'MRAP'},
  {value: '_smoke_launcher', label: 'Wyrzutnie granatów dymnych'},
  {value: '_eo_dazzler', label: 'Oślepiacz optoelektroniczny'},
  {value: 'Thermals1', label: 'Termowizja I gen.'},
  {value: 'Thermals2', label: 'Termowizja II gen.'},
  {value: '_gsr', label: 'Radar pola walki (GSR)'},
  {value: 'Radar', label: 'Radar'},
  {value: '_singint', label: 'Rozpoznanie radioelektroniczne (SIGINT)'},
  {value: '_jammer', label: 'Zagłuszacz'},
  {value: '_electronic_warfare', label: 'Walka elektroniczna'},
  {value: '_fireDirection', label: 'Kierowanie ogniem'},
  {value: 'uav', label: 'Dron rozpoznawczy'},
  {value: 'uav2', label: 'Dron rozpoznawczy (zaawansowany)'},
  {value: '_falseflag', label: 'Fałszywa flaga'},
  {value: '_airlift', label: 'Transport lotniczy (przewozi)'},
  {value: '_canBeAirlifted', label: 'Może być przewożony śmigłowcem'},
];

export function unitTraitLabel(key: string): string {
  if (/^_canBeAirlifted\d$/.test(key)) {
    return `Może być przewożony śmigłowcem (${key.slice(-1)})`;
  }
  return UNIT_TRAITS.find((t) => t.value === key)?.label ?? key;
}

/** Weapon attributes (game weapon traits) with Polish names */
export const WEAPON_ATTRIBUTES: Option[] = [
  {value: 'STAT', label: 'Strzela tylko z miejsca'},
  {value: 'MOTION', label: 'Strzela w ruchu'},
  {value: 'HE', label: 'Odłamkowo-burzący (HE)'},
  {value: 'HEAT', label: 'Kumulacyjny (HEAT)'},
  {value: 'KINETIC', label: 'Kinetyczny (KE)'},
  {value: 'TANDEM', label: 'Głowica tandemowa'},
  {value: 'F&F', label: 'Odpal i zapomnij'},
  {value: 'F&F_boresight', label: 'Odpal i zapomnij (bez namierzania)'},
  {value: 'OTA', label: 'Atak z góry (OTA)'},
  {value: 'CLGP', label: 'Pocisk kierowany laserowo'},
  {value: 'RADAR', label: 'Naprowadzanie radarowe'},
  {value: 'sead', label: 'Przeciwradarowy (SEAD)'},
  {value: 'IND', label: 'Ogień pośredni'},
  {value: 'CAC', label: 'Walka w zwarciu (CQC)'},
  {value: 'autoloader', label: 'Automat ładowania'},
  {value: 'manual', label: 'Ładowanie ręczne'},
  {value: 'semiAuto', label: 'Półautomatyczna'},
  {value: 'coax', label: 'Sprzężony z działem'},
  {value: 'tripod', label: 'Na podstawie / trójnogu'},
  {value: 'silenced', label: 'Wytłumiona'},
  {value: 'smoke', label: 'Dymny'},
  {value: 'cluster', label: 'Kasetowy'},
  {value: 'thermobaric', label: 'Termobaryczny'},
  {value: 'napalm', label: 'Zapalający (napalm)'},
  {value: 'demolition', label: 'Burzący (saperski)'},
  {value: 'activeprotection', label: 'Aktywna ochrona'},
];

export function weaponAttributeLabel(key: string): string {
  return WEAPON_ATTRIBUTES.find((a) => a.value === key)?.label ?? key;
}

export const MAX_WEAPON_ATTRIBUTES = 3;

/** Weapon kinds of the "new column" tool */
export const WEAPON_CATEGORIES: {value: WeaponCategory; label: string; typeLabel: string}[] = [
  {value: 'cannon', label: 'Armata', typeLabel: 'DZIAŁO CZOŁGU'},
  {value: 'howitzer', label: 'Haubica', typeLabel: 'HAUBICA'},
  {value: 'infantry', label: 'Broń piechoty', typeLabel: 'KARABIN SZTURMOWY'},
  {value: 'rockets', label: 'Wyrzutnia rakiet (w tym MANPAD)', typeLabel: 'WYRZUTNIA RAKIET'},
  {value: 'atgm', label: 'ATGM', typeLabel: 'PRZECIWPANCERNY POCISK KIEROWANY'},
  {value: 'vehicle_mg', label: 'KM pojazdy', typeLabel: 'KARABIN MASZYNOWY'},
  {value: 'autocannon', label: 'Działko automatyczne', typeLabel: 'DZIAŁKO AUTOMATYCZNE'},
  {value: 'mortar', label: 'Moździerz', typeLabel: 'MOŹDZIERZ'},
  {value: 'air', label: 'Uzbrojenie lotnicze', typeLabel: 'UZBROJENIE LOTNICZE'},
  {value: 'other', label: 'Inne', typeLabel: 'UZBROJENIE'},
];

/** Ready-made column headers (also offered while typing) */
export const WEAPON_TYPE_LABELS = [
  'DZIAŁO CZOŁGU',
  'DZIAŁO',
  'DZIAŁKO AUTOMATYCZNE',
  'DZIAŁKO PRZECIWLOTNICZE',
  'HAUBICA',
  'MOŹDZIERZ',
  'WYRZUTNIA RAKIET',
  'PRZECIWLOTNICZY ZESTAW RAKIETOWY',
  'PRZENOŚNY ZESTAW PRZECIWLOTNICZY',
  'PRZECIWPANCERNY POCISK KIEROWANY',
  'GRANATNIK PRZECIWPANCERNY',
  'GRANATNIK AUTOMATYCZNY',
  'CIĘŻKI KARABIN MASZYNOWY',
  'ŚREDNI KARABIN MASZYNOWY',
  'LEKKI KARABIN MASZYNOWY',
  'KARABIN SZTURMOWY',
  'PISTOLET MASZYNOWY',
  'KARABIN SNAJPERSKI',
  'MIOTACZ OGNIA',
  'BOMBY',
  'POCISK POWIETRZE-ZIEMIA',
  'POCISK POWIETRZE-POWIETRZE',
  'POCISK PRZECIWRADAROWY',
  'DZIAŁKO LOTNICZE',
  'NIEKIEROWANE POCISKI RAKIETOWE',
];

/* ------------------------------------------------------------------ */
/* Bottom panel                                                        */
/* ------------------------------------------------------------------ */

export type PanelFieldKind =
  | {type: 'number'; unit?: string; step?: number}
  | {type: 'range'}
  | {type: 'level'; options: NumericOption[]}
  | {type: 'select'; options: Option[]};

export interface PanelField {
  key: string;
  label: string;
  kind: PanelFieldKind;
}

const F: Record<string, PanelField> = {
  hp: {key: 'hp', label: 'PŻ', kind: {type: 'number', step: 1}},
  strength: {key: 'hp', label: 'LICZEBNOŚĆ', kind: {type: 'number', step: 1}},
  optics: {key: 'optics', label: 'OPTYKA', kind: {type: 'level', options: OPTICS}},
  airOptics: {key: 'airOptics', label: 'OPTYKA PLOT.', kind: {type: 'level', options: AIR_OPTICS}},
  stealth: {key: 'stealth', label: 'KAMUFLAŻ', kind: {type: 'level', options: STEALTH}},
  amphibious: {key: 'amphibious', label: 'AMFIBIA', kind: {type: 'select', options: AMPHIBIOUS}},
  speed: {key: 'speed', label: 'PRĘDKOŚĆ', kind: {type: 'number', unit: 'km/h', step: 1}},
  roadSpeed: {key: 'roadSpeed', label: 'PRĘDKOŚĆ NA DRODZE', kind: {type: 'number', unit: 'km/h', step: 1}},
  autonomy: {key: 'autonomy', label: 'ZASIĘG POJ.', kind: {type: 'range'}},
  fuel: {key: 'fuel', label: 'PALIWO', kind: {type: 'number', unit: 'L', step: 10}},
  advancedDeployment: {key: 'advancedDeployment', label: 'WCZESNE REAGOWANIE', kind: {type: 'number', unit: 'm', step: 1}},
  ecm: {key: 'ecm', label: 'ECM', kind: {type: 'level', options: ECM}},
  altitude: {key: 'altitude', label: 'WYSOKOŚĆ LOTU', kind: {type: 'number', unit: 'm', step: 10}},
  agility: {key: 'agility', label: 'ZWROTNOŚĆ', kind: {type: 'select', options: AGILITY}},
  travelTime: {key: 'travelTime', label: 'CZAS DOLOTU', kind: {type: 'number', unit: 's', step: 1}},
  flightTime: {key: 'flightTime', label: 'CZAS LOTU', kind: {type: 'number', unit: 's', step: 1}},
  smoke: {key: 'smoke', label: 'ZASŁONA DYMNA', kind: {type: 'select', options: YES_NO}},
  transport: {key: 'transport', label: 'TRANSPORT', kind: {type: 'number', unit: 'os.', step: 1}},
};

/** Bottom panel layout of each card type (3 fields per row like the game) */
export const PANEL_LAYOUTS: Record<PanelType, PanelField[]> = {
  vehicle: [
    F.hp, F.optics, F.stealth,
    F.amphibious, F.speed, F.roadSpeed,
    F.autonomy, F.fuel, F.advancedDeployment,
  ],
  infantry: [
    F.strength, F.optics, F.stealth,
    F.amphibious, F.speed, F.advancedDeployment,
  ],
  helicopter: [
    F.hp, F.optics, F.stealth,
    F.airOptics, F.ecm, F.speed,
    F.autonomy, F.fuel, F.advancedDeployment,
  ],
  plane: [
    F.hp, F.airOptics, F.stealth,
    F.ecm, F.speed, F.altitude,
    F.agility, F.travelTime, F.flightTime,
  ],
};

export const PANEL_TYPES: Option[] = [
  {value: 'vehicle', label: 'Pojazd'},
  {value: 'infantry', label: 'Piechota'},
  {value: 'helicopter', label: 'Śmigłowiec'},
  {value: 'plane', label: 'Samolot'},
];

/* ------------------------------------------------------------------ */
/* Slider scales and value colours                                    */
/* ------------------------------------------------------------------ */

export interface StatScale {
  min: number;
  max: number;
  step: number;
  /** red below [0], yellow below [1], green below [2], cyan above */
  thresholds?: [number, number, number];
  /** lower values are better (times) */
  inverted?: boolean;
  unit?: string;
}

export const SCALES: Record<string, StatScale> = {
  armor: {min: 0, max: 25, step: 1, thresholds: [5, 10, 14]},
  penetration: {min: 0, max: 40, step: 1, thresholds: [6, 12, 22]},
  he: {min: 0, max: 10, step: 0.05, thresholds: [0.2, 0.6, 2]},
  suppress: {min: 0, max: 1000, step: 1, thresholds: [20, 60, 250]},
  range: {min: 0, max: 10000, step: 25, thresholds: [900, 1500, 2100], unit: 'm'},
  accuracy: {min: 0, max: 100, step: 1, thresholds: [25, 40, 55], unit: '%'},
  rateOfFire: {min: 0, max: 3000, step: 1, thresholds: [6, 20, 300]},
  aimingTime: {min: 0, max: 15, step: 0.1, thresholds: [2.5, 1.8, 1], inverted: true, unit: 's'},
  reloadTime: {min: 0, max: 120, step: 0.1, thresholds: [8, 5, 3], inverted: true, unit: 's'},
  salvo: {min: 0, max: 100, step: 1, thresholds: [2, 5, 15]},
  supplyCost: {min: 0, max: 10000, step: 1, thresholds: [100000, 100000, 100000]},
};

export type ValueTone = 'red' | 'yellow' | 'green' | 'cyan' | 'plain';

export function valueTone(value: number, scale: StatScale): ValueTone {
  const t = scale.thresholds;
  if (!t) {
    return 'plain';
  }
  if (scale.inverted) {
    if (value > t[0]) return 'red';
    if (value > t[1]) return 'yellow';
    if (value > t[2]) return 'green';
    return 'cyan';
  }
  if (value < t[0]) return 'red';
  if (value < t[1]) return 'yellow';
  if (value < t[2]) return 'green';
  return 'cyan';
}

/* ------------------------------------------------------------------ */
/* From game data                                                      */
/* ------------------------------------------------------------------ */

const ROLE_BY_CATEGORY: Record<string, {icon: string; label: string}> = {
  tnk: {icon: 'tank', label: 'CZOŁG'},
  inf: {icon: 'infantry', label: 'PIECHOTA'},
  rec: {icon: 'recon', label: 'ROZPOZNANIE'},
  aa: {icon: 'aa', label: 'OBRONA PRZECIWLOTNICZA'},
  art: {icon: 'artillery', label: 'ARTYLERIA'},
  hel: {icon: 'helicopter', label: 'ŚMIGŁOWIEC'},
  air: {icon: 'jet', label: 'SAMOLOT'},
  log: {icon: 'supply', label: 'LOGISTYKA'},
};

export function costCategory(cost: number): string {
  if (cost < 80) return 'NISKI';
  if (cost <= 200) return 'ŚREDNI';
  if (cost <= 300) return 'WYSOKI';
  return 'BARDZO WYSOKI';
}

export function panelTypeOf(unit: Unit): PanelType {
  if (unit.movementType === 'plane') return 'plane';
  if (unit.movementType === 'helicopter') return 'helicopter';
  if (unit.infoPanelType === 'infantry') return 'infantry';
  return 'vehicle';
}

function round(value: number, digits = 2): number {
  const f = 10 ** digits;
  return Math.round(value * f) / f;
}

/** "Canon AP 125 mm 2A46 T72M" -> "125mm"; "HMG 12 7 mm NSVT" -> "12,7mm" */
export function caliberOf(name: string): string {
  // "7 62mm" / "12 7 mm" are 7,62 and 12,7 mm; "2A18 122mm" is 122 mm
  const decimal = name.match(/\b(\d{1,2})[ ,._](\d{1,2})\s?mm/i);
  if (decimal) {
    return `${decimal[1]},${decimal[2]}mm`;
  }
  const whole = name.match(/\b(\d+)\s?mm/i);
  return whole ? `${whole[1]}mm` : '';
}

const NAME_PREFIXES =
  /^(Canon|AutoCanon|Autocanon|Howz Canon|Howz|HMG|MMG|LMG|SMG|FM|ATGM|MANPAD|SAM|AA|AGM|Bomb|RocketArt|Roquette|Gatling|GatlingAir|DCA|Mortier|Grenade|RPG|Sniper|SMOKE|PM|Pistolet|inf|team)\b/i;

/** Short weapon name for the card: no type words, no ammo kind, no calibre */
export function displayWeaponName(name: string): string {
  let n = name.replace(/_/g, ' ');
  for (let i = 0; i < 3; i++) {
    n = n.replace(NAME_PREFIXES, '').trim();
    n = n.replace(/^(AP|HE|HEAT|SMOKE|direct|inf|team|x\d+)\b/i, '').trim();
  }
  n = n
    .replace(/\b\d{1,2}[ ,._]\d{1,2}\s?mm/i, '')
    .replace(/\b\d+\s?mm/i, '')
    .replace(/\s+/g, ' ')
    .trim();
  return n || name;
}

function hasFamily(weapon: Weapon, part: string): boolean {
  return (weapon.damageFamilies ?? []).some((f) => f.includes(part));
}

/** Kind of weapon, for the "new column" lists and the default column header */
export function classifyWeapon(weapon: Weapon, unit?: Unit): WeaponCategory {
  const name = weapon.weaponName;
  const lower = name.toLowerCase();
  const infantry = unit?.infoPanelType === 'infantry';
  if (unit?.movementType === 'plane') return 'air';
  if (/^(bomb|agm|gbu|kab|aa r|aim|r-\d|kh-)/i.test(name) && !infantry) return 'air';
  if (hasFamily(weapon, 'ap_missile')) return infantry ? 'atgm' : 'atgm';
  if (/mortier|mortar/.test(lower)) return 'mortar';
  if (/^manpad|^sam\b/i.test(name) || hasFamily(weapon, 'missile_he') ||
      (weapon.planeRange > 0 && weapon.groundRange === 0)) return 'rockets';
  if (/roquette|rocketart|mlrs|grad|bm-?\d/i.test(name)) return 'rockets';
  if (hasFamily(weapon, 'howz') || /^howz/i.test(name) ||
      weapon.traits.includes('IND')) return 'howitzer';
  if (hasFamily(weapon, 'he_autocanon') || hasFamily(weapon, 'he_dca') ||
      /^autocanon|^dca/i.test(name)) return 'autocannon';
  if (hasFamily(weapon, 'roquette_ap')) return infantry ? 'infantry' : 'rockets';
  if (/^canon/i.test(name)) return 'cannon';
  if (infantry) return 'infantry';
  if (/^(hmg|mmg|lmg|gatling)/i.test(name) || hasFamily(weapon, 'fmballe')) return 'vehicle_mg';
  if (weapon.penetration >= 10) return 'cannon';
  return 'other';
}

/** Column header the game would show for a weapon */
export function typeLabelOf(weapon: Weapon, category: WeaponCategory, unit?: Unit): string {
  const name = weapon.weaponName;
  switch (category) {
    case 'cannon':
      return unit?.category === 'tnk' ? 'DZIAŁO CZOŁGU' : 'DZIAŁO';
    case 'howitzer':
      return 'HAUBICA';
    case 'mortar':
      return 'MOŹDZIERZ';
    case 'autocannon':
      return hasFamily(weapon, 'he_dca') || /^dca/i.test(name)
        ? 'DZIAŁKO PRZECIWLOTNICZE'
        : 'DZIAŁKO AUTOMATYCZNE';
    case 'atgm':
      return 'PRZECIWPANCERNY POCISK KIEROWANY';
    case 'rockets':
      if (/^manpad/i.test(name)) return 'PRZENOŚNY ZESTAW PRZECIWLOTNICZY';
      if (weapon.planeRange > 0 || weapon.helicopterRange > 0) return 'PRZECIWLOTNICZY ZESTAW RAKIETOWY';
      if (unit?.infoPanelType === 'infantry') return 'GRANATNIK PRZECIWPANCERNY';
      return 'WYRZUTNIA RAKIET';
    case 'vehicle_mg':
      if (/^hmg/i.test(name)) return 'CIĘŻKI KARABIN MASZYNOWY';
      if (/^gatling/i.test(name)) return 'KARABIN WIELOLUFOWY';
      return 'ŚREDNI KARABIN MASZYNOWY';
    case 'infantry':
      if (hasFamily(weapon, 'roquette_ap') || weapon.penetration > 0) return 'GRANATNIK PRZECIWPANCERNY';
      if (/^hmg/i.test(name)) return 'CIĘŻKI KARABIN MASZYNOWY';
      if (/^(mmg|lmg)/i.test(name)) return 'KARABIN MASZYNOWY';
      if (/sniper|snip/i.test(name)) return 'KARABIN SNAJPERSKI';
      if (/flam|lpo|rpo/i.test(name)) return 'MIOTACZ OGNIA';
      return 'KARABIN SZTURMOWY';
    case 'air':
      if (/^bomb|gbu|kab/i.test(name)) return 'BOMBY';
      if (weapon.traits.includes('sead')) return 'POCISK PRZECIWRADAROWY';
      if (weapon.planeRange > 0 && weapon.groundRange === 0) return 'POCISK POWIETRZE-POWIETRZE';
      if (/gatling|canon|gsh|gau/i.test(name)) return 'DZIAŁKO LOTNICZE';
      if (/roquette|rocket|s-\d|zuni|hydra|ffar/i.test(name)) return 'NIEKIEROWANE POCISKI RAKIETOWE';
      return 'POCISK POWIETRZE-ZIEMIA';
    default:
      return 'UZBROJENIE';
  }
}

export function weaponImageUrl(imageTexture: string): string {
  return imageTexture ? `/images/weapons/${imageTexture}.png` : '';
}

/** Penetration at maximum range (kinetic shells lose AP with distance) */
function penetrationAtRange(weapon: Weapon): number {
  if (!weapon.penetration) {
    return 0;
  }
  const range = weapon.groundRange || weapon.helicopterRange || weapon.planeRange;
  for (const token of weapon.damageDropOffTokens ?? []) {
    const distance = token.match(/'DistanceGRU':\s*([\d.]+)/);
    const ap = token.match(/'AP':\s*([\d.]+)/);
    if (distance && ap && Number(distance[1]) > 0 && range > 0) {
      const steps = Math.floor((range - 1) / Number(distance[1]));
      return Math.max(0, Math.round(weapon.penetration - steps * Number(ap[1])));
    }
  }
  return weapon.penetration;
}

/** Shots per minute as the card shows them */
function cardRateOfFire(weapon: Weapon): number {
  const rof = weapon.rateOfFire ?? weapon.trueRateOfFire ?? 0;
  const perSalvo = weapon.ammunitionPerSalvo || 1;
  const salvo = weapon.salvoLength || perSalvo;
  return Math.round((rof * perSalvo) / salvo);
}

export function statWeaponFromWeapon(weapon: Weapon, unit?: Unit): StatWeapon {
  const category = classifyWeapon(weapon, unit);
  return {
    uid: newUid(),
    category,
    typeLabel: typeLabelOf(weapon, category, unit),
    attributes: weapon.traits.filter((t) => WEAPON_ATTRIBUTES.some((a) => a.value === t)).slice(0, MAX_WEAPON_ATTRIBUTES),
    image: weaponImageUrl(weapon.imageTexture),
    name: displayWeaponName(weapon.weaponName),
    caliber: caliberOf(weapon.weaponName),
    ammo: (weapon.numberOfSalvos || 1) * (weapon.ammunitionPerSalvo || 1),
    penetration: penetrationAtRange(weapon),
    he: round(weapon.he ?? 0),
    suppress: Math.round(weapon.suppress ?? 0),
    groundRange: weapon.groundRange ?? 0,
    helicopterRange: weapon.helicopterRange ?? 0,
    planeRange: weapon.planeRange ?? 0,
    staticAccuracy: Math.round(weapon.staticAccuracy ?? 0),
    movingAccuracy: Math.round(weapon.movingAccuracy ?? 0),
    rateOfFire: cardRateOfFire(weapon),
    aimingTime: round(weapon.aimingTime ?? 0),
    reloadTime: round(weapon.reloadTime ?? 0),
    salvo: weapon.salvoLength ?? 0,
    supplyCost: Math.round(weapon.supplyCost ?? 0),
  };
}

/** Name of a gun without its ammunition kind, to join AP and HE shells */
function gunKey(weapon: Weapon): string {
  return `${weapon.imageTexture}|${weapon.weaponName
    .replace(/\b(AP|HE|HEAT|APFSDS|SMOKE|direct)\b/gi, '')
    .replace(/\s+/g, ' ')
    .trim()}|${weapon.groundRange}`;
}

/** Weapons a card shows as columns: one column per gun (AP + HE together) */
export function cardWeapons(unit: Unit): StatWeapon[] {
  const columns: {key: string; weapons: Weapon[]}[] = [];
  for (const weapon of unit.weapons) {
    if (!weapon.showInInterface) continue;
    if (/^smoke/i.test(weapon.weaponName) && !weapon.imageTexture) continue;
    const key = gunKey(weapon);
    const column = columns.find((c) => c.key === key && weapon.imageTexture);
    if (column) {
      column.weapons.push(weapon);
    } else {
      columns.push({key, weapons: [weapon]});
    }
  }
  return columns.map(({weapons}) => {
    const first = statWeaponFromWeapon(weapons[0], unit);
    for (const other of weapons.slice(1).map((w) => statWeaponFromWeapon(w, unit))) {
      first.penetration = Math.max(first.penetration, other.penetration);
      first.he = Math.max(first.he, other.he);
      first.suppress = Math.max(first.suppress, other.suppress);
      first.attributes = [...new Set([...first.attributes, ...other.attributes])].slice(0, MAX_WEAPON_ATTRIBUTES);
      first.ammo = Math.max(first.ammo, other.ammo);
      first.supplyCost = Math.max(first.supplyCost, other.supplyCost);
    }
    return first;
  });
}

export function emptyWeapon(): StatWeapon {
  return {
    uid: newUid(),
    category: 'other',
    typeLabel: 'NOWE UZBROJENIE',
    attributes: [],
    image: '',
    name: 'Nowa broń',
    caliber: '',
    ammo: 0,
    penetration: 0,
    he: 0,
    suppress: 0,
    groundRange: 0,
    helicopterRange: 0,
    planeRange: 0,
    staticAccuracy: 0,
    movingAccuracy: 0,
    rateOfFire: 0,
    aimingTime: 0,
    reloadTime: 0,
    salvo: 0,
    supplyCost: 0,
  };
}

function rangeKm(unit: Unit, speed: number | null | undefined): number {
  if (!unit.fuelMove || !speed) {
    return 0;
  }
  // fuelMove: seconds of driving; the game shows the distance in game km
  return Math.round(((unit.fuelMove * speed) / 3600) * 2.83);
}

export function cardFromUnit(unit: Unit): StatCard {
  const role = ROLE_BY_CATEGORY[unit.category] ?? {icon: 'support', label: 'JEDNOSTKA'};
  const panelType = panelTypeOf(unit);
  const roleLabel =
    unit.category === 'tnk' && unit.frontArmor >= 14 ? 'CZOŁG PODSTAWOWY' : role.label;
  const transport = unit.specialities.includes('_transport2')
    ? 12
    : unit.specialities.includes('_transport1')
    ? 6
    : 0;
  return {
    name: unit.name,
    country: unit.unitType?.motherCountry ?? '',
    cost: unit.commandPoints,
    roleLabel,
    roleIcon: unit.isCommand ? 'command' : role.icon,
    costCategory: costCategory(unit.commandPoints),
    frontArmor: unit.frontArmor,
    sideArmor: unit.sideArmor,
    rearArmor: unit.rearArmor,
    topArmor: unit.topArmor,
    traits: [...unit.specialities],
    weapons: cardWeapons(unit),
    panelType,
    source: unit.descriptorName,
    fields: {
      hp: unit.maxDamage,
      optics: unit.optics,
      airOptics: unit.airOptics,
      stealth: unit.stealth,
      amphibious: unit.specialities.includes('_amphibie') ? 'Tak' : 'Nie',
      speed: unit.speed,
      roadSpeed: unit.roadSpeed,
      autonomy: `${rangeKm(unit, unit.speed)}/${rangeKm(unit, unit.roadSpeed)}`,
      fuel: unit.fuel ?? 0,
      advancedDeployment: unit.advancedDeployment ?? 0,
      ecm: Math.round((unit.ecm ?? 0) * 100),
      altitude: unit.flyingAltitude ?? 0,
      agility: 'Średnia',
      travelTime: unit.travelTime ?? 0,
      flightTime: unit.fuelMove ?? 0,
      smoke: unit.hasDefensiveSmoke ? 'Tak' : 'Nie',
      transport,
    },
  };
}

/** Every distinct weapon of the data, by kind, for the "new column" tool */
export interface WeaponPreset {
  key: string;
  label: string;
  image: string;
  category: WeaponCategory;
  weapon: StatWeapon;
}

export function collectWeaponPresets(units: Unit[]): Map<WeaponCategory, WeaponPreset[]> {
  const byKey = new Map<string, WeaponPreset>();
  for (const unit of units) {
    for (const column of cardWeapons(unit)) {
      const key = `${column.category}|${column.name}|${column.caliber}|${column.groundRange}|${column.penetration}|${column.he}`;
      if (!byKey.has(key)) {
        byKey.set(key, {
          key,
          label: [column.name, column.caliber].filter(Boolean).join(' '),
          image: column.image,
          category: column.category,
          weapon: column,
        });
      }
    }
  }
  const result = new Map<WeaponCategory, WeaponPreset[]>();
  for (const preset of byKey.values()) {
    const list = result.get(preset.category) ?? [];
    list.push(preset);
    result.set(preset.category, list);
  }
  for (const list of result.values()) {
    list.sort((a, b) => a.label.localeCompare(b.label, 'pl'));
  }
  return result;
}
