import React from 'react';
import renderer from 'react-test-renderer';

import List from './List';

describe('LIST', () => {
  it('Renders a list', () => {
    const component = renderer.create(<List />).toJSON();
    //console.log(component);
    expect(component).toMatchSnapshot();
  });
});
