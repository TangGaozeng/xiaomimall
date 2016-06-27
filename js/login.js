

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


$("input:eq(2)").click(function(){
	var user = $.cookie("name")
	if($("input:eq(0)").val() == JSON.parse(user)["userName"]&&$("input:eq(1)").val() == JSON.parse(user)["pass"]){
		location.href = "index.html"
	}else{
		$(".loginer").css("display","block")
	}

})



