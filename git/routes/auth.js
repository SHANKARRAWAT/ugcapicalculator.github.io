const express=require('express');
const authcontroller=require('../controllers/auth');
const logcontroller =require('../controllers/log');
const async = require('hbs/lib/async');
const router=express.Router();

router.post('/register',authcontroller.register);
router.post('/login',logcontroller.login);//login  is object;

module.exports = router;