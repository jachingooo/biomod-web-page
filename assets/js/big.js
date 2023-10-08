$(function(){
            /*
             smallimg   // 小图
             bigimg  //点击放大的图片
             mask   //黑色遮罩
             */
            var obj = new zoom('mask', 'bigimg','smallimg');
            obj.init();
        })