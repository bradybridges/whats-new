import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle';

class NewsContainer extends React.Component {
 returnFormattedNews = () => {
    return this.props.news.localNews.map((article, i) => <NewsArticle key={i} news={this.props.news.localNews[i]} />)
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