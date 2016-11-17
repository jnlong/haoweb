var emptyLink = '###';
var pathNews = '/static/home/static/img/news/';
module.exports.mz = (function () {
    var data = {};
    data.title = "名站";
    data.des = "收录web开发热门网站";
    data.list = [
        { url: 'http://www.jikexueyuan.com/', title: '极客学院' },
        { url: 'http://www.imooc.com/', title: '慕课网' },
        { url: 'http://www.ycku.com/', title: '瓢城web俱乐部' },
        { url: 'https://m.coding.net/home.html', title: 'coding' },

        { url: 'http://www.php.net/', title: 'php.net' },
        { url: 'https://nodejs.org/en/', title: 'nodejs官网' },
        { url: 'http://m.oschina.net/', title: '开源中国' },
        { url: 'http://fex.baidu.com/', title: 'FEX' },

        { url: 'https://developer.mozilla.org/zh-CN/', title: 'MDN' },
        { url: 'http://www.zhihu.com/', title: '知乎' },
        { url: 'http://www.chinaw3c.org/', title: 'w3c中国' },
        { url: 'http://m.csdn.net/', title: 'CSDN' },
        { url: 'https://github.com/', title: 'GitHub' },

        { url: 'http://www.w3school.com.cn/', title: 'w3cschool' },
        { url: 'http://www.runoob.com/', title: '菜鸟教程' },
        { url: 'https://cnodejs.org/', title: 'cnnodejs' },
        { url: 'http://npm.taobao.org/', title: 'cnpm' },

        { url: 'http://www.css88.com/doc/zeptojs_api/', title: 'zepto手册' },
        { url: 'http://cdn.code.baidu.com/', title: '百度cdn' },
        { url: 'http://www.aliyun.com/', title: '阿里云' },
    ];
    return data;
})();
module.exports.fenlei = (function (type) {
    var arr = ['fe','php','node','user'];
    var res = {};
    arr.forEach(function(v){
        res[v] = getFenlei(v)
    })
    return res;
})();
module.exports.news = (function () {
        var data = {};
        data.title ="精彩文章";
        data.des = "";
        data.list = [
            {
                title: '',
                url: '',
                imgurl: '',
                des: ''
            },
            {
                title: '谷歌 Web 开发最佳实践手册：目录（中文翻译进行中）',
                url: 'http://blog.jobbole.com/45574/',
                imgurl: '',
                des: ''
            },
            {
                title: '前端大神Winter在ITA1024前端精英群的分享实录+33个问题的现场解答',
                url: 'http://www.ita1024.com/eventlist/view/id/108',
                imgurl: pathNews + 'ita1024.png',
                des: '我们讲前端成长，我认为，主要在两个方面，一部分是”能力”，一部分是”知识”。我认为能力是三大块：编程能力、架构能力、工程能力。'
            },
            {
                title: '菜鸟到大神的上位历程，即学即用走向人生巅峰',
                url: 'http://www.html5cn.org/article-9447-1.html',
                imgurl: pathNews + 'hu.jpg',
                des: '结合个人经历总结的前端入门方法，总结从零基础到具备前端基本技能的道路、学习方法、资料。'
            },
            {
                title: '沪江易未来：沪江网校前端架构漫谈',
                url: 'http://mp.weixin.qq.com/s?__biz=MzIzMzEzODYwOA==&mid=2665284494&idx=1&sn=4c1895a62f4276ac7d06a5affe574a44&scene=1&srcid=0525Q4KdU8NlUiycYfFrBpxH#wechat_redirect',
                imgurl: pathNews + 'ita1024.png',
                des: '介绍沪江网校现在的前端架构，以及对前端架构方面的思考。沪江正在经历的，也是大部分公司的前端部门正在经历的。希望沪江的经验，能够跟大家产生共鸣，互相借鉴。'
            },
            {
                title: '糯米移动组件架构演进之路',
                url: 'https://mp.weixin.qq.com/s?__biz=MzA3ODg4MDk0Ng==&mid=2651112195&idx=1&sn=27fa638e90b09a107057e4a5e8d01ab1',
                imgurl: pathNews + 'nuomi.jpg',
                des: '本文介绍了百度糯米移动App，在面临多业务和多渠道时架构的演进，以及对接入层和Hybrid框架的优化。'
            }
        ];
        return data;
})();
module.exports.link = (function () {
    var data = {};
    data.title = "友情链接";
    data.des = "";
    data.list = [
        { url: 'http://www.alexa.cn', title: 'ALEXA' },
        { url: 'http://pr.alexa.cn', title: 'PR查询' },
        { url: 'https://123.sogou.com/', title: '搜狗网址导航' },
        { url: 'http://icp.alexa.cn', title: '备案查询' },
        { url: 'http://hao.360.cn/', title: '360导航' },
        { url: 'http://se.360.cn/', title: '360安全浏览器' },
        { url: 'https://m.hao123.com/', title: 'hao123' },
    ];
    return data;
})();
function getFenlei (type) {
    var data = { title: '', des: '', tab: [] };
    var list, title;
    if (type == "fe") {
        data.title = 'web前端';
        data.des = ""; //前端开发自己的网址导航
        title = '资讯';
        list = [
            [
                // {url: emptyLink, title: '综合'},
                { url: 'http://fex.baidu.com/', title: 'FEX' },
                { url: "http://www.w3help.org/zh-cn/", title: "w3help" },
                { url: "http://www.w3cfuns.com/", title: "w3cfuns" },
                { url: 'http://www.w3ctech.com/', title: 'w3ctech' },
                { url: 'http://www.qianduan.net/', title: '前端观察' },
                { url: "http://fequan.com/", title: "前端圈" },
                { url: "http://www.w3cplus.com/", title: "w3cplus" },
                { url: "http://www.daqianduan.com/", title: "大前端" },
                { url: 'http://www.iqianduan.cn/', title: '星辰网' },
                { url: "http://www.36kr.com/", title: "36氪" },
                { url: 'http://www.tuicool.com/', title: '推酷' },
                { url: '', title: '' },
                { url: '', title: '' },
            ],
            [
                { url: 'http://winter-cn.cnblogs.com/', title: 'winter' },
                { url: 'http://www.ruanyifeng.com/blog/', title: '阮一峰' },
                { url: 'http://www.cnblogs.com/rubylouvre/', title: '司徒正美' },
                { url: 'http://blog.sina.com.cn/u/2637630142', title: 'kevin' },
                { url: 'http://www.aoao.org.cn/', title: '嗷嗷' },
                { url: 'http://www.zhangxinxu.com/wordpress/category/js/', title: '张鑫旭' },
                { url: '', title: '' },
            ],
            [
                { url: 'http://www.csdn.net/article/lastnews', title: 'csdn' },
                { url: 'http://www.divcss5.com/html/', title: 'divcss5' },
                { url: 'http://developer.51cto.com/', title: '51cto' },
                { url: 'http://www.techweb.com.cn/', title: 'techweb' },
                { url: 'http://www.zan3.com/', title: 'zan3' },
                { url: 'http://www.html-js.com/', title: '前端乱炖' },
                { url: 'http://top.css88.com/', title: '前端头条' },
                { url: "http://www.html5dw.com/", title: "HTML5梦工场" },
                { url: "http://www.webplatform.org/", title: "WebPlatform" },
                { url: 'http://f2er.club/', title: 'f2er' },
                { url: '', title: '' },
                { url: '', title: '' },
                // {url: 'http://www.html5cn.org/', title: 'html5中国'},
            ],
            [
                { url: 'http://www.jikexueyuan.com/', title: '教程' },
                { url: 'http://www.icourse163.org/', title: '慕课' },
                { url: 'http://m.chuanke.com/', title: '百度传课' },
                { url: 'http://m.ke.qq.com/', title: '腾讯课堂' },
                { url: 'http://www.ycku.com/', title: '瓢城web' },
                { url: 'http://www.5idev.com/', title: '5idev' },
                { url: 'http://bss.csdn.net/m/topic/learning_path_weixin', title: '微信开发' },
                { url: '', title: '' },
                { url: '', title: '' },
            ]
        ];
        data.tab.push({ list: list, title: title });

        title = '工具';
        list = [
            [
                { url: 'http://tool.lu/', title: 'API' },
                { url: 'http://www.css88.com/book/css/quicksearch.htm', title: 'css' },
                { url: 'http://www.css88.com/jqapi-1.9/old.html', title: 'jquery' },
                { url: 'http://www.css88.com/doc/zeptojs_api/', title: 'zepto' },
                { url: 'http://mp.weixin.qq.com/wiki/home/index.html', title: '公众号' },
                { url: '', title: '' },
                { url: '', title: '' },
                { url: '', title: '' },
            ],
            [
                { url: 'http://tool.lu/', title: '工具' },
                { url: 'http://tool.oschina.net/', title: 'oschina' },
                { url: 'https://tinypng.com/', title: 'tinypng' },
                { url: 'http://www.fishlee.net/Tools/GetImageBase64Code#codeResult', title: 'base64' },
                { url: 'http://runjs.cn/', title: 'runjs' },
                { url: 'http://uaq.baidu.com/?m=Index&a=CloudAnalysis#!/tools', title: 'uaqpng' },
                { url: 'http://www.sublimetext.com/', title: 'sublime' },
                { url: 'http://www.jetbrains.com/webstorm/', title: 'webstorm' },
                { url: 'http://caniuse.com/', title: 'caniuse' },
            ],
            [
                { url: '', title: '框架' },
                { url: 'http://fis.baidu.com/', title: 'fis' },
                { url: 'http://webpack.github.io/', title: 'webpack' },
                { url: 'http://www.gulpjs.com.cn/', title: 'gulp' },
                { url: 'http://www.gruntjs.net/', title: 'grunt' },
                { url: 'http://www.swiper.com.cn/', title: 'swiper' },
                { url: 'http://cubiq.org/iscroll-5', title: 'iscroll' },
                { url: '', title: '' },
                { url: '', title: '' },
                { url: '', title: '' },
                { url: '', title: '' },
                { url: '', title: '' },
            ],
            [
                { url: '', title: '浏览器' },
                { url: 'http://m.browser.baidu.com/mb', title: '百度' }, {
                    url: "https://www.google.com/intl/zh-CN/chrome/browser/",
                    title: "谷歌"
                }, {
                    url: "http://browser.qq.com/index_m.html",
                    title: "QQ"
                }, {
                    url: "http://www.uc.cn/",
                    title: "UC"
                }, {
                    url: "http://www.firefox.com.cn/",
                    title: "火狐"
                }, {
                    url: "http://www.opera.com/zh-cn",
                    title: "欧朋"
                }, {
                    url: "http://www.apple.com/cn/safari/",
                    title: "Safari"
                }, {
                    url: "http://windows.microsoft.com/zh-cn/internet-explorer/download-ie",
                    title: "IE"
                }, {
                    url: "http://se.360.cn/",
                    title: "360"
                }
            ]
        ];
        data.tab.push({ list: list, title: title });

        title = '基本';
        list = [
            [
                { url: emptyLink, title: 'html' },
                { url: 'http://www.fontsquirrel.com/tools/webfont-generator', title: 'webfont' },
                { url: 'http://font-spider.org/', title: 'font-spider' },
                { url: 'http://www.ih5.cn/#modal/login/fadeIn', title: 'ih5' },
                { url: 'http://html5test.com/', title: 'html5test' },
                { url: 'http://www.html5cn.org/', title: 'html5cn' }
            ],
            [
                { url: 'http://www.css88.com/', title: 'css' },
                { url: 'http://www.css88.com/tool/csstidy/', title: 'csstidy' },
                { url: 'http://less.bootcss.com/', title: 'less' },
                { url: 'http://sass-lang.com/', title: 'sass' },
                { url: 'http://www.bootcss.com/', title: 'bootstrap' },
                { url: '', title: '' }
            ],
            [
                { url: 'https://developer.mozilla.org/zh-CN/', title: 'JS' },
                { url: 'http://www.react.org.cn/', title: 'react' },
                { url: 'http://seajs.org/docs/', title: 'seaJS' },
                { url: 'http://www.requirejs.org/', title: 'requireJS' },
                { url: 'http://angularjs.cn/', title: 'angular' },
                { url: 'http://www.css88.com/doc/backbone/', title: 'backbone' },
                { url: '', title: '' }
            ],
        ];
        data.tab.push({ list: list, title: title });
    } else if (type == "php") {
        data.title = 'PHP';
        data.des = ""; //PHP开发网址导航

        title = "资讯";
        list = [
            [
                { url: 'http://php.net/', title: 'PHP' },
                { url: 'http://school.php1.cn/', title: 'php1.cn' },
                { url: 'http://www.php100.com/', title: 'php100' },
                { url: 'http://www.php.net.cn/', title: 'php.net.cn' },
                { url: 'http://www.thinkphp.cn/', title: 'thinkphp' },
                { url: 'http://www.xuephp.com/main/index.php', title: 'xuephp' },
                { url: 'http://down.admin5.com/info/', title: 'admin5' },
            ],
            // [
            //     {url: '',title: 'linux'},
            //     {url: '',title: ''},
            //     {url: '',title: ''},
            //     {url: '',title: ''},
            //     {url: '',title: ''},
            // ],
            [
                { url: 'http://www.nginx.cn/', title: 'nginx' },
                { url: '', title: '' },
                { url: '', title: '' },
                { url: '', title: '' },
                { url: '', title: '' },
                { url: '', title: '' },
            ],
            // [
            //     {url: '',title: 'mysql'},
            //     {url: '',title: ''},
            //     {url: '',title: ''},
            //     {url: '',title: ''},
            //     {url: '',title: ''},
            //     {url: '',title: ''},
            // ],
        ]
        data.tab.push({ list: list, title: title });
        // title="工具";
        // list=[
        //     [
        //         {url: '',title: '工具'},
        //         {url: '',title: ''},
        //         {url: '',title: ''},
        //         {url: '',title: ''},
        //         {url: '',title: ''},
        //         {url: '',title: ''},
        //     ],
        //     [
        //         {url: '',title: 'API'},
        //         {url: '',title: ''},
        //         {url: '',title: ''},
        //         {url: '',title: ''},
        //         {url: '',title: ''},
        //         {url: '',title: ''},
        //     ],
        //     [
        //         {url: '',title: '教程'},
        //         {url: '',title: ''},
        //         {url: '',title: ''},
        //         {url: '',title: ''},
        //         {url: '',title: ''},
        //         {url: '',title: ''},
        //     ],
        // ];
        // data.tab.push({list: list,title: title});
        // title="基本";
        // list = [];
        // data.tab.push({list: list,title: title});
    } else if (type == "node") {
        data.title = 'NodeJS';
        data.des = "";
        title = '资讯';
        list = [
            [
                { url: 'http://www.nodejs.net/', title: '官网' },
                { url: 'https://cnodejs.org/', title: 'cnodejs' },
                { url: 'http://nodeapi.ucdok.com/', title: 'nodeapi' },
                { url: 'http://nodejs.cn/api/', title: 'nodejs.cn' },
                { url: '', title: '' },
                { url: '', title: '' },
                { url: '', title: '' },
            ]
        ];
        data.tab.push({ list: list, title: title });
    } else if (type == "user") {
        data.title = "我的网址";
        data.des = "定制自己的网址，敬请期待...";
        data.tab = [];
    }
    // console.log(type, data);
    return data;
}
