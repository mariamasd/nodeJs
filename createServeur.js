var http=require("http");

//Create serveur
http.createServer(function(request,response){
response.writeHead(200,{'Content-Type':'text/plain'})
response.end('<h1> Hello Node!!!!!</h1>\n');
}).listen(3000);