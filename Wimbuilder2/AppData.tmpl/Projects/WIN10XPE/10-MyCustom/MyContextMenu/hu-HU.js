patch_name = "Helyi menü";

if ($app_host_lang == $lang) {
    $patches_var['i18n.restart_explorer_item'] = "Asztali folyamat újraindítása";
}

patch_i18n = {
    "Add Restart Explorer desktop menu:":"Az asztal újraindítása menü hozzáadása:",
    "Restart Explorer":$patches_var['i18n.restart_explorer_item'],
    "Always show the Open Command Prompt Here extended menu item":"Mindig mutassa A parancssor megnyitása itt kiterjesztett menüpontot"
}
