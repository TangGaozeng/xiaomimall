var loginName = {}
if($.cookie("name")) {
	var user = $.cookie("name")
 	loginName = JSON.parse(user)["userName"]	
	$(".inner-r span:eq(0)").html(loginName + "&nbsp;&nbsp;&nbsp;&nbsp;您好,欢迎来到小米商城")
	
}

$(".inner-l img").click(function(){
	location.href = "index.html"
})

var qian = JSON.parse($.cookie("qian"))
console.log(qian)
//小米圈铁耳机的代码
var goods = $.cookie('carts') ? JSON.parse($.cookie('carts')) : {};
if(JSON.stringify(goods) != "{}") {
	$(".td1 img").attr("src",goods.pic)
	$(".td2").html(goods.name)
	$(".td3").html(goods.price+"元*"+qian.pays)
	
}

var praseI1 = parseInt(goods.price)
var  num1 = parseInt($(".trs2 .td4 span").html());

//小米头戴式耳机的代码
var goods1 = ($.cookie('carts1'))?JSON.parse($.cookie('carts1')):{};
var htmls = "";

if(JSON.stringify(goods1) != "{}"){//把JSON转换成字符串 和 空对象的”{}“的字符串  进行比较

	htmls+="<td><img class =\"picer\" src="+goods1[1].pic+" alt='' /></td>"
		+"<td>"+goods1[1].name+"</td>"
		+"<td>"+goods1[1].price+"元*"+qian.pays1+"</td>"
	$(".trs").html(htmls)
	
}

$(".totaler h1").html(qian.zong+"元")
