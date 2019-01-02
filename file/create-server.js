var http=require('http');

var server=http.createServer(function(req,res){
if(req.url=='/'){
res.write('This is home page');
res.end();
}
else if(req.url=='/user'){

    res.write('<h1>This is User page</h1>');
    res.end();

}

else if(req.url=='/admin'){

    res.write('This is Admin page');
    res.end();

}
else if(req.url=='/data'){

    res.writeHead(200,{"content-Type":"application/json"});
    res.write(JSON.stringify({"message":"Hello World"}))
 
    res.end();

}
else
{
    res.write('Invalid req');
    res.end();
    }
})
server.listen(5000);
console.log('Node web server is running at port 5000')