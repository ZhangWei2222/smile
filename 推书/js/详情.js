var url = "http://vtmer.cn/class"
$(document).ready(function () {
    $.ajax({
        url: url,
        type: 'GET',
        dataType: 'json',
 
 
        success: function (data) {
             console.log(data)
          $('.book_1').click(function(){
          	alert(11);
          })
        },

        error: function (error) {
            alert(error)
        }
     })
})