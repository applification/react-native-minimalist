import React from 'react';
import renderer from 'react-test-renderer';

import Text from './Text';

describe('TEXT', () => {
  it('renders text component with the text Hello', () => {
    expect(renderer.create(<Text>Hello</Text>)).toMatchSnapshot();
  });
});
