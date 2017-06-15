// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
const viewRouter = require("./routes/viewRoutes.js");
const apiRouter = require("./routes/apiRoutes.js");

// Create Instance of Express
const app = express();
// Sets an initial port for later use in listener
const PORT = process.env.PORT || 8080;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

const localDbURL = "mongodb://localhost/nytDB"
// MongoDB configuration (Change this URL to your own DB)
// process.env.MONGOLAB_URI || localDbURL
// "mongodb://heroku_zmn8ldxn:coh895jlqa4dqdr25sre34t3k3@ds127802.mlab.com:27802/heroku_zmn8ldxn"
mongoose.connect("mongodb://heroku_zmn8ldxn:coh895jlqa4dqdr25sre34t3k3@ds127802.mlab.com:27802/heroku_zmn8ldxn");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

app.use("/api", apiRouter);
app.use("/", viewRouter);

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
