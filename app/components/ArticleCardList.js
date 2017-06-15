import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleCardList = (props) => {

  const articleListItems = props.articles.slice(0, 5).map((article) => {
    return (
      <ArticleCard updateSaved={ () => props.updateSaved() } key={article._id} article={article}/>
    )
  });

  return (
    <ul>
      {articleListItems}
    </ul>
  )

}

export default ArticleCardList;
