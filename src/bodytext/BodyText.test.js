import React from 'react';
import renderer from 'react-test-renderer';

import BodyText from './BodyText';

describe('HEADER TEXT', () => {
  it('Renders with DefaultProps', () => {
    expect(renderer.create(<BodyText>Body text</BodyText>)).toMatchSnapshot();
  });

  it('Renders with color prop (red)', () => {
    expect(
      renderer.create(<BodyText color="red">Red text</BodyText>)
    ).toMatchSnapshot();
  });

  it('Always renders with a fontsize of 17 in normal', () => {
    const component = renderer
      .create(<BodyText>Header 50px</BodyText>)
      .toJSON();
    const { fontSize, fontWeight } = component.props.style;

    expect(fontSize).toBe(17);
    expect(fontWeight).toBe('normal');
  });

  it('Always renders with paddingLeft: 25, paddingRight: 25, paddingBottom: 15', () => {
    const component = renderer
      .create(<BodyText>Correctly padded</BodyText>)
      .toJSON();
    const { paddingLeft, paddingRight, paddingBottom } = component.props.style;

    expect(paddingLeft).toBe(25);
    expect(paddingRight).toBe(25);
    expect(paddingBottom).toBe(15);
  });
});
