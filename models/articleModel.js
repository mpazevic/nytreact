const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Article = new Schema({
  title: String,
  url: String,
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Article', Article);
