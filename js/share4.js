var imgUrl = "http://www.gdibn.com/m/images/logo.png";  //图片LOGO注意必须是绝对路径
       var lineLink = "http://www.gdibn.com/m/images/";   //网站网址，必须是绝对路径
       var descContent = '互动网络(www.gdibn.com)10年的网站开发经验,专注于网站建设，网店开发，广州SEO，企业网站设计，网站企业模板，广州网站设计，网站报价，企业网站设计，域名，空间，服务器等相关服务，著名的广州网站建设公司。自始至终，我们真心对待每一位客户。'; //分享给朋友或朋友圈时的文字简介
       var shareTitle = '广州网站建设_网站推广公司_网站优化_互动网络';  //分享title
       var appid = ''; //apiID，可留空
        
       function shareFriend() {
           WeixinJSBridge.invoke('sendAppMessage',{
               "appid": appid,
               "img_url": imgUrl,
               "img_width": "200",
               "img_height": "200",
               "link": lineLink,
               "desc": descContent,
               "title": shareTitle
           }, function(res) {
               //_report('send_msg', res.err_msg);
           })
       }
       function shareTimeline() {
           WeixinJSBridge.invoke('shareTimeline',{
               "img_url": imgUrl,
               "img_width": "200",
               "img_height": "200",
               "link": lineLink,
               "desc": descContent,
               "title": shareTitle
           }, function(res) {
                  //_report('timeline', res.err_msg);
           });
       }
       function shareWeibo() {
           WeixinJSBridge.invoke('shareWeibo',{
               "content": descContent,
               "url": lineLink,
           }, function(res) {
               //_report('weibo', res.err_msg);
           });
       }
       // 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
       document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
           // 发送给好友
           WeixinJSBridge.on('menu:share:appmessage', function(argv){
               shareFriend();
           });
           // 分享到朋友圈
           WeixinJSBridge.on('menu:share:timeline', function(argv){
               shareTimeline();
           });
           // 分享到微博
           WeixinJSBridge.on('menu:share:weibo', function(argv){
               shareWeibo();
           });
       }, false);