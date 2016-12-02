
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate')) || module.exports;;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ES (Spanish; Español)
 * Region: AR (Argentina)
 */
    $.extend($.validator.messages, {
        required: 'Este campo es obligatorio.',
        remote: 'Por favor, complet\xE1 este campo.',
        email: 'Por favor, escrib\xED una direcci\xF3n de correo v\xE1lida.',
        url: 'Por favor, escrib\xED una URL v\xE1lida.',
        date: 'Por favor, escrib\xED una fecha v\xE1lida.',
        dateISO: 'Por favor, escrib\xED una fecha (ISO) v\xE1lida.',
        number: 'Por favor, escrib\xED un n\xFAmero entero v\xE1lido.',
        digits: 'Por favor, escrib\xED s\xF3lo d\xEDgitos.',
        creditcard: 'Por favor, escrib\xED un n\xFAmero de tarjeta v\xE1lido.',
        equalTo: 'Por favor, escrib\xED el mismo valor de nuevo.',
        extension: 'Por favor, escrib\xED un valor con una extensi\xF3n aceptada.',
        maxlength: $.validator.format('Por favor, no escribas m\xE1s de {0} caracteres.'),
        minlength: $.validator.format('Por favor, no escribas menos de {0} caracteres.'),
        rangelength: $.validator.format('Por favor, escrib\xED un valor entre {0} y {1} caracteres.'),
        range: $.validator.format('Por favor, escrib\xED un valor entre {0} y {1}.'),
        max: $.validator.format('Por favor, escrib\xED un valor menor o igual a {0}.'),
        min: $.validator.format('Por favor, escrib\xED un valor mayor o igual a {0}.'),
        nifES: 'Por favor, escrib\xED un NIF v\xE1lido.',
        nieES: 'Por favor, escrib\xED un NIE v\xE1lido.',
        cifES: 'Por favor, escrib\xED un CIF v\xE1lido.'
    });
}));