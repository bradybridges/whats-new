import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';
import NavButton from '../NavButton/NavButton';

describe('Menu', () => {
  let wrapper;
  const updateCurrentCategoryMock = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Menu updateCurrentCategory={updateCurrentCategoryMock} />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('returnTabs', () => {
    it('should return all of the NavButtons', () => {
      const returnTabs = wrapper.instance().returnTabs();
      expect(returnTabs.length).toEqual(5);
      expect(returnTabs[0].type).toEqual(NavButton);
    });
  });  
});
