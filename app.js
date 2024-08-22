const http=require("http");
const server=http.createServer(function (req,res){
 if(req.url=="/"){
    res.end("my fist home pag")
 }else if(req.url=="/log"){

    res.end("loging page")
 }


})
server.listen(7070)

console.log("server is oky")