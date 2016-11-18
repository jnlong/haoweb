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
        <link rel="apple-touch-icon-precomposed" href="/static/home/static/img/logo_bb41490.png">
        <style type="text/css">header,body,section,div,ul,li,dl,dt,dd,h1,h2,h3,span,b,i,p,em,a,input,button{margin:0;padding:0}body{font-family:"微软雅黑" helvetica arial;font-size:15px;background:#eee;-webkit-text-size-adjust:none}a{font-size:16px;text-decoration:none}a,a:visited{color:#222}ul,li{list-style:none}h1,h2,h3{font-weight:500;font-size:16px}b,i{font-style:normal;font-weight:400}img,button{border:0}input{border-radius:0;-webkit-tap-highlight-color:rgba(255,0,0,0);border:0;outline:0}code{display:none}</style>
        {% block head_res %}
        {% endblock %}
    {% endhead %}

    {% body %}
        {% block body_content %}
        {% endblock %}
        {%require "home:static/lib/zepto.js"%}
        {% block body_res %}
        {% endblock %}
    {% require "home:page/layout.tpl" %}{% endbody %}

{% endhtml %}
