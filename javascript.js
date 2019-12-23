$(document).ready(function() {
	$("#button-menu").mouseover(function(){
		$(".wrapper-more").addClass("show-wrapper-more");
		$(".div-wrapper").show();
		$(".col-menubar").hide();
	});
	$(".wrapper-more, .sidebar").mouseleave(function(){
		$(".div-wrapper").hide();
		$(".col-menubar").show();
		$(".wrapper-more").removeClass("show-wrapper-more");
	});

	$(".choose-1").mouseover(function(){
		$(".choose-1 .title-apps").css('background-color', '#ed3b3b');
	});
	$(".choose-1").mouseleave(function(){
		$(".choose-1 .title-apps").css('background-color', '#fff');
	});
	$(".choose-2").mouseover(function(){
		$(".choose-2 .title-apps").css('background-color', '#039be5');
	});
	$(".choose-2").mouseleave(function(){
		$(".choose-2 .title-apps").css('background-color', '#fff');
	});
	$(".choose-3").mouseover(function(){
		$(".choose-3 .title-apps").css('background-color', '#444');
	});
	$(".choose-3").mouseleave(function(){
		$(".choose-3 .title-apps").css('background-color', '#fff');
	});

	$(".menu-grid").click(function() {
		$(".sub-menu-grid").toggle();
	});

	$(".btn-question").click(function(){
		$(".wrapper-help").toggle();
	});

	$("#close-help").click(function(){
		$(".wrapper-help").hide();
	});

	$(".what-new .collapse-change-1").click(function() {
		$(".what-new ul").css('height', 'unset');
		$(".what-new .collapse-change-2").show();
		$(".what-new .collapse-change-1").hide();
	});
	$(".what-new .collapse-change-2").click(function() {
		$(".what-new ul").css('height', '200px');
		$(".what-new .collapse-change-1").show();
		$(".what-new .collapse-change-2").hide();
	});

	$(".user-more").click(function(){
		$(this).parent(".media-like-more").children(".wrapper-user-more").toggle();
		$(this).toggleClass('user-more-active');
	});

	$(".user-like").click(function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}		
		else $(this).addClass('active');
	});
	
// $(this).children("svg").css('fill', 'rgb(237, 59, 59)');
// $(this).children("svg").css('fill', '');

	// $(window).scroll(function() {
	// 	if($(this).scrollTop()>150){
	// 		$(".sidebar").addClass('fix');
	// 	}
	// 	else {
	// 		$(".sidebar").removeClass('fix');
	// 	}
	// });
});
