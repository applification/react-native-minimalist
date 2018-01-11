import React from 'react';
import renderer from 'react-test-renderer';

import Content from './Content';

describe('CONTENT VIEW', () => {
  it('renders a Content Component using defaultProps of white background', () => {
    expect(renderer.create(<Content />)).toMatchSnapshot();
  });

  it('renders a Content Component using passed in prop of cyan background', () => {
    expect(
      renderer.create(<Content backgroundColor="cyan" />)
    ).toMatchSnapshot();
  });

  // TEST for iOS paddingTop 30
});
