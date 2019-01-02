var express = require('express');

var app = express();
var server = require('http').Server(app);
var client = require('socket.io')(server).sockets;
var path = require('path');
var ip=require('ip')
var mongo=require('mongodb').MongoClient;
var port=8080;
var users=[];

// connect to mongodb
mongo.connect('mongodb://localhost:27017/chatdb',function(err,db){
if(err){
    throw (err);
}
console.log('Mongo Connected')

//connect to socket.
const my = db.db('chatdb');

client.on('connection',function(socket){

    console.log('A new user is connected.')

    var chat=my.collection('chats');
     // Create function to send  status

     SendStatus=function(s){
         socket.emit('status',s);
     }

     // Get chats from mongo collection

     chat.find().limit(100).sort({_id:1}).toArray(function(err,res){
         if(err){
             throw err;
         }
                 //Emit the messages
         socket.emit('output',res);
     })


     


     //Handle input event
     socket.on('input',function(data){
         let name=data.name;
         let message=data.message;
           //check for name and message 
           
           if(name==''||message==''){

            //send error status
            SendStatus('Please enter a name and message')
           }
           else{
               //insert messages

               chat.insert({name:name,message:message},function(){
                   client.emit('output',[data]);

                   /// send status object
                   SendStatus({
                       message:'Message sent',
                       clear:true
                   })
               })
           }


     })

     

     

     //Handle clear
     socket.on('clear',function(data){

        //Remove all chats from colllection 
        chat.remove({},function(){
            socket.emit('cleared')
        })
     })





    socket.on('disconnect',function(){
        console.log('A user is Disconnected.')
    })
})


})

app.get('/',function(req,res){
    res.sendFile('index.html', { root: __dirname });
})

server.listen(port,function(){
    console.log('The server is listening at http://' + ip.address()+":"+port);


})