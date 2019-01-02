var fs=require('fs');

fs.appendFile('test.txt',' Node js',function(err,data){

    if(err){

        throw err;
    }console.log('success');
})