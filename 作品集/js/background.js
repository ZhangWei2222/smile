(function(){
    $(document).ready(function() {
    //定义随机函数  
    function RandomNum(num1, num2) {
        return Math.floor(Math.random() * (num2 - num1 + 1) + num1);
    }
    //设置数组存六边形地址
    var aHexagonUrl = ['img/bg1.png', 'img/bg2.png', 'img/bg3.png', 'img/bg4.png', 'img/bg5.png', 'img/bg6.png', 'img/bg7.png', ];
    var visualWidth = document.documentElement.clientWidth;
    var visualHeight = document.documentElement.clientHeight;
    /**背景六边形运动函数**/
    function showBg() {
        //六边形容器
        var $hexagonContainer = $('#haxagons');
        // 随机六张图
        function getImagesName() {
            return aHexagonUrl[[Math.floor(Math.random() * 6)]];
        }
        //创建六边形函数
        function createHexagon() {
            var url = getImagesName();
            return $('<div class="HexagonBox" />').css({
                'width': '1.92rem',
                'height': '2.106667rem',
                'position': 'absolute',
                'backgroundImage': 'url(' + url + ')',
                'backgroundSize': '100%,100%'
            });
        }
        //六边形运动
        function runBg() {
            var startPositionLeft = RandomNum(-79, (visualWidth - 79)),
                endPositionTop = visualHeight + 79,
                endPositionLeft = RandomNum(0, (visualWidth - 79)),
                startPositiontop = RandomNum(-144, -79),
                duration = RandomNum(8000, 11000);
            //创建一个六边形
            var $Hexagon = createHexagon();
            //六边形初始位置
            $Hexagon.css({
                'left': startPositionLeft,
                'top': startPositiontop
            });
            //追加到六边形容器
            $hexagonContainer.append($Hexagon);
            //动画
            $Hexagon.transition({
                top: endPositionTop,
                left: endPositionLeft,
                duration: duration,
                easing: 'ease-out',
                complete: function() {
                    $(this).remove() //结束后删除
                }
            });
        }
        //定时器立即执行
        var interval;
        runBg();
        clearInterval(interval);
        interval = setInterval(runBg, 1300);
    }
    showBg();
});

})();



