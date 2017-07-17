
 var url = "http://vtmer.cn/class"
  $(document).ready(function () {
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json',


      success: function (data) {
        console.log(data)
        for(var i = 0;i<data.bookclass.length;i++){
            for(var j = 0;j<data.bookclass[i].bookInfo.length;j++){
            var Book1 = document.getElementsByClassName("Book");
            Book1 = '';
            Book1 += "<div class = 'Book'>"+"<div class = 'book_1'>" + "<img src = " +data.bookclass[i].bookInfo[j].cover+"/>" + "</div>"
        +"<div class = 'stars'>"+"</div>"+
        "<div class = 'bookname'>"+data.bookclass[i].bookInfo[j].title+"</div>"
        +"<div class = 'author'>"+data.bookclass[i].bookInfo[j].author+"</div>"+"</div>";
                    $('section').find('#bookTemplate').eq(i).append(Book1);
                    var bb='';
                        for(var k = 0;k<data.bookclass[i].bookInfo[j].socre;k++){

                            bb += "<img src='./img/blackstar.png'>" + "</img>";
                        }
                        $("#sections").children("section:eq("+i+")").children("#bookTemplate").children(".Book:eq("+j+")").children(".stars").append(bb);
            }
        }

      },

      error: function (error) {
        alert(error)
      }

    });
  })
