const path = require("path");

module.exports.index = (req, res) => {
  res.sendFile(__dirname + "../public/index.html");
}
