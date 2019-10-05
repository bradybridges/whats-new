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

  it('should call updateNews on change of input', () => {
    wrapper.find('input').simulate('change');
    expect(updateNewsMock).toHaveBeenCalled();
  });
})