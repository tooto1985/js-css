var boxWidth = 100;
var showBox = {
  "color": "yellow",
  ".txt": {
    "margin": "0 0 5px 0",
    ">a": {
    	"font-size":"16px"
    }
  }
};
var css = {
  "body": {
    "color": "red",
    "width": (function() {
      var out=200;
      if (boxWidth > 50) {
        out += boxWidth;
      }
      return out + "px";
    })()
  },
  "div": {
    "font-size": (boxWidth + "%"),
    ".box": showBox
  },
  ".box": showBox
};