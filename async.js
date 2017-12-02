var fs = require ('fs');
var count = 0;
function newline(callback){
	fs.readFile(process.argv[2],function doneReading(err,fileContents){
	var space = fileContents.toString();
	var prose = space.split("\n");
	for(var i in prose){
		count++;
	}
	callback();
})
}
function print(){
	console.log(count-1);
}
newline(print);
