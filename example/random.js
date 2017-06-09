var colors = ["red", "blue", "green", "yellow", "pink"];
var bgColor = ~~(Math.random() * colors.length);
var css = {
	"body": {
		"background-color": colors[bgColor]
	}
};