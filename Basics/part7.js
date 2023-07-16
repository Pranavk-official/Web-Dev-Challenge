/*
##################################################################################
                                            Part 7
##################################################################################
*/

// Node.js Routing and GET Request without Express

var http = require("http");
var fs = require("fs");
var url = require("url")

http
  .createServer(function (req, res) {

    var q = url.parse(req.url,true);
    console.log(q.pathname);

    if (q.pathname == "/") {
    
      fs.readFile("sample.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
      
    } else if (q.pathname == "/signup") {
      
      fs.readFile("signup.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      });
    
    } else if (q.pathname == '/signupaction') {

      console.log(q.query.lname);
      
      res.write('<h1>'+q.query.fname+'</h1>');
      res.end();
      
    } else {
      
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write("404 error !!");
      res.end();
    
    }
  })
  .listen(7000,() => {
    console.log("Server Started\n@localhost : localhost:7000");
  });
