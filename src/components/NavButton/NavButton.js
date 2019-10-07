import React from 'react';
import './NavButton.scss';
import $ from 'jquery';

class NavButton extends React.Component {

  handleClick = (e) => {
    e.target.classList.add('active');
    $(e.target).siblings().removeClass('active');
    const category = e.target.innerText.toLowerCase();;
    this.props.updateCurrentCategory(category);
  }

  render() {
    let category = this.props.name.split('');
    category[0] = category[0].toUpperCase();
    category = category.join('');
    return <button className="navButton" onClick={e => this.handleClick(e)}>{category}</button>;
  }
}

export default NavButton;