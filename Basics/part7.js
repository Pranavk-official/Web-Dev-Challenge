/*
##################################################################################
                                            Part 7
##################################################################################
*/

// Node.js Routing and GET Request without Express

var http = require("http");
var fs = require('fs')

http.createServer(function (req,res) {

    if (req.url=='/') {
        
    }else if(req.url=='/login'){

    }else{
        
    }


    fs.readFile('sample.html', function(err,data){
      res.writeHead(200,{'Content-Type':'text/html'})
      res.write(data);
      res.end();
    })
  })
  .listen(7000);

