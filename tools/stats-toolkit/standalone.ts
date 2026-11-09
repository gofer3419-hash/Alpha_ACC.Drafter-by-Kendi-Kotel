/**
 * Entry of the standalone StatsToolKit (see build.mjs): the /stats page of
 * the drafter alone, working from a folder (index.html opened from disk).
 *
 * data.js puts the WiF Extended data in window.STATS_DATA and weapons.js the
 * weapon images as data URLs in window.STATS_WEAPON_IMAGES (images inside the
 * page, so the card picture works without a server).
 */
// setup.ts first: it must run before the page element starts loading data
import './setup';
import '../../src/iconset.js';
import '../../src/routes/stats-toolkit';
