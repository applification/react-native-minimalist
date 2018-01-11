import React from 'react';
import renderer from 'react-test-renderer';

import ListItem from './ListItem';

describe('LISTITEM', () => {
  const title = 'List item title';

  it('Renders a list item', () => {
    const component = renderer.create(<ListItem title={title} />).toJSON();

    expect(component).toMatchSnapshot();
  });
});
