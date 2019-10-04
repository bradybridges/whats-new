import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {
  let wrapper;
  const updateNewsMock = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<SearchForm 
      updateNews={updateNewsMock}
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
})