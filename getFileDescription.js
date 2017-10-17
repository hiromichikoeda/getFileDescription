// var fs = require("fs");
// var path = require("path");
//
// var dir = './testDir';
//
// fs.readdir(dir, function(err, list) {
//   list.forEach(function(file) {
//     console.log(file);
//   });
// });
var fs = require("fs");
var file = 'url.txt';
var replaceTargetStr = "/Users/hiromichikoeda/leihauoli/myGithub/";

var regExp = new RegExp(replaceTargetStr, "g");

fs.readFile(file, function(err, data) {
  var text = data.toString().replace(regExp,"");
  var result = text.split(/\r\n|\r|\n/);
  console.log(result);
});

