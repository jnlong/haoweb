
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate')) || module.exports;;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Language: SL (Slovenian; slovenski jezik)
 */
    $.extend($.validator.messages, {
        required: 'To polje je obvezno.',
        remote: 'Prosimo popravite to polje.',
        email: 'Prosimo vnesite veljaven email naslov.',
        url: 'Prosimo vnesite veljaven URL naslov.',
        date: 'Prosimo vnesite veljaven datum.',
        dateISO: 'Prosimo vnesite veljaven ISO datum.',
        number: 'Prosimo vnesite veljavno \u0161tevilo.',
        digits: 'Prosimo vnesite samo \u0161tevila.',
        creditcard: 'Prosimo vnesite veljavno \u0161tevilko kreditne kartice.',
        equalTo: 'Prosimo ponovno vnesite vrednost.',
        extension: 'Prosimo vnesite vrednost z veljavno kon\u010Dnico.',
        maxlength: $.validator.format('Prosimo vnesite najve\u010D {0} znakov.'),
        minlength: $.validator.format('Prosimo vnesite najmanj {0} znakov.'),
        rangelength: $.validator.format('Prosimo vnesite najmanj {0} in najve\u010D {1} znakov.'),
        range: $.validator.format('Prosimo vnesite vrednost med {0} in {1}.'),
        max: $.validator.format('Prosimo vnesite vrednost manj\u0161e ali enako {0}.'),
        min: $.validator.format('Prosimo vnesite vrednost ve\u010Dje ali enako {0}.')
    });
}));