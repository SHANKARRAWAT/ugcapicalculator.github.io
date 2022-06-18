const express=require('express');
const router=express.Router();

router.get('/',(req,res) => {
     res.render("index");
});

router.get("/Aboutus", (req,res) =>{
    res.render("Aboutus");
 });

 router.get("/contactus", (req,res) =>{
    res.render("contactus");
 });

router.get("/forUniversity", (req,res) =>{
    // res.send("<H1> home page </h1>")
      res.render("forUniversity");
 });
 router.get("/forCollege", (req,res) =>{
   // res.send("<H1> home page </h1>")
     res.render("forCollege");
});

 router.get("/login", (req,res) =>{
    // res.send("<H1> home page </h1>")
    res.render("login");
 });

 router.get("/register",(req,res)=>{
  res.render("register");
 });

 router.get("/afterlogin",(req,res) =>{
    res.render("afterlogin");
 })
 
 module.exports = router;