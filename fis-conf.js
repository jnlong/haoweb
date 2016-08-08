/**
 * @file fis3编译配置文件
 * @author zhangxianlong(zhangxianlong@baidu.com)
 */

// less
fis.match('*.less', {
    parser: fis.plugin('less'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css',
    optimizer: fis.plugin('clean-css')
});

fis.match('::package', {
    // 启用 fis-spriter-csssprites 插件
    spriter: fis.plugin('csssprites')
});
// CSS
fis.match('*.css', {
    // 压缩css
    optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
    // 压缩PNG
    optimizer: fis.plugin('png-compressor', {
        type: 'pngquant'
    })
});

// js
fis.match('*.js', {
    // 压缩JS
    optimizer: fis.plugin('uglify-js')
});

// js打包
// fis.match('/widget/**/*.js', {
//     packTo: '/static/widget.js'
// });
// // js打包
// fis.match('/widget/**/*.{css,less}', {
//     packTo: '/static/widget.css'
// });
// 设置CDN
// fis.match('*.{js,css,jpg,jpeg,png,gif}', {
//     useHash: true,
//     domain: 'http://s0.m.hao123img.com'
// });

// 处理es6
fis.set('project.fileType.text', 'es,es6');
fis.match('*.es6', {
    parser: fis.plugin('babel-5.x', {
        blacklist: [
            'regenerator'
        ],
        stage: 3
    }),
    rExt: 'js',
    useHash: true,
    optimizer: fis.plugin('uglify-js')
});

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
fis.match('out/**', {
    release: false
});

// 正式环境编译配置
fis.media('pro').match('*', {
    deploy: fis.plugin('http-push', {
        receiver: 'http://101.200.78.147:8080/receiver.php',
        to: '/home/work/wise/'
    })
});

// HTTPS编译配置
fis.media('pro-https').match('*.{js,css,jpg,jpeg,png,gif}', {
    domain: 'https://gss0.bdstatic.com/5eR1cXSg2QdV5wybn9fN2DJv'
});

// 开发编译配置
fis.media('zxl').match('*', {
    useHash: false,
    useSprite: false,
    optimizer: null,
    domain: '',
});