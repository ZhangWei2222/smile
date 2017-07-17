
window.onload = function(){
	//获取鼠标点击的标签和要切换内容的元素
	var tits = document.getElementById("tit");
	var sectionss = document.getElementById("sections");
	var titles = tits.getElementsByTagName('a'),
	divs = sectionss.getElementsByTagName('section');
	alert(titles.length); alert(divs.length);
	if(titles.length != divs.length)
	return;
	//遍历titles下的所有li
	for(var i = 0;i<titles.length;i++){
		titles[i].id = i;
		titles[i].onclick = function(){
			//清除所有li上的class
			for(var j = 0;j<titles.length;j++){
				titles[j].className = '';
				divs[j].style.display = 'none';
			}
			//设置当前为高亮显示
			this.className = 'select';
			divs[this.id].style.display ='block';
		}
	}
}