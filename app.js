var http=require('http');
var server=http.createServer(function(req,res){

    res.end("hello word")
})

server.listen(6767);
console.log("hello is sus");