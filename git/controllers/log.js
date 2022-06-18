const mysql=require('mysql');
const express=require('express');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const async = require('hbs/lib/async');
const cookieparser=require('cookie-parser');
const session=require('express-session');
const router = require('../routes/pages');

router.use(session({
    secret:'ABCDefg',
    resave: false,
    saveUninitialized:true,
}));

const connection = mysql.createConnection({
    host:process.env.DATABASE_HOST, // host for connection
    database:process.env.DATABASE, // database from which we want to connect out node application
    user:process.env.DATABASE_USER, // username of the mysql connection
    password:process.env.DATABASE_PASSWORD, // password of the mysql connection
    });
   
    exports.login = function(req, res){

     const{name , password}=req.body;
    //    if(name==''||password=='')
    //    {
    //        console.log(" left empty");
    //        return res.render('login',{
    //            message:"Username/password cant be left empty"
    //        })
    //    }
      // else
        var sql="SELECT *  FROM users WHERE name=?";          
        connection.query(sql, [name],async(error, results)=>{  
           if(error)
            {
                console.log(error);
            }
           // console.log(req.body);
            //console.log(password);
            //console.log(results.length);
            //console.log(results[0].name);
           // console.log(results[0].password);
            if(results.length > 0){
                if(results.length && bcrypt.compareSync(password,results[0].password)){
                        console.log("bcrypt");
                        req.session.name=name;
                        console.log(req.session.name);
                        res.render("afterlogin",{message:'welcome ,'+req.session.name});
                       
                    }
                else
                {
                    return res.render('login',{
                        message:'Wrong username/password combination'
                    })
                }
            }
            else{
                return res.render('login',{
                    message:'User doesnot exist'
                })
            }
     });
 


    


        //     router.get('/afterlogin',function(req,res,next){
        //         console.log("session");
        //          res.render('afterlogin',{message:'welcome ,'+req.session.name});
        //    });
        //    router.get('/logout',function(req,res,next) {
        //            if(req.session.name){
        //                req.session.destroy();   
        //            }
        //             res.redirect("/");
        //        })
        // }
   }

//module.exports=router;
