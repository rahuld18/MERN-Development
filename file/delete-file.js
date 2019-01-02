var fs=require('fs');

fs.unlink('test.txt',function(err){

    if(err){

        throw err;
    }console.log('deleted');
})