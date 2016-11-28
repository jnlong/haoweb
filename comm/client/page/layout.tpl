<!doctype html>
{% html lang="en" framework="home:static/lib/mod.js" %}
    {% head %}
        <meta charset="utf-8">
        <title>{{title}}</title>
        <meta name="baidu-site-verification" content="73dMqCk7kD" />
        <meta content="telephone=no" name="format-detection">
        <meta name="keywords" content="web网址大全,web上网导航,web网址导航,php,前端开发,nodejs">
        <meta name="description" content="收集web学习资源,php,前端开发,nodejs,学习手册,常用网址收录">
        <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" />
        <link rel="apple-touch-icon-precomposed" href="client/static/img/logo.png">
        <link rel="stylesheet" type="text/css" href="client/static/css/base/comm.css?__inline">
        {% block head_res %}
        {% endblock %}
    {% endhead %}

    {% body %}
        {% block body_content %}
        {% endblock %}
        {%require "home:static/lib/zepto.js"%}
        {% block body_res %}
        {% endblock %}
    {% endbody %}

{% endhtml %}
