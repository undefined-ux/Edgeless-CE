echo \033[97;104mCheck User Custom Files ...|cmdcolor.exe
call :ChkUserFile "%_USER_CUSTOMFILES_%\ProductOptions.txt"
call :ChkUserFile "%_USER_CUSTOMFILES_%\IE_Settings.bat"
echo.
call :ChkUserFile "%_USER_CUSTOMFILES_%\%opt[build.preprocess_wim_script]%"
call :ChkUserFile "%_USER_CUSTOMFILES_%\%opt[build.mount_wim_script]%"
call :ChkUserFile "%_USER_CUSTOMFILES_%\MyCustom\"
call :ChkUserFile "%_USER_CUSTOMFILES_%\%opt[build.precommit_wim_script]%"
call :ChkUserFile "%_USER_CUSTOMFILES_%\%opt[build.commit_wim_script]%"
call :ChkUserFile "%_USER_CUSTOMFILES_%\_CustomISO_.bat"
echo.
echo.
goto :EOF


:ChkUserFile
if exist "%~1" (
    echo [\033[32mFound\033[0m] - %1|cmdcolor.exe
) else (
    echo [     ] - %1
)
goto :EOF