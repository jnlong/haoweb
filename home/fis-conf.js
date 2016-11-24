/**
 * @file FIS 配置
 * @author
 */

fis.config.set('namespace', 'home');

// chrome下可以安装插件实现livereload功能
// https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
fis.config.set('livereload.port', 35729);

// 代码校验
var eslintConf = {
    ignoreFiles: ['static/common/**.js', 'js-conf.js'],
    envs: ['browser', 'node'],
    globals: ['$', 'Zepto', 'jQuery', 'iScroll', 'IScroll', 'Swiper', 'Modernizr', 'DocumentTouch', 'WebKitCSSMatrix', 'wiseHao123', 'define', 'G', 'scrollFallsNav', 'CG', 'CONFIG', 'sug', 'config'],
    rules: {
        'semi': [0],
        'no-undef': [1],
        'no-use-before-define': [0],
        'no-unused-vars': [0],
        'no-eval': [0],
        'use-isnan': [2],
        'valid-typeof': [2],
        'no-unreachable': [1],
        'no-dupe-args': [1],
        'no-dupe-keys': [1]
    }
};
fis.match('**.js', {
    lint: fis.plugin('eslint', eslintConf)
});

fis.match('/client/static/img/news/**.{png,jpg,gif}', {
    useHash: false
});
fis.match('/client/widget/**.{js,es6}', {
    packTo: 'widget.js'
});
fis.match('/client/widget/**.{css,less}', {
    packTo: 'widget.css'
});

fis.media('debug').match('*', {
    optimizer: null,
    useHash: false,
    deploy: fis.plugin('http-push', {
        receiver: 'http://127.0.0.1:8085/yog/upload',
        to: '/'
    })
});
fis.media('debug-prod').match('*', {
    deploy: fis.plugin('http-push', {
        receiver: 'http://127.0.0.1:8085/yog/upload',
        to: '/'
    })
});
