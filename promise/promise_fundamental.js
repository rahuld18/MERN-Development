
var cleanTheRoom=new Promise(function(resolve,reject){

    var isClean=true;
    if(isClean){
        resolve('The room is clean.')
    }
    else{
        reject('The room is not clean.')
    }
})

cleanTheRoom.then(function(result){
    console.log('Resolved '+ result);
}).catch(function(result){
    console.log('Rejected '+result);
})