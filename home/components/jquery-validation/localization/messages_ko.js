
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate')) || module.exports;;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: KO (Korean; 한국어)
 */
    $.extend($.validator.messages, {
        required: '\uD544\uC218 \uD56D\uBAA9\uC785\uB2C8\uB2E4.',
        remote: '\uD56D\uBAA9\uC744 \uC218\uC815\uD558\uC138\uC694.',
        email: '\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 E-Mail\uC8FC\uC18C\uC785\uB2C8\uB2E4.',
        url: '\uC720\uD6A8\uD558\uC9C0 \uC54A\uC740 URL\uC785\uB2C8\uB2E4.',
        date: '\uC62C\uBC14\uB978 \uB0A0\uC9DC\uB97C \uC785\uB825\uD558\uC138\uC694.',
        dateISO: '\uC62C\uBC14\uB978 \uB0A0\uC9DC(ISO)\uB97C \uC785\uB825\uD558\uC138\uC694.',
        number: '\uC720\uD6A8\uD55C \uC22B\uC790\uAC00 \uC544\uB2D9\uB2C8\uB2E4.',
        digits: '\uC22B\uC790\uB9CC \uC785\uB825 \uAC00\uB2A5\uD569\uB2C8\uB2E4.',
        creditcard: '\uC2E0\uC6A9\uCE74\uB4DC \uBC88\uD638\uAC00 \uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.',
        equalTo: '\uAC19\uC740 \uAC12\uC744 \uB2E4\uC2DC \uC785\uB825\uD558\uC138\uC694.',
        extension: '\uC62C\uBC14\uB978 \uD655\uC7A5\uC790\uAC00 \uC544\uB2D9\uB2C8\uB2E4.',
        maxlength: $.validator.format('{0}\uC790\uB97C \uB118\uC744 \uC218 \uC5C6\uC2B5\uB2C8\uB2E4. '),
        minlength: $.validator.format('{0}\uC790 \uC774\uC0C1 \uC785\uB825\uD558\uC138\uC694.'),
        rangelength: $.validator.format('\uBB38\uC790 \uAE38\uC774\uAC00 {0} \uC5D0\uC11C {1} \uC0AC\uC774\uC758 \uAC12\uC744 \uC785\uB825\uD558\uC138\uC694.'),
        range: $.validator.format('{0} \uC5D0\uC11C {1} \uC0AC\uC774\uC758 \uAC12\uC744 \uC785\uB825\uD558\uC138\uC694.'),
        max: $.validator.format('{0} \uC774\uD558\uC758 \uAC12\uC744 \uC785\uB825\uD558\uC138\uC694.'),
        min: $.validator.format('{0} \uC774\uC0C1\uC758 \uAC12\uC744 \uC785\uB825\uD558\uC138\uC694.')
    });
}));