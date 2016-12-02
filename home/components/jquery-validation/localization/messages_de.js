
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate')) || module.exports;;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: DE (German, Deutsch)
 */
    $.extend($.validator.messages, {
        required: 'Dieses Feld ist ein Pflichtfeld.',
        maxlength: $.validator.format('Geben Sie bitte maximal {0} Zeichen ein.'),
        minlength: $.validator.format('Geben Sie bitte mindestens {0} Zeichen ein.'),
        rangelength: $.validator.format('Geben Sie bitte mindestens {0} und maximal {1} Zeichen ein.'),
        email: 'Geben Sie bitte eine g\xFCltige E-Mail Adresse ein.',
        url: 'Geben Sie bitte eine g\xFCltige URL ein.',
        date: 'Bitte geben Sie ein g\xFCltiges Datum ein.',
        number: 'Geben Sie bitte eine Nummer ein.',
        digits: 'Geben Sie bitte nur Ziffern ein.',
        equalTo: 'Bitte denselben Wert wiederholen.',
        range: $.validator.format('Geben Sie bitte einen Wert zwischen {0} und {1} ein.'),
        max: $.validator.format('Geben Sie bitte einen Wert kleiner oder gleich {0} ein.'),
        min: $.validator.format('Geben Sie bitte einen Wert gr\xF6\xDFer oder gleich {0} ein.'),
        creditcard: 'Geben Sie bitte eine g\xFCltige Kreditkarten-Nummer ein.'
    });
}));