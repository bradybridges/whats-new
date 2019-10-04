import React, { Component } from 'react';
import './App.scss';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';
import SearchForm from '../SearchForm/SearchForm';
import local from '../../data/local';

class App extends Component {
  constructor() {
    super();
    this.state = {
      news: null,
      currentCategory: 'local',
      currentNews: local
    }
    this.fetchData();
  }

  fetchData = () => {
    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
    .then(data => data.json())
    .then(json => this.setState({news: json}))
    .catch(error => console.log(error));
  }

  updateCurrentCategory = (category) => {
    this.setState({currentCategory: category});
    this.updateCurrentNews(category);
  }

  updateCurrentNews = (category) => {
    const updatedNews = this.state.news[category];
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
