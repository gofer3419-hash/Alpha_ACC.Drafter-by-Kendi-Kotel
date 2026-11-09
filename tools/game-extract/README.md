# game-extract

Skrypty uruchamiane w folderze gry WARNO (Node.js 22.15+). Tylko czytają pliki
gry, niczego nie zmieniają.

- `wyciagnij_ikony.bat` / `.js`: czyta spis treści archiwów `.dat` (EDAT v2,
  razem z łatkami) i zapisuje do `ikony2d` angielskie słowniki nazw (`*-US.dic`),
  emblematy dywizji i opisy atlasów ikon (`PC/Atlas/UnitIcons-*/TextureSmall.atlas`).
- `wytnij_ikony.bat` / `.js` + `ikony_mapa.json`: wycina z atlasów ikony
  jednostek wskazane w mapie i zapisuje je jako PNG w `ikony_jednostek`.
  Mapę robi się z opisów atlasów (`TextureSmall.atlas` to plik ndfbin:
  obiekty `TTextureSmallContainer` i `TTextureSmall` z pozycją i rozmiarem).

- `wyciagnij_ikony_statystyk.bat` / `.js`: dla StatsToolKit wyciąga atlasy ikon
  broni (`PC/Atlas/UnitIcons-Armes`) i traitów (`PC/Atlas/Traits`): obrazy `.tgv`
  i opisy `TextureSmall.atlas`, w najnowszej wersji z łatek, do folderu `wynik`.
  Domyślnie czyta `E:\Steam\steamapps\common\WARNO\Data\PC`; położony w folderze
  gry czyta jej `Data\PC`.

Archiwa najnowszej łatki są w formacie EDAT v3, którego skrypty jeszcze nie czytają.
