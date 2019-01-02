var express=require('express');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var sessions=require('express-session');
var MongoStore=require('connect-mongo')(sessions);

var app=express();



//connect to mongodb
var options={

    user: 'myTester',
    pass: 'xyz123'
}
mongoose.connect('mongodb://localhost/ecommercedb',options);

var db=mongoose.connection;

//Handle mongodb error

db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log('we are connected');
})


//use sessions for tracking logins
app.use(sessions({
    secret: 'asshhh',
    resave: true,
    saveUninitialized:false,
    store: new MongoStore({
        mongooseConnection: db
    })
}))

//Parse incomming requestd


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


// Server static file from template
app.use(express.static(__dirname+'/views'))



var routes=require('./routes/router')


app.get('/',routes);
app.listen(5000,function(){
    console.log("running at 5000");
})