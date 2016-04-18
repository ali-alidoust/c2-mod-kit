@echo off
set PYTHON_PATH="C:\Program Files\Python 3.5\python.exe"
set FRIDA_PATH="C:\Program Files\Python 3.5\Scripts\frida-script.py"
set C3_PATH=".\c3\bin\Commandos3.exe"

%PYTHON_PATH% %FRIDA_PATH% -f %C3_PATH% -l ./c3/c3.js