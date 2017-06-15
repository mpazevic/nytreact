import React from 'react';

const ArticleCard = ({article}) => {

  return (
    <div className="panel">
      <div className="panel-heading"><a target="_blank" href={article.url}>{article.title}</a><button className="btn btn-default save-button" href="#">Save</button></div>
      <div className="panel-body">
        <span>Date: {article.date}</span>
      </div>
    </div>
  )
}

export default ArticleCard;
