var http=require("http")
var fs = require("fs");
//create server 
http.createServer(function(request,response){

//Write in file "welcome.text"
fs.writeFile('welcome.txt', 'Hello node!', function (err) {
    if (err) { return console.log(err) };
    console.log('fichier créé avec succès!');
});
//read in a file "welcome.text"
fs.readFile('welcome.txt', function(err, data){
    if (err) { return console.log(err) };
    console.log("Asynchronous data: " + data.toString());
});
response.writeHead(200,{'Content-Type':'text/plain'})
response.end();
}).listen(8081);