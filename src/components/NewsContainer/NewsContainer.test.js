import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';
import localNews from '../../data/local';

describe('NewsContainer', () => {
  let wrapper;
  const newsMockData = localNews;

  beforeEach(() => {
    wrapper = shallow(<NewsContainer 
      news={newsMockData} 
      currentCategory="local"
      />);
  });

  it('should match the screenshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});