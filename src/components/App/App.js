import React, { Component } from 'react';
import './App.css';
import NewsContainer from '../NewsContainer/NewsContainer';
import Menu from '../Menu/Menu';

import localNews from '../../data/local';
import entertainmentNews from '../../data/entertainment';
import healthNews from '../../data/health';
import scienceNews from '../../data/science';
import technologyNews from '../../data/technology';
const news = {
  localNews,
  entertainmentNews,
  healthNews,
  scienceNews,
  technologyNews
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      news
    }
  }

  render () {
    return (
      <div>
        <Menu />
        <NewsContainer news={this.state.news}/>
      </div>
    );
  }
}

export default App;
