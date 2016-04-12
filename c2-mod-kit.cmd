set PYTHON_PATH="C:\Program Files\Python 3.5\python.exe"
set FRIDA_PATH="C:\Program Files\Python 3.5\Scripts\frida-script.py"
set C2_PATH=".\c2\bin\comm2.exe"

%PYTHON_PATH% %FRIDA_PATH% -f %C2_PATH% -l ./c2/c2.js