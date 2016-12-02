
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate')) || module.exports;;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: IS (Icelandic; íslenska)
 */
    $.extend($.validator.messages, {
        required: '\xDEessi reitur er nau\xF0synlegur.',
        remote: 'Laga\xF0u \xFEennan reit.',
        maxlength: $.validator.format('Sl\xE1\xF0u inn mest {0} stafi.'),
        minlength: $.validator.format('Sl\xE1\xF0u inn minnst {0} stafi.'),
        rangelength: $.validator.format('Sl\xE1\xF0u inn minnst {0} og mest {1} stafi.'),
        email: 'Sl\xE1\xF0u inn gilt netfang.',
        url: 'Sl\xE1\xF0u inn gilda vefsl\xF3\xF0.',
        date: 'Sl\xE1\xF0u inn gilda dagsetningu.',
        number: 'Sl\xE1\xF0u inn t\xF6lu.',
        digits: 'Sl\xE1\xF0u inn t\xF6lustafi eing\xF6ngu.',
        equalTo: 'Sl\xE1\xF0u sama gildi inn aftur.',
        range: $.validator.format('Sl\xE1\xF0u inn gildi milli {0} og {1}.'),
        max: $.validator.format('Sl\xE1\xF0u inn gildi sem er minna en e\xF0a jafnt og {0}.'),
        min: $.validator.format('Sl\xE1\xF0u inn gildi sem er st\xE6rra en e\xF0a jafnt og {0}.'),
        creditcard: 'Sl\xE1\xF0u inn gilt grei\xF0slukortan\xFAmer.'
    });
}));