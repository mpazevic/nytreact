import React, { Component } from 'react';
import ArticleCardList from './ArticleCardList';

class ResultsSectionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading text-center">{this.props.header}</div>
        <div className="panel-body">
          <ArticleCardList />
        </div>
      </div>
    )
  }
}

export default ResultsSectionContainer;
