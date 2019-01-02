//providing a mongodb client

var mongoClient=require('mongodb').MongoClient;

//A url at which Mongodb service is running
var url="mongodb://myTester:xyz123@localhost:27017/ecommercedb";

//make a connection to  mangodb service

mongoClient.connect(url,function(err,db){

    if(err)
    {
        throw err;
    }
    console.log('Successfully conected to DB');
    db.close();
})