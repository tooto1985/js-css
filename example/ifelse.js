var isHidden = true;
var css = {
	"body": {
		".link": {
			"color": isHidden ? "green" : "red"
		},s
		".box": {
			"width": "100%",
			"height": "200px"
		},
		".content": {
			"text-align": "center"
		}
	}
};
if (isHidden) {
	delete css.body[".box"];
}