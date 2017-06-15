const axios = require("axios");

//Helper for API calls and NYT query
var helper = {

  //helper function for grabbing NYT articles
  makeQuery: function(topic, startYear, endYear) {

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryURL += '?' + $.param({
      'api-key': "9926da2aa6e947f0882249c001929915",
      'q': topic,
      'begin_date': startYear,
      'end_date': endYear
    });
    return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result's formatted address property
      console.log(response.data.response.docs)
      let result = []
      if (response.data.response.docs && response.data.response.docs[0]) {
        for (let article of response.data.response.docs) {
          let trimmedInfo = {}
          trimmedInfo["title"] = article.headline.main
          trimmedInfo["date"] = article.pub_date
          trimmedInfo["url"] = article.web_url
          trimmedInfo["_id"] = article._id
          result.push(trimmedInfo)
        }
      }
      // If we don't get any results, return an empty string
      return result;
    });
  },

  //Ping database to grab articles
  retriveSavedArticles: function() {
    return axios.get("/api/article");
  },

  // Post new searches to the database
  postSavedArticles: function(saved) {
    return axios.post("/api/article", saved);
  },

  //Remove saved articles from the database
  deleteSavedArticles: function(toDel) {
    return axios.put("/api/article", toDel);
  }

};

module.exports = helper;
