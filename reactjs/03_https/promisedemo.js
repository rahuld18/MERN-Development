
function promisedemo(location){

    return new Promise(function(resolve,reject){ //promise is a object
        setTimeout(function(){

            resolve(80);
            reject('city not found');
        },1000);
    })
}

promisedemo('pune').then(function(temp){ // if condition is true first argu function will be called otherwise 2 function
    console.log('promise is success',temp);
},function(err){

    consol.log('error found ',err);
})