#1.命名class/id，可以前面来个总的+空格+分类，css中便可把通用样式先写好

    <i class="ui_icon quote_before"></i>
    达尔文说，有时候，正是悲伤就像动物趋利避害的本能一样，引导着我们去做出最有利的行动。黑暗是另外一种光明。
    <i class="ui_icon quote_after"></i>

	css:
        .ui_icon{
            width: 15px;
            height: 15px;
            display: inline-block;
            background-repeat: no-repeat;
            font-size: 0px;
            overflow: hidden;
            background-image: url(./img/timeline.png);
            margin-right: 5px;
            vertical-align: bottom;
        }
        .quote_after{
            background-position: -986px -102px;
        }
        .quote_before{
            background-position: -986px -85px;
        }

#2.编写一个网页时，可先根据网页的内容，写出dom树，再写html ,css
![](http://oncweb6po.bkt.clouddn.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20170713154123.png)

#3.一个盒子里，如果放图片，文字，最好在主盒子里设置overflow:hidden

#4.js通用样式

	var g = function (id){
	    return document.getElementById(id);
	}
	//调用g(id) 即可返回id名字，而不需要输入document.getElementById

	var g_tpl = function( id ){
	    return g('tpl_'+ id).innerHTML;
	}
	//调用g_tpl(id)即可返回他的html内容

> 如何修改html中class id html等内容呢？
> 
1. 将要修改的内容在html中用{}括起来。
2. 调用g_tpl(id),采用replace方法

	<div id="tpl_content_item">
		 <div class="content_item content_item_{position} {isFirst}">
		 </div>
	</div>
	<script>
		var tpl_item = g_tpl('content_item'); 
		var tpl_item = tpl_item.replace(/\{position\}/ , i%2?'right':'left')..replace(/\{isFirst\}/ , isFirst_at_month?'first':'')
	</script>


#5.前端模板
###(1).什么是前端模板
模板结构+模板内容——合并程序

###(2).如何构建前端模板
1. 先按照页面编写一个时的html页面（按老规矩）
2. 在body后面新建一个div，且是隐藏的div。
3. 编写js

**1.通用函数，获取id，以及html**

	var g = function ( id ){
	    return document.getElementById(id);
	}
	
	var g_tpl = function( id ){
	    return g('tpl_'+ id).innerHTML;
	}

**2.格式化数据（把data里面的数据整合成自己想要的）**

	{
	    2014:{
	        2:{
	            {
	                date : '2014-2-28',
	                year : '2014',
	                month : '2',
	                ...
	            }
	            ...//一个月若干个日志
	        }
	        3：{}
	        ...//一年内若干个月份
	    }
	    2013：{}
	    ...//若干个年
	}
	这是我们需要的数据，可是data提供的是完整的2014-2-28,并没有具体的年，月，所以我们需要获取。

----------

	var list ={};
	
	for(var i = 0;i<data.length;i++){
	    var date = new Date( data[i].date );
	    var year = date.getFullYear();
	    var month = date.getMonth() + 1;
	
	    var lunar = GetLunarDateString( date );
	
	    if( !list[year] ){ list[year]={} }
	    if( !list[year][month] ){ list[year][month]=[] }
	
	    var item = data[i];
	
	    item.lunar = lunar[0] + '<br>&nbsp;&nbsp;&nbsp;' + lunar[1];
	    item.year = year;
	    item.month = month;
	    item.like_format = item.like <10000 ? item.like : ( item.like /10000 ).toFixed(1) + '万';
	
	    list[year][month].push(item);
	}

	1.先创建一个新的数组
	2.通过for循环，依次Date,getFullYear(),getMonth(),GetLunarDateString()方法拿到年月。
	3.并将获取的年月赋值给新建立的item（单个日志）。
	4.最后把日志push给某年某月

**3.HTML生成**
	var html_scrubber_list = [];
	
	var tpl_year = g_tpl('scrubber_year');
	var tpl_month = g_tpl('scrubber_month');
	
	for( y in list ){
	    var html_year = tpl_year.replace( /\{year\}/g,y)
	
	    var html_month = [];
	    for( m in list[y] ){
	
	        html_month.unshift( tpl_month.replace( /\{month\}/g,m));
	
	    }
	    html_year = html_year.replace( /\{list\}/g,html_month.join('') );
	
	    html_scrubber_list.push( html_year );
	}
	
	g('scrubber').innerHTML = html_scrubber_list.join('');

	1.先创建一个新的数组
	2.获取要替换html的id的html（新变量）
	3.通过遍历，把新变量中需要替换的代码用replace方法替换
	4.替换完后将这个新变量push到新数组
	5.最后将新数组join替换掉原来的html（注意要用join('')方法，不然连接默认用，。

**4.滚动特效**

	//获得元素的高度
	var get_top = function(el){
	    return el.offsetTop + 170;
	}
	
	//滚动页面到
	var scroll_top = function(to){
	    window.scroll(0,to);
	}
	//年份，月份点击处理
	var show_year = function(year){
	    console.log(year);
	    var c_year = g('content_year_'+year)
	    var top = get_top(c_year);
	    scroll_top(top);
	}
	
	var show_month = function(year,month){
	    console.log(year,month);
	    var c_month = g('content_month_'+year+'_'+month);
	    var top = get_top(c_month);
	    scroll_top(top);
	
	}

	1.若要实现时间轴，点击某年某月自动跳转。首先需要获取id，将a标签中的id修改为类似scrubber_year_{year}，scrubber_year_{year}_{month}这样的，然后通过replace方法，用获取的数据代替{}括号内的东西。
	2.在a标签中添加onclick()
	3.获取到id后，获得元素的高度，offsetTop(此属性可以获取元素的上外缘距离最近采用定位父元素内壁的距离，如果父元素中没有采用定位的，则是获取上外边缘距离文档内壁的距离。所谓的定位就是position属性值为relative、absolute或者fixed。),加上170是因为父元素距离顶部170。
	3.最后用滚动方法 window.scroll

**5.高亮特效**

	var show_year = function(year){
	    console.log(year);
	    var c_year = g('content_year_'+year);
	    var top = get_top(c_year);
	    scroll_top(top);    
	    expand_year( year,g('scrubber_year_'+year+'_'+month));//往点击事件中加入新的函数
	}
	
	var show_month = function(year,month){
	    console.log(year,month);
	    var c_month = g('content_month_'+year+'_'+month);
	    var top = get_top(c_month);
	    scroll_top(top);
	    highlight_month( g('scrubber_year_'+year+'_'+month) );//往点击事件中加入新的函数
	}
	
----------
	
	//高亮处理 - 月份
	var highlight_month = function( element ){
	    var months = g_class('scrubber_month');
	    for(var i =months.length - 1;i >= 0;i--){
	        months[i].className = months[i].className.replace(/current/g,'');
	    };
	    element.className = element.className + '  current';
	}
	
	//年份点击展开
	var expand_year = function( year ,element){alert(11);
	    var months = g_class('scrubber_month');
	    var show_month = g_class('scrubber_month_in_'+year);
	    var years = g_class('scrubber_year');
	    for(var i = months.length - 1;i >= 0;i--){
	        months[i].style.display = 'none';
	    };
	    for(var i = show_month.length - 1;i >= 0;i--){
	        show_month[i].style.display = 'block';
	    };
	    for(var i =years.length - 1;i >= 0;i--){
	        years[i].className = years[i].className.replace(/current/g,'');
	    };
	    element.className = element.className + '  current';
	}
	
	上述实现原理均为循环移除current 类（replace方法），之后在点击的对象中加入current类

> debugger很久，以后如果有错误，直接审查元素，看看html中是否有实现js中的方法。

**6.固定和自动展开时序菜单效果**

	//页面滚动处理，固定时序菜单的位置，自动展开时序菜单
	window.onscroll = function(){
	    var top = document.body.scrollTop;
	    var scrubber = g('scrubber');
	    if( top > 200){
	        scrubber.style.position = 'fixed';
	        scrubber.style.top = '60px';
	        scrubber.style.left = ( get_body_w() -960 )/2 +'px';
	    }else{
	        scrubber.style.position = '';
	        scrubber.style.top = '';
	        scrubber.style.left = '';
	    }
	
	    update_scrubber_year( top );
	    update_scrubber_month( top );
	}

	1.运用window.onscroll函数
	2.获取滚动条高度（document.body.scrollTop)
	3.判断滚动条高度，如果大于200，改变时序条的样式
	4.加载时序条函数


----------
	var update_scrubber_year =function( top ){
	    var years = g('content').getElementsByClassName('content_year');
	    var tops = [];
	    for(var i = 0;i<years.length;i++){
	        tops.push( years[i].offsetTop);
	    }
	    for(var i = 1;i<tops.length;i++){
	        if( top > tops[i-1] && top < tops[i] ){
	            var year = years[i-1].innerHTML;
	            var s_year = g('scrubber_year_'+year);
	            expand_year(year,s_year);
	        }
	    }
	}
	
	1.获取当前的年份classname
	2.将当前年份的高度存储到新建数组tops中
	3.建立循环，如果滚动条高度大于上一个年份的高度小于当前年份的高度，把classname里面的html换掉
	4.调用高亮函数

	var update_scrubber_month =function( top ){
	    //日志列表中所有的月份标签
	    var months = g('content').getElementsByClassName('content_month');
	    var tops = [];
	    for(var i = 0;i<months.length;i++){
	        tops.push( months[i].offsetTop);
	    }
	
	    //定位 top 在窗口的哪个月份区间
	    for(var i = 1;i<tops.length;i++){
	        if( top > tops[i-1] && top < tops[i] ){
	            var id = months[i-1].id; 
	            highlight_month( g(id.replace('content','scrubber')) );
	        }
	    }
	}

	bug待修复


