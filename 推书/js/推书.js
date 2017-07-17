//点击人物小头像弹出框
function popup()
{
	document.all.logon.style.display="block";
}

//点击弹出框的叉叉
function close_js()
{
	document.all.logon.style.display="none";
}

function submit_js()
{
	var a=document.getElementById("name").value;  
   	document.getElementById("NAME").innerHTML=a;
	document.all.logon.style.display="none";
	document.all.NAME.style.display="block";
	document.all.login_icon.style.display="none";

}