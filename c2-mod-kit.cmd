@echo off

set C2_PATH="C:\root\Personal\Projects\c2-nightingale\bin\comm2.exe"

frida -f %C2_PATH% -l ./dist/c2-mod-kit.js