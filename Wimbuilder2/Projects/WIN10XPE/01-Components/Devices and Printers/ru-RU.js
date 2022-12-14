patch_name = "Устройства и принтеры";

patch_i18n = {
    "(Device Setup Manager) Service":" - Служба (Диспетчер настройки устройств)",
    "Enable the native 'Safely Remove Hardware(Eject USB Device)' feature":"Включает встроенную функцию 'Безопасное извлечение оборудования (Извлечение USB-устройства)'",
    "<b>MTP</b>(Share files with smart phone via USB)":"<b>MTP</b> (Обмен файлами со смартфоном через USB)",
    "<b>RNDIS</b>(Access internet with smart phone via USB)":"<b>RNDIS</b> (Доступ в Интернет с помощью смартфона через USB)",
    "Printers":"Принтеры",
    "Bluetooth":"Блютуз",
    "Camera":"Камера"
}

if ($app_host_lang == $lang) {
    $patches_opt['_message.wait_for_printers'] = '          Принтеры будут работать через 2 минуты                  ';
}
