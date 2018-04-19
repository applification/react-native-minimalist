import React from 'react';
import renderer from 'react-test-renderer';

import Text from './Text';

describe('HEADER TEXT', () => {
  it('Renders with DefaultProps', () => {
    expect(renderer.create(<Text>Body text</Text>)).toMatchSnapshot();
  });

  it('Renders with color prop (red)', () => {
    expect(
      renderer.create(<Text color="red">Red text</Text>)
    ).toMatchSnapshot();
  });

  it('Always renders with a fontsize of 17 in normal', () => {
    const component = renderer.create(<Text>Header 50px</Text>).toJSON();
    const { fontSize, fontWeight } = component.props.style;

    expect(fontSize).toBe(17);
    expect(fontWeight).toBe('normal');
  });

  it('Always renders with paddingLeft: 25, paddingRight: 25, paddingBottom: 15', () => {
    const component = renderer.create(<Text>Correctly padded</Text>).toJSON();
    const { paddingLeft, paddingRight, paddingBottom } = component.props.style;

    expect(paddingLeft).toBe(25);
    expect(paddingRight).toBe(25);
    expect(paddingBottom).toBe(15);
  });
});
