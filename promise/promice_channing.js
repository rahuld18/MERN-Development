
var cleanTheRoom=new Promise(function(resolve,reject){

    var isClean=true;
    if(isClean){
        resolve('The room is clean.')
    }
    else{
        reject('The room is not clean.')
    }
})




var removeTheGarbage=new Promise(function(resolve,reject){

    var isRemove=true;
    if(isRemove){
        resolve('THe garbage is clean')
    }
    else{
        reject('THe garbage is not clean')
    }
})




var wonTheIceCream=new Promise(function(resolve,reject){

    var isWon=false;
    if(isWon){
        resolve('Won the ice cream.')
    }
    else{
        reject('not Won the ice cream')
    }
})


cleanTheRoom.then(function(result){
    console.log('Resolved '+ result);


    removeTheGarbage.then(function(result){

        console.log('Resolved '+ result);

          wonTheIceCream.then(function(result){

            
        console.log('Resolved '+ result);
          }).catch(function(result){

            console.log('Rejected '+ result);
        })


    }).catch(function(result){

        console.log('Rejected '+ result);
    })


}).catch(function(result){

    console.log('Rejected '+ result);
})