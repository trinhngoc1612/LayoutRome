$(document).ready(function($) {
	$("#button-menu").mouseover(function(){
		$(".sidebar").addClass('display-none');
		$(".more-choose").addClass('fixMore-choose');
	});
	$(".more-choose").mouseout(function(){
		$(".sidebar").removeClass('display-none');
		$(".more-choose").removeClass('fixMore-choose');
	});
	
	
});
// $(window).resize(function(){
// 	  var width = $(window).width();
// 	  if (width<992) {
// 			$(".wrapper-similar").addClass('row');
// 			$(".wrapper-similar .wrapper-sidebar").addClass('col-4');
// 		}
// 		else {
// 			$(".wrapper-similar").removeClass('row');
// 			$(".wrapper-similar .wrapper-sidebar").removeClass('col-4');
// 		}
// 	});
