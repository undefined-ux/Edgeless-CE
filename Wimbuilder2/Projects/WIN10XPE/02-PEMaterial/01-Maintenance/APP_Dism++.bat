call V2X "%APP_CACHE%" -extract "Dism*.zip" "%X_PF%\Dism++\"

if "%WB_PE_LANG%"=="zh-CN" goto :LINK_zh-CN

:LINK_en-US
call LinkToDesktop Dism++.lnk "#pProgramFiles#p\Dism++\Dism++%_Vx8664%.exe"
call LinkToStartMenu "ImageTools\Dism++.lnk" "#pProgramFiles#p\Dism++\Dism++%_Vx8664%.exe"
goto :EOF


:LINK_zh-CN
call LinkToDesktop Dism++���񹤾�.lnk "#pProgramFiles#p\Dism++\Dism++%_Vx8664%.exe"
call LinkToStartMenu "��������\Dism++.lnk" "#pProgramFiles#p\Dism++\Dism++%_Vx8664%.exe"
goto :EOF
