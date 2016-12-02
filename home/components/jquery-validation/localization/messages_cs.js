
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate')) || module.exports;;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: CS (Czech; čeština, český jazyk)
 */
    $.extend($.validator.messages, {
        required: 'Tento \xFAdaj je povinn\xFD.',
        remote: 'Pros\xEDm, opravte tento \xFAdaj.',
        email: 'Pros\xEDm, zadejte platn\xFD e-mail.',
        url: 'Pros\xEDm, zadejte platn\xE9 URL.',
        date: 'Pros\xEDm, zadejte platn\xE9 datum.',
        dateISO: 'Pros\xEDm, zadejte platn\xE9 datum (ISO).',
        number: 'Pros\xEDm, zadejte \u010D\xEDslo.',
        digits: 'Pros\xEDm, zad\xE1vejte pouze \u010D\xEDslice.',
        creditcard: 'Pros\xEDm, zadejte \u010D\xEDslo kreditn\xED karty.',
        equalTo: 'Pros\xEDm, zadejte znovu stejnou hodnotu.',
        extension: 'Pros\xEDm, zadejte soubor se spr\xE1vnou p\u0159\xEDponou.',
        maxlength: $.validator.format('Pros\xEDm, zadejte nejv\xEDce {0} znak\u016F.'),
        minlength: $.validator.format('Pros\xEDm, zadejte nejm\xE9n\u011B {0} znak\u016F.'),
        rangelength: $.validator.format('Pros\xEDm, zadejte od {0} do {1} znak\u016F.'),
        range: $.validator.format('Pros\xEDm, zadejte hodnotu od {0} do {1}.'),
        max: $.validator.format('Pros\xEDm, zadejte hodnotu men\u0161\xED nebo rovnu {0}.'),
        min: $.validator.format('Pros\xEDm, zadejte hodnotu v\u011Bt\u0161\xED nebo rovnu {0}.')
    });
}));