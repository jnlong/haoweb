
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate')) || module.exports;;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: CA (Catalan; català)
 */
    $.extend($.validator.messages, {
        required: 'Aquest camp \xE9s obligatori.',
        remote: 'Si us plau, omple aquest camp.',
        email: 'Si us plau, escriu una adre\xE7a de correu-e v\xE0lida',
        url: 'Si us plau, escriu una URL v\xE0lida.',
        date: 'Si us plau, escriu una data v\xE0lida.',
        dateISO: 'Si us plau, escriu una data (ISO) v\xE0lida.',
        number: 'Si us plau, escriu un n\xFAmero enter v\xE0lid.',
        digits: 'Si us plau, escriu nom\xE9s d\xEDgits.',
        creditcard: 'Si us plau, escriu un n\xFAmero de tarjeta v\xE0lid.',
        equalTo: 'Si us plau, escriu el maateix valor de nou.',
        extension: 'Si us plau, escriu un valor amb una extensi\xF3 acceptada.',
        maxlength: $.validator.format('Si us plau, no escriguis m\xE9s de {0} caracters.'),
        minlength: $.validator.format('Si us plau, no escriguis menys de {0} caracters.'),
        rangelength: $.validator.format('Si us plau, escriu un valor entre {0} i {1} caracters.'),
        range: $.validator.format('Si us plau, escriu un valor entre {0} i {1}.'),
        max: $.validator.format('Si us plau, escriu un valor menor o igual a {0}.'),
        min: $.validator.format('Si us plau, escriu un valor major o igual a {0}.')
    });
}));