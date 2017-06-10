var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var Article = require("./models/Article");

var app = express();
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect("mongodb://localhost/nytreact");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

app.get("/api/saved", function(req, res) {
  Article.find({}, function(error, doc) {
    if (error) {
      console.log(error)
    } else {
      res.json(doc)
      }
  });
});

app.post("/api/saved", function(req, res) {
  var newArticle = new Article(req.body);
  newArticle.save(function(error, doc) {
    if (error) {
      console.log(error)
    } else {
      res.send(doc)
    }
  });
});

app.delete("/api/saved/:id", function(req, res) {
  Article.find({_id: req.params.id}).remove(function(error, doc) {
    if (error) {
      console.log(error);
    } else {
      res.send({result: "success"})}
  });
});

//Main "/" Route. This will redirect the user to our rendered React application
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

//---------------------------------------------------------

// var router = require('./app/config/routes.js');
// app.use('/', router);


// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});