
(function (factory) {
    
    module.exports = factory(require('jquery'), require('../jquery.validate')) || module.exports;;
}(function ($) {
    /*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ZH (Chinese; 中文 (Zhōngwén), 汉语, 漢語)
 * Region: TW (Taiwan)
 */
    $.extend($.validator.messages, {
        required: '\u5FC5\u9808\u586B\u5BEB',
        remote: '\u8ACB\u4FEE\u6B63\u6B64\u6B04\u4F4D',
        email: '\u8ACB\u8F38\u5165\u6709\u6548\u7684\u96FB\u5B50\u90F5\u4EF6',
        url: '\u8ACB\u8F38\u5165\u6709\u6548\u7684\u7DB2\u5740',
        date: '\u8ACB\u8F38\u5165\u6709\u6548\u7684\u65E5\u671F',
        dateISO: '\u8ACB\u8F38\u5165\u6709\u6548\u7684\u65E5\u671F (YYYY-MM-DD)',
        number: '\u8ACB\u8F38\u5165\u6B63\u78BA\u7684\u6578\u503C',
        digits: '\u53EA\u53EF\u8F38\u5165\u6578\u5B57',
        creditcard: '\u8ACB\u8F38\u5165\u6709\u6548\u7684\u4FE1\u7528\u5361\u865F\u78BC',
        equalTo: '\u8ACB\u91CD\u8907\u8F38\u5165\u4E00\u6B21',
        extension: '\u8ACB\u8F38\u5165\u6709\u6548\u7684\u5F8C\u7DB4',
        maxlength: $.validator.format('\u6700\u591A {0} \u500B\u5B57'),
        minlength: $.validator.format('\u6700\u5C11 {0} \u500B\u5B57'),
        rangelength: $.validator.format('\u8ACB\u8F38\u5165\u9577\u5EA6\u70BA {0} \u81F3 {1} \u4E4B\u9593\u7684\u5B57\u4E32'),
        range: $.validator.format('\u8ACB\u8F38\u5165 {0} \u81F3 {1} \u4E4B\u9593\u7684\u6578\u503C'),
        max: $.validator.format('\u8ACB\u8F38\u5165\u4E0D\u5927\u65BC {0} \u7684\u6578\u503C'),
        min: $.validator.format('\u8ACB\u8F38\u5165\u4E0D\u5C0F\u65BC {0} \u7684\u6578\u503C')
    });
}));