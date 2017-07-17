var pageSize = "2";//每页行数
var currentPage = "1";//当前页
var totalPage = "0";//总页数
var rowCount = "0";//总条数
var params="";//参数

var url="http://vtmer.cn/class";//action

$(document).ready(function(){//jquery代码随着document加载完毕而加载
	
	//分页查询
	function queryForPages(){
		$.ajax({
	        url:url,
	        type:'GET',
	        dataType:'json',
	        data:"qo.currentPage="+currentPage+"&qo.pageSize="+pageSize+params,
	        success:function callbackFun(data){
	        			//解析json
	            	 	var info = eval("("+data+")");
	        			//清空数据
				clearDate();
		            	fillTable(info);
	    		 }
	    });
	}


	
   //清空数据
   function clearDate(){
	 $("#t_body").html("");
   }
			
  
  
  //首页
  $(".number").click(function(){
  	currentPage="1";
  	queryForPages();
  });
  
  //上一页
  $("#previous").click(function(){
		if(currentPage>1){
			currentPage-- ;
		}
		queryForPages();
	});
	
  //下一页
  $("#next").click(function(){
		if(currentPage<totalPage){
			currentPage++ ;
		}
		queryForPages();
  });

   //尾页
  $("#last").click(function(){
	currentPage = totalPage;
	queryForPages();
  });
	   
   
});