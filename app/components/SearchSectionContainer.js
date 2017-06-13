import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SubmitButton from './SubmitButton';

class SearchSectionContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topic: "",
      startYear: "",
      endYear: "",
    };

  }

  handleClick() {
    this.logInputs(this.state.topic, this.state.startYear, this.state.endYear);
  };

  logInputs(topic, startYear, endYear) {
    alert("Topic: " + topic);
    alert("Start Year: " + startYear);
    alert("End Year: " + endYear);
  };

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading text-center">{this.props.header}</div>
        <div className="panel-body">
          <div className="input-group">
            <SearchBar label="Topic" setTerm={ topic => this.setState({topic})} />
            <SearchBar label="Start Year" setTerm={ startYear => this.setState({startYear}) } />
            <SearchBar label="End Year" setTerm={ endYear => this.setState({endYear}) } />
            <SubmitButton onClick={ () => this.handleClick() }/>
          </div>
        </div>
      </div>
    )
  };

}

export default SearchSectionContainer;
