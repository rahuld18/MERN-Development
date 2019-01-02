var http=require('http');

var server=http.createServer(function(req,res){

res.write('Hello Duniya 2');
res.end();


})
server.listen(5000);
console.log('Node web server is running at port 5000')