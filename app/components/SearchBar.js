import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ""
    }

  }

  render() {
    return (
      <div className="input-group search-bar">
        <span className="label-text"><label htmlFor={this.props.label}>{this.props.label}</label></span>
        <input
          className="form-control"
          type="text"
          id={this.props.label}
          value={this.props.value}
          onChange={event => this.handleInputChange(event.target.value)} />
      </div>
    )
  }

  handleInputChange(term) {
    this.setState({term});
    this.props.setTerm(term);
  }

}

export default SearchBar;
