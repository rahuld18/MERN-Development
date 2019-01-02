var express=require('express');
var session=require('express-session');
var bodyParser=require('body-parser');
var app=express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}))
app.use(session({

secret: 'ssshhhhhh',
saveUninitialized:true,
resave:false



}));

var sess;


app.get('/',function(req,res){

res.sendFile(__dirname + '/views/index.html');
})

app.post('/login',function(req,res){
    sess=req.session;
    if(req.body.username=='admin' && req.body.password =='admin')
    {
        sess.userDetail=req.body.username;
    }
    res.redirect('/redirects');
})


app.get('/redirects',function(req,res){
    sess=req.session;
    if(sess.userDetail){
        res.redirect('/admin');

    }
    else{
        res.write('<h1>Please Enter your details</h1>')
        res.end('<a href='+'/'+'>Login</a>')
        
    
    }
})

app.get('/admin',function(req,res){
    sess=req.session
    if(sess.userDetail){
        res.write('<h1>Hello ' + sess.userDetail + '</h1><br/>');
   
    
        res.end('<a href='+'/logout'+'>Logout</a>')
    }
    else{
        res.write('<h1>Please Login first</h1>')
        res.end('<a href='+'/'+'>Login</a>')
    }
})

app.get('/logout',function(req,res){

    req.session.destroy(function(err){

        if(err)
        console.log(err);
        else
        res.redirect('/');
    })
})

app.listen(5000,function(){

    console.log('The server is running at 5000');
})