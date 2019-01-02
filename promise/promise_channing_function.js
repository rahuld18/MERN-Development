

var cleanTheRoom=function(){

   return new Promise(function(resolve,reject){

    var isClean=true;
    if(isClean){
        resolve('The room is clean.')
    }
    else{
        reject('The room is not clean.')
    }

})
}


var removeTheGarbage=function(message){

    return new Promise(function(resolve,reject){
 
     var isRemove=true;
     if(isRemove){
         resolve(message+ 'garbage is removed')
     }
     else{
         reject('grabage is not removed')
     }
 
 })
 }

 

var wonTheIceCream=function(message){

    return new Promise(function(resolve,reject){
 
     var isWon=true;
     if(isWon){
         resolve(message+' won the ice cream.')
     }
     else{
         reject('not won the ice cream')
     }
 
 })
 }


 cleanTheRoom().then(function(result){
     return removeTheGarbage(result);
 }).then(function(result){
     return wonTheIceCream(result);
 }).then(function(result){

    console.log(result);
 }).catch(function(error){

    console.log('OOPs!!, You are broke the promises ');
 })