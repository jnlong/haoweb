<div class="cn_card cn_news">
    <div class="cn_hd">
        <h2 class="title">{{ data.title }}</h2>
        <span class="btnexpand"></span>
        <span class="des">{{ data.des }}</span>
    </div>
    <ul class="cn_bd">
    {% for link in data.list %}
        <li>
            <a class="link" href="{{ link.url }}">
                {% if !!link.title %}
                    <h3>{{ link.title }}</h3>
                {% endif %}
                {% if !!link.des %}
                    <div class="summary">
                        {% if !!link.imgurl %}
                            <img src="{{ link.imgurl }}"/>
                        {% endif %}
                        <p class="summary-con">{{ link.des }}</p>
                    </div>
                {% endif %}
            </a>
        </li>
    {% endfor %}
    </ul>
</div>