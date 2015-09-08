function main_menu() {
	var category=no;
	$.post("http://kimsqapp.kimsq.co.kr/main_menu.php",
	{
		
	},function(data) {
		$("#main_menu").html(data);
	});
}

function sub_menu(code) {
	var code=code;
	$.post("http://kimsqapp.kimsq.co.kr/sub_menu.php",
	{
		code:code 
	},function(data) {
		$("#main_menu").html(data);
	});
}
function main_page() {

		$.post("http://kimsqapp.kimsq.co.kr/main_page.php",
	{
		
	},function(data) {
		$(".content").html(data);
	});
}


// 더보기 파일 

 
