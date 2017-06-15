import React from 'react';
import SavedCardList from './SavedCardList';

const SavedSectionContainer = (props) => {

  return (
    <div className="panel panel-primary">
      <div className="panel-heading text-center">{ props.header }</div>
      <div className="panel-body">
        <SavedCardList savedArticles={ props.savedArticles }/>
      </div>
    </div>
  )
}

export default SavedSectionContainer;
