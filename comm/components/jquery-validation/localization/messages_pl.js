
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate')) || module.exports;;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: PL (Polish; język polski, polszczyzna)
 */
    $.extend($.validator.messages, {
        required: 'To pole jest wymagane.',
        remote: 'Prosz\u0119 o wype\u0142nienie tego pola.',
        email: 'Prosz\u0119 o podanie prawid\u0142owego adresu email.',
        url: 'Prosz\u0119 o podanie prawid\u0142owego URL.',
        date: 'Prosz\u0119 o podanie prawid\u0142owej daty.',
        dateISO: 'Prosz\u0119 o podanie prawid\u0142owej daty (ISO).',
        number: 'Prosz\u0119 o podanie prawid\u0142owej liczby.',
        digits: 'Prosz\u0119 o podanie samych cyfr.',
        creditcard: 'Prosz\u0119 o podanie prawid\u0142owej karty kredytowej.',
        equalTo: 'Prosz\u0119 o podanie tej samej warto\u015Bci ponownie.',
        extension: 'Prosz\u0119 o podanie warto\u015Bci z prawid\u0142owym rozszerzeniem.',
        maxlength: $.validator.format('Prosz\u0119 o podanie nie wi\u0119cej ni\u017C {0} znak\xF3w.'),
        minlength: $.validator.format('Prosz\u0119 o podanie przynajmniej {0} znak\xF3w.'),
        rangelength: $.validator.format('Prosz\u0119 o podanie warto\u015Bci o d\u0142ugo\u015Bci od {0} do {1} znak\xF3w.'),
        range: $.validator.format('Prosz\u0119 o podanie warto\u015Bci z przedzia\u0142u od {0} do {1}.'),
        max: $.validator.format('Prosz\u0119 o podanie warto\u015Bci mniejszej b\u0105d\u017A r\xF3wnej {0}.'),
        min: $.validator.format('Prosz\u0119 o podanie warto\u015Bci wi\u0119kszej b\u0105d\u017A r\xF3wnej {0}.')
    });
}));