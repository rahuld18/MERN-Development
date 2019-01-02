

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
 
 
 Promise.all([cleanTheRoom(),removeTheGarbage(),wonTheIceCream()])
 .then(function(result){
     console.log('All of the promise are resolved.');
 }).catch(function(result){
     console.log('One of the promise failed.')
 })

 Promise.race([cleanTheRoom(),removeTheGarbage(),wonTheIceCream()])
 .then(function(result){
     console.log('One of the them is resolved.');
 }).catch(function(result){
     console.log('One of the promise failed.')
 })
 