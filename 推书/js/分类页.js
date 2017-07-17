//加载
window.onload = function () {
    //获取对象
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('span');
    var index = 1;
    var len = 3;
    var animated = false;
    var interval = 2500;
    var timer;

/*********************点击小圆点触发的事件**************************/
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].onclick = function () {

            //定义在过渡的时候，点击事件不发生
            if (animated) {
                return;
            }

            //定义在被点击的时候，再点击事件不发生
            if(this.className == 'on') {
                return;
            }

            var myIndex = parseInt(this.getAttribute('index'));
            var offset = -1280 * (myIndex - index);

            animate(offset);
            index = myIndex;
            showButton();
            play();
        }
    }

/***************************动画事件*******************************/
    function animate (offset) {
        if (offset == 0) {
            return;
        }
        animated = true;
        var time = 250;
        var inteval = 1;

        //一张图片滚动的速度
        var speed = offset/(time/inteval);
        var left = parseInt(list.style.left) + offset;

        var go = function (){

            //判断图片移位是否在条件范围内，在则事件发生，不在则调整
            if ( (speed > 0 && parseInt(list.style.left) < left) ||
                (speed < 0 && parseInt(list.style.left) > left)) {
                list.style.left = parseInt(list.style.left) + speed + 'px';
                setTimeout(go, inteval);
            }
            else {
                list.style.left = left + 'px';
                if(left>-1280){
                    list.style.left = -1280 * len + 'px';
                }
                if(left<(-1280 * len)) {
                    list.style.left = '-1280px';
                }
                animated = false;
            }
                }

                go();
            }

/***************************圆点样式变化事件*******************************/
    function showButton() {
        for (var i = 0; i < buttons.length ; i++) {
            if( buttons[i].className == 'on'){
                buttons[i].className = '';
                break;
            }
        }
        buttons[index - 1].className = 'on';
    }

/***************************轮播自动事件*******************************/
            function play() {
                timer = setTimeout(function () {
                if (animated) {
                    return;
                }

                //实现轮播无缝连接
                if (index == 3) {
                    index = 1;
                }
                else {
                    index += 1;
                }

                animate(-1280);
                showButton();
                play();}, interval);
            }

            function stop() {
                clearTimeout(timer);
            }

            play();

        }