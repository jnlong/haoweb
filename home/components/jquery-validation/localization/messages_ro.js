
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate')) || module.exports;;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: RO (Romanian, limba română)
 */
    $.extend($.validator.messages, {
        required: 'Acest c\xE2mp este obligatoriu.',
        remote: 'Te rug\u0103m s\u0103 completezi acest c\xE2mp.',
        email: 'Te rug\u0103m s\u0103 introduci o adres\u0103 de email valid\u0103',
        url: 'Te rug\u0103m sa introduci o adres\u0103 URL valid\u0103.',
        date: 'Te rug\u0103m s\u0103 introduci o dat\u0103 corect\u0103.',
        dateISO: 'Te rug\u0103m s\u0103 introduci o dat\u0103 (ISO) corect\u0103.',
        number: 'Te rug\u0103m s\u0103 introduci un num\u0103r \xEEntreg valid.',
        digits: 'Te rug\u0103m s\u0103 introduci doar cifre.',
        creditcard: 'Te rug\u0103m s\u0103 introduci un numar de carte de credit valid.',
        equalTo: 'Te rug\u0103m s\u0103 reintroduci valoarea.',
        extension: 'Te rug\u0103m s\u0103 introduci o valoare cu o extensie valid\u0103.',
        maxlength: $.validator.format('Te rug\u0103m s\u0103 nu introduci mai mult de {0} caractere.'),
        minlength: $.validator.format('Te rug\u0103m s\u0103 introduci cel pu\u021Bin {0} caractere.'),
        rangelength: $.validator.format('Te rug\u0103m s\u0103 introduci o valoare \xEEntre {0} \u0219i {1} caractere.'),
        range: $.validator.format('Te rug\u0103m s\u0103 introduci o valoare \xEEntre {0} \u0219i {1}.'),
        max: $.validator.format('Te rug\u0103m s\u0103 introduci o valoare egal sau mai mic\u0103 dec\xE2t {0}.'),
        min: $.validator.format('Te rug\u0103m s\u0103 introduci o valoare egal sau mai mare dec\xE2t {0}.')
    });
}));