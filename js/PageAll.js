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
