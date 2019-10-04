import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu';
import { shallow } from 'enzyme';

describe('Menu', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Menu updateCurrentCategory={jest.fn()} />)
  });
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should fire function when clicked', () => {
    console.log(wrapper.debug())
  });

  describe('returnTabs', () => {
    it('should return all of the NavButtons', () => {
      expect(wrapper.instance().returnTabs().length).toEqual(5);
    });
  });  
})//EOF