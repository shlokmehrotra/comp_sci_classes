var http = require('http');
var path = require('path');

var express = require('express');

var app = express();
var server = http.createServer(app);

app.use(express.static(path.resolve(__dirname, 'client')));

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '/index.html')); 
});

app.get('/about', function(req, res){
  res.sendFile(path.join(__dirname, '/client/about.html')); 
  //res.sendFile('about');
});

app.get('/contact', function(req, res){
  res.sendFile(path.join(__dirname, '/client/contact.html')); 
});

app.get('/password', function(req, res){
  res.sendFile(path.join(__dirname, '/client/password.html')); 
});
app.get('/membership', function(req, res){
  res.sendFile(path.join(__dirname, '/client/membership.html'))
})
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  console.log("Server listening...");
});
