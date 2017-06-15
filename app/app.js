import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import helper from './helpers/helpers'
import SearchSectionContainer from './components/SearchSectionContainer';
import ResultsSectionContainer from './components/ResultsSectionContainer';
import SavedSectionContainer from './components/SavedSectionContainer';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      savedArticles: [],
      topic: "",
      startYear: "",
      endYear: ""
    }

    // Display saved articles to the user when the page loads (if there are any saved articles)
    this.renderSaved();
  }

  //Display saved articles to the user
  renderSaved() {
    // alert('retrieving');
    helper.retriveSavedArticles().then((savedArticles) => {
      this.setState({savedArticles})
    })
  }

  queryNYTWithInputs(topic, startYear, endYear) {

    // alert("topic: " + topic);
    // alert("startYear: " + startYear);
    // alert("endYear: " + endYear);

    //Make a query to the NYT API, and create the components
    helper.makeQuery(topic, startYear, endYear).then((result) => {
      this.displayResultComponents(result);
    });
  }

  //Display article titles with links after the query to the database is made
  displayResultComponents(queryResult) {
    this.setState({
      articles: queryResult,
      topic: "",
      startYear: "",
      endYear: ""
    });
  }

  //Update the saved articles after an article has been selected
  updateSavedArticles() {
    // alert('about to re-render')
    this.renderSaved();
  }

  render () {
    return (
      <div className="content-wrapper">
        <div className="jumbotron text-center">
          <h1>NYT Article Scrubber!</h1>
          <p>Search for (and save) scrubbed articles of interest</p>
        </div>

        <SearchSectionContainer queryNYTWithInputs={ (topic, startYear, endYear) => { this.queryNYTWithInputs(topic, startYear, endYear)}} header="Search"/>
        <ResultsSectionContainer updateSaved={ () => this.updateSavedArticles() } articles={this.state.articles} header="Results" />
        <SavedSectionContainer updateSaved={ () => this.updateSavedArticles() } savedArticles={this.state.savedArticles} header="Saved Articles" />
      </div>
    )
  }
};

ReactDOM.render(<App />, document.querySelector(".container"));
