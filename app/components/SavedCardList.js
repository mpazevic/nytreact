import React from 'react';
import SavedCard from './SavedCard';

const SavedCardList = (props) => {

  //If there are not any articles when the component renders, return null
  if (props.savedArticles.length === 0) {
    return null;
  }

  const savedArticleListItems = props.savedArticles.data.map((savedArticle) => {
    return (
      <SavedCard key={savedArticle._id} updateSaved={ () => props.updateSaved() } savedArticle={savedArticle}/>
    )
  });

  return (
    <ul>
      {savedArticleListItems}
    </ul>
  )

}

export default SavedCardList;
