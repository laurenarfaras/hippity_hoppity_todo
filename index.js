var express = require('express');
var server = express();
var port = process.env.PORT || 8080;

// to serve css, images, and js
server.use(express.static(__dirname + '/public'));

server.get('/', function(request, response){
  response.sendFile('index.html', {root: __dirname + '/public/html'});
});

server.listen(port, function(){
  console.log("now listening on port", port);
});
