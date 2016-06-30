$(".site-gw").mouseover(function(){
	$(this).css("background","#fff")
	$(".site-gw>a").css("color","#ff6702")
	$("#gw-x").css("background","block").slideDown(500);
})
$(".site-gw").mouseleave(function(){
	$(this).css("background","#323335")
	$(".site-gw>a").css("color","#bcbbc1")
	$("#gw-x").css("display","none")
	
})
$("#gw-x").mouseenter(function(index){
	$(".site-gw").css("background","#fff");

	$(this).css("display","block")
})
$("#gw-x").mouseleave(function(){
	$(".site-gw").css("background","#323335");
	$(this).css("display","none")
})

// //头部购物车


$("li").each(function(index) {
	var i = index;
	$(this).mouseenter(function(){
		$("#nav-content>div").eq(i).stop().slideDown(600);
	})

	$(this).mouseleave(function(){
		
		$("#nav-content>div").css("display","none")
	})
})
$("#nav-content>.tab-1").mouseenter(function(){
		$(this).css("display","block");
})
$("#nav-content>div").mouseleave(function(){
		$(this).css("display","none")
})
//导航切换

$(".search-l").bind({"focus ":function(){
	$(this).css("border-color","red").next().css("border-color","red");
	$("#search-big").slideDown(500)
},"blur":function(){
	$(this).css("border-color","#000").next().css("border-color","#000");
	$("#search-big").css("display","none")
}})

var user = $.cookie("name")
var loginName = {}
if(user) {
	loginName = JSON.parse(user)["userName"]
}
if(loginName = {}){
	$(".loginName").css("display","none")
}else{
	$(".loginName").html(loginName + "您好,欢迎来到小米商城")
}



$(".menu-l ul>li").each(function(index) {
	var i = index;
	$(this).mouseenter(function(){
		$(".menu-r ").eq(i).css("display","block")
	})

	$(this).mouseleave(function(){
		
		$(".menu-r ").css("display","none")
	})
})
$(".menu-r").each(function(i){
	 	
	    $(".menu-r").eq(i).mouseenter(function(event) {
	    	  $(this).css("display","block");
	    	  $(".menu-l ul>li").eq(i).addClass('active');
	    });
})

$(".menu-r").each(function(i){
	 	
	    $(".menu-r").eq(i).mouseleave(function(event) {
	    	  $(this).css("display","none");
	    	  $(".menu-l ul>li").eq(i).removeClass('active');
	    });
})
$(".menu-r td>a").mouseenter(function(){
		$(this).css({"background":"#ff6702",color:"#fff"});
})
$(".menu-r td>a").mouseleave(function(){
		$(this).css({"background":"#fff",color:"#ff6702"});
})


$(".goodsAll").mouseenter(function(){
	$(".menu-l").css("display","block")
})
$(".menu-l").mouseleave(function(){
	$(this).css("display","none")
})
$(".menu-r").mouseenter(function(){
	$(".menu-l").css("display","block")
})
$(".menu-r").mouseleave(function(){
	$(".menu-l").css("display","none")
})

//显示已经创建的cookie
var loginName = {}
if($.cookie("name")) {
	var user = $.cookie("name")
 	loginName = JSON.parse(user)["userName"]	
 	$(".loginName").css("display","block")
	$(".loginName").html(loginName + "您好,欢迎来到小米商城")
	$(".loginer1,.loginer2").css("display","none")
}
else{
 	$(".loginName").css("display","none")
 	$(".loginer1,.loginer2").css("display","block")
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~头部~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
$(".inner-title span:eq(3)").click(function(){
	$(this).css("color","#ff6702").siblings().css("color","#000");
	$("#inner").css("display","block");
	$("#parameter").css("display","none")
})
$(".inner-title span:eq(2)").click(function(){
	$(this).css("color","#ff6702").siblings().css("color","#000");
	$("#inner").css("display","none");
	$("#parameter").css("display","block")
})
$(".inner-title a:eq(0)").click(function(){
	if($.cookie("name")){
		$("#inner").css("display","none");
			$("#parameter").css("display","none")
			$("#addShoping").css("display","block")
			var goodsPic = "../img/goodsDetail-gw.jpg";
			var goodsName = "小米圈铁耳机";
			var goodsPrice = 99;
			var goods = {
				pic:goodsPic,
				name:goodsName,
				price:goodsPrice,
				num:1
			}
			$.cookie("carts",JSON.stringify(goods),{expires:30,path:'/'})
	}else{
		location.href = "login.html"
	}
})



$(".addShoping-title span:eq(0)").css({
	fontSize:"20px"
})

$(".addShoping-title span:eq(1)").css({
	font:"700 28px ''",color:"green"
})


$(".lis1-er a").click(function(){
	if($.cookie("name")){
		$("#inner").css("display","none");
			$("#parameter").css("display","none")
			$("#addShoping").css("display","block")
			var goodsPic = "../img/goodsDetail-gw.jpg";
			var goodsName = "小米圈铁耳机";
			var goodsPrice = 99;
			var goods = {
				pic:goodsPic,
				name:goodsName,
				price:goodsPrice,
				num:1,
			}
			$.cookie("carts",JSON.stringify(goods),{expires:30,path:'/'})
	}else{
		location.href = "login.html"
	}
	
})


$(".inner-bo").find("span").click(function(index){
			
	$(".inner-bo").find("span").css("borderColor","#930")
	$(this).css("borderColor","blue");

	$(".inner-bo .tuijian ul").animate({left:($(this).index()-2)*-1250},300)
})


//首页购物车改变文字

var goods1 = ($.cookie('carts1'))?JSON.parse($.cookie('carts1')):{};
var goods = ($.cookie('carts'))?JSON.parse($.cookie('carts')):{};
var htmls = "";
	

if(JSON.stringify(goods1) != "{}"){
	htmls+="已选商品："+goods1[1].name
	$("#gw-x p").text(htmls)
	$(".site-gw a:eq(1)").html(1)
	$(".site-gw a:eq(1)").css("color","red")
}
if(JSON.stringify(goods) != "{}"){
	htmls+="已选商品："+goods.name;
	$("#gw-x p").text(htmls)
	$(".site-gw a:eq(1)").html(1)
	$(".site-gw a:eq(1)").css("color","red")
}
if(JSON.stringify(goods1) != "{}"&&JSON.stringify(goods) != "{}"){
	htmls=""
	htmls+="已选商品："+goods1[1].name+"+"+goods.name;
	$("#gw-x p").text(htmls);
	$(".site-gw a:eq(1)").text(2)
	$(".site-gw a:eq(1)").css("color","red")
}