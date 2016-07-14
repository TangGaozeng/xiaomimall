$(".site-gw").mouseover(function(){
	$(this).css("background","#fff")
	$(".site-gw>a").css("color","#ff6702")
	$("#gw-x").slideDown(500);
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

//header结束~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//轮播图插件
$('.ck-slide').ckSlide({
	autoPlay: true

});

//二级菜单
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

//小图轮播图
$("#main .rightBtn").click(function(){
	$("#main .leftBtn").addClass("on");
	$(this).removeClass("on");
	$("#main .main-s_box").stop().animate({left:"-1280px"},500)
})
$("#main .leftBtn").click(function(){
	$("#main .rightBtn").addClass("on");
	$(this).removeClass("on");
	$("#main .main-s_box").stop().animate({left:"-22px"},500)
})
auoPlay();
var timer;
function auoPlay(){
		timer = setInterval(function(){
		var boxLeft = $("#main .main-s_box ").position().left;
		if(boxLeft==-22){
			$("#main .main-s_box").stop().animate({left:"-1280px"},500);
			$("#main .leftBtn").addClass("on");
			$("#main .rightBtn").removeClass("on");
		}else{
			$("#main .main-s_box").stop().animate({left:"-22px"},500);
			$("#main .rightBtn").addClass("on");
			$("#main .leftBtn").removeClass("on");
		}
	},4000)
}
$("#main .main-s_box").mouseenter(function(){
	clearInterval(timer);
})
$("#main .main-s_box").mouseleave(function(){
	auoPlay();
})


//鼠标移动到容器 容器向上移动 改变样式
changeTop($("#main .main-intel_inner>.main-intel_innerL"));
changeTop($("#main .main-intel_inner>.main-intel_innerR ul li"));

changeBottom($("#main .main-intel_inner>.main-intel_innerL"));
changeBottom($("#main .main-intel_inner>.main-intel_innerR ul li"));

function changeTop(changeTops){//改变容器的top值函数
		var that = changeTops;
			that.mouseenter(function(){
				$(this).css({"marginTop":-10,
				"box-shadow":" 0 10px 20px rgba(0,0,0,0.1)"});
			})
}

function changeBottom(changeBottoms){
		var that = changeBottoms;
			that.mouseleave(function(){
				$(this).css({"marginTop":10,"box-shadow":"none"});
			})
}

$("#main .main-match_title>a").each(function(i) {
	
	$(this).mouseenter(function(){
		$(this).css({"border-bottom":"2px solid #ff6702","color":"#ff6702"})
		$("#main .main-match_Inner .main-match_R>div ").eq(i).css("display","block")
	})

	$(this).mouseleave(function(){
		$(this).css({"border":"0px","color":"#000"})

		$("#main .main-match_Inner .main-match_R>div").css("display","none")
		$("#main .main-match_Inner .main-match_R>div").eq(i).css("display","block")
	})
})

$("#main .main-match_Inner .main-match_R>div").each(function(i){
	 	
	    $("#main .main-match_Inner .main-match_R>div").eq(i).mouseenter(function(event) {
	    	  $(this).css("display","block");
	    	  $("#main .main-match_title>a").eq(i).css({"border-bottom":"2px solid #ff6702","color":"#ff6702"})
	    });
	    // $("#main .main-match_Inner .main-match_R>div").eq(i).mouseleave(function(event) {
	    // 	  $(this).css("display","block");
	    // 	  $("#main .main-match_title>a").eq(i).css({border:"none",color:"#000"})

	    // });
})

changeTop($("#main .main-match_Inner .main-match_R div ul>li"));
changeTop($("#main .main-match_Inner .main-match_L>img"));
changeBottom($("#main .main-match_Inner .main-match_R div ul>li"));
changeBottom($("#main .main-match_Inner .main-match_L>img"));

// ······························搭配结束··········································

$("#main .main-peijian_title>a").each(function(index) {
	var i = index;
	$(this).mouseenter(function(){
		$(this).css({"border-bottom":"2px solid #ff6702","color":"#ff6702"})
		$("#main .main-peijian_Inner .main-peijian_R>div ").eq(i).css("display","block")
	})

	$(this).mouseleave(function(){
		$(this).css({"border":"0px","color":"#000"})

		$("#main .main-peijian_Inner .main-peijian_R>div").css("display","none")
		$("#main .main-peijian_Inner .main-peijian_R>div").eq(i).css("display","block")
	})
})

$("#main .main-peijian_Inner .main-peijian_R>div").each(function(i){
	 	
	    $("#main .main-peijian_Inner .main-peijian_R>div").eq(i).mouseenter(function(event) {
	    	  $(this).css("display","block");
	    	  $("#main .main-peijian_title>a").eq(i).css({"border-bottom":"2px solid #ff6702","color":"#ff6702"})
	    });
	    //  $("#main .main-match_Inner .main-match_R>div").eq(i).mouseleave(function(event) {
	    // 	  $(this).css("display","none");
	    // 	  $("#main .main-match_title>a").eq(i).css({"border":"none","color":"#000"})
	    // });
})

changeTop($("#main .main-peijian_Inner .main-peijian_R div ul>li"));
changeTop($("#main .main-peijian_Inner .main-peijian_L>img"));
changeBottom($("#main .main-peijian_Inner .main-peijian_R div ul>li"));
changeBottom($("#main .main-peijian_Inner .main-peijian_L>img"));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~配件结束~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~·

$("#main .main-zhoubian_title>a").each(function(index) {
	var i = index;
	$(this).mouseenter(function(){
		$(this).css({"border-bottom":"2px solid #ff6702","color":"#ff6702"})
		$("#main .main-zhoubian_Inner .main-zhoubian_R>div ").eq(i).css("display","block")
	})

	$(this).mouseleave(function(){
		$(this).css({"border":"0px","color":"#000"})

		$("#main .main-zhoubian_Inner .main-zhoubian_R>div").css("display","none")
		$("#main .main-zhoubian_Inner .main-zhoubian_R>div").eq(i).css("display","block")
	})
})

$("#main .main-zhoubian_Inner .main-zhoubian_R>div").each(function(i){
	 	
	    $("#main .main-zhoubian_Inner .main-zhoubian_R>div").eq(i).mouseenter(function(event) {
	    	  $(this).css("display","block");
	    	  $("#main .main-zhoubian_title>a").eq(i).css({"border-bottom":"2px solid #ff6702","color":"#ff6702"})
	    });
	    //  $("#main .main-match_Inner .main-match_R>div").eq(i).mouseleave(function(event) {
	    // 	  $(this).css("display","none");
	    // 	  $("#main .main-match_title>a").eq(i).css({"border":"none","color":"#000"})
	    // });
})

changeTop($("#main .main-zhoubian_Inner .main-zhoubian_R div ul>li"));
changeTop($("#main .main-zhoubian_Inner .main-zhoubian_L>img"));
changeBottom($("#main .main-zhoubian_Inner .main-zhoubian_R div ul>li"));
changeBottom($("#main .main-zhoubian_Inner .main-zhoubian_L>img"));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~周边结束~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var indexB = 0;

$("#main .leftB").click(function(){
	indexB++;
	var index = indexB*-1200+"px";
	if(indexB > 3){
		indexB=3;
		$("#main .main-tuijian_box ul").css("left","(indexB*1200)+px")
	}else{
		$("#main .rightB").removeClass("on");
		$(this).addClass("on");
		$("#main .main-tuijian_box ul").stop().animate({left:index},300)
	}
	

})

$("#main .rightB").click(function(){
		indexB--;
		if(indexB < 0){
			indexB = 0;	
			$("#main .main-tuijian_box ul").css("left","(indexB*1200)+px")
		}else{
			$("#main .main-tuijian_box ul").stop().animate({left:indexB*-1200},300)
			 $("#main .leftB").removeClass("on");
			 $(this).addClass("on");
		}
})
// ~~~~~~~~~~~~~~~~~推荐轮播图结束~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

contenter("#main .main-content_one .content_oneL",
	"#main .main-content_one .content_oneR",
	"#main .main-content_one>ul",
	"#main .main-content_one .content-B>span",
	"#main .main-content_one img",
	"#main .main-content_one i");

contenter("#main .main-content_two .content_oneL",
	"#main .main-content_two .content_oneR",
	"#main .main-content_two>ul",
	"#main .main-content_two .content-B>span",
	"#main .main-content_two img",
	"#main .main-content_two i");

contenter("#main .main-content_three .content_oneL",
	"#main .main-content_three .content_oneR",
	"#main .main-content_three>ul",
	"#main .main-content_three .content-B>span",
	"#main .main-content_three img",
	"#main .main-content_three i");

contenter("#main .main-content_four .content_oneL",
	"#main .main-content_four .content_oneR",
	"#main .main-content_four>ul",
	"#main .main-content_four .content-B>span",
	"#main .main-content_four img",
	"#main .main-content_four i");


changeContentT($("#main .main-content_four"));
changeContentT($("#main .main-content_three"));
changeContentT($("#main .main-content_two"));
changeContentT($("#main .main-content_one"));

changeContentB($("#main .main-content_four"));
changeContentB($("#main .main-content_three"));
changeContentB($("#main .main-content_two"));
changeContentB($("#main .main-content_one"));
//第一个的内容轮播
function contenter(ls,rs,uls,spans,imgs,is){//内容的函数的封装
	var conIndex = 0;
	$(ls).click(function(){
		conIndex++;
		var index = conIndex*-244+"px";
		if(conIndex > 3){
			conIndex=3;
			$(uls).css("left","(conIndex*244)+px")
		}else{
			$(uls).stop().animate({left:index},300)
		}
			$(spans).eq(conIndex).
			css("background","#ff6702").siblings().css("background","#ccc");

	})
	$(spans).eq(0).css("background","#ff6702")
	$(rs).click(function(){
			conIndex--;
			if(conIndex < 0){
				conIndex = 0;	
				$(uls).css("left","(conIndex*244)+px")
			}else{
				$(uls).stop().animate({left:conIndex*-244},300)
			}
			$(spans).eq(conIndex).
			css("background","#ff6702").siblings().css("background","#ccc");
	})

	$(spans).each(function(index) {
		var conIndex = index;
		$(this).click(function(){
			$(this).css("background","#ff6702").siblings().css("background","#ccc");
			$(uls).stop().animate({left:conIndex*244*-1},200)
			console.log(i*244*-1)
		})
		return conIndex;
	})
	$(imgs).on({
		mouseenter:function(){
			$(is).css("display","block")
		}
	})
	$(uls).parent().mouseleave(function(){
			$(is).css("display","none")
	})
}



function changeContentT(changeTops){//改变容器的top值函数
		var that = changeTops;
			that.mouseenter(function(){
				$(this).css({"margin-top":-1,
				"box-shadow":" 0 15px 20px rgba(0,0,0,0.1)"});
			})
}

function changeContentB(changeBottoms){
		var that = changeBottoms;
			that.mouseleave(function(){
				$(this).css({"margin-top":1,"box-shadow":"none"});
			})
}


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~六个小轮播结束~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

$("#main .main-video .main-video_content ul>li").on({

	mouseenter:function(){
		$("#main .main-video .main-video_content ul li>i").eq($(this).index())
		.css("color","#ff6702")	
	},
	mouseleave:function(){
			$("#main .main-video .main-video_content ul li>i").eq($(this).index())
		.css("color","#666")	
	}

})
changeContentT($("#main .main-video .main-video_content ul>li"));
changeContentB($("#main .main-video .main-video_content ul>li"))

// ~~~~~~~~~~~~~~~~~~~~~~~~~视频结束~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

	var isClick = false;
$("#louti .louti-nav ul li").click(function(){
	 isClick = true;
	$("#louti .louti-nav ul li").find("span").attr("class","")
	$(this).find("span").addClass("loutiActive");
	var louti_top = $(".loutis").eq($(this).index()).offset().top;
	$("html, body").stop().animate({scrollTop: louti_top}, 2000,function(){
		isClick = false;
	});
})
$(window).scroll(function(){
	var scroll_Top =$(window).scrollTop();
	$(".loutis").each(function(){
		if(scroll_Top>$(this).offset().top-$(this).outerHeight()/2){
			$("#louti .louti-nav ul li").find("span").attr("class","");
			$("#louti .louti-nav ul li").find("span").eq($(this).index(".loutis")).addClass("loutiActive");
		}
	})
})


var loginName = {}
if($.cookie("name")) {
	var user = $.cookie("name")
 	loginName = JSON.parse(user)["userName"]	
 	$(".loginName").css("display","block")
	$(".loginName").html(loginName + "&nbsp;&nbsp;&nbsp;&nbsp;您好,欢迎来到小米商城")
	$(".loginer1,.loginer2").css("display","none")
}
else{
 	$(".loginName").css("display","none")
 	$(".loginer1,.loginer2").css("display","block")
}

$("li").click(function(){
	location.href = "goodsList.html"
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


//下面吸顶效果
$(window).scroll(function(){
			var scrolld = $(window).scrollTop();
			var fixd = $("#main").offset().top
			// var fixTop = $("#container").offset().top;
			console.log(fixd);
			if(scrolld>fixd){
				// $("#fix").css("display","block")
				$("#xiding").stop().fadeIn(600);
			}else{
				$("#xiding").fadeOut(600);
			}
})

$("#Top i").click(function(){
	$("html,body").animate({scrollTop:0},800)
})