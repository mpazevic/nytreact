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

  //Submit a query to the NYT API when the submit button is pressed
  handleClick() {
    this.props.queryNYTWithInputs(this.state.topic, this.state.startYear, this.state.endYear);
    this.setState({
      topic: '',
      startYear: '',
      endYear: ''
    });
  };

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading text-center">{this.props.header}</div>
        <div className="panel-body">
          <div className="input-group">
            <SearchBar label="Topic" value={this.state.topic} setTerm={ topic => this.setState({topic})} />
            <SearchBar label="Start Year" value={this.state.startYear} setTerm={ startYear => this.setState({startYear}) } />
            <SearchBar label="End Year" value={this.state.endYear} setTerm={ endYear => this.setState({endYear}) } />
            <SubmitButton onClick={ () => this.handleClick() }/>
          </div>
        </div>
      </div>
    )
  };

}

export default SearchSectionContainer;
