import React from 'react';
import './NewsArticle.scss';

class NewsArticle extends React.Component {

  render() {
    return (
      <article className="newsArticle">
        <img src={this.props.news.img} alt="news" />
        <h3>{this.props.news.headline}</h3>
        <p>{this.props.news.description}</p>
        <form action={this.props.news.url} method="get" target="_blank">
         <button className="article-button" type="submit">Read Full Article</button>
        </form>
      </article>
    )
  }
}

export default NewsArticle; 