call V2X Notepad2 -extract "Notepad2.7z" "%X_PF%\Notepad2\"
copy /y Notepad2.reg "%X_Startup%\BeforeShell\"
call LinkToDesktop Notepad2.lnk "#pProgramFiles#p\Notepad2\Notepad2.exe"