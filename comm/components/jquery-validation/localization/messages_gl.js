
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate')) || module.exports;;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: GL (Galician; Galego)
 */
    (function ($) {
        $.extend($.validator.messages, {
            required: 'Este campo \xE9 obrigatorio.',
            remote: 'Por favor, cubre este campo.',
            email: 'Por favor, escribe unha direcci\xF3n de correo v\xE1lida.',
            url: 'Por favor, escribe unha URL v\xE1lida.',
            date: 'Por favor, escribe unha data v\xE1lida.',
            dateISO: 'Por favor, escribe unha data (ISO) v\xE1lida.',
            number: 'Por favor, escribe un n\xFAmero v\xE1lido.',
            digits: 'Por favor, escribe s\xF3 d\xEDxitos.',
            creditcard: 'Por favor, escribe un n\xFAmero de tarxeta v\xE1lido.',
            equalTo: 'Por favor, escribe o mesmo valor de novo.',
            extension: 'Por favor, escribe un valor cunha extensi\xF3n aceptada.',
            maxlength: $.validator.format('Por favor, non escribas m\xE1is de {0} caracteres.'),
            minlength: $.validator.format('Por favor, non escribas menos de {0} caracteres.'),
            rangelength: $.validator.format('Por favor, escribe un valor entre {0} e {1} caracteres.'),
            range: $.validator.format('Por favor, escribe un valor entre {0} e {1}.'),
            max: $.validator.format('Por favor, escribe un valor menor ou igual a {0}.'),
            min: $.validator.format('Por favor, escribe un valor maior ou igual a {0}.'),
            nifES: 'Por favor, escribe un NIF v\xE1lido.',
            nieES: 'Por favor, escribe un NIE v\xE1lido.',
            cifES: 'Por favor, escribe un CIF v\xE1lido.'
        });
    }(jQuery));
}));