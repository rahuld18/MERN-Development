
var express = require('express');
var app=express();

var bodyParser=require('body-parser');

var mongoose=require('mongoose');

global.config=require('./configuration/config')
var jwt=require('jsonwebtoken');

var User = require('./models/user');
var options={
    user: 'myTester',
    pass: 'xyz123'
};

mongoose.connect("mongodb://localhost/demodb",options);

app.use(bodyParser.json());

app.use(require('./controllers'));
app.use('/',function(req,res){

    res.send('Hello ');
})
app.listen(3000,function(){
    console.log('App running at port 3000');
})