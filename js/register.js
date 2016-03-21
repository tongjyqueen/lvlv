/**
 * Created by hope on 2016/1/18.
 */
/*window.onresize = function(){
    //新的rem？= 标准的rem/标准的可视区宽度*新的可视区的宽度
    document.documentElement.style.fontSize = 64/640*document.documentElement.clientWidth + "px";

};*/

window.onload = function(){
    var oLoading = document.getElementsByClassName("loading")[0];

    oLoading.style.display = "none";

    /*//新的rem？= 标准的rem/标准的可视区宽度*新的可视区的宽度
    document.documentElement.style.fontSize = 64/640*document.documentElement.clientWidth + "px";
*/

    /*校验邮箱或手机号*/

    var reEmail = /^\w+@([0-9][a-z]){2,6}\.[a-z]{2,3}(\.[a-z]{2})?$/;
    var rePhone = /^1\d{10}$/;
    var reUserPassword = /^\w{6,20}$/;
    var oUserName = document.getElementById("UserName");
    var oAuthCode = document.getElementById("authCode");
    var oPassword = document.getElementById("Password");
    var oNickName = document.getElementById("NickName");
    var oBtn = document.getElementById("registerButton");
    var oGetCode = document.getElementById("GetCode");

    oBtn.onclick = function(){

        if(reEmail.test(oUserName.value)||rePhone.test(oUserName.value)){
           // alert("用户名合法的");
        }else{
          //  alert("用户名非法的");
            return;
        }

        if(reUserPassword.test(oPassword.value)){
           // alert("密码合法的");
        }else{
           // alert("密码非法的");
            return;
        }

        if(oNickName.value){
           // alert("昵称填好了");
        }else{
          //  alert("昵称没填");
            return;
        }

        /*验证码校验  待做。。。*/


        /*调用接口*/
        $.ajax({
            type: 'POST',
            url: 'api/User/registeruser',
            // data to be added to query string:
            data: { "EmailOrMobile":"454666932@qq.com","Nickname":"mua","UserPassword":"123456","TextCode":"32141","SuccessCode":"32141" },
            // type of data we are expecting in return:

            success: function(data){
                // Supposing this JSON payload was received:
                //   {"project": {"id": 42, "html": "<div>..." }}
                // append the HTML to context object.
                alert(data)
            },
            error: function(xhr, type){
                alert('Ajax error!')
            }
        })
    };

    oGetCode.onclick = function(){
        oGetCode.innerHTML = "已发送";
        oGetCode.style.color = "#79797A";
    };

};