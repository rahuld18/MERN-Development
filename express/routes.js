var express=require('express');
var app=express();

app.get('/',function(req,res){


    res.send('Hello World');
})


app.get('/user',function(req,res){


    res.send('User Dashboard');
})
app.post('/user',function(req,res){


    res.send('This is post request');
})


app.put('/user',function(req,res){


    res.send('This is put request');
})

app.delete('/user',function(req,res){


    res.send('This is delete request');
})
var server=app.listen(5000,function(){


    console.log('node server is running at port 5000');
})