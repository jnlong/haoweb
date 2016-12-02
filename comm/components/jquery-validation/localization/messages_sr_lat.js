
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate')) || module.exports;;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: SR (Serbian - Latin alphabet; srpski jezik - latinica)
 */
    $.extend($.validator.messages, {
        required: 'Polje je obavezno.',
        remote: 'Sredite ovo polje.',
        email: 'Unesite ispravnu i-mejl adresu',
        url: 'Unesite ispravan URL.',
        date: 'Unesite ispravan datum.',
        dateISO: 'Unesite ispravan datum (ISO).',
        number: 'Unesite ispravan broj.',
        digits: 'Unesite samo cife.',
        creditcard: 'Unesite ispravan broj kreditne kartice.',
        equalTo: 'Unesite istu vrednost ponovo.',
        extension: 'Unesite vrednost sa odgovaraju\u0107om ekstenzijom.',
        maxlength: $.validator.format('Unesite manje od {0} karaktera.'),
        minlength: $.validator.format('Unesite barem {0} karaktera.'),
        rangelength: $.validator.format('Unesite vrednost duga\u010Dku izme\u0111u {0} i {1} karaktera.'),
        range: $.validator.format('Unesite vrednost izme\u0111u {0} i {1}.'),
        max: $.validator.format('Unesite vrednost manju ili jednaku {0}.'),
        min: $.validator.format('Unesite vrednost ve\u0107u ili jednaku {0}.')
    });
}));