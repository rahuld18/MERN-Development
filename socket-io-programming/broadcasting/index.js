
var app=require('express')();

var http=require('http').Server(app);
var io=require('socket.io')(http);

app.get('/',function(req,res){

    res.sendFile(__dirname+'/index.html');
})
var client=0;

io.on('connection',function(socket){
client++;
   
socket.emit('newClientConnected',{message:'Hello new Clients.'})

// io.sockets.emit('broadcast',{message: client+ ' clients are connected with us.'})
socket.broadcast.emit('newClientConnected',{message:client +'clients are connected'})
    socket.on('disconnect',function(){
        socket.broadcast.emit('newClientConnected',{message:client +'clients are connected'})

    client--;
    })
})

http.listen(3000,function(){
    console.log('The server is running at port 3000!!');
})