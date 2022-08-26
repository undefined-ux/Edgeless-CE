:start
tasklist /FI "IMAGENAME eq mshta.exe" > findant
if %ERRORLEVEL% EQU 1 GOTO :start
:end