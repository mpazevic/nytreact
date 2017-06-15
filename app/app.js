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
      topic: "",
      startYear: "",
      endYear: ""
    }
  }

  queryNYTWithInputs(topic, startYear, endYear) {
    // this.setState({
    //   topic: topic,
    //   startYear: startYear,
    //   endYear: endYear
    // })

    alert("topic: " + topic);
    alert("startYear: " + startYear);
    alert("endYear: " + endYear);


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

  render () {
    return (
      <div className="content-wrapper">
        <div className="jumbotron text-center">
          <h1>NYT Article Scrubber!</h1>
          <p>Search for (and save) scrubbed articles of interest</p>
        </div>

        <SearchSectionContainer queryNYTWithInputs={ (topic, startYear, endYear) => { this.queryNYTWithInputs(topic, startYear, endYear)}} header="Search"/>
        <ResultsSectionContainer articles={this.state.articles} header="Results" />
        {/* <SavedSectionContainer header="Saved Articles" /> */}
      </div>
    )
  }
};

ReactDOM.render(<App />, document.querySelector(".container"));
