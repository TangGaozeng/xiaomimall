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

$(".yzm").html(yz());
$(".yzm").click(function(){
	
	$(this).html(yz());		
})

