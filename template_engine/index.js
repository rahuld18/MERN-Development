var express=require('express');
var app=express();
app.set("view engine","ejs");
app.set("views",__dirname+"/views");
app.set("view option",{layout:false});
app.get('/',function(req,res){
    res.render('index',{
        message:'hello world'
    });
   
})
app.listen(5000,function(){
    console.log('server is listening  at port 5000!!');
})