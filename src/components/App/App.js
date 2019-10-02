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
    console.log(this.state.currentCategory);
  }

  render () {
    return (
      <div>
        <Menu updateCurrentCategory={this.updateCurrentCategory}/>
        <NewsContainer 
          news={this.state.news} 
          currentCategory={this.state.currentCategory}
        />
      </div>
    );
  }
}

export default App;
