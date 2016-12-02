
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate')) || module.exports;;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: TR (Turkish; Türkçe)
 */
    $.extend($.validator.messages, {
        required: 'Bu alan\u0131n doldurulmas\u0131 zorunludur.',
        remote: 'L\xFCtfen bu alan\u0131 d\xFCzeltin.',
        email: 'L\xFCtfen ge\xE7erli bir e-posta adresi giriniz.',
        url: 'L\xFCtfen ge\xE7erli bir web adresi (URL) giriniz.',
        date: 'L\xFCtfen ge\xE7erli bir tarih giriniz.',
        dateISO: 'L\xFCtfen ge\xE7erli bir tarih giriniz(ISO format\u0131nda)',
        number: 'L\xFCtfen ge\xE7erli bir say\u0131 giriniz.',
        digits: 'L\xFCtfen sadece say\u0131sal karakterler giriniz.',
        creditcard: 'L\xFCtfen ge\xE7erli bir kredi kart\u0131 giriniz.',
        equalTo: 'L\xFCtfen ayn\u0131 de\u011Feri tekrar giriniz.',
        extension: 'L\xFCtfen ge\xE7erli uzant\u0131ya sahip bir de\u011Fer giriniz.',
        maxlength: $.validator.format('L\xFCtfen en fazla {0} karakter uzunlu\u011Funda bir de\u011Fer giriniz.'),
        minlength: $.validator.format('L\xFCtfen en az {0} karakter uzunlu\u011Funda bir de\u011Fer giriniz.'),
        rangelength: $.validator.format('L\xFCtfen en az {0} ve en fazla {1} uzunlu\u011Funda bir de\u011Fer giriniz.'),
        range: $.validator.format('L\xFCtfen {0} ile {1} aras\u0131nda bir de\u011Fer giriniz.'),
        max: $.validator.format('L\xFCtfen {0} de\u011Ferine e\u015Fit ya da daha k\xFC\xE7\xFCk bir de\u011Fer giriniz.'),
        min: $.validator.format('L\xFCtfen {0} de\u011Ferine e\u015Fit ya da daha b\xFCy\xFCk bir de\u011Fer giriniz.')
    });
}));