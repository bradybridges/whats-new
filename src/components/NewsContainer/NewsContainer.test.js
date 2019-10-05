import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';
import localNews from '../../data/local';

describe('NewsContainer', () => {

  it('should match the screenshot', () => {
    const newsMockData = localNews;
    const wrapper = shallow(<NewsContainer 
      news={newsMockData} 
      currentCategory="local"
      />);
    expect(wrapper).toMatchSnapshot();
  });
});