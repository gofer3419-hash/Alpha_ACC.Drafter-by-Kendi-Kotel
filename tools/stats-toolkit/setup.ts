/**
 * Set up before the page code runs: the page element is already in
 * index.html, so it starts loading data as soon as its module is imported.
 */
import {assets} from '../../src/components/stats-toolkit/stats-model';

declare global {
  interface Window {
    STATS_DATA?: unknown;
    STATS_WEAPON_IMAGES?: Record<string, string>;
  }
}

assets.weapon = (texture) => window.STATS_WEAPON_IMAGES?.[texture] ?? '';
assets.unit = (descriptor) => `images/units/${descriptor}.webp`;

// The page asks for /data/wif-extended.json: answer from data.js instead.
const fetchFromNetwork = window.fetch.bind(window);
window.fetch = (input: RequestInfo | URL, init?: RequestInit) => {
  const url = typeof input === 'string' ? input : input instanceof URL ? input.href : input.url;
  if (url.endsWith('/data/wif-extended.json') && window.STATS_DATA) {
    return Promise.resolve(
      new Response(JSON.stringify(window.STATS_DATA), {
        headers: {'Content-Type': 'application/json'},
      })
    );
  }
  return fetchFromNetwork(input, init);
};
