

var goods = $.cookie('carts') ? JSON.parse($.cookie('carts')) : {};
if(goods) {
	$(".td1 img").attr("src",goods.pic)
	$(".td2").html(goods.name)
	$(".td3").html(goods.price)
}

	$("#header img").click(function(){
		location.href = "index.html"
	})

var goods1 = JSON.parse($.cookie('carts1'))?JSON.parse($.cookie('carts1')):{};
var htmls = "";
htmls+="<td><img class =\"picer\" src="+goods1[1].pic+" alt='' /></td>"
		+"<td>"+goods1[1].name+"</td>"
		+"<td>"+goods1[1].price+"</td>"
		+"<td class=\"nums\"><i class=\"fa fa-minus f1 \" aria-hidden=\"true\"></i>"+goods1[1].num+"<i class=\"fa fa-plus f2\" aria-hidden=\"true\"></i></td>"
		+"<td>"+goods1[1].price+"</td>"
		+"<td><i class=\"fa fa-times-circle fa-2x\" aria-hidden=\"true\"></i> </td>"
$(".trs").html(htmls)