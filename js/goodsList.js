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

//获取COOKIE
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


function Inner(obj,divs,ff){
	$(obj).find("span").each(function(i){
		$(obj).find("span").eq(i).mouseenter(function(){
			$(this).css("borderColor","red")
			$(divs).animate({left:i*-200},300)
		})
		$(obj).find("span").mouseleave(function(){
			$(this).css("borderColor","#666")
		})
		
	})

	$(ff).mouseenter(function(){
		$(this).css("color","#ff6702")
		$(ff).parent().find("a").css("display","block")
	})
	$(ff).mouseleave(function(){
		$(this).css("color","#000")
		$(ff).parent().find("a").css("display","none")
	})
	$(obj).on({mouseenter:function(){
			$(obj).find("i").css("display","block")
		},
		mouseleave:function(){
			$(obj).find("i").css("display","none")
		}
	})
}

Inner(".inner-all .lier",".divs",".f1");
Inner(".inner-all .lier1",".divs1",".f2");
Inner(".inner-all .lier2",".divs2",".f3");
Inner(".inner-all .lier3",".divs3",".f4");
Inner(".inner-all .lier4",".divs4",".f5");
Inner(".inner-all .lier5",".divs5",".f6");
Inner(".inner-all .lier6",".divs6",".f7");
Inner(".inner-all .lier7",".divs7",".f8");
Inner(".inner-all .lier8",".divs8",".f9");
Inner(".inner-all .lier9",".divs9",".f10");
Inner(".inner-all .lier10",".divs10",".f11");
Inner(".inner-all .lier11",".divs11",".f12");
Inner(".inner-all .lier12",".divs12",".f13");
Inner(".inner-all .lier13",".divs13",".f14");
Inner(".inner-all .lier14",".divs14",".f15");
Inner(".inner-all .lier15",".divs15",".f16");
Inner(".inner-all .lier16",".divs16",".f17");
Inner(".inner-all .lier17",".divs17",".f18");
Inner(".inner-all .lier18",".divs18",".f19");
Inner(".inner-all .lier19",".divs19",".f20");

		$(".inner-bo").find("span").click(function(index){
			
			$(".inner-bo").find("span").css("borderColor","#930")
			$(this).css("borderColor","blue");

			$(".inner-bo .tuijian ul").animate({left:($(this).index()-2)*-1250},300)
		})
	
$("#inner .inner-all li img").click(function(){
	location.href = "goodsDetail.html"
})



var img =$(".inner-all .lier .divs img").eq(0).attr("src"); ;

	$(".inner-all .lier .lier-Img span").each(function(){
		$(this).mouseenter(function(e){
			var e = window.event||e;
			e.preventDefault();
			console.log($(this).index());
			photo = $(this).index()
			img = $(".inner-all .lier .divs img").eq(photo).attr("src");
		});
	});

var num = 1;
var texts = $(".inner-all .lier p:eq(0)").text();
var jia = $(".inner-all .lier p:eq(1)").text();
$(".lier .gw .f1").click(function(){
	if($.cookie("name")){
		var goods1 = $.cookie("carts1")?JSON.parse($.cookie('carts1')):{};
		if(num in goods1){
			goods1[num].num++;
		}else{
			goods1[num] = {
				pic:img,
				name:texts,
				num:1,
				price:jia
			}
		}
		$.cookie("carts1",JSON.stringify(goods1),{expires:30,path:"/"})
		location.href = "shopCar.html"
	}else{
		location.href = "login.html"
	}
	
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

