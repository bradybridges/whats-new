import React, { Component } from 'react';
import './NewsContainer.scss'
import NewsArticle from '../NewsArticle/NewsArticle';

class NewsContainer extends Component {
 returnFormattedNews = () => {
    return this.props.news.map((article, i) => <NewsArticle key={i} news={this.props.news[i]} />)
  }

  render() {
    return (
      <section id="news-container">
        {this.returnFormattedNews()}
      </section>
    );
  }
}

export default NewsContainer;