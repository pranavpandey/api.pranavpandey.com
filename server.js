#! Server Startup

// Include dependencies
var express = require('express');
var app = express();
var fs = require("fs");

// Content directory
var __dirname = 'data';

app.get('/', function (req, res) {
    res.status(200).json({
        message: 'Welcome to the API for pranavpandey.com.'
    });
});

// GET pranavpandey.com/home content
app.get('/me/home', function (req, res) {
   fs.readFile(__dirname + "/" + "home.json", 'utf8', function (err, data) {
       res.writeHead(200, {'Content-Type': 'application/javascript'});
       res.end(data);
   });
});

// GET pranavpandey.com/about content
app.get('/me/about', function (req, res) {
   fs.readFile(__dirname + "/" + "about.json", 'utf8', function (err, data) {
       res.writeHead(200, {'Content-Type': 'application/javascript'});
       res.end(data);
   });
});

// GET pranavpandey.com/skills content
app.get('/me/skills', function (req, res) {
   fs.readFile(__dirname + "/" + "skills.json", 'utf8', function (err, data) {
       res.writeHead(200, {'Content-Type': 'application/javascript'});
       res.end(data);
   });
});

// GET pranavpandey.com/projects content
app.get('/me/projects', function (req, res) {
   fs.readFile(__dirname + "/" + "projects.json", 'utf8', function (err, data) {
       res.writeHead(200, {'Content-Type': 'application/javascript'});
       res.end(data);
   });
});

// GET pranavpandey.com/work content
app.get('/me/work', function (req, res) {
   fs.readFile(__dirname + "/" + "work.json", 'utf8', function (err, data) {
       res.writeHead(200, {'Content-Type': 'application/javascript'});
       res.end(data);
   });
});

// GET pranavpandey.com/contact content
app.get('/me/contact', function (req, res) {
   fs.readFile(__dirname + "/" + "contact.json", 'utf8', function (err, data) {
       res.writeHead(200, {'Content-Type': 'application/javascript'});
       res.end(data);
   });
});

// All other APIs to handle errors
app.get('*', function(req, res, next) {
  var err = new Error();
  err.status = 404;
  next(err);
});

// Handling 404 errors
app.use(function(err, req, res, next) {
  if(err.status !== 404) {
    return next();
  }
  res.status(500).json({
      message: 'API not found.'
  });
});

// Listen at 8080 port
var server = app.listen(8080, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("API listening at http://%s:%s", host, port)
});
