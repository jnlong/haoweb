
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate')) || module.exports;;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: LV (Latvian; latviešu valoda)
 */
    $.extend($.validator.messages, {
        required: '\u0160is lauks ir oblig\u0101ts.',
        remote: 'L\u016Bdzu, p\u0101rbaudiet \u0161o lauku.',
        email: 'L\u016Bdzu, ievadiet der\u012Bgu e-pasta adresi.',
        url: 'L\u016Bdzu, ievadiet der\u012Bgu URL adresi.',
        date: 'L\u016Bdzu, ievadiet der\u012Bgu datumu.',
        dateISO: 'L\u016Bdzu, ievadiet der\u012Bgu datumu (ISO).',
        number: 'L\u016Bdzu, ievadiet der\u012Bgu numuru.',
        digits: 'L\u016Bdzu, ievadiet tikai ciparus.',
        creditcard: 'L\u016Bdzu, ievadiet der\u012Bgu kred\u012Btkartes numuru.',
        equalTo: 'L\u016Bdzu, ievadiet to pa\u0161u v\u0113lreiz.',
        extension: 'L\u016Bdzu, ievadiet v\u0113rt\u012Bbu ar der\u012Bgu papla\u0161in\u0101jumu.',
        maxlength: $.validator.format('L\u016Bdzu, ievadiet ne vair\u0101k k\u0101 {0} rakstz\u012Bmes.'),
        minlength: $.validator.format('L\u016Bdzu, ievadiet vismaz {0} rakstz\u012Bmes.'),
        rangelength: $.validator.format('L\u016Bdzu ievadiet {0} l\u012Bdz {1} rakstz\u012Bmes.'),
        range: $.validator.format('L\u016Bdzu, ievadiet skaitli no {0} l\u012Bdz {1}.'),
        max: $.validator.format('L\u016Bdzu, ievadiet skaitli, kur\u0161 ir maz\u0101ks vai vien\u0101ds ar {0}.'),
        min: $.validator.format('L\u016Bdzu, ievadiet skaitli, kur\u0161 ir liel\u0101ks vai vien\u0101ds ar {0}.')
    });
}));