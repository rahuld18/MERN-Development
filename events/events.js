
var events=require('events').EventEmitter;

var em=new events.EventEmitter();
//subscribe the events
em.once('FirstEvent',function(){


    console.log('The first event is subscribed.');
})
//subscribe the events
em.on('SecondEvent',function(data){


    console.log('Message:'+data);
})
//raise the events
em.emit('FirstEvent');


em.emit('FirstEvent');

em.emit('SecondEvent','The second event is subscribed');
