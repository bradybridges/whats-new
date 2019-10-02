import React, { Component } from 'react';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';

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
      currentCategory: 'local'
    }
  }

  updateCurrentCategory = (category) => {
    this.setState({currentCategory: category});
  }

  render () {
    return (
      <main>
        <header><h1>Denver News</h1></header>
        <Menu updateCurrentCategory={this.updateCurrentCategory}/>
        <NewsContainer 
          news={this.state.news} 
          currentCategory={this.state.currentCategory}
        />
      </main>
    );
  }
}

export default App;
