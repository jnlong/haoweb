
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate')) || module.exports;;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ES (Spanish; Español)
 */
    $.extend($.validator.messages, {
        required: 'Este campo es obligatorio.',
        remote: 'Por favor, rellena este campo.',
        email: 'Por favor, escribe una direcci\xF3n de correo v\xE1lida.',
        url: 'Por favor, escribe una URL v\xE1lida.',
        date: 'Por favor, escribe una fecha v\xE1lida.',
        dateISO: 'Por favor, escribe una fecha (ISO) v\xE1lida.',
        number: 'Por favor, escribe un n\xFAmero v\xE1lido.',
        digits: 'Por favor, escribe s\xF3lo d\xEDgitos.',
        creditcard: 'Por favor, escribe un n\xFAmero de tarjeta v\xE1lido.',
        equalTo: 'Por favor, escribe el mismo valor de nuevo.',
        extension: 'Por favor, escribe un valor con una extensi\xF3n aceptada.',
        maxlength: $.validator.format('Por favor, no escribas m\xE1s de {0} caracteres.'),
        minlength: $.validator.format('Por favor, no escribas menos de {0} caracteres.'),
        rangelength: $.validator.format('Por favor, escribe un valor entre {0} y {1} caracteres.'),
        range: $.validator.format('Por favor, escribe un valor entre {0} y {1}.'),
        max: $.validator.format('Por favor, escribe un valor menor o igual a {0}.'),
        min: $.validator.format('Por favor, escribe un valor mayor o igual a {0}.'),
        nifES: 'Por favor, escribe un NIF v\xE1lido.',
        nieES: 'Por favor, escribe un NIE v\xE1lido.',
        cifES: 'Por favor, escribe un CIF v\xE1lido.'
    });
}));