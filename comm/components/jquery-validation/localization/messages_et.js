
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate')) || module.exports;;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ET (Estonian; eesti, eesti keel)
 */
    $.extend($.validator.messages, {
        required: 'See v\xE4li peab olema t\xE4idetud.',
        maxlength: $.validator.format('Palun sisestage v\xE4hem kui {0} t\xE4hem\xE4rki.'),
        minlength: $.validator.format('Palun sisestage v\xE4hemalt {0} t\xE4hem\xE4rki.'),
        rangelength: $.validator.format('Palun sisestage v\xE4\xE4rtus vahemikus {0} kuni {1} t\xE4hem\xE4rki.'),
        email: 'Palun sisestage korrektne e-maili aadress.',
        url: 'Palun sisestage korrektne URL.',
        date: 'Palun sisestage korrektne kuup\xE4ev.',
        dateISO: 'Palun sisestage korrektne kuup\xE4ev (YYYY-MM-DD).',
        number: 'Palun sisestage korrektne number.',
        digits: 'Palun sisestage ainult numbreid.',
        equalTo: 'Palun sisestage sama v\xE4\xE4rtus uuesti.',
        range: $.validator.format('Palun sisestage v\xE4\xE4rtus vahemikus {0} kuni {1}.'),
        max: $.validator.format('Palun sisestage v\xE4\xE4rtus, mis on v\xE4iksem v\xF5i v\xF5rdne arvuga {0}.'),
        min: $.validator.format('Palun sisestage v\xE4\xE4rtus, mis on suurem v\xF5i v\xF5rdne arvuga {0}.'),
        creditcard: 'Palun sisestage korrektne krediitkaardi number.'
    });
}));