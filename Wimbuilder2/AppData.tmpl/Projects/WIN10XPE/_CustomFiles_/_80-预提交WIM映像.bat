echo ���ڴ˽ű��б�д���룬�ڱ���boot.wim�䶯ǰ����boot.wim���������޸ġ�

rem �滻ע��� HIVE �ļ�

call :FULLREG DEFAULT
call :FULLREG SOFTWARE
call :FULLREG SYSTEM
call :FULLREG COMPONENTS
call :FULLREG DRIVERS

goto :EOF

:FULLREG
if exist "%~dp0%1" (
   xcopy /E /Y "%~dp0%1" "%X%\Windows\System32\Config\"
)
goto :EOF
