var change_bg = function(color) {
	$("body").css("background-color", color);
	$("#name_box").html(color);
}
var swap = function () {
	var first = $("#first").html();
	var second = $("#second").html();
	$("#first").html(second);
	$("#second").html(first);
	attach_callback();
}

var rand_255 = function () {
	return Math.floor(Math.random() * 256);
}

var random_color = function () {
	var red = rand_255();
	var green = rand_255();
	var blue = rand_255();
	return "rgb(" + red + ", " + green + ", " + blue + ")"
}

var attach_callback = function () {
	$("#boom_btn").click(function () {
		change_bg(random_color());
	
	});

	$("#change_color").submit(function () {
		var color = $('#change_color input[type="text"]').val()
		change_bg(color);
		swap();
	});
}

attach_callback();

var color = random_color();
change_bg(color);

setInterval()