#一、网页加载进度条误区（demo1)
网上很多教程的进度条都依靠定时器实现，即定时几秒显示动画之后再显示页面，可是当用户对内容有了本地缓冲的时候，往往加载并不需要那么久，所以没有效率

#二、通过加载状态事件制作进度条(demo2)

document.onreadystatechange 页面加载状态改变时的事件

document.readyState 返回当前文档的状态

1. uninitialized 还未开始载入
2. loading 载入中
3. interactive 已加载，文档与用户可以开始交互
4. complete 载入完成

#三、css3进度条小动画
代码比图片加载速度快一些，所以我们尽量不用图片加载

#四、定位在头部的进度条
从上到下加载

#五、实时获取加载数据的进度条
1. 建立图像对象：图像对象名称 = new Image()
2. 属性：border complete height
3. 事件：onload onnerror onkeydown onkeypress
4. src属性一定要写到onload的后面，否则程序在IE中会出错

