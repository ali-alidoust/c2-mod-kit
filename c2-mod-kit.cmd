@echo off

set PYTHON_PATH="C:\Program Files\Python 3.5\python.exe"
set FRIDA_PATH="C:\Program Files\Python 3.5\Scripts\frida-script.py"
set C2_PATH="C:\root\Personal\Projects\c2-nightingale\comm2.exe"

frida -f %C2_PATH% -l ./dist/c2-mod-kit.js