var fs = require ('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var g = str.split("\n");
var sum =0;
for(var t in g){
	sum++;
}
console.log(sum-1);