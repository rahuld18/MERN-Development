var express=require('express');
var mongoose=require('mongoose');
//pull information from html post
var bodyparser=require('body-parser');
var app=express();
var Brand=require('./models/brands');
//parse application /x-www-form-urlencoded
//app.use(bodyparser.urlencoded{'extended':true})
//parse application/json
app.use(bodyparser.json())
var option={
    user: 'myTester',
    pass: 'xyz123'
}
mongoose.connect('mongodb://localhost:27017/ecommercedb',option)
var db=mongoose.connection;


app.get('/',function(req,res){


    res.send('Welcome to Admin portal');
})
app.get('/api/brands',function(req,res){


    Brand.getBrands(function(err,data){

        if(err){
          
            throw err;
        }  else{
         res.json(data);       
        }
    })
})
app.get('/api/brands/:id',function(req,res){

    Brand.getBrandById(req.params.id,function(err,data){
        if(err)
        {
            throw err;
        }
        else{
            res.json(data);
        }
    })
})

app.post('/api/brands/',function(req,res){

    Brand.create(req.body,function(err,data){
        if(err)
        {
            throw err;
        }
        else{
            console.log('Document posted successfully!!');
            res.json(data);
        }
    })
})
app.put('/api/brands/:id',function(req,res){


    Brand.findByIdAndUpdate(req.params.id,req.body,function(err,data){

        if(err)
        {
            throw err;
        }
        else{
            console.log('Document puted successfully!!');
            res.json(data);
        }
    })
})
app.delete('/api/brands/:id',function(req,res){

    var query={
        _id: req.params.id
    }
    //query is an object becoz one or more field also possible but in put and get case we can pass variable =req.params.id
    Brand.remove(query,function(err,data){

        if(err)
        {
            throw err;
        }
        else{
            console.log('Document deleted successfully!!');
            res.json(data);
        }
    })

    })


app.listen(3000,function(){
    console.log('The server is running at port 3000!!');

});