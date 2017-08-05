window.$$=window.Zepto = Zepto;
$$(function(){
    $$(".box").textSlider({
        speed: 18, //数值越大，速度越慢
        line:0    //触摸翻滚的条数
    });
    });

(function($$){
    $$.fn.textSlider = function(options){
    //默认配置
    var defaults = {
        speed:80,  //滚动速度,值越大速度越慢
        line:0     //滚动的行数
    };
    
    var opts = $$.extend({}, defaults, options);
    
    var $$timer;
    function marquee(obj, _speed){                               
        var top = 0;
        var margintop;
        $$timer = setInterval(function(){       
            top++;
            margintop = 0-top;
            obj.find("ul").eq(0).animate({ 
                marginTop: margintop
                },0,function(){
                    var s = Math.abs(parseInt($$(this).css("margin-top")))/54;                          
                    if(s >= 2.5){
                        top = 0;
                        $$(this).css("margin-top", 0);   //确保每次都是从0开始，避免抖动
                        $$(this).find("li").slice(0, 1).appendTo($$('.workersBox'));                      
                        $$(this).find("li").find('img').removeClass('bigImag');
                        $$(this).find("li").find('img').slice(0, 1).addClass('bigImag');

                        $$('.itroBox').find('li').css({opacity:'0',transform:''})
                        $$(this).find("li").slice(0, 1).find('img').next().css('overflow','visible');
                        $$(this).find("li").slice(0, 1).find('img').next().find('li').eq(9).css('display','none')
                        $$(this).find("li").slice(0, 1).find('img').next().find('li').eq(9).css('display','block')
                        $$(this).find("li").slice(0, 1).find('img').next().find('li').css({opacity:'1',transform:'translate3d(0,0,0)'})
                    }
                }); 
        }, _speed);
      }
      
    this.each(function(){            
        var speed = opts["speed"],line = opts["line"],_this = $$(this);
        var $$ul =_this.find("ul");     
        if($$ul.height()/54+20 > _this.height()/54){            
            marquee(_this, speed);
            star();
        }
    })
        
    function star(){
        var $$star;
        $$star = setTimeout(function(){
        for(let i =0 ; i<$$('.workersBox').find('img').length;i++){                    
            $$('.workersBox').find('img').eq(i).attr("number",i);
            $$('.workersBox').find('img').eq(i).on('touchstart', function(ev){
                eventUtil.stopPropagation(ev);
                eventUtil.preventDefault(ev);
                clearInterval($$timer);
                $$(".box").textSlider.speed =1;
                tap($$(this), $$(".box").textSlider.speed,$$(this).attr('number'));     
                animateContent($$(this));  
            });
        }
    
        function tap(obj, _speed,index){                  
            var top = 0;
            var margintop;
            var $$tap;
            var imgs = $$('.workersBox').find('img').length;
            $$tap = setInterval(function(){            
                top++;
                margintop = 0-top;
                $$('.workersBox').animate({
                    marginTop: margintop
                    },0,function(){
                        var s = Math.abs(parseInt($$(this).css("margin-top")))/54;
                        if(s >= 3){
                                top = 0;
                                $$(this).css("margin-top", 0);   //确保每次都是从0开始，避免抖动 
                                        var curImg = $$(this).find("img").slice(0,1),
                                        curImgid =parseInt(curImg.attr('number'));
                                        var num = ((index-curImgid)%imgs)>0?((index-curImgid)%imgs):(imgs+((index-curImgid)%imgs));
                                        for(let j =0;j<num;j++){
                                            $$(this).find("li").slice(0,1).appendTo($$(this));
                                            $$(this).find("li").find('img').removeClass('bigImag');
                                            $$(this).find("li").slice(0, 1).find('img').addClass('bigImag');
                                        }
                                if( $$(this).find("li").eq(index).offset().top < 347){
                                    clearInterval($$tap);
                                    var $$again;
                                    $$again = setTimeout(function(){
                                        $$(".box").textSlider.speed = 18;
                                        marquee($$('.box'),$$(".box").textSlider.speed);
                                    },500)
                                }
                        }
                    });                        
            },_speed);
        }

        function animateContent(obj){
                    $$('.itroBox').find('li').css({opacity:'0',transform:''})
                    obj.next().css('overflow','visible');
                    obj.next().find('li').eq(9).css('display','none')
                    obj.next().find('li').eq(9).css('display','block')
                    obj.next().find('li').css({opacity:'1',transform:'translate3d(0,0,0)'})
        }
        },300)
    }

}
})(Zepto);




