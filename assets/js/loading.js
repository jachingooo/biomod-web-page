/*******************************************  
 *   
 * 创建人：  
 * 创建时间：
 * 创建说明：
 * 修改人：  
 * 修改时间：  
 * 修改说明：  
 *   
*********************************************/  
  
//获取浏览器页面可见高度和宽度  
var _PageHeight = document.documentElement.clientHeight,  
    _PageWidth = document.documentElement.clientWidth;  
//计算loading框距离顶部和左部的距离（loading框的宽度为215px，高度为61px）  
var _LoadingTop = _PageHeight > 61 ? (_PageHeight - 61) / 2 : 0,  
    _LoadingLeft = _PageWidth > 215 ? (_PageWidth - 215) / 2 : 0;  
// 在页面未加载完毕之前显示的loading Html自定义内容  

var _innerHtml = '<div class="l-wrapper">'+
				   '<img src="assets/images/background/loading.gif" style="position:fixed;top:30%;left:27%;">'+
				   '</div>';
var _LoadingHtml = '<div id="loadingDiv" style="position:fixed;left:0;right:0;top:0px;bottom:0;background:#000;opacity:1;filter:alpha(opacity=80);z-index:10000;">'+
					_innerHtml+
					'</div>';  
//呈现loading效果  
document.write(_LoadingHtml);   
  
//window.onload = function () {  
//    var loadingMask = document.getElementById('loadingDiv');  
//    loadingMask.parentNode.removeChild(loadingMask);  
//};  
  
//监听加载状态改变  
document.onreadystatechange = completeLoading;  
  
//加载状态为complete时移除loading效果  
function completeLoading() {  
    if (document.readyState == "complete") {  
        var loadingMask = document.getElementById('loadingDiv');  
        loadingMask.parentNode.removeChild(loadingMask); 
       	// document.documentElement.style.overflow = 'scroll';
    } else{
    	// document.documentElement.style.overflow = 'hidden'; 
    }
}  