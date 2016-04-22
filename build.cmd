@echo off
del .\dist\*.* -F
node build.js
copy .\c2.unified.js .\dist\c2.unified.js
pyinstaller c2-mod-kit.py -i icon.ico -F
