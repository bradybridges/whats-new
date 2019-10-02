import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle';

class NewsContainer extends React.Component {
 returnFormattedNews = () => {
    const currentCategory = this.props.currentCategory;
    return this.props.news[currentCategory].map((article, i) => <NewsArticle key={i} news={this.props.news[currentCategory][i]} />)
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