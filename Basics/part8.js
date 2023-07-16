/*
##################################################################################
                                            Part 8
##################################################################################
*/

// Intro to Express

// install express js `npm install express`

const express = require("express");
const path = require("path");
const app = express();

app.use(function (req,res, next) {
    console.log('Hello');
    next()
})

app.get("/signup", function (req, res) {
  // res.send('Hello')
  res.sendFile(path.join(__dirname, "signup.html"));
});

app.post("/signup", function (req, res) {
  res.send("Account Created Successfully");
});

app.get("/about", function (req, res) {
  res.send("About");
});

app.listen(3000, function () {
  console.log(__dirname);
  console.log("Server Started on port : 3000");
});


// Assignment Using GET and POST in EXPRESS js