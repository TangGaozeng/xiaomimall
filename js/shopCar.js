
//小米圈铁耳机的代码
var goods = $.cookie('carts') ? JSON.parse($.cookie('carts')) : {};
if(JSON.stringify(goods) != "{}") {
	$(".td1 img").attr("src",goods.pic)
	$(".td2").html(goods.name)
	$(".td3").html(goods.price)
	$(".td4").html("<i class=\"fa fa-minus f4\" aria-hidden=\"true\"></i><span>"+goods.num
		+"</span><i class=\"fa fa-plus f5\" aria-hidden=\"true\"></i>")
	$(".td5").html(goods.price)
	$(".td6").html("<i class=\"fa fa-times-circle fa-2x f6\" aria-hidden=\"true\"></i>")
}

$("#header img").click(function(){
	location.href = "index.html"
})//点击log回到首页

var praseI1 = parseInt(goods.price)
var  num1 = parseInt($(".trs2 .td4 span").html());
console.log(num1)
$(".trs2 .f5").click(function(){
	num1++;
	$(".trs2 .td4 span").html(num1);
	var xiaoJi1 = num1*praseI1;
	$(".td5").html(xiaoJi1)
	total = parseInt($(".td5").html())+parseInt($(".trs .f2").parent().siblings(".xiaoJi").html());
	$("#main .total span").html(total)
	
})


$(".trs2 .f4").click(function(){
	num1--;
	if(num1<1){
		num1=1;
	}
	$(".trs2 .td4 span").html(num)	
	var xiaoJi1 = num1*praseI1;
	$(".td5").html(xiaoJi1)
	total = parseInt($(".td5").html())+parseInt($(".trs .f1").parent().siblings(".xiaoJi").html());
	$("#main .total span").html(total)
})


//小米头戴式耳机的代码
var goods1 = ($.cookie('carts1'))?JSON.parse($.cookie('carts1')):{};
var htmls = "";

if(JSON.stringify(goods1) != "{}"){//把JSON转换成字符串 和 空对象的”{}“的字符串  进行比较

	htmls+="<td><img class =\"picer\" src="+goods1[1].pic+" alt='' /></td>"
		+"<td>"+goods1[1].name+"</td>"
		+"<td>"+goods1[1].price+"</td>"
		+"<td class=\"nums\"><i class=\"fa fa-minus f1 \" aria-hidden=\"true\"></i><span>"
		+goods1[1].num+"</span><i class=\"fa fa-plus f2\" aria-hidden=\"true\"></i></td>"
		+"<td class='xiaoJi'>"+goods1[1].num*parseInt(goods1[1].price)+"</td>"
		+"<td><i class=\"fa fa-times-circle fa-2x f3\" aria-hidden=\"true\"></i> </td>"
	$(".trs").html(htmls)
	
}
var praseI = parseInt(goods1[1].price)
var  num = parseInt($(".trs .nums span").html().trim());//trim()去掉字符串的首尾空格

$(".trs .f2").click(function(){
	num++;
	$(".trs .nums span").html(num);
	var xiaoJi = num*praseI;
	$(this).parent().siblings(".xiaoJi").html(xiaoJi)
	 total = parseInt($(".td5").html())+parseInt($(this).parent().siblings(".xiaoJi").html());
	 $("#main .total span").html(total)
})

$(".trs .f1").click(function(){
	num--;
	if(num<1){
		num=1;
	}
	$(".trs .nums span").html(num)	
	var xiaoJi = num*praseI;
	$(this).parent().siblings(".xiaoJi").html(xiaoJi)
	total = parseInt($(".td5").html())+parseInt($(this).parent().siblings(".xiaoJi").html());
	$("#main .total span").html(total)
})

var total = parseInt($(".td5").html())+parseInt($(".trs .f1").parent().siblings(".xiaoJi").html());

console.log(total);
$("#main .total span").html(total)

//删除COOKIE
$(".trs .f3").click(function(){
	$(".trs").parent().find(".trs").remove();
	$.cookie("carts1",JSON.stringify(goods1),{expires:-1,path:"/"})
})
$(".trs2 .f6").click(function(){
	$(".trs2").parent().find(".trs2").remove();
	$.cookie("carts",JSON.stringify(goods),{expires:-1,path:"/"})
})