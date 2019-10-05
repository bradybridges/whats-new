import React from 'react';
import './SearchForm.scss';

const SearchForm = (props) => {
  return (
    <form id="search-form">
      <input onChange={event => props.updateNews(event)} type="text" name="search-input" placeholder="Search"/>
    </form>
  )
}

export default SearchForm;