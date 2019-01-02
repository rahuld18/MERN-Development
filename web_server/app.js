var express=require('express');
var bodyParser=require('body-parser');
var app=express();
app.use(bodyParser.urlencoded({extende:false}));   // if we not use this line the firstname throws an error json error
app.get('/',function(req,res){


    res.sendFile(__dirname+'/index.html');
})


app.post('/submit-data',function(req,res){
    var name=req.body.firstName+' '+req.body.lastName;
    res.send('welcome '+ name+'!!');
})

var server=app.listen(5000,function(){


    console.log('node server is running at port 5000');
})