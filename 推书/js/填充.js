var currentPage = "1"; //当前页
var totalPage = new Array() + ''; //总页数
var total = totalPage.split(",");
var a,b;
var currentcategory = '1';//当前类
var currentnumber = '1';
var name = localStorage.name;//获取类状态
var names = parseInt(name)-1;
var url = "http://vtmer.cn/class"


$(document).ready(function () {
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
 
 
        success: function (data) {
 
            console.log(data);

            // 先填充默认的第一页
            filling(1, data);
 
            // 填充分类导航，分页导航
            for (var i = 0; i < data.bookclass.length; i++) {
                var qq = '';
                qq += "<span id='big_li'>" + '分类:' + "</span>"
                for (var p = 1; p <= data.bookclass.length; p++) {
                    qq += "<li>" + "<a href='#'>" + '类' + p + "</a>" + "</li>";
                }
                $('#tit').children("li:eq("+names+")").children("a").toggleClass('select');
                $('nav').find('#tit').eq(i).append(qq);
                navigation();
 
                var cc = '';
                cc += "<div class='pages'>" + "<div class='on'>" + "</div>"
                if (Math.ceil(data.bookclass[i].bookInfo.length / 8) <= 6) {
                    for (var m = 1; m <= Math.ceil(data.bookclass[i].bookInfo.length / 8); m++) {
                        cc += "<div class='number'>" + m + "</div>";
                    }
                    cc += "<div class='up' >" + "</div>" + "</div>" + "<div class='sum' >" + "共" + Math.ceil(data.bookclass[
                        i].bookInfo.length / 8) + "页" + "</div>"
                    total[i] = Math.ceil(data.bookclass[i].bookInfo.length / 8);
                } else {
                    for (var m = 1; m <= 6; m++) {
                        cc += "<div class='number' >" + m + "</div>";
                    }
                    cc += "<div class='number' >" + "···" + "</div>" + "<div class='number' >" + Math.ceil(data.bookclass[
                        i].bookInfo.length / 8) + "</div>" + "<div class='up' >" + "</div>" + "</div>" +
                        "<div class='sum'>" + "共" + Math.ceil(data.bookclass[i].bookInfo.length / 8) + "页" + "</div>"
                }
                $("#sections").children("section:eq(" + i + ")").children("#footer").append(cc);
                total[i] = Math.ceil(data.bookclass[i].bookInfo.length / 8);
                $('.pages').eq(i).find('.number').eq(0).toggleClass('numbers');
 
            }
 
            //底部分页导航数字的点击
            $('.number').click(function () {
                a = $(this).text();
                currentPage = a;
                $('.pages').eq(currentcategory - 1).find('.number').removeClass('numbers');
                $('.pages').eq(currentcategory - 1).find('.number').eq(Math.abs(currentPage - 1)).toggleClass('numbers');
                filling(currentPage, data);
            });
 
             //底部分页导航向左的点击
            $('.on').click(function () {
                if (currentPage > 1) {
                    currentPage--;
                    $('.pages').eq(currentcategory - 1).find('.number').removeClass('numbers');
                    $('.pages').eq(currentcategory - 1).find('.number').eq(Math.abs(currentPage - 1)).toggleClass('numbers');
                    filling(currentPage, data);
                } else {
                    currentPage == 1;
                };
            })
              //底部分页导航向右的点击
            $('.up').click(function () {
                if (currentPage < Math.ceil(data.bookclass[currentcategory - 1].bookInfo.length / 8)) {
                    currentPage++;
 
                    $('.pages').eq(currentcategory - 1).find('.number').removeClass('numbers');
                    $('.pages').eq(currentcategory - 1).find('.number').eq(Math.abs(currentPage - 1)).toggleClass('numbers');
                    filling(currentPage, data);
                } else {
                    currentPage == Math.ceil(data.bookclass[currentcategory - 1].bookInfo.length / 8);
                }

            })

            // 书本的点击
            $('body').on('click','.book_1',function(){                
                $("#detail").css({display:"flex",width:"701px",height:"752px"});
                $(".cover").css("backgroundcolor","rgba(223,223,223,0.6)");
                $('.cover').css("display","block");
                $('#detail').css("display","flex");
                $('.cover').animate({
                    backgroundcolor:'rgba(223,223,223,0.9)'},'500'
                );
                $('#detail').animate({
                    width: '901px',
                    height: '952px'},'500'
                );
                $('.thisbook').remove();
                $('.authorintroduction').remove();
                $('.bookintroduction').remove();
                fillbook(data);
            })

            // 书本右上角的关闭
            $('#smallclose').click(function(){
                $("#detail").css("display","none");
                $('.cover').css("display","none");
            })

            // 书本详情的填充
            function fillbook(data){
                var aa='';
                aa = "<div class='thisbook'>"+"<div class='covering'>"+"<img class = imgimg src =" + data.bookclass[currentcategory-1].bookInfo[(currentnumber-1)+(currentPage-1)*8].cover + "/ >"+"</div>"+'<div class="little">'
                    +'<div class="thisname">'+data.bookclass[currentcategory-1].bookInfo[(currentnumber-1)+(currentPage-1)*8].title+'</div>'+'<div class="thisauthor">'+'<img src="./img/authorimg.png" class="authorimg">'
                    +"<span class='words'>"+data.bookclass[currentcategory-1].bookInfo[(currentnumber-1)+(currentPage-1)*8].author+"</span>"+"</div>"+"<div class='thispress'>"+"<img src='./img/pressimg.png' class='pressimg'>"
                    +'<span class="words">'+data.bookclass[currentcategory-1].bookInfo[(currentnumber-1)+(currentPage-1)*8].publish+'</span>'+'</div>'+'<br>'+'<div class="thistime">'+'<img src="./img/timeimg.png" class="timeimg">'
                    +'<span class="words">'+data.bookclass[currentcategory-1].bookInfo[(currentnumber-1)+(currentPage-1)*8].publishDate+'</span>'+'</div>'+'<div class="thisbooks">'+'<img src="./img/booksimg.png" class="booksimg">'
                    +'<span class="words">'+'图书馆藏书:'+data.bookclass[currentcategory-1].bookInfo[(currentnumber-1)+(currentPage-1)*8].library[0].total+'本'+'<span class="position">'+data.bookclass[currentcategory-1].bookInfo[(currentnumber-1)+(currentPage-1)*8].library[0].position+'</span>'+'</span>'+'</div>'+'<br>'+'<br>'
                    +'<div class="contactbook">'+'<div class="contactbookimg">'+'</div>'+'<a class="href" href=' + data.bookclass[currentcategory-1].bookInfo[(currentnumber-1)+(currentPage-1)*8].bookUrl[0].doubanUrl +'>'+'<img src="./img/doubanimg.png" class="doubanimg" >'+'</a>'
                    +'<a href=' + data.bookclass[currentcategory-1].bookInfo[(currentnumber-1)+(currentPage-1)*8].bookUrl[0].zhihuUrl +' class="href">'+'<img src="./img/zhihuimg.png" class="zhihuimg">'+'</a>'+'</div>'+'<div class="contactshell">'+'<div class="contactshellimg">'+'</div>'
                    +'<a href=' + data.bookclass[currentcategory-1].bookInfo[(currentnumber-1)+(currentPage-1)*8].buyUrl[0].jDUrl +' class="href">'+'<img src="./img/JDimg.png" class="JDimg">'+'</a>'+'<a href=' + data.bookclass[currentcategory-1].bookInfo[(currentnumber-1)+(currentPage-1)*8].buyUrl[0].DangUrl +' class="href">'+'<img src="./img/dangdangimg.png" class="dangdangimg">'+'</a>'
                    +'<a href=' + data.bookclass[currentcategory-1].bookInfo[(currentnumber-1)+(currentPage-1)*8].buyUrl[0].AmazonUrl +' class="href">'+'<img src="./img/aimg.png" class="aimg">'+'</a>'
                    +'</div>'+'</div>'+'</div>'+'<div class="authorintroduction">'+'<span class="authorintro">'+'作者简介'+'</span>'+'<p class="authorword">'
                    +data.bookclass[currentcategory-1].bookInfo[(currentnumber-1)+(currentPage-1)*8].ahthorIntro+'</p>'+'</div>'
                    +'<div class="bookintroduction">'+'<span class="bookintro">'+'书籍简介'+'</span>'+'<p class="bookword">'+data.bookclass[currentcategory-1].bookInfo[(currentnumber-1)+(currentPage-1)*8].bookIntro
                    +'</p>'+'</div>';
                $('.y1').after(aa);
            }


              //大数据的填充
            function filling(current, data) {
                $('.Book').remove();
                for (var n = 0; n < data.bookclass.length; n++) {
                    for (var j = (current - 1) * 8; j <= ((current - 1) * 8 + 7) && j < data.bookclass[n].bookInfo.length; j++) {
 
                        var Book1 = document.getElementsByClassName("Book");
                        Book1 = '';
                        Book1 += "<div class = 'Book'>" + "<div class = 'book_1'>" + "<img src = " + data.bookclass[n].bookInfo[
                            j].cover + "/>" + "</div>" + "<div class = 'stars'>" + "</div>" +
                            "<div class = 'bookname'>" + data.bookclass[n].bookInfo[j].title + "</div>" +
                            "<div class = 'author'>" + data.bookclass[n].bookInfo[j].author + "</div>" + "</div>";
                        $('section').find('#bookTemplate').eq(n).append(Book1);
 



                        var bb = '';
                        for (var k = 0; k < data.bookclass[n].bookInfo[j].socre; k++) {
                            bb += "<div class='star'>" + "</div>";
                        }
                        for (var l = 0; l < 5 - data.bookclass[n].bookInfo[j].socre; l++) {
                            bb += "<div class='star1'>" + "</div>";
                        }
                        if (j < 8) {
                            $("#sections").children("section:eq(" + n + ")").children("#bookTemplate").children(
                                ".Book:eq(" + j + ")").children(".stars").append(bb);
                        } else {
                            $("#sections").children("section:eq(" + n + ")").children("#bookTemplate").children(
                                ".Book:eq(" + (j - (currentPage - 1) * 8) + ")").children(".stars").append(bb);
                        }
 
                    }
                }
                particulars();
            }
 

            // 设置封面新属性
             function particulars() {
                    var bookbook = document.getElementById("bookTemplate");
                var imgs = bookbook.getElementsByTagName('img');
                for(var j=0;j<data.bookclass.length;j++){
                for (var i = 0; i < imgs.length; i++) {
                    $("section").eq(j).find('img').eq(i).attr("test",i);
                            (function (n) {
            imgs[i].onclick = function () {
            currentnumber = n+1;
            }
        })(i)
                }
                }
            }



        },
 
        error: function (error) {
            alert(error)
        }
 
    });
 
})
 
 // 点击分类导航事件
function navigation() {
    //获取鼠标点击的标签和要切换内容的元素
    var tits = document.getElementById("tit");
    var sectionss = document.getElementById("sections");
    var titles = tits.getElementsByTagName('a'),
        divs = sectionss.getElementsByTagName('section');
    if (titles.length != divs.length)
        return;
    //遍历titles下的所有li
    for (var i = 0; i < titles.length; i++) {
        titles[i].id = i;
        (function (n) {
            titles[i].onclick = function () {
                //清除所有li上的class
                currentcategory = n + 1;
                for (var j = 0; j < titles.length; j++) {
                    titles[j].className = '';
                    divs[j].style.display = 'none';
                }
                //设置当前为高亮显示
                this.className = 'select';
                divs[this.id].style.display = 'block';
            }
        })(i)
    }
}

