{% extends 'comm:page/layout.tpl' %}
{% block head_res %}
    {% require "home:static/css/index.less" %}
{% endblock%}
{% block body_content %}
    {%require "comm:static/lib/iscroll.js"%}
    
    {% widget "home:widget/head/head.tpl" %}

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