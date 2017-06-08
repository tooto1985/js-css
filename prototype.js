#!/usr/bin/env node
var fs = require("fs");

fs.readFile(process.argv[2],function(err, data) {
  if(!err) {
    console.log(data.toString());
  } else {

  }
});

//==========================================================
/*
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
*/