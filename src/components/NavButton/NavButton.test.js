import React from 'react';
import { shallow } from 'enzyme';
import NavButton from './NavButton';

describe('NavButton', () => {
  let wrapper;
  const updateCurrentCategoryMock = jest.fn();
  beforeEach(() => {
    wrapper = shallow(<NavButton 
      updateCurrentCategory={updateCurrentCategoryMock}
      key={1}
      name="local"
    />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should fire updateCurrentCategory when button is clicked', () => {
    const event = { target: { innerText: 'local' } };
    wrapper.find('button').simulate('click', event);
    expect(updateCurrentCategoryMock).toHaveBeenCalledWith('local');
  });
});
