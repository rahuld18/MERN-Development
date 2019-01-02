var fs=require('fs');

fs.readFile('demo.txt',function(err,data){

    if(err){

        throw err;
    }console.log(data.toString());
})
var data=fs.readFileSync('demo.txt','utf8');
console.log(data);