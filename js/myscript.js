$(document).ready(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
//	alert("js working");
	$('#stoneicon').mouseover(function() {
		this.src="images/stone3-color.jpg";
	});
	$('#stoneicon').mouseout(function() {
	this.src="images/stone3.jpg";
	});
	$('#rainicon').mouseover(function() {
		this.src="images/raining2-color.jpg";
	});
	$('#rainicon').mouseout(function() {
	this.src="images/raining2.jpg";
	});
	$('#iceicon').mouseover(function() {
	this.src="images/ice-color.jpg";
	});
	$('#iceicon').mouseout(function() {
	this.src="images/ice.jpg";
	});

});