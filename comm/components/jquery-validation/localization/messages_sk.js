
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate')) || module.exports;;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: SK (Slovak; slovenčina, slovenský jazyk)
 */
    $.extend($.validator.messages, {
        required: 'Povinn\xE9 zada\u0165.',
        maxlength: $.validator.format('Maxim\xE1lne {0} znakov.'),
        minlength: $.validator.format('Minim\xE1lne {0} znakov.'),
        rangelength: $.validator.format('Minim\xE1lne {0} a Maxim\xE1lne {1} znakov.'),
        email: 'E-mailov\xE1 adresa mus\xED by\u0165 platn\xE1.',
        url: 'URL mus\xED by\u0165 platn\xFD.',
        date: 'Mus\xED by\u0165 d\xE1tum.',
        number: 'Mus\xED by\u0165 \u010D\xEDslo.',
        digits: 'M\xF4\u017Ee obsahova\u0165 iba \u010D\xEDslice.',
        equalTo: 'Dva hodnoty sa musia rovna\u0165.',
        range: $.validator.format('Mus\xED by\u0165 medzi {0} a {1}.'),
        max: $.validator.format('Nem\xF4\u017Ee by\u0165 viac ako{0}.'),
        min: $.validator.format('Nem\xF4\u017Ee by\u0165 menej ako{0}.'),
        creditcard: '\u010C\xEDslo platobnej karty mus\xED by\u0165 platn\xE9.'
    });
}));