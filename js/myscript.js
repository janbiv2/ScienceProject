$(document).ready(function() {
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