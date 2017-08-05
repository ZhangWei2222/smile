window.onload = function(){
    // 通用函数
    var g = function(id){
        return document.getElementById( id );
    }

    var c = function (className){
        return document.getElementsByClassName( className );
    }

   //填充数据
    $.ajax({
        url:'http://139.199.18.137:7777/api/projects',
        type: 'GET',
        dataType: 'json',


        success: function (data) {

            // 改图片地址和填充数据
            for(let i =0;i<data.data.length;i++){
                data.data[i].pic = data.data[i].pic.replace(/image\//g,'http://139.199.18.137:7777/upload/image/');
            }
            var myTemplate = Handlebars.compile(g('worker-template').innerHTML);
            c('workersBox')[0].innerHTML = myTemplate(data.data);

            // 为content加换行符
            var content = c('content');;
            for(let k =0 ;k<content.length;k++){
                var strings = content[k].innerHTML.split('；');
                var m ='';
                for(let j=0;j<strings.length;j++){
                    m += "<li>" + strings[j] + "</li>";
                }
                content[k].innerHTML = m;
            }

            // 设置第一张显示
            c('banner')[0].className = c('banner')[0].className + ' bigImag';
            $('.itroBox').eq(0).find('li').eq(9).css('opacity','1')
            $('.itroBox').eq(0).css('overflow','visible')
            $('.itroBox').eq(0).find('li').css({opacity:'1',transform:'translate3d(0,0,0)'})
        },


        error : function (error) {
            alert(error)
        }

    });


    
}
