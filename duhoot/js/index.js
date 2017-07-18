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

var citySearch = g('citySearch');
var cityChoice = g('cityChoice');
var citylis = cityChoice.getElementsByTagName('li');
for (var k = 0; k < citylis.length; k++) {
    (function (k) {
        citylis[k].onclick = function(){
            citySearch.value = citylis[k].innerText;
            cityChoice.style.display = 'none';
        }
    })(k)
}

var eduSearch = g('eduSearch');
var eduChoice = g('eduChoice');
var edulis = eduChoice.getElementsByTagName('li');
for (var k = 0; k < edulis.length; k++) {
    (function (k) {
        edulis[k].onclick = function(){
            eduSearch.value = edulis[k].innerText;
            eduChoice.style.display = 'none';
        }
    })(k)
}

// 小盒子悬浮/点击效果
var poph = g('pophouse');
var closeBox = g('closeBox');
var introPop = g('introPop');
var namePop = g('namePop');
var scorePop = g('scorePop');
var starscore = g('starscore');
var coverimg = g('coverimg');
var iconPop = g('iconPop');
var moneyPop = g('moneyPop');

var houses = c('houses');
var houseHover = c('houseHover');
var introhouse = c('introhouse');
var nameHouse = c('name house');
var scorehouse = c('scorehouse');
var housecover = g('housecover');
var iconhouse= g('iconhouse');
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
            poph.style.display="block";
            poph.style.backgroundColor = 'rgba(27, 175, 93, 0.7)';
            coverimg.id = housecover.id;
            coverimg.src = housecover.src;
            iconPop.src = iconhouse.src;
            introPop.innerHTML = introhouse[i].innerText;     
            namePop.innerHTML = nameHouse[i].innerText;   
            scorePop.innerHTML = scorehouse[i].innerText;
            namePop.style.color = '#1baf5d';
        }
    })(i)
}

closeBox.onclick = function(){
    poph.style.display="";
}

var musics = c('musics');
var musicHover = c('musicHover');
var intromusic = c('intromusic');
var nameMusic = c('name music');
var scoremusic = c('scoremusic');
var musiccover = g('musiccover');
var iconmusic= g('iconmusic');
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
            poph.style.display= "block";
            poph.style.backgroundColor = 'rgba(241, 158, 31, 0.8)';
            moneyPop.style.display = 'none';
            coverimg.id = musiccover.id;
            coverimg.src = musiccover.src;
            iconPop.src = iconmusic.src;
            introPop.innerHTML = intromusic[i].innerText;     
            namePop.innerHTML = nameMusic[i].innerText;   
            scorePop.innerHTML = scoremusic[i].innerText;
            namePop.style.color = '#f19e1f';
        }
    })(i)
}

var buss = []; 
buss = c('buss');
busHover = c('busHover');
var popb = c('pop bus');
var closebus = c('closebus');
var introbus = c('introbus');
var nameBus = c('name bus');
var buscover = g('buscover');
var scorebus = c('scorebus');
var iconbus= g('iconbus');
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
            poph.style.display= "block";
            poph.style.backgroundColor = 'rgba(136, 73, 156, 0.8)';
            moneyPop.style.display = 'none';
            coverimg.id = buscover.id;
            coverimg.src = buscover.src;
            iconPop.src = iconbus.src;
            introPop.innerHTML = introbus[i].innerText;     
            namePop.innerHTML = nameBus[i].innerText;   
            scorePop.innerHTML = scorebus[i].innerText;
            namePop.style.color = '#88499c';
        }
    })(i)
}

// 大盒子点击效果
var Bpop = g('bigPop');
var coverBimg = g('coverBimg');
var iconBigPop = g('iconBigPop');
var introBigPop = g('introBigPop');
var bstarscore = g('bstarscore');
var scoreBigPop = g('scoreBigPop');
var person1Pop = g('person1Pop');
var personstars = g('personstars');
var personNamePop = g('personNamePop');
var evaluatePop = g('evaluatePop');

var bigcover = c('bigcover');
var read = c('read');
var house1 = c('house1');
var house2 = c('house2')
var closeBhouse = c('closeBhouse');
var bigbox = c('bigbox');
var iconBig = c('iconBig');
var introBig = c('introBig');
var scoreBig = c('scoreBig');
var personName = c('personName');
var personstar = c('personstar');
var personimg = c('personimg');
var bigstar = c('bigstar');
for (var j = 0; j < bigbox.length; j++) {
    (function (j) {
        read[j].onclick = function(){
            Bpop.style.display= "block";
            coverBimg.src = bigcover[j].src;
            coverBimg.className = bigcover[j+1].className;
            iconBigPop.src = iconBig[j].src;
            introBigPop.innerHTML = introBig[j].innerText;
            scoreBigPop.innerHTML = scoreBig[j].innerText;
            personNamePop.innerHTML = personName[j].innerText;
            personstars.src = personstar[j].src;
            person1Pop.src = personimg[j].src;
            bstarscore.src = bigstar[j].src;
        }
        
    })(j)
}

closeBBox.onclick = function(){
    Bpop.style.display="";
}




