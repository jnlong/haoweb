
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate')) || module.exports;;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: DA (Danish; dansk)
 */
    $.extend($.validator.messages, {
        required: 'Dette felt er p\xE5kr\xE6vet.',
        maxlength: $.validator.format('Indtast h\xF8jst {0} tegn.'),
        minlength: $.validator.format('Indtast mindst {0} tegn.'),
        rangelength: $.validator.format('Indtast mindst {0} og h\xF8jst {1} tegn.'),
        email: 'Indtast en gyldig email-adresse.',
        url: 'Indtast en gyldig URL.',
        date: 'Indtast en gyldig dato.',
        number: 'Indtast et tal.',
        digits: 'Indtast kun cifre.',
        equalTo: 'Indtast den samme v\xE6rdi igen.',
        range: $.validator.format('Angiv en v\xE6rdi mellem {0} og {1}.'),
        max: $.validator.format('Angiv en v\xE6rdi der h\xF8jst er {0}.'),
        min: $.validator.format('Angiv en v\xE6rdi der mindst er {0}.'),
        creditcard: 'Indtast et gyldigt kreditkortnummer.'
    });
}));