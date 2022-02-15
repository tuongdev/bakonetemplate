$(".portfolio button").click(function(event) {
	/* Act on the event */
	var data = $(this).attr("data");
	
	if (data == "all") {
		//show hết 8 div
		$('.portfolio .row > div').show();
	}
	else {
		//hàm show() là hiển thị
		$(`div[data=${data}]`).show();

		//hàm hide() là ẩn
		//$('.portfolio .row > div'): 8 div
		//not là trừ đi
		$('.portfolio .row > div').not(`div[data=${data}]`).hide();
	}
});

$(window).scroll(function(event) {
	/* Act on the event */
	//top của window so với top của document
	console.log($(window).scrollTop());
	//top của portfolio so với top của document
	console.log($("#portfolio").offset().top);

	//Nếu top của window lớn hơn top của portfolio thì xuất hiện fixed menu
	//ngược lại thì không xuất hiện fixed menu
	if ($(window).scrollTop() >= $("#portfolio").offset().top - 1) {
		$(".navbar").addClass('fixed-top');
		$("header").addClass('padding-dummy');
	}
	else {
		$(".navbar").removeClass('fixed-top');
		$("header").removeClass('padding-dummy');
	}
});

