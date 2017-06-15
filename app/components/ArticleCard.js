import React, { Component } from 'react';
import helper from '../helpers/helpers';

class ArticleCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: props.article
    }
  }

  //When an article's Save button is clicked, post it to the database and set the state of the top level component
  postSaved(selectedArticle) {
    helper.postSavedArticles(selectedArticle).then((res) => {
      console.log(res);
      this.updateSavedState();
    })
  }

  updateSavedState() {
    // alert('Updating top level state');
    this.props.updateSaved();
  }

  render() {
    return (
      <div className="panel">
        <div className="panel-heading"><a target="_blank" href={this.state.article.url}>{this.state.article.title}</a><button className="btn btn-default save-button" onClick={ () => this.postSaved(this.state.article) }>Save</button></div>
        <div className="panel-body">
          <span>Date: {this.state.article.date}</span>
        </div>
      </div>
    )
  }
}

export default ArticleCard;
