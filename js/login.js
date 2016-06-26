

$("#login .login-er img").click(function(){
	if($(this).attr("src") == "../img/login-1.jpg"){
		$(this).attr("src","../img/login-3.jpg")
		$("#login .login-er_Ineer").css("display","block");
		$("#login .logins").css("display","none");
	}else{
		$(this).attr("src","../img/login-1.jpg")
		$("#login .login-er_Ineer").css("display","none");
		$("#login .logins").css("display","block")
	}
	
})
