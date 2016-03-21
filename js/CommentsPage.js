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
//function openApp() {
//    var _url = window.location.href;
//    _url = _url.substring(_url.lastIndexOf('/'));
//    //alert(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i))
//    if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) { //IOS
//        /*window.location = "iOSLvLvApp://lvlvlaw.com";
//        window.location = "itms://itunes.apple.com/cn/app/lu-lu/id1059306480?l=en&mt=8";*/
//        _url = _url.replace("?", "&");
//        window.location = "iOSLvLvApp://" + _url;
//        window.setTimeout(function () {
//            window.location = "itms-apps://itunes.apple.com/cn/app/lu-lu/id1059306480?l=en&mt=8";
//        },
//          2000);
//    } else if (navigator.userAgent.match(/android/i)) {
//        function beOpen() {
//            var timeout, t = 1000, hasApp = true;

//            setTimeout(function () {
//                if (hasApp) {
//                    //alert('安装了app');
//                } else {
//                    //alert('未安装app');
//                    //alert('abc');
//                    submitLoding();
//                    return;
//                }
//                document.body.removeChild(ifr);
//            }, 2000)

//            var t1 = Date.now();
//            var ifr = document.createElement("iframe");
//            var url = "lvlv://lvlvlaw.com?param=" + _url;
//            ifr.setAttribute('src', url);
//            ifr.setAttribute('style', 'display:none');
//            document.body.appendChild(ifr);
//            timeout = setTimeout(function () {
//                var t2 = Date.now();
//                if (!t1 || t2 - t1 < t + 100) {
//                    hasApp = false;
//                }
//            }, t);
//        }

//        var oCoverLayer = document.getElementById("CoverLayer");
//        var oPromptBox = document.getElementById("PromptBox");
//        oCoverLayer.style.display = "block";
//        oPromptBox.style.display = "block";
//        var oYes = document.getElementById("yes");
//        var oNo = document.getElementById("no");
//        var oBack = document.getElementById("Img");
//        oYes.onclick = function () {
//            oCoverLayer.style.display = "none";
//            oPromptBox.style.display = "none";
//            beOpen();
//        };
//        oNo.onclick = function () {
//            oCoverLayer.style.display = "none";
//            oPromptBox.style.display = "none";

//            window.location = "/APP/Lvlv.apk";
//        };
//        oBack.onclick = function () {
//            oCoverLayer.style.display = "none";
//            oPromptBox.style.display = "none";
//        };
//    }
//}

$(function () {
    //新的rem？= 标准的rem/标准的可视区宽度*新的可视区的宽度
    document.documentElement.style.fontSize = 75 / 750 * document.documentElement.clientWidth + "px";

    $(".comment").on("touchstart", function () {
        if ($(this).parent(".footerMore").siblings(".commentBox").hasClass("hide")) {
            $(this).parent(".footerMore").siblings(".commentBox").removeClass("hide").addClass("show");
        } else {
            $(this).parent(".footerMore").siblings(".commentBox").removeClass("show").addClass("hide");
        }

    });

    //var oClick = document.getElementById("aOpenApp");
    //alert(oClick.href)

    //跳转函数
    BeingJump();
})


