const mysql=require('mysql');
const express=require('express');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const async = require('hbs/lib/async');
const { redirect } = require('express/lib/response');
const router = require('../routes/pages');

const connection = mysql.createConnection({
    host:process.env.DATABASE_HOST, // host for connection
    database:process.env.DATABASE, // database from which we want to connect out node application
    user:process.env.DATABASE_USER, // username of the mysql connection
    password:process.env.DATABASE_PASSWORD, // password of the mysql connection
    });

exports.register=(req,res)=>{
  console.log(req.body);
  
const{ name, password,email,passwordConfirm}=req.body;
// fetching data from front end example froms;
//   const name=req.query.name;
//   const password=req.query.password;
//   const email=req.query.email;
//   const passwordConfirm=req.query.passwordConfirm;
if(name==''||password==''||passwordConfirm==''||email=='')
{
  console.log("empty fields");
  res.render('register',{
      message:'fill the fields properly'
  })
}
else{
connection.query('select email from users where email =?',[email],async(error,results) =>{
   if(error){
       console.log(error);
   }

   if(results.length > 0){
       return res.render('register',{
           message:'That email is already use'
       })
   }else if(password !== passwordConfirm ){
    return res.render('register',{
        message:'The password dont match'
    });
   }

   let hashedpassword = await bcrypt.hash(password,8);
   console.log(hashedpassword);
   
   connection.query('INSERT into users Set ?',{name:name, email:email,password:hashedpassword},(error,results) => {
       if(error){
           console.log(error);
       }
       else{
           console.log(results);
           res.render('register',{
               message:'User Registered'
           });
           res.redirect('/login');
       }
   })

});
}
//connection.query(select )
}
//login
//module.exports=router;
