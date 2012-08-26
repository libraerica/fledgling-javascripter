var change_bg = function(color) {
	$("body").css("background-color", color);
}


$("#boom_btn").click(function () {change_bg("#5080B0")});

$("#change_color").submit(function () {
	var color = $('#change_color input[type="text"]').val()
	change_bg(color);

});