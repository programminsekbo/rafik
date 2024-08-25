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
app.listen(8000,function(){

   console.log("server is ok");
});