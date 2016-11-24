<div class="cn_card cn_mz">
    <div class="cn_hd">
        <h2 class="title">{{data.title}}</h2>
        <span class="des">{{data.des}}</span>
    </div>
    <div class="cn_bd cn_fl cn_fl_4">
        {%for link in data.list%}
        	{%set style = ""%}
			{%if link.color%}{%set style='{{link.color}}'%}{%endif%}
            {%if link.title !=''%}<a href="{{link.url}}" style="{{style}}">{{link.title}}</a>
        {%endif%}{%endfor%}
    </div>
</div>