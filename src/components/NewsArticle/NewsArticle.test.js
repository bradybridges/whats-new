import React from 'react';
import NewsArticle from './NewsArticle';
import { shallow } from 'enzyme';

describe('NewsArticle', () => {
  let wrapper;
  const newsArticleMock = {headline: 'Hello', description:'This is the description.', id: 1};
  beforeEach(() => {
    wrapper = shallow(<NewsArticle key={1} news={newsArticleMock} />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
})