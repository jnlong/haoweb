<!-- 程序猿的福利来了，haoweb.top收集常用网址，还支持自定义添加网址，专为手机用户定制！ -->
<div class="cn bdsharebuttonbox hide" data-tag="share_1">
    <a class="bds_mshare" data-cmd="mshare"></a>
    <a class="bds_qzone" data-cmd="qzone" href="#"></a>
    <a class="bds_tsina" data-cmd="tsina"></a>
    <a class="bds_baidu" data-cmd="baidu"></a>
    <a class="bds_renren" data-cmd="renren"></a>
    <a class="bds_tqq" data-cmd="tqq"></a>
    <a class="bds_more" data-cmd="more">更多</a>
    <a class="bds_count" data-cmd="count"></a>
</div>
{% require "./ad.less" %}
{% script %}
    window._bd_share_config = {
        common : {
            bdText : 'haoweb-开发人员的导航网站', 
            bdDesc : '程序猿的福利来了，haoweb.top收集常用网址，还支持自定义添加网址，专为手机用户定制！', 
            bdUrl : 'http://haoweb.top/',   
            bdPic : 'http://haoweb.top/static/home/static/img/news/logo.png',
            bdMiniList: ['weixin','qzone','sqq','ibaidu','tsina','isohu','mail','copy','evernotecn']
        },
        share : [{
            "bdSize" : 16
        }],
        slide : [{     
            bdImg : 0,
            bdPos : "right",
            bdTop : 100
        }],
        image : [{
            viewType : 'list',
            viewPos : 'top',
            viewColor : 'black',
            viewSize : '16',
            viewList : ['qzone','tsina','huaban','tqq','renren']
        }],
        selectShare : [{
            "bdselectMiniList" : ['qzone','tqq','kaixin001','bdxc','tqf']
        }]
    };
    //with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+(-new Date()/36e5)];
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
    var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");
    document.write(unescape("%3Cspan id='cnzz_stat_icon_1256861936'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol 
        + "s4.cnzz.com/z_stat.php%3Fid%3D1256861936%26show%3Dpic2' type='text/javascript'%3E%3C/script%3E"));
{% endscript %}