// JavaScript Document
//判断浏览器兼容提示
$(document).ready(function(){ 
		var DEFAULT_VERSION = 9.0;  
		var ua = navigator.userAgent.toLowerCase();  
		var isIE = ua.indexOf("msie")>-1;  
		var safariVersion;  
		if(isIE){  
		safariVersion =  ua.match(/msie ([\d.]+)/)[1];  
	}  
	if(safariVersion <= DEFAULT_VERSION ){  
		  // 进行你所要的操作  
		 $('.Iepop').show();
	};  

});

$(function(){
//百度分享
window._bd_share_config={
	"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"2","bdSize":"24"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];
//百度分享结束

	
});