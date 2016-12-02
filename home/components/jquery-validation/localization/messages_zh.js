
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate')) || module.exports;;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ZH (Chinese, 中文 (Zhōngwén), 汉语, 漢語)
 */
    $.extend($.validator.messages, {
        required: '\u5FC5\u987B\u586B\u5199',
        remote: '\u8BF7\u4FEE\u6B63\u6B64\u680F\u4F4D',
        email: '\u8BF7\u8F93\u5165\u6709\u6548\u7684\u7535\u5B50\u90AE\u4EF6',
        url: '\u8BF7\u8F93\u5165\u6709\u6548\u7684\u7F51\u5740',
        date: '\u8BF7\u8F93\u5165\u6709\u6548\u7684\u65E5\u671F',
        dateISO: '\u8BF7\u8F93\u5165\u6709\u6548\u7684\u65E5\u671F (YYYY-MM-DD)',
        number: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u6570\u5B57',
        digits: '\u53EA\u53EF\u8F93\u5165\u6570\u5B57',
        creditcard: '\u8BF7\u8F93\u5165\u6709\u6548\u7684\u4FE1\u7528\u5361\u53F7\u7801',
        equalTo: '\u4F60\u7684\u8F93\u5165\u4E0D\u76F8\u540C',
        extension: '\u8BF7\u8F93\u5165\u6709\u6548\u7684\u540E\u7F00',
        maxlength: $.validator.format('\u6700\u591A {0} \u4E2A\u5B57'),
        minlength: $.validator.format('\u6700\u5C11 {0} \u4E2A\u5B57'),
        rangelength: $.validator.format('\u8BF7\u8F93\u5165\u957F\u5EA6\u4E3A {0} \u81F3 {1} \u4E4B\u9593\u7684\u5B57\u4E32'),
        range: $.validator.format('\u8BF7\u8F93\u5165 {0} \u81F3 {1} \u4E4B\u95F4\u7684\u6570\u503C'),
        max: $.validator.format('\u8BF7\u8F93\u5165\u4E0D\u5927\u4E8E {0} \u7684\u6570\u503C'),
        min: $.validator.format('\u8BF7\u8F93\u5165\u4E0D\u5C0F\u4E8E {0} \u7684\u6570\u503C')
    });
}));