@echo off
del /F .\dist\*.* 
tsc
pyinstaller c2-mod-kit.py -i icon.ico -F
