//jshint esversion:6

//console.log("hay");

//adding express
// if we use const we need to declare (//jshin esversion:6); esversion is current version of javascript.
const express = require("express");

const app = express();

//specify what shoud happen browser touch wit server
/*app.get("/",function(request, response){
    // console.log(request);
    // response.send("hello");
    response.send("<h1>Hello World</h1>");
});*/

//short form
app.get("/",function(req, res){
    // console.log(req);
    // response.send("hello");
    res.send("<h1>Hello World</h1>");
});

app.get("/contact",function(req,res){
    res.send("Contact me at: angela@gmail.com");
});

app.get("/about", function(req,res){
    res.send("My name is Angela and I love beer and code.");
});

app.get("/hobbies",function(req,res){
    res.send("<ul><li>Coffee</li><li>Code</li><li>Beer</li></ul>");
});


//use the app //add anonymous function
app.listen(3000,function(){
    console.log("Server started on port 3000");
});