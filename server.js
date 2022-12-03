const express = require('express')
const app = express()
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/views/index.html'));
});


router.get('/login',function(req,res){
    res.sendFile(path.join(__dirname+'/views/log_in.html'));
});  

router.get('/default',function(req,res){
    res.sendFile(path.join(__dirname+'/views/default_version.html'));
});  

router.get('/signup',function(req,res){
    res.sendFile(path.join(__dirname+'/views/sign_up.html'));
});

app.use('/', router);
app.listen(3000)