
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
                      +"<div class = 'stars'>"+"</div>"+"<div class = 'bookname'>"+data.bookclass[i].bookInfo[j].title+"</div>"
                      +"<div class = 'author'>"+data.bookclass[i].bookInfo[j].author+"</div>"+"</div>";
            $('section').find('#bookTemplate').eq(i).append(Book1);

            var bb='';
            for(var k = 0;k<data.bookclass[i].bookInfo[j].socre;k++){
                bb += "<img class='star' src='./img/blackstar.png'>" + "</img>";}
                for(var l=0;l<5-data.bookclass[i].bookInfo[j].socre;l++){
                bb += "<img class='star' src='./img/whitestar.png'>" + "</img>";}
            $("#sections").children("section:eq("+i+")").children("#bookTemplate").children(".Book:eq("+j+")").children(".stars").append(bb);
            }

            var cc='';
            cc += "<div class='pages'>"+"<div class='on'>"+"</div>"
            if(Math.round(data.bookclass[i].bookInfo.length/8)<=6){
                for(var m = 1;m <= Math.round(data.bookclass[i].bookInfo.length/8);m++){
                    cc +="<div class='number'>"+m+"</div>";}
                    cc += "<div class='up'>"+"</div>"+"</div>"+"<div class='sum'>"+"共"+Math.round(data.bookclass[i].bookInfo.length/8)+"页"+"</div>"}
            else{
                 for(var m = 1;m <= 6;m++)
                     {cc +="<div class='number' onclick = click()>"+m+"</div>";}
                     cc += "<div class='number'>"+"···"+"</div>"+"<div class='number'>"+Math.round(data.bookclass[i].bookInfo.length/8)+"</div>"+"<div class='up'>"+"</div>"+"</div>"+"<div class='sum'>"+"共"+Math.round(data.bookclass[i].bookInfo.length/8)+"页"+"</div>"}
                      $("#sections").children("section:eq("+i+")").children("#footer").append(cc);


           }


      },

      error: function (error) {
        alert(error)
      }

    });
  })
