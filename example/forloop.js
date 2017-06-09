var boxSettings = {
	"display": "inline-block",
	"width": "50px",
	"height": "50px"
};
var css = {
	"body": {
		"margin": "0"
	}
};
for (var i = 1; i < 10; i++) {
	css[".box" + i] = boxSettings;
}