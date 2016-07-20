$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu > .ryu-action').hide();
		$('.ryu > .ryu-ready').show();
	})
	$('.ryu').mouseleave(function() {
		$('.ryu > .ryu-action').hide();
		$('.ryu > .ryu-still').show();
	})
	$('.ryu').mousedown(function() {
		playHadouken();
		$('.ryu > .ryu-action').hide();
		$('.ryu > .ryu-throwing').show();
		$('.hadouken').finish().show().animate(
			{'left': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('left','520px');
			});
	})
		$('.ryu').mouseup(function() {
		$('.ryu > .ryu-action').hide();
		$('.ryu > .ryu-ready').show();
	})

	$('.hulk-ryu').mouseenter(function() {
		$('.hulk-ryu > .ryu-action').hide();
		$('.hulk-ryu > .ryu-ready').show();
	})
	$('.hulk-ryu').mouseleave(function() {
		$('.hulk-ryu > .ryu-action').hide();
		$('.hulk-ryu > .ryu-still').show();
	})
	$('.hulk-ryu').mousedown(function() {
		playHadouken();
		$('.hulk-ryu > .ryu-action').hide();
		$('.hulk-ryu > .ryu-throwing').show();
		$('.hulk-hadouken').finish().show().animate(
			{'right': '1020px'},
			500,
			function() {
				$(this).hide();
				$(this).css('right','520px');
			});
	})
		$('.hulk-ryu').mouseup(function() {
		$('.hulk-ryu > .ryu-action').hide();
		$('.hulk-ryu > .ryu-ready').show();
	})


	$(document).keydown(function(event) {
		if (event.keyCode == 88) {
			playGroove();
			$('.ryu-action').hide();
			$('.ryu-cool').show();

		};
	}).keyup(function(event) {
	 	if(event.which == 88) {
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