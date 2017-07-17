navigation();

//点击人物小头像弹出框
function popup()
{
	document.all.logon.style.display="flex";
}

//搜索
function buttonn(){
	var a=document.getElementById('search').value;
    localStorage.value=a;
    console.log(localStorage.value);
}

//点击弹出框的叉叉
function close_js()
{
	document.all.logon.style.display="none";
}

//提交
function submit_js()
{
	var a=document.getElementById("name").value;
	document.getElementById('NAME').innerHTML=a;
	if(	document.all.NAME.style.display="none"){
	document.getElementById('class3').style.display='flex';}
	document.all.logon.style.display="none";
	document.all.NAME.style.display="block";
	localStorage.number = 1;
	console.log(localStorage.number);
	document.all.login_box.style.display="none";
	if(localStorage.number){
		document.getElementById('class3').style.display='none';
	}
}

 // 点击分类导航事件
function navigation() {
    var tits = document.getElementById("classification");
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
