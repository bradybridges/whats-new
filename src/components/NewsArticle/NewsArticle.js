import React from 'react';
import './NewsArticle.scss';

const NewsArticle = (props) => {
  const { news } = props;
  return (
    <article className="newsArticle">
      <img src={news.img} alt="news" />
      <h3>{news.headline}</h3>
      <p>{news.description}</p>
      <form action={news.url} method="get" target="_blank">
        <button className="article-button" type="submit">Read Full Article</button>
      </form>
    </article>
  );
};

export default NewsArticle;

