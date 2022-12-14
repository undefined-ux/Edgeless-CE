$('body').css("font-family", "'Microsoft YaHei', 'Microsoft JhengHei', SimSun");

$i18n = {
  "Beginner":"入門",
  "Professional":"專家",
  "Developer":"開發",
  " Mode":"模式",
  "Getting Started":"準備",
  "Project":"專案",
  "Customize":"定制",
  "Building":"構建",
  "Settings":"設置",
  "Advanced":"高級",
  "About":"關於",
  "Quick build":"快速構建",
  "build(cmd)":"CMD模式",
  "build(log)":"日誌模式",
  "Browse...":"瀏覽...",
  "<strong>INFO</strong>:You can set the default settings in 'config.js', and your selection will auto save in 'AppData\\auto_config.js', make you start quickly for next time. If you want to modify the settings later, use the left-side navigition menu to show this page.":
      "<strong>溫馨提示</strong>:您可以在\"config.js\"檔中配置默認路徑，程式也會自動將選擇的設定保存到\"AppData\\auto_config.js\"中，以便於快速開始。您可以通過左側的導航菜單再次改變這些設定。",
  "<strong>INFO</strong>:Current mode is 'Beginner', you can change the mode in 'Settings' page.":
      "<strong>溫馨提示</strong>:當前處於入門模式，您可以在[設定]頁面更改模式。",
  "Please configure the base infomation:":"請設置基本資訊:",
  "Set the build workspace":"設置工作空間位置",
  "Select build workspace folder:":"選擇工作空間位置:",
  "Please select the mounted Windows ISO drive(eg. H:\\)":"請選擇Windows鏡像所載入的驅動器(例如 H:\\)",
  "Please select the Windows ISO folder/drive, or the 'sources' folder(auto detect)":"請選擇Windows鏡像路徑，或者sources目錄(智能識別)",
  "Select the image path or the 'sources' folder":"請選擇Windows鏡像路徑，或者sources目錄",
  "Auto extract the winre.wim":"自動提取winre.wim",
  "<strong>INFO</strong>:The install.wim does not exist.":"<strong>提示</strong>:install.wim檔不存在。",
  "Select the install.wim file if it needed":"如有必要，請選擇install.wim原始檔案",
  "<strong>ERROR</strong>:The base wim does not exist.":"<strong>錯誤</strong>:所需修改wim檔不存在。",
  "Select the extracted install.wim folder if it needed":"如有必要，請選擇install.wim的展開目錄",
  "Select the extracted install.wim folder:":"選擇install.wim的展開目錄:",
  "Select the base image(boot.wim/winre.wim or other customed.wim)":"請選擇基礎映像(boot.wim/winre.wim或者其他自定義wim檔)",
  "Use test\\boot.wim":"使用test\\boot.wim",
  "<strong>Notice</strong>:Please select the correct wim file, and the image index, otherwise cause build failed.":
      "<strong>請注意</strong>:對於不同的專案需要選擇適當的wim檔及索引號，否則可能導致構建失敗。",
  "<strong>Notice</strong>:Some updated versions may not boot properly. Please refer to the description of project for the supported version.":
      "<strong>請注意</strong>:部分更新版本可能無法正常啟動，請參考專案的說明資訊確認支持構建的版本。",

  "Skip when project is selected":"當有專案自動選擇時，跳過此頁面",

  "Current project:":"當前專案:",
  "Patch Preset:":"預設:",
  "current":"當前",
  "custom":"自定義",
  "default":"默認",
  "demand":"手動",
  "full":"全功能",
  "Save As...":"另存為...",
  "SaveAs Preset":"預設 另存為",
  "New Name:":"新預設名:",
  "Saved Presets:":"已有預設:",
  "Save":"保存",
  "This preset couldn't work in Beginner Mode.":"此預設無法在入門模式下使用。",
  "OpenFolder":"打開檔夾",
  "Edit main.bat":"編輯 main.bat",
  "Edit last.bat":"編輯 last.bat",
  "Will open file with notepad.exe, You can edit [%s] file to change the editor.":"默認將使用notepad.exe打開腳本檔，你可以通過修改[%s]檔更改編輯器。",

  "The _ISO_ folder is not available, you can\'t create bootable ISO image.\r\nPlease make your ISO template manually, or select the Windows ISO folder/drive for auto creating.":
      "當前_ISO_範本目錄不可用，您無法創建可啟動的ISO鏡像。\r\n請手動創建您的ISO範本，或者選擇Windows鏡像路徑，將自動為您創建。",
  "Subst mounted folder to Drive":"將wim掛載目錄映射到",
  " Auto":" 自動",
  "<strong>INFO</strong>:If the mounted folder isn't mapping to X:, The patch scripts need use %X%\\ than X:\\ when modifying, deleting the files, and please don't create the shortcuts on building, they may point to the wrong target, do it on booting phase.":
      "<STRONG>請注意</STRONG>:如果掛載目錄不是映射到X:驅動器，在補丁腳本中修改和刪除檔時，請使用%X%\\來代替路徑中的X:\\。同樣也無法在構建過程中提前創建快捷方式，因為他們可能會指向錯誤的路徑，請修改啟動腳本，在啟動階段進行創建。",
  "Mapping drive is used":"映射驅動器被佔用",
  "If the Drive is used by the unfinish build, click Continue to go on, it will be fixed,":"如果此佔用是因為某次未完成的構建導致的，請點擊繼續，程式將自動重置。",
  "otherwise, please select an usable drive.":"否則，請重新指定映射驅動器。",
  "Continue":"繼續",
  "Cancel":"取消",
  "0-cleanup":"0-清理",
  "1-build(cmd)":"1-構建(CMD)",
  "1-build(log)":"1-構建(日誌)",
  "2-make_iso":"2-創建鏡像",
  "Create ISO after building":" 構建後立即創建ISO",
  "Execute command after building:":" 構建後運行命令:",
  "Please input the command.(eg. VBox.cmd testvm)":"請輸入執行命令。(例如:VBox.cmd <虛擬機名>)",
  "Execute":"運行",
  "Open log folder":"打開日誌檔夾",
  "Open last build log":"打開最後一次構建日誌",
  "Please select a project:":"請選擇專案:",
  "Project Information":"專案資訊",

  "Mode :":"模式 :",
  "<strong>Beginner</strong> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;--- Just started using this software. Make the options be kind. Avoid failure due to incorrect option settings.":
      "<strong>入門</strong> --- 剛開始使用本軟體。將隱藏一些複雜選項，使得選項友好，避免因選項設定不正確導致失敗。",
  "<strong>Professional</strong> --- Knows this software well. Shows more options.":
      "<strong>專家</strong> --- 清楚如何使用本軟體及各選項含義。將提供更多選項。",
  "<strong>Developer</strong> &nbsp;&nbsp;&nbsp;&nbsp;--- Knows the codes of this software, Shows the options for developer.":
      "<strong>開發</strong> ---  清楚本軟體的結構及代碼, 將提供面向開發者的選項。",
  "Language :":"語言 :",
  "Theme :":"主題 :",
  "Update :":"更新 :",
  "Auto":"自動",
  "None":"無",
  "High":"高",
  "Custom":"自定義",
  "Restart to apply changes to your settings?":"立即重新啟動以應用最新設置？",
  "Yes":"是",
  "No":"否",

　　"Commands":"命令",
　　"Reserved":"保留",
　　"Clear":"清空",
　　"Load":"載入",

  "Update":"更新",
  "Restart":"重新啟動",
  "Will update from %s, you can change the update source in [Settings] page.":"即將從 %s 源進行更新。你可以在設置頁面修改更新選項。",

  "Please startup with WimBuilder.cmd.":"請通過WimBuilder.cmd啟動。",
  "No project to build.":"未選擇構建專案。",
  "A project has been found running.":"已經有專案正在運行。",
  "Do you want to build the [%s] project?":"是否要對[%s]專案進行構建？",
  "Please select a project for building.":"請選擇構建專案。",
  "The system cannot find the file specified.":"系統找不到指定的檔。",
  "#LASTDUMMY#":""
}