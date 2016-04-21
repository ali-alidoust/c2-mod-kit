@echo off

set PYTHON_PATH="C:\Program Files\Python 3.5\python.exe"
set FRIDA_PATH="C:\Program Files\Python 3.5\Scripts\frida-script.py"
set C2_PATH=""C:\root\Personal\Projects\c2-nightingale\comm2.exe""

node ./build.js

%PYTHON_PATH% %FRIDA_PATH% -f %C2_PATH% -l ./c2.unified.js