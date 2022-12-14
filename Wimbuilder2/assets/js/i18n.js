var $i18n = {};

function i18n_init() {
    if (typeof($lang) == "undefined") return;
    $lang = $ui_settings['lang'];
    if ($lang == '') {
        var env = wsh.Environment("PROCESS");
        $lang = env('WB_UI_LANG');
        if ($lang == '') $lang = navigator.language || navigator.userLanguage;
    }
    var i18n_file = 'i18n/' + $lang + '.js';
    if (fso.FileExists('assets/' + i18n_file)) {
        document.write('<script src="' + i18n_file + '"><\/script>');
    }
}

function i18n_t(key) {
    if (key in $i18n) {
        return $i18n[key];
    }
    return key;
}
