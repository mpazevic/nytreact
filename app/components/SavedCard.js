import React, { Component } from 'react';
import helper from '../helpers/helpers'

class SavedCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      savedArticle: props.savedArticle
    }
  }

  //When an article is clicked, remove it from the the database and update the state of the top level component
  removeFromSaved(selectedArticle) {
    helper.deleteSavedArticles(selectedArticle).then((res) => {
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
        <div className="panel-heading"><a target="_blank" href={this.state.savedArticle.url}>{this.state.savedArticle.title}</a><button className="btn btn-default save-button" onClick={ () => this.removeFromSaved(this.state.savedArticle) }>Remove</button></div>
        <div className="panel-body">
          <span>Date: {this.state.savedArticle.date}</span>
        </div>
      </div>
    )
  }
}

export default SavedCard;
