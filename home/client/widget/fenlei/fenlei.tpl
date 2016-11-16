{% set tablen = data.tab.length %}
<div class="cn_card fenlei">
    <div class="cn_hd">
        <h2 class="title">{{ data.title }}</h2>
        {% if tablen %}<span class="btnexpand"></span>{% endif %}
        <span class="des">{{ data.des }}</span>
        <ul class="cn_nav">
            {% for a in data.tab %}
                <li>{{ a.title }}</li>{% endfor %}
        </ul>
    </div>
    <div class="cn_bd">
    <div class="cn_touch" style="width: {{ tablen }}00%;">
        {% for a in data.tab %}
            <div class="cn_tab" style="width: {{ 100/tablen }}%;">
            {% for wap in a.list %}
                    <div class="fl_show cn_fl cn_fl_4">
                    {% set index = 0 %}
                    {% for link in wap %}                
                        {% if link.url =='' %}
                            {% set link.url = '###'; %}
                        {% endif %}
                        {% if link.title !='' %}
                            {% set index = index + 1 %}
                            {% if index == 5 %}
                                <span class="btnexpand"></span>
                                </div>
                                <div class="fl_hide cn_fl cn_fl_4">{% endif %}
                    <a href="{{ link.url }}">{{ link.title }}</a>{% endif %}{% endfor %}
            	</div>{% endfor %}
        	</div>{% endfor %}
    </div>
    </div>
</div>
<!-- 声明加载less -->
{% require "./fenlei.less?__inline" %}