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


$(function () {
    //新的rem？= 标准的rem/标准的可视区宽度*新的可视区的宽度
    document.documentElement.style.fontSize = 75 / 750 * document.documentElement.clientWidth + "px";

    $(".comment").on("touchstart", function () {
        if ($(this).parent(".footerMore").siblings(".commentBox").hasClass("hide")) {
            if ($(this).children(".com").text() != 0) {
                $(this).parent(".footerMore").siblings(".commentBox").removeClass("hide").addClass("show");
            }

        } else {
            $(this).parent(".footerMore").siblings(".commentBox").removeClass("show").addClass("hide");
        }

    });
    //var oClick = document.getElementById("aOpenApp");
    //alert(oClick.href)

    //跳转函数
    BeingJump();

})

