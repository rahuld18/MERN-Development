
var app=require('express')();

var http=require('http').Server(app);
var io=require('socket.io')(http);

app.get('/',function(req,res){

    res.sendFile(__dirname+'/index.html');
})

io.on('connection',function(socket){

    console.log('A user is connected');
  
    socket.on('disconnect',function(){
        console.log('A user is disconnected');
    })
})

http.listen(3000,function(){
    console.log('The server is running at port 3000!!');
})