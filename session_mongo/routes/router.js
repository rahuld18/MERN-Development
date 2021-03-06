
var express=require('express')

var router=express.Router();

var User = require('../models/user')

router.get('/',function(req,res){
    res.sendFile(__dirname + '/views/index.html');
})

router.post('/register',function(req,res,next){

    //confirm that user type the same password

    if(req.body.password!=req.body.passwordconf){


        var err=new Error('Password do not match');
     

         err.status=400;
         res.send('Password do not match.')
        return next(err);

    }
    if(req.body.email && req.body.username &&req.body.password && req.body.passwordconf){



        var userData={
            email:req.body.email,
            username: req.body.username,
            password:req.body.password,
            passwordConf:req.body.passwordconf
        }
        User.create(userData,function(err,user){

            if(err){
                throw (err)
            }
            else{

                req.session.userID=user._id;
                return res.redirect('/admin')
            }
        })
    }
})
router.get('/admin',function(req,res,next){

    if(req.session.userID)
    {
   User.findById(req.session.userID).exec(function(err,user){


        if(err){
            return next(err);
        }
        else{

            if(user==null){
                var err=new Error('not authorised');
                err.status=400;
                return next(err);

            }
            else{
                return res.send('<h2>Hello '+user.username+'!!!</h2><a href="/logout">Logout</a>');
            }
        }
    
    })
}
})

router.get('/logout',function(req,res,next){
    if(req.session){
        req.session.destroy(function(err){
            if(err){
                return next(err);
            }
            else{
                return res.redirect('/');
            }
        })
    }
})
module.exports=router;