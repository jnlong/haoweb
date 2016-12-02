
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate')) || module.exports;;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: LT (Lithuanian; lietuvių kalba)
 */
    $.extend($.validator.messages, {
        required: '\u0160is laukas yra privalomas.',
        remote: 'Pra\u0161au pataisyti \u0161\u012F lauk\u0105.',
        email: 'Pra\u0161au \u012Fvesti teising\u0105 elektroninio pa\u0161to adres\u0105.',
        url: 'Pra\u0161au \u012Fvesti teising\u0105 URL.',
        date: 'Pra\u0161au \u012Fvesti teising\u0105 dat\u0105.',
        dateISO: 'Pra\u0161au \u012Fvesti teising\u0105 dat\u0105 (ISO).',
        number: 'Pra\u0161au \u012Fvesti teising\u0105 skai\u010Di\u0173.',
        digits: 'Pra\u0161au naudoti tik skaitmenis.',
        creditcard: 'Pra\u0161au \u012Fvesti teising\u0105 kreditin\u0117s kortel\u0117s numer\u012F.',
        equalTo: 'Pra\u0161au \u012Fvest\u012F t\u0105 pa\u010Di\u0105 reik\u0161m\u0119 dar kart\u0105.',
        extension: 'Pra\u0161au \u012Fvesti reik\u0161m\u0119 su teisingu pl\u0117tiniu.',
        maxlength: $.validator.format('Pra\u0161au \u012Fvesti ne daugiau kaip {0} simboli\u0173.'),
        minlength: $.validator.format('Pra\u0161au \u012Fvesti bent {0} simbolius.'),
        rangelength: $.validator.format('Pra\u0161au \u012Fvesti reik\u0161mes, kuri\u0173 ilgis nuo {0} iki {1} simboli\u0173.'),
        range: $.validator.format('Pra\u0161au \u012Fvesti reik\u0161m\u0119 intervale nuo {0} iki {1}.'),
        max: $.validator.format('Pra\u0161au \u012Fvesti reik\u0161m\u0119 ma\u017Eesn\u0119 arba lygi\u0105 {0}.'),
        min: $.validator.format('Pra\u0161au \u012Fvesti reik\u0161m\u0119 didesn\u0119 arba lygi\u0105 {0}.')
    });
}));