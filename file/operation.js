var fs=require('fs');

fs.writeFile('test.txt','hello beta!',function(err,data){

    if(err){

        throw err;
    }console.log('succes');
})