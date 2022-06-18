const express=require('express');
const path=require('path');
const mysql=require('mysql');
const dotenv=require('dotenv');
const cookieparser=require('cookie-parser');
const session=require('express-session');
const server=express();//making object of express;

dotenv.config({ path:'./.env'});

 const connection = mysql.createConnection({
  host:process.env.DATABASE_HOST, // host for connection
  database:process.env.DATABASE, // database from which we want to connect out node application
  user:process.env.DATABASE_USER, // username of the mysql connection
  password:process.env.DATABASE_PASSWORD, // password of the mysql connection
  });
  
  const publicDirectory = path.join(__dirname,'./public');
  
  server.use(express.static(publicDirectory));
  server.use(express.static(__dirname + '/public/javascript.js'));
  server.use(express.static(__dirname +'/public/favicon.ico'));

  //parse url encoded bodies (as sent by html forms);
  server.use(express.urlencoded({extended:false}));
  //parse json bodies(as sent by API clients);
  server.use(express.json());
  server.set('view engine','hbs');

 server.use(session({
     secret:'ABCDefg',
     resave: false,
     saveUninitialized:true,
 }));

  connection.connect(function (err){
    if(err){
        console.log("error occured while connecting");
    }
    else{
        console.log("connection created with Mysql successfully");

    }
 });

 // define router
 server.use('/',require('./routes/pages'));
 server.use('/auth',require('./routes/auth'));
// server.use('/log',require('./routes/pages'));
 server.use(cookieparser());

 server.listen(5003,() => {
         console.log("server has started at 5003");
         
     });

     