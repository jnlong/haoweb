{% extends 'home:page/layout.tpl' %}
{% block head_res %}
    {% require "home:static/css/index.less" %}
{% endblock%}
{% block body_content %}
     <div id="pages-container">
     </div>
    <header class="cn head">
        <h1><img src="client/static/img/logo.png" class="logo" alt=""></h1>
    </header>
    <nav class="nav">
        <a href="https://github.com/jnlong" class="nav-link">my github</a>
        <a href="http://blog.sina.com.cn/u/2637630142" class="nav-link">my blog</a>
        <a href="http://n.haoweb.top/huodong/list.html" class="nav-link">H5活动</a>
    </nav>
    </div>
    <div id="cardWap">
        {% widget "home:page/tpl/mz.tpl" with {data = mz} %}
        {% widget "home:widget/fenlei/fenlei.tpl" with {data = fenlei.fe} %}
        {% widget "home:widget/fenlei/fenlei.tpl" with {data = fenlei.php} %}
        {% widget "home:widget/fenlei/fenlei.tpl" with {data = fenlei.node} %}
        {% widget "home:page/tpl/colorBlock.tpl" with {height = "110"} %}
        {% widget "home:page/tpl/news.tpl" with {data = news} %}
        {% widget "home:page/tpl/mz.tpl" with {data = link} %}
    </div>
    <form class="hd_search hide" id="search" name="search" action="http://m.baidu.com/s" method="get">
        <div class="sh_main_wp">
            <span class="sh_logo"></span>
            <input class="sh_ipt" type="text" value="" autocomplete="off" autocorrect="off" maxlength="64" id="kw" name="word" placeholder="搜索关键词">
            <button class="sh_bt" type="submit" id="searchBt"><span>百度一下</span></button>
        </div>
        <input type="hidden" value="www_colorful" name="ref" id="ref">
        <input type="hidden" value="111041" name="st" id="st">
        <input type="hidden" value="iphone" name="tn">
        <input type="hidden" name="from" value="381a_cp_ik" id="sugFrom">
        <input type="hidden" value="c" name="https">
    </form>
    <div class="cn sitetitle">收集web学习资源,php、前端开发、nodejs等常用网址收录</div>
    <div class="cn bdsharebuttonbox hide">
        <a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a>
        <a href="#" class="bds_sqq" data-cmd="sqq" title="分享到QQ好友"></a>
        <a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a>
        <a href="#" class="bds_tqq" data-cmd="tqq" title="分享到腾讯微博"></a>
        <a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a>
        <a href="#" class="bds_renren" data-cmd="renren" title="分享到人人网"></a>
        <a href="#" class="bds_tieba" data-cmd="tieba" title="分享到百度贴吧"></a>
        <a href="#" class="bds_douban" data-cmd="douban" title="分享到豆瓣"></a>
        <a href="#" class="bds_mshare" data-cmd="mshare" title="一键分享"></a>
        <a class="bds_count" data-cmd="count"></a>
    </div>
    <footer class="ft">
        <div class="ft_cf">
        <a href="mailto:zxl8310@163.com?subject=haoweb-推荐网址&body=分类：网址：">网址收录</a>&nbsp;&nbsp;&nbsp;<a href="mailto:zxl8310@163.com?subject=haoweb-改进意见&body=hi,我有一个好的建议推荐给您。">改进建议</a>
        </div>
        <p class="ft_cp">Copyright © www.haoweb.top</p>
        <p class="ft_cp">QQ: 308910520&nbsp;&nbsp;京ICP备15066452号-1</p>
    </footer>
    <!-- html -->
{% endblock %}
{% block body_res%}
    <!-- js资源 -->
    {%require "home:static/js/index.js"%}
    {% script %}
        require("home:widget/fenlei/fenlei.js").init();
    {% endscript %}
    {% script %}
        (function(){
            var bp = document.createElement('script');
            bp.src = '//push.zhanzhang.baidu.com/push.js';
            var s = document.getElementsByTagName("script")[2];
            s.parentNode.insertBefore(bp, s);
        })();
    {% endscript %}
    {% script %}
        // window._bd_share_config = {
        //     "common": {
        //         "bdSnsKey": {},
        //         "bdText": "程序猿的福利来了，haoweb.top收集常用网址，还支持自定义添加网址，专为手机用户定制！",
        //         "bdMini": "1",
        //         "bdMiniList": false,
        //         "bdPic": "",
        //         "bdStyle": "2",
        //         "bdSize": "16"
        //     },
        //     "share": {}
        // };
        // with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];
    {% endscript %}
    {% script %}
        var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
        document.write(unescape("%3Cspan id='cnzz_stat_icon_1256861936'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol 
            + "s4.cnzz.com/z_stat.php%3Fid%3D1256861936%26show%3Dpic2' type='text/javascript'%3E%3C/script%3E"));
    {% endscript %}
    <!-- js资源 -->
{%endblock%}