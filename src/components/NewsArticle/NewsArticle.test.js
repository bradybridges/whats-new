import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
  it('should match the snapshot', () => {
    const newsArticleMock = { headline: 'Hello', description: 'This is the description.', id: 1 };
    const wrapper = shallow(<NewsArticle key={1} news={newsArticleMock} />);
    expect(wrapper).toMatchSnapshot();
  });
});
