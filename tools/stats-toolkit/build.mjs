/**
 * Builds the standalone StatsToolKit: one folder with index.html that opens
 * straight into the unit search (no drafter menu), also from disk (file://).
 *
 *   npm install --no-save esbuild
 *   node tools/stats-toolkit/build.mjs [output folder]   (default: dist-stats)
 *
 * Uses the same code as the /stats page of the site (src/routes/stats-toolkit.ts),
 * so changes there show up here after a rebuild.
 */
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
import * as esbuild from 'esbuild';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../..');
const out = path.resolve(root, process.argv[2] ?? 'dist-stats');
const modules = path.join(root, 'node_modules');

fs.rmSync(out, {recursive: true, force: true});
fs.mkdirSync(path.join(out, 'images/units'), {recursive: true});

/* Only what the page uses from these packages: lit, html-to-image */
const stubs = {
  name: 'stubs',
  setup(build) {
    // Unit icons are read from the iconset markup; the Vaadin element and the
    // deck code library are not needed by this page.
    build.onResolve({filter: /^(@izohek\/warno-deck-utils|@vaadin\/icon\/vaadin-iconset\.js)$/}, (args) => ({
      path: args.path,
      namespace: 'stub',
    }));
    build.onLoad({filter: /.*/, namespace: 'stub'}, () => ({
      contents: 'export default {};',
      loader: 'js',
    }));
    build.onResolve({filter: /^html-to-image$/}, () => ({
      path: path.join(modules, 'html-to-image/dist/html-to-image.js'),
    }));
  },
};

await esbuild.build({
  entryPoints: [path.join(here, 'standalone.ts')],
  bundle: true,
  minify: true,
  format: 'iife',
  target: 'es2019',
  outfile: path.join(out, 'app.js'),
  nodePaths: [modules],
  plugins: [stubs],
  loader: {'.png': 'dataurl', '.svg': 'dataurl'},
  tsconfigRaw: {compilerOptions: {experimentalDecorators: true, useDefineForClassFields: false}},
  logLevel: 'warning',
});

/* Data */
const data = JSON.parse(fs.readFileSync(path.join(root, 'data/wif-extended.json'), 'utf8'));
fs.writeFileSync(path.join(out, 'data.js'), `window.STATS_DATA=${JSON.stringify(data)};\n`);

/* Weapon images inside the page (so the card picture can include them) */
const weaponImages = {};
for (const unit of data.units) {
  for (const weapon of unit.weapons) {
    const texture = weapon.imageTexture;
    const file = path.join(root, 'images/weapons', `${texture}.png`);
    if (texture && !(texture in weaponImages) && fs.existsSync(file)) {
      weaponImages[texture] = `data:image/png;base64,${fs.readFileSync(file).toString('base64')}`;
    }
  }
}
fs.writeFileSync(path.join(out, 'weapons.js'), `window.STATS_WEAPON_IMAGES=${JSON.stringify(weaponImages)};\n`);

/* Unit pictures for the search list */
let unitImages = 0;
for (const unit of data.units) {
  const file = path.join(root, 'images/units', `${unit.descriptorName}.webp`);
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join(out, 'images/units', `${unit.descriptorName}.webp`));
    unitImages++;
  }
}

/* Vaadin icons used as fallbacks for some unit traits */
const vaadinNames = ['eye', 'shield', 'grid-small', 'airplane', 'users', 'academy-cap', 'arrow-up', 'signal', 'binoculars'];
const iconset = fs.readFileSync(path.join(modules, '@vaadin/icons/vaadin-iconset.js'), 'utf8');
const groups = vaadinNames
  .map((name) => iconset.match(new RegExp(`<g id="vaadin:${name}">[\\s\\S]*?</g>`))?.[0])
  .filter(Boolean)
  .join('\n');
const vaadinIcons = `<vaadin-iconset name="vaadin" size="16" hidden><svg><defs>\n${groups}\n</defs></svg></vaadin-iconset>`;

/* Page and static files */
const page = fs.readFileSync(path.join(here, 'index.html'), 'utf8').replace('<!--VAADIN_ICONS-->', vaadinIcons);
fs.writeFileSync(path.join(out, 'index.html'), page);
fs.copyFileSync(path.join(root, 'images/camo.svg'), path.join(out, 'camo.svg'));
fs.copyFileSync(path.join(root, 'styles/fonts/RobotoMono-VariableFont_wght.ttf'), path.join(out, 'RobotoMono-VariableFont_wght.ttf'));
fs.copyFileSync(path.join(root, 'site-meta/favicon-32x32.png'), path.join(out, 'favicon.png'));

console.log(
  `StatsToolKit: ${out} (${data.units.length} units, ${Object.keys(weaponImages).length} weapon images, ${unitImages} unit pictures)`
);
