import React from 'react';
import './NavButton.scss';

class NavButton extends React.Component {

  handleClick = (e) => {
    const category = e.target.innerText.toLowerCase();;
    this.props.updateCurrentCategory(category);
  }

  render() {
    return <button onClick={e => this.handleClick(e)}>{this.props.name}</button>;
  }
}

export default NavButton;