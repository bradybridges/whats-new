import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import healthData from '../../data/health';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
    wrapper.instance().setState({news: {health: healthData}});
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('updateCurrentCategory', () => {
    it('should be able to update currentCategory', () => {
      const expected = 'health';
    wrapper.instance().updateCurrentCategory('health');
    expect(wrapper.state('currentCategory')).toEqual(expected);
    })
  });

  describe('updateCurrentNews', () => {
    it('should be able to update current news', () => {
      const expected = 'health';
    wrapper.instance().updateCurrentCategory('health');
    expect(wrapper.state('currentNews')).toEqual(healthData);
    });
  });

  describe('updateNews', () => {
    it('should update currentNews based on a search value', () => {
      const event = {target: {value: 'man dies'}}
      wrapper.instance().updateCurrentCategory('health');
      wrapper.instance().updateNews(event);
      expect(wrapper.state('currentNews')).toEqual([healthData[0]]);
    });
  });
});//end of main describe
