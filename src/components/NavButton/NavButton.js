import React from 'react';
import './NavButton.scss';

class NavButton extends React.Component {

  handleClick = (e) => {
    // $('.news-article').remove();
    const category = e.target.innerText.toLowerCase();;
    this.props.updateState(category);
  }

  render() {
    return <button onClick={e => this.handleClick(e)}>{this.props.name}</button>;
  }
}

export default NavButton;