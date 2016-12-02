
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate')) || module.exports;;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: VI (Vietnamese; Tiếng Việt)
 */
    $.extend($.validator.messages, {
        required: 'H\xE3y nh\u1EADp.',
        remote: 'H\xE3y s\u1EEDa cho \u0111\xFAng.',
        email: 'H\xE3y nh\u1EADp email.',
        url: 'H\xE3y nh\u1EADp URL.',
        date: 'H\xE3y nh\u1EADp ng\xE0y.',
        dateISO: 'H\xE3y nh\u1EADp ng\xE0y (ISO).',
        number: 'H\xE3y nh\u1EADp s\u1ED1.',
        digits: 'H\xE3y nh\u1EADp ch\u1EEF s\u1ED1.',
        creditcard: 'H\xE3y nh\u1EADp s\u1ED1 th\u1EBB t\xEDn d\u1EE5ng.',
        equalTo: 'H\xE3y nh\u1EADp th\xEAm l\u1EA7n n\u1EEFa.',
        extension: 'Ph\u1EA7n m\u1EDF r\u1ED9ng kh\xF4ng \u0111\xFAng.',
        maxlength: $.validator.format('H\xE3y nh\u1EADp t\u1EEB {0} k\xED t\u1EF1 tr\u1EDF xu\u1ED1ng.'),
        minlength: $.validator.format('H\xE3y nh\u1EADp t\u1EEB {0} k\xED t\u1EF1 tr\u1EDF l\xEAn.'),
        rangelength: $.validator.format('H\xE3y nh\u1EADp t\u1EEB {0} \u0111\u1EBFn {1} k\xED t\u1EF1.'),
        range: $.validator.format('H\xE3y nh\u1EADp t\u1EEB {0} \u0111\u1EBFn {1}.'),
        max: $.validator.format('H\xE3y nh\u1EADp t\u1EEB {0} tr\u1EDF xu\u1ED1ng.'),
        min: $.validator.format('H\xE3y nh\u1EADp t\u1EEB {1} tr\u1EDF l\xEAn.')
    });
}));