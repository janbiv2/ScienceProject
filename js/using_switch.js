$(document).ready(function() {
	$('#menu a').mouseenter(function() {
		$(this).switchClass('style1', 'style2', 400);
	});
	
	$('#menu a').mouseleave(function() {
		$(this).switchClass('style2', 'style1', 400);
	});
});
