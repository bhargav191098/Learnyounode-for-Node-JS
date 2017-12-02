
var sum = 0;
for(i=2;i<process.argv.length;i++){
	s = (+process.argv[i]);
	sum = sum + s;
}
console.log(sum);
