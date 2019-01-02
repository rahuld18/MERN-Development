
//publisher subscriber
////asynchronous 
//req res

var mongoose=require('mongoose');

var option={
    user: 'myTester',
    pass: 'xyz123'
}

mongoose.connect('mongodb://localhost:27017/ecommercedb',option);
var db=mongoose.connection;
db.on('open',function(){

    console.log("we are connected")
})


db.on('error',function(){

    console.log("There are some error");
})
db.close();