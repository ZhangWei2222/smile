(function(){
    window.onload = function() {
    myAlert();
}

function myAlert() {
    var oLoginBtn = document.getElementById('loginBtn');
    oLoginBtn.onclick = function() {
        //遮罩层
        var sHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        var sWidth = document.documentElement.scrollWidth || document.body.scrollWidth;
        var oMask = document.createElement("div");
        oMask.id = "mask";
        oMask.style.height = sHeight + "px";
        oMask.style.width = sWidth + "px";
        document.body.appendChild(oMask);
        oMask.addEventListener('touchmove', function(event) {
            event.preventDefault();
        }, false);
        //登录框
        var oAlert = document.createElement("div");
        oAlert.id = "alertbox";
        oAlert.className = "moveIn";
        document.body.appendChild(oAlert);
        oAlert.innerHTML = "<img src='img/home/BTN关闭.png'alt='close' id='alertClose'><form  id='Form'><ul><li><input type='text' name='yourname'  placeholder='账号'' id='useremail'/></li><li><input type='password' name='yourpassword'  placeholder='密码' id='psw'/></li><li id='Msg'><span>登录失败！请检查账号密码。</span></li></ul><input type='button' name='submitBTN' value='' id='submitBTN'></form>";
        myLogin();
        //关闭
        var oClose = document.getElementById("alertClose");
        oClose.onclick = function() {
            document.body.removeChild(oMask);
            document.body.removeChild(oAlert);
        }
    }
}
})();


