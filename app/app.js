import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchSectionContainer from './components/SearchSectionContainer';
import ResultsSectionContainer from './components/ResultsSectionContainer';
import SavedSectionContainer from './components/SavedSectionContainer';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    }
  }

  render () {
    return (
      <div className="content-wrapper">
        <div className="jumbotron text-center">
          <h1>NYT Article Scrubber!</h1>
          <p>Search for (and save) scrubbed articles of interest</p>
        </div>

        <SearchSectionContainer header="Search"/>
        <ResultsSectionContainer header="Results" />
        {/* <SavedSectionContainer header="Saved Articles" /> */}
      </div>
    )
  }
};

ReactDOM.render(<App />, document.querySelector(".container"));
