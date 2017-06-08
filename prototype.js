#!/usr/bin/env node
var fs = require("fs");
var vm = require("vm");
fs.readFile(process.argv[2], function (err, data) {
  if (!err) {
    var sandbox = {};
    var script = new vm.Script(data.toString());
    var context = new vm.createContext(sandbox);
    script.runInContext(context);
    if (!sandbox.css || typeof sandbox.css !== "object" || Array.isArray(sandbox.css)) {
      console.log("No css global variable object.");
    } else {
      core(sandbox.css, process.argv[3]);
    }
  } else {
    console.log("Not found input file.");
  }
});


function core(output,savefile) {
  function parse(name, obj) {
    var code = "";
    var append = "";
    code += name + " {\n";
    for (var a in obj) {
      if (typeof obj[a] !== "object") {
        code += "  " + a + ":" + obj[a] + ";\n";
      } else {
        var space=" ";
        if (a.startsWith(">") || a.startsWith(":")) {
          space="";
        }
        append += parse(name + space + a, obj[a]);
      }
    }
    code += "}\n";
    code += append;
    return code;
  }
  var keys = Object.keys(output);
  var text = "";
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var obj = output[keys[i]];
    text += parse(key, obj);
  }
  if (savefile) {
    fs.writeFile(savefile,text,function(err) {
      if(err) console.log("error");
    })
  } else {
    console.log(text);
  }
  
  
}