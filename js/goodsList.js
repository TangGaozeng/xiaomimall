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

//头部购物车


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
var loginName = JSON.parse(user)["userName"]
if(loginName){
	// $(".loginName").css("display","block")
	$(".loginName").html(loginName + "您好,欢迎来到小米商城")
}else{
	$(".loginName").css("display","none")
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~二级导航~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

var $classify = $(".classify ul li:gt(5)");
var $brang = $(".brang ul li:gt(5)");
$classify.hide();
$brang.hide();

$(".more-1").click(function(){
	$classify.show();
})
$(".more-2").click(function(){
	$brang.show();
})


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~内容~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

$(".inner-all").find("span").each(function(i){
	$(".inner-all").find("span").eq(i).click(function(){
		$("#inner .divs").animate({left:i*-200},300)
	})
})