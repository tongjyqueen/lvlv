/**
 * Created by hope on 2016/1/18.
 */
function openApp() {
    var _url = window.location.href;
    _url = _url.substring(_url.lastIndexOf('/'));
    //alert(navigator.userAgent.match(/(iPhone|iPod|iPad);?/i))
    if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i)) { //IOS
        /*window.location = "iOSLvLvApp://lvlvlaw.com";
        window.location = "itms://itunes.apple.com/cn/app/lu-lu/id1059306480?l=en&mt=8";*/
        _url = _url.replace("?", "&");
        window.location = "iOSLvLvApp://" + _url;
        window.setTimeout(function () {
            window.location = "itms-apps://itunes.apple.com/cn/app/lu-lu/id1059306480?l=en&mt=8";
        },
          2000);
    } else if (navigator.userAgent.match(/android/i)) {
        function beOpen() {
            var timeout, t = 1000, hasApp = true;

            setTimeout(function () {
                if (hasApp) {
                    //alert('安装了app');
                } else {
                    //alert('未安装app');
                    //alert('abc');
                    submitLoding();
                    return;
                }
                document.body.removeChild(ifr);
            }, 2000)

            var t1 = Date.now();
            var ifr = document.createElement("iframe");
            var url = "lvlv://lvlvlaw.com?param=" + _url;
            ifr.setAttribute('src', url);
            ifr.setAttribute('style', 'display:none');
            document.body.appendChild(ifr);
            timeout = setTimeout(function () {
                var t2 = Date.now();
                if (!t1 || t2 - t1 < t + 100) {
                    hasApp = false;
                }
            }, t);
        }

        var oCoverLayer = document.getElementById("CoverLayer");
        var oPromptBox = document.getElementById("PromptBox");
        oCoverLayer.style.display = "block";
        oPromptBox.style.display = "block";
        var oYes = document.getElementById("yes");
        var oNo = document.getElementById("no");
        var oBack = document.getElementById("Img");
        oYes.onclick = function () {
            oCoverLayer.style.display = "none";
            oPromptBox.style.display = "none";
            beOpen();
        };
        oNo.onclick = function () {
            oCoverLayer.style.display = "none";
            oPromptBox.style.display = "none";

            window.location = "/APP/Lvlv.apk";
        };
        oBack.onclick = function () {
            oCoverLayer.style.display = "none";
            oPromptBox.style.display = "none";
        };
    }
}


function submitLoding() {
    document.form1.submit();
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return "";

};

//跳转函数

function BeingJump(){

    var oClick = document.getElementById("aOpenApp");
    //alert(oClick)

    //如果是IOS，并且不是从引导页自动调过来的，则直接跳至引导页
    if (navigator.userAgent.match(/(iPhone|iPod|iPad);?/i) && getQueryString("autoback") != "true") { //IOS
        oClick.href = "javascript:;";
        oClick.onclick = submitLoding;
        return;
    } else {
        oClick.href = "javascript:;";
        oClick.onclick = openApp;
    }
}
