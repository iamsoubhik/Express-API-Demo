var express = require('express');

var app = express();


app.get('/',(req,res) =>{
    res.redirect("http://google.com");
});


app.get('/g',(req,res) =>{
    res.redirect("http://facebook.com");
})

app.listen(3000,function(){
    console.log("serving demo on port 3000");
})