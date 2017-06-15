import React from 'react';
import ArticleCard from './ArticleCard';

const ArticleCardList = (props) => {

  const articleListItems = props.articles.map((article) => {
    return (
      <ArticleCard key={article._id} article={article}/>
    )
  });

  return (
    <ul>
      {articleListItems}
    </ul>
  )

}

export default ArticleCardList;
