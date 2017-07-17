//调用Flexslider插件
$(function() {
    $(".flexslider").flexslider({
        slideshowSpeed: 4000, //展示时间间隔ms
        animationSpeed: 400, //滚动时间ms
        touch: true, //是否支持触屏滑动
        directionNav:false
    });
});	

// 通用函数
var g = function ( id ){
    return document.getElementById(id);
}

var c = function (className){
    return document.getElementsByClassName( className );
}

// 下拉菜单
$(document).ready(function(){
    $(".pullCity").click(function(){
        $(".cityChoice").slideToggle("slow");
    })

    $(".pullEdu").click(function(){
        $(".eduChoice").slideToggle("slow");
    })

    $(".pullFilter").click(function(){
        $(".filterChoice").slideToggle("slow");
    })
})

// map效果
function mouseOver(){
    g('filter map').style.backgroundColor="#1baf5d";
    g('mapFilter').style.color="#fff";
    g('map').src='../img/map1.png';
}

function mouseOut(){
    g('filter map').style.backgroundColor="rgba(255,255,255,0.8)";
    g('mapFilter').style.color="#d5dbdb";
    g('map').src='../img/map.png';
}

// 小盒子悬浮/点击效果
var houses = [];
houses = c('houses');
var houseHover = c('houseHover');
var poph = c('pop house');
var closehouse = c('closehouse');
for (var i = 0; i < houses.length; i++) {
    houses[i].id = i;
    (function (i) {
        houses[i].onmouseover = function () { 
            houseHover[i].style.display="block";
        }
        houses[i].onmouseout = function () { 
            houseHover[i].style.display="none";
        }
        houses[i].onclick = function () { 
            poph[i].style.display="block";        
            closehouse[i].onclick = function(){
                poph[i].style.display="";
            }
        }
    })(i)
}


var musics = []; 
musics = c('musics');
musicHover = c('musicHover');
var popm = c('pop music');
var closemusic = c('closemusic');
for (var i = 0; i < musics.length; i++) {
    musics[i].id = i;
    musicHover[i].id = i;
    (function (i) {
        musics[i].onmouseover = function () { 
        musicHover[i].style.display="block";
        }
        musics[i].onmouseout = function () { 
        musicHover[i].style.display="none";
        }
        musics[i].onclick = function () { 
            popm[i].style.display="block";
            closemusic[i].onclick = function(){
                popm[i].style.display="";
            }
        }
    })(i)
}

var buss = []; 
buss = c('buss');
busHover = c('busHover');
var popb = c('pop bus');
var closebus = c('closebus');
for (var i = 0; i < buss.length; i++) {
    buss[i].id = i;
    busHover[i].id = i;
    (function (i) {
        buss[i].onmouseover = function () { 
        busHover[i].style.display="block";
        }
        buss[i].onmouseout = function () { 
        busHover[i].style.display="none";
        }
        buss[i].onclick = function () { 
            popb[i].style.display="block";
            closebus[i].onclick = function(){
                popb[i].style.display="";
            }
        }
    })(i)
}

// 大盒子点击效果
var read = c('read');
var house1 = c('house1');
var house2 = c('house2')
var closeBhouse = c('closeBhouse');
read[0].onclick = function(){
    house1[0].style.display = 'block';
    closeBhouse[0].onclick = function(){
        house1[0].style.display="";
    }
}

for (var j = 0; j < house2.length; j++) {
    (function (j) {
        read[j+1].onclick = function(){
            house2[j].style.display = 'block';
            closeBhouse[j+1].onclick = function(){
                house2[j].style.display="";
            }
        }
    })(j)
}
