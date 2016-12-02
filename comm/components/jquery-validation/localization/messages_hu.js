
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate')) || module.exports;;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: HU (Hungarian; Magyar)
 */
    $.extend($.validator.messages, {
        required: 'K\xF6telez\u0151 megadni.',
        maxlength: $.validator.format('Legfeljebb {0} karakter hossz\xFA legyen.'),
        minlength: $.validator.format('Legal\xE1bb {0} karakter hossz\xFA legyen.'),
        rangelength: $.validator.format('Legal\xE1bb {0} \xE9s legfeljebb {1} karakter hossz\xFA legyen.'),
        email: '\xC9rv\xE9nyes e-mail c\xEDmnek kell lennie.',
        url: '\xC9rv\xE9nyes URL-nek kell lennie.',
        date: 'D\xE1tumnak kell lennie.',
        number: 'Sz\xE1mnak kell lennie.',
        digits: 'Csak sz\xE1mjegyek lehetnek.',
        equalTo: 'Meg kell egyeznie a k\xE9t \xE9rt\xE9knek.',
        range: $.validator.format('{0} \xE9s {1} k\xF6z\xE9 kell esnie.'),
        max: $.validator.format('Nem lehet nagyobb, mint {0}.'),
        min: $.validator.format('Nem lehet kisebb, mint {0}.'),
        creditcard: '\xC9rv\xE9nyes hitelk\xE1rtyasz\xE1mnak kell lennie.',
        remote: 'K\xE9rem jav\xEDtsa ki ezt a mez\u0151t.',
        dateISO: 'K\xE9rem \xEDrjon be egy \xE9rv\xE9nyes d\xE1tumot (ISO).'
    });
}));