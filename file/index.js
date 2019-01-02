var express=require('express');
var app=express();

app.get('/',function(req,res){


    res.send('Hello World');
})


app.get('/user',function(req,res){


    res.send('User Dashboard');
})

var server=app.listen(5000,function(){


    console.log('node server is running at port 5000');
})