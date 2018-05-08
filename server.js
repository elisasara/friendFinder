// all dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//initialize express
var app = express();

// create a port to be used for both locahost and others
var PORT = process.env.PORT || 8080;

// set up express middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// server is listening
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });

