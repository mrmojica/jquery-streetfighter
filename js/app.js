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
		playHadouken();
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();
		// animate hadouken to the right of the screen
		$('.hadouken').finish().show()
			.animate(
				{'left': '1020px'},
				500,
				function(){
					$(this).hide();
					$(this).css('left', '520px');
				}
			);
	});
	$('.ryu').mouseup(function(){
		console.log('mouse up');
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();

	});





});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}