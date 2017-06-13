// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
const viewRouter = require("./routes/viewRoutes.js")
// const apiRouter = require("./routes/apiRoutes.js")

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
mongoose.connect(process.env.MONGOLAB_URI || localDbURL);
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// app.use("/api", apiRouter)
app.use("/", viewRouter);

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
