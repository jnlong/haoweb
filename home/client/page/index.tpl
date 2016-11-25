{% extends 'home:page/layout.tpl' %}
{% block head_res %}
    {% require "home:static/css/index.less" %}
{% endblock%}
{% block body_content %}
    {% widget "home:widget/head/head.tpl" %}
    {% widget "home:page/tpl/mz.tpl" with {data = mz} %}
    {% widget "home:widget/fenlei/fenlei.tpl" with {data = fenlei.fe} %}
    {% widget "home:widget/fenlei/fenlei.tpl" with {data = fenlei.php} %}
    {% widget "home:widget/fenlei/fenlei.tpl" with {data = fenlei.node} %}
    {% widget "home:page/tpl/colorBlock.tpl" with {height = "110"} %}
    {% widget "home:page/tpl/news.tpl" with {data = news} %}
    {% widget "home:page/tpl/mz.tpl" with {data = link} %}

    {% widget "home:widget/ad/ad.tpl" %}
    {%widget "home:widget/footer/footer.tpl"%}
    <!-- html -->
{% endblock %}
{% block body_res%}
    <!-- js资源 -->
    {%require "home:static/js/index.js"%}
    {% script %}
        require("home:widget/fenlei/fenlei.js").init();
        /*$.ajax({
            url: '/api/fenlei',
            dataType: 'json',
            success: function(res){
                console.log(res);
            }
        });*/
    {% endscript %}

{%endblock%}