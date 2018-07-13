// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 3000;
var {User, Exercise} = require('./schema');

app.post("/api/exercise/new-user", bodyParser.json(), function(request, response){
  console.log("Request recieved at: /api/exercise/new-user")
  let u = new User({
    username: request.body.username
  });
  u.save()
  .then(res=>{
    console.log(res);
    return response.send({
      username: res.username,
      userId: res._id
    });
  })
  .catch(err=>{
    console.log(err);
    return response.send("username already taken");
  })
})

app.post("/api/exercise/new-user", bodyParser.json(), function(request, response){
  console.log("Request recieved at: /api/exercise/new-user")
  let u = new User({
    username: request.body.username
  });
  u.save()
  .then(res=>{
    console.log(res);
    return response.send({
      username: res.username,
      userId: res._id
    });
  })
  .catch(err=>{
    console.log(err);
    return response.send("username already taken");
  })
})

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});


// listen for requests :)
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URL)
    .then((resolve) => {
        console.log("Connection with MongoDB server successful: ", process.env.MONGO_URL);
    })
    .then(()=>{
      app.listen(port, function () {
        console.log('Node.js listening ...');
      });
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB caught: ", err);
    });
