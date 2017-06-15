import React from 'react';
import ArticleCardList from './ArticleCardList';

const ResultsSectionContainer = (props) => {

  return (
    <div className="panel panel-primary">
      <div className="panel-heading text-center">{ props.header }</div>
      <div className="panel-body">
        <ArticleCardList updateSaved={ () => props.updateSaved() } articles={ props.articles }/>
      </div>
    </div>
  )
}

export default ResultsSectionContainer;
