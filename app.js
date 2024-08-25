var express=require('express');

app=express();

app.get("/", function (req,res){

res.send("hello word");



});




app.get("/home", function (req,res){
let myapi=[
   {

      name:"hridoy",
      roll:5210,
      home:"dinajpur",
   },
   {

      name:"hridoy",
      roll:52040,
      home:"dinajpur",
   },
   {

      name:"hridoy",
      roll:52040,
      home:"dinajpur",
   },
]
   res.json(myapi);
   
   
   
   });










   app.get("/sis", function (req,res){

   res.append("name","hridoy");
   res.append("roii","500");
   res.append("home","dinajpur");
   res.status(200).end("hello word my jan")

      
      
      
      });

      

   app.get("/sis", function (req,res){

      res.cooike("name","hridoy");
      res.cooike("roii","500");s
      res.cooike("home","dinajpur");
      res.end("hello word my jan")
   
         
         
         
         });
      
      
app.listen(7070,function(){

   console.log("server is ok");
});