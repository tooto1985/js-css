#!/usr/bin/env node
console.log("xxx");
var boxWidth = 100;
var showBox = {
  "color": "yellow",
  ".txt": {
    "margin": "0 0 5px 0"
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
}
//==========================================================
;(function(output) {
  
  function parse(name, obj) {
    var code = "";
    var append = "";
    code+=name + " {\n";
    for(var a in obj) {
      if (typeof obj[a] !== "object") {
        code+="  " + a + ":" + obj[a] + ";\n";
      } else {
        append+=parse(name + " " + a, obj[a]);
      }
    }
    code+="}\n";
    code+=append;
    return code;
  }
  var keys = Object.keys(output);
  var text = "";
  for(var i = 0 ;i < keys.length; i++) {
    var key = keys[i];
    var obj = output[keys[i]];
    text += parse(key,obj);
  }
  console.log(text);
  
  

})(css);