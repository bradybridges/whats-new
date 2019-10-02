import React, { Component } from 'react';
import './App.scss';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';

import local from '../../data/local';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import science from '../../data/science';
import technology from '../../data/technology';
const news = {
  local,
  entertainment,
  health,
  science,
  technology
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      news,
      currentCategory: 'local',
      currentNews: local
    }
  }

  updateCurrentCategory = (category) => {
    this.setState({currentCategory: category});
    this.updateCurrentNews(category);
  }

  updateCurrentNews = (category) => {
    const updatedNews = this.state.news[category];
    console.log(updatedNews);
    this.setState({currentNews: updatedNews});
  }

  updateNews = (event) => {
    const searchInput = event.target.value.toLowerCase();
    const currentCategory = this.state.currentCategory;
    const updatedNews = this.state.news[currentCategory].filter(news => {
      const headline = news.headline.toLowerCase();
      const description = news.description.toLowerCase();
      if(headline.includes(searchInput) || description.includes(searchInput)) {
        return true;
      } else {
        return false;
      }
    });
    this.setState({currentNews: updatedNews});
  }

  render () {
    return (
      <main>
        <header>
          <h1>Denver News</h1>
          <SearchForm updateNews={this.updateNews} />
        </header>
        <Menu updateCurrentCategory={this.updateCurrentCategory}/>
        <NewsContainer 
          news={this.state.currentNews} 
          currentCategory={this.state.currentCategory}
        />
      </main>
    );
  }
}

export default App;
