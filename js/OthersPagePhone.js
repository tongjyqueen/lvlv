/**
 * Created by hope on 2016/1/18.
 */
window.onresize = function () {
    //新的rem？= 标准的rem/标准的可视区宽度*新的可视区的宽度
    document.documentElement.style.fontSize = 75 / 750 * document.documentElement.clientWidth + "px";

    var oClick = document.getElementById("aOpenApp");
    //alert(oClick.href)

    oClick.href = "javascript:;";

    oClick.onclick = openApp;

};


window.onload = function () {
    //新的rem？= 标准的rem/标准的可视区宽度*新的可视区的宽度
    document.documentElement.style.fontSize = 75 / 750 * document.documentElement.clientWidth + "px";
    
    
    //跳转函数
    BeingJump();

    

};
