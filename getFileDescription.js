var fs = require("fs");
var file = 'url.txt';
var replaceTargetStr = "/Users/hiromichikoeda/leihauoli/myGithub/getFileDescription/";

// 正規表現参考:http://www.tohoho-web.com/js/regexp.html
// http://yut.hatenablog.com/entry/20110305/1299318337
var regExp = new RegExp(replaceTargetStr, "g");

var textToPaths = function (file) {
	var text = fs.readFileSync(file).toString().replace(regExp, "");
	var paths = text.split(/\r\n|\r|\n/);
	return paths;
}

var getFileName = function (paths) {
	paths.forEach(function (path, index) {
		fs.readFile(path, 'utf8', function (err, data) {
			if(err) {
				console.log('エラーが発生しました');
				throw err;
			}
			console.log(/画面名：(.*)/.test(data));
			let pageName = data.match(/画面名：(.*)/)[1];
			console.log(pageName);
		});
		// console.log(path);
	});
}
getFileName(textToPaths(file));

