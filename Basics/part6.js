/*
###################################################################################################################
                                                    Part 6
###################################################################################################################
*/

// Server Creation, Serving HTML file

var http = require("http");
var fs = require('fs')

http.createServer(function (req,res) {

    fs.readFile('sample.html', function(err,data){
      res.writeHead(200,{'Content-Type':'text/html'})
      res.write(data);
      res.end();
    })
  })
  .listen(7000);


