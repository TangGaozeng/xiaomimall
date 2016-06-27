function yz(){

	var yzm =  ['0','1','2','3','4','5','6','7','8','9','A','B'
	,'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q'
	,'R','S','T','U','V','W','X','Y','Z']

	var arr = "";
	for(var i = 0;i<5;i++){
	 arr+=yzm[Math.floor((Math.random()*yzm.length))]; 	
	}
	return arr;
}
var yzmTmp = yz();
$(".yzm").html(yzmTmp);
$(".yzm").click(function(){
	yzmTmp = yz();
	$(this).html(yzmTmp);		
})

$(".yz").blur(function(){	
	var yzVal = $(this).val();
	if(yzVal.toLowerCase() !== yzmTmp.toLowerCase()){
		$(this).css("borderColor","red");
		$(".yzmy").html("你输入验证码有误");
		$(".yzmy").css("display","block")
	}
	if(yzVal.length == 0){
		$(this).css("borderColor","red");
		$(".yzmy").html("请输入验证码");
		$(".yzmy").css("display","block")
	}	
})

$(".yz").focus(function(){
	$(this).css("borderColor","#ccc");
	$(".yzmy").css("display","none")
})

var p1 = /^1[3|4|5|7|8]\d{9}$/;
var p2 = /^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,16}$/;


$("input:eq(0)").blur(function(){
	
	if(!p1.test($(this).val())){
		$(this).css("borderColor","red");
		$(".modle").html("请输入正确的手机号码");
		$(".modle").css("display","block")
	}
	if($(this).val().length == 0){
		$(this).css("borderColor","red");
		$(".modle").html("请输入手机号码");
		$(".modle").css("display","block")
	}
})

$("input:eq(0)").focus(function(){
	$(this).css("borderColor","#ccc");
	$(".modle").css("display","none")
})

$("input:eq(1)").blur(function(){
	if(!p2.test($(this).val())){
		$(this).css("borderColor","red");
		$(".password").html("请填写密码");
		$(".password").css("display","block")
	}
	if(p2.test($(this).val())){
		$(this).css("borderColor","#666");
		$(".password").css("display","none")
	}

	if($(this).val().length >16){
		$(this).css("borderColor","red");
		$(".password").html("密码长度过长");
		$(".password").css("display","block")
	}
})

$("input:eq(1)").focus(function(){
	$(this).css("borderColor","#ccc");
	$(".password").css("display","none")
})

$(".submit").click(function(){
	var yzVal = $(".yz").val();
	if(yzVal.toLowerCase() == yzmTmp.toLowerCase()){
			var modle = $("input:eq(0)").val();
			var password = $("input:eq(1)").val();
			var zhuce = {
				userName:modle,
				pass:password
			}
			$.cookie("name",JSON.stringify(zhuce),{expires:30,path:"/"});
			location.href="login.html"
	}
	
})