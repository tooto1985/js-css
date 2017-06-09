function box(width, height) {
	return {
		"display": "inline-block",
		"width": width,
		"height": height
	};
}
var css = {
	".box1": box("50px", "100px"),
	".box2": box("25px", "50px"),
	".box3": box("100px", "25px")
};