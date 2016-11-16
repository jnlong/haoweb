module.exports.init = function(para){
    var fenlei = function(){
        var $fenlei = $('.fenlei');
        var cls = 'fl_zk';
        $fenlei.find('.fl_show .btnexpand').click(function(){
            var $this = $(this);
            var $flHide = $this.parents('.fl_show').next('.fl_hide');
            if($this.hasClass(cls)){
                $flHide.hide();
                $this.removeClass(cls);
            }
            else{
                $flHide.show();
                $this.addClass(cls);
            }
        });
    };
    fenlei();
}