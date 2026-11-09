@echo off
title Ikony broni i traitow dla StatsToolKit
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Nie znaleziono Node.js. Zainstaluj go z https://nodejs.org/ i uruchom ponownie.
  pause
  exit /b 1
)

rem Folder gry: obok skryptu (gdy lezy w folderze WARNO) albo domyslna sciezka Steam
set "GRA=E:\Steam\steamapps\common\WARNO\Data\PC"
if exist "%~dp0Data\PC" set "GRA=%~dp0Data\PC"

echo Szukam ikon w: %GRA%
echo To moze potrwac minute...
node "%~dp0wyciagnij_ikony_statystyk.js" "%GRA%" "%~dp0wynik"
echo.
echo Gotowe. Wynik jest w folderze: %~dp0wynik
pause
