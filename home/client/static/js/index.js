"use strict";
(function(){
    var tpl = (function(){
        var cache = {},
            tmpl = function tmpl(str, data){
                var fn = !/\W/.test(str) ?
                    cache[str] = cache[str] ||
                        tmpl(document.getElementById(str).innerHTML) :
                    new Function("obj",
                            "var p=[],print=function(){p.push.apply(p,arguments);};" +
                            "with(obj){p.push('" + str
                            .replace(/[\r\t\n]/g, " ")
                            .split("<#").join("\t")
                            .replace(/((^|#>)[^\t]*)'/g, "$1\r")
                            .replace(/\t=(.*?)#>/g, "',$1,'")
                            .split("\t").join("');")
                            .split("#>").join("p.push('")
                            .split("\r").join("\\'")
                            + "');}return p.join('');");
                return data ? fn( data ) : fn;
            };
        return tmpl
    })();
    var card = function(){
        var $hdFlod = $('.cn_card .cn_hd .btnexpand');
        var clsName = 'fold';
        $hdFlod.click(function(){
            $(this).parent().toggleClass(clsName);
        });
        $('.cn_nav li').click(function(){
            var $hd = $(this).parents('.cn_hd');
            if($hd.hasClass(clsName)){
                $hd.removeClass(clsName);
            }
        })
    };
    var cardTab = function(cg){
        var me = this;
        me.NavTag = cg.navTag || "li";
        me.NavCur = cg.NavCur || "cn_nav_cur";
        me.$navWp = $(cg.nav);
        me.$nav = me.$navWp.find(me.NavTag);
        me.$con = $(cg.con);
        me.NavCount = me.$nav.length;
        if(me.NavCount < 2) return;
        me.navClick = cg.navClick || false;
        me.random = cg.random || false;
        me.index = me.random ? Math.floor(Math.random()*4) : 0;
        me.singleWidth =me.NavCount===3? 33.333334 : 100/me.NavCount;
        me.Speed = .3;
        me._init();
    };
    cardTab.prototype = {
        _init : function(){
            var me = this,
                $con = me.$con,
                index = me.index,
                dataIndex = me.$navWp.attr("data-index");
            me.$navWp = null;
            me._clearAddCur(index);
            me.$children = $con.children();
            $con.css({"width":100*me.NavCount+"%","-webkit-transform":"translate(-" + me.singleWidth*index + "%,0) translateZ(0)","-webkit-backface-visibility": "hidden"});
            me.$children.css({"width":me.singleWidth+"%"});

            me.width = $con.width();
            me.childWidth = me.width/me.NavCount;

            me.navClick&&me.$nav.on("click",function(e){
                me._navChange(e);
                me._clearAddCur(me.index);
            });
            $con.on("webkitTransitionEnd",function(){
                $(this).css("-webkit-transition","initial");
            });

            // $con.on("touchstart",function(e){
            //     me._touchstart(e);
            // }).on("touchmove",function(e){
            //     me._touchmove(e);
            // }).on("touchend touchcancel",function(e){
            //     me._touchend(e);
            // });
        },
        _navChange : function(e){
            var me = this,
                $this = $(e.target),
                index = $this.index();
            if(me.index === index) return;
            me.index = index;
            me._stopPro(e);
            me._translate(me.$con, "-" + me.index*me.singleWidth + "%,0,0");
            /*me.$con.animate({"translateX" :  -index*me.singleWidth +"%","translateZ":0},{"duration":me.speed,"easing":"ease-out"});*/
        },
        _touchstart : function(e){
            var me = this,
                et =e.touches[0];
            me._stopPro(e);
            me.startX = et.clientX;
            me.startY = et.clientY;
            me.startLeft = -me.index*(me.childWidth);
        },
        _touchmove : function(e){
            var me = this,
                et =e.touches[0],
                $con = me.$con;
            me._stopPro(e);
            me.moveX = et.clientX;
            me.moveY = et.clientY;
            me.cha = me.startLeft + me.moveX - me.startX;

            if(Math.abs(me.moveY-me.startY)/Math.abs(me.moveX-me.startX)<0.58){
                e.preventDefault();
                if(me.index===0&&me.cha>=0){
                    me._translate($con, "0,0,0");
                    return;
                }
                if((me.index===(me.NavCount-1)&&me.cha<=(-me.index*me.childWidth))){
                    me._translate($con, "-" + me.index*me.singleWidth + "%,0,0");
                    return;
                }
                me._translate($con, "-" + me.cha/me.width*100 + "%,0,0");
            }
        },
        _touchend : function(e){
            var me = this;
            me._stopPro(e);
            if(this.moveX >10){
                var limt = me.moveX-me.startX;
                if((me.index===0&&me.cha>=0)||(me.index===(me.NavCount-1)&&me.cha<=(-me.index*me.childWidth))) return;
                if(limt<-100){
                    me.index++;
                }else if(limt>100){
                    me.index--;
                }
                me._clearAddCur(me.index);
            }
            me._translate(me.$con, "-" + me.index*me.singleWidth + "%,0,0");
            me.moveX = me.moveY = me.startX = me.startY = me.cha =0;
        },
        _translate: function(tag, value) {
            var me = this;
            tag.css({
                "-webkit-transform": "translate3d(" + value + ")",
                "-moz-transform": "translate3d(" + value + ")",
                "transform": "translate3d(" + value + ")",
                // "transition": "all .3s ease-out"
            });
        },
        _stopPro : function(e){
            e.stopPropagation();
            return this;
        },
        _clearAddCur : function(index){
            var me = this,
                cur = me.NavCur;
            me.$nav.removeClass(cur).eq(index).addClass(cur);
            return me;
        }
    };
    var pageInit = function(){
        // var $cardWap = $('#cardWap');
        // $cardWap.append($.tpl('mzTpl', $.getMz()));
        // $cardWap.append($.tpl('fenleiTpl', $.getFenlei('user')));


        // $cardWap.append($.tpl('fenleiTpl', $.getFenlei('fe')));
        // $('#loading').hide();
        // $cardWap.append($.tpl('fenleiTpl', $.getFenlei('php')));
        // $cardWap.append($.tpl('fenleiTpl', $.getFenlei('node')));
        // $cardWap.append($.tpl('newsTpl', $.getNews()));

        // $cardWap.append($.tpl('colorblockTpl',$.getcolorblock()));
        // // 友情链接
        // $cardWap.append($.tpl('mzTpl', $.getLink()));
        
        var $cn_touch = $(".cn_touch");
        $(".cn_nav").each(function(key,value){
            new cardTab({"nav":value,"con":$cn_touch[key],"random":false,"navClick":true});
        });
    };
    $(function(){
        pageInit();
        card();
    });
})();