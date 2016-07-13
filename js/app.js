$(document).ready(function() {
	$('.ryu, .ryu-hulk').mouseenter(function() {
		$('.ryu-action').hide();
		$('.ryu-ready').show();
	});
	$('.ryu, .ryu-hulk').mouseleave(function() {
		$('.ryu-action').hide();
		$('.ryu-still').show();
	});

	$('.ryu, .ryu-hulk').mousedown(function() {
		// play hadouken sound
		playHadouken();
		$('.ryu-action').hide();
		$('.ryu-throwing').show();
		// animate hadouken to the right of the screen
		$('.hadouken').finish().show()
			.animate(
				{'left': '1020px'},
				500,
				function() {
					$(this).hide();
					$(this).css('left', '520px');
				}
			);
	});

	$('.ryu, .ryu-hulk').mouseup(function() {
		$('.ryu-action').hide();
		$('.ryu-ready').show();

	});

	$(document).keydown(function(event) {
		if(event.which === 88){
			playGroove();
			$('.ryu-action').hide();
			$('.ryu-cool').show();
		};		
	}).keyup(function(event) {
		if(event.which === 88){
			$('#groove-sound')[0].pause();
			$('#groove-sound')[0].load();
			$('.ryu-action').hide();
			$('.ryu-still').show();
		};
	});

});

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playGroove () {
  $('#groove-sound')[0].volume = 0.5;
  $('#groove-sound')[0].play();
}