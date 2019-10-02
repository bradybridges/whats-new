import React from 'react';
import './SearchForm.scss';

class SearchForm extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <form id="search-form">
        <label>Search IMG Here</label>
        <input onChange={event => this.props.updateNews(event)} type="text" name="search-input" placeholder="Search"/>
      </form>
    )
  }
}

export default SearchForm;