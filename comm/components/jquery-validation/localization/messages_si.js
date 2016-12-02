
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate')) || module.exports;;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: SI (Slovenian)
 */
    $.extend($.validator.messages, {
        required: 'To polje je obvezno.',
        remote: 'Vpis v tem polju ni v pravi obliki.',
        email: 'Prosimo, vnesite pravi email naslov.',
        url: 'Prosimo, vnesite pravi URL.',
        date: 'Prosimo, vnesite pravi datum.',
        dateISO: 'Prosimo, vnesite pravi datum (ISO).',
        number: 'Prosimo, vnesite pravo \u0161tevilko.',
        digits: 'Prosimo, vnesite samo \u0161tevilke.',
        creditcard: 'Prosimo, vnesite pravo \u0161tevilko kreditne kartice.',
        equalTo: 'Prosimo, ponovno vnesite enako vsebino.',
        extension: 'Prosimo, vnesite vsebino z pravo kon\u010Dnico.',
        maxlength: $.validator.format('Prosimo, da ne vna\u0161ate ve\u010D kot {0} znakov.'),
        minlength: $.validator.format('Prosimo, vnesite vsaj {0} znakov.'),
        rangelength: $.validator.format('Prosimo, vnesite od {0} do {1} znakov.'),
        range: $.validator.format('Prosimo, vnesite vrednost med {0} in {1}.'),
        max: $.validator.format('Prosimo, vnesite vrednost manj\u0161o ali enako {0}.'),
        min: $.validator.format('Prosimo, vnesite vrednost ve\u010Djo ali enako {0}.')
    });
}));