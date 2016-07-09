$(document).ready(function(){
	$('.ryu').mouseenter(function(){
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	});
	$('.ryu').mouseleave(function(){
		$('.ryu-ready').hide();
		$('.ryu-still').show();

	});
	$('.ryu').mousedown(function(){
		console.log('mousedown');
		// play hadouken sound
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		$('.hadouken').show();
		// animate hadouken to the right of the screen
	});
	$('.ryu').mouseup(function(){
		console.log('mouse up');
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();

	});





});