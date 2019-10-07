import React from 'react';
import './SearchForm.scss';

const SearchForm = (props) => {
  return (
    <form id="search-form">
      <input type="text" name="search-input" placeholder="Search" />
      <button id="search-btn" onClick={(event) => props.updateNews(event)} type="button">Search</button>
    </form>
  );
};

export default SearchForm;
