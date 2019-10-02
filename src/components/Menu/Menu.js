import React from 'react';
import './Menu.scss'
import NavButton from '../NavButton/NavButton';

class Menu extends React.Component {
  
  returnTabs = () => {
    const tabs = ['local','health','science','technology','entertainment']
    return tabs.map((tab, i) => <NavButton 
      updateCurrentCategory={this.props.updateCurrentCategory} 
      key={i} name={tab}
    />)
  }

  render() {
    return (
      <nav>
        {this.returnTabs()}
      </nav>
    )
  }
}

export default Menu;