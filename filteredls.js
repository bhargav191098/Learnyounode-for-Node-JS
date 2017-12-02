var fs = require('fs');
var file = process.argv[2];
var g =  "."+process.argv[3];
var t ;
fs.readdir(file,function callback(err,fileContents){
	if(err){
		return console.log(err);
	}
	var s = fileContents.toString();
	var t = s.split(",");
	for(i=0;i<t.length;i++){
		var h = t[i].substring(t[i].indexOf("."));
		if(h == g)
			console.log(t[i]);
	}

})
