var currentPage = "1"; //当前页
var totalPage = new Array() + ''; //总页数
var total = totalPage.split(",");
var a,b;
var currentcategory = '1';//当前类
var currentnumber = '1';
var url = "http://vtmer.cn/search";

$(document).ready(function () {
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',


        success: function (data) {
            console.log(data)
            filling(1, data);
			navigation();
			replace();

            // 点击分类滑出
            $(".classification").click(function(){
    			$("#classifications").slideToggle("slow");
  			});

            // 填充分页导航
            for (var i = 0; i < data.bookclass.length; i++) {

 
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

            }
 

 

        },

        error: function (error) {
            alert(error)
        }

    })

})

 // 点击分类导航事件
function navigation() {
    var tits = document.getElementById("classifications");
    var titles = tits.getElementsByTagName('a');

    for (var i = 0; i < titles.length; i++) {
        titles[i].id = i;
        (function (n) {
            titles[i].onclick = function () {
            	//设置类状态
                var erer = n+1;
                localStorage.name=erer;
            }
        })(i)
    }

}

// 搜索的东西内容替换
function replace(){
	var text = document.getElementById('word');
	    console.log(localStorage.value);
	text.innerHTML=localStorage.value;
}