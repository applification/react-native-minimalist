import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';

describe('HEADER TEXT', () => {
  it('Renders with DefaultProps', () => {
    expect(renderer.create(<Header>Big Header</Header>)).toMatchSnapshot();
  });

  it('should have text as children', () => {
    const component = renderer
      .create(<Header>Children should be text</Header>)
      .toJSON();

    expect(component.children[0]).toBe('Children should be text');
  });

  it('Renders with color prop (red)', () => {
    expect(
      renderer.create(<Header color="red">Red Header</Header>)
    ).toMatchSnapshot();
  });

  it('Always render on a single line', () => {
    const component = renderer.create(<Header>Longish Header</Header>).toJSON();
    const { numberOfLines } = component.props;

    expect(numberOfLines).toBe(1);
  });

  it('Always renders with paddingLeft, paddingBottom & paddingRight of 25', () => {
    const component = renderer.create(<Header>Padded Header</Header>).toJSON();
    const {
      paddingLeft,
      paddingBottom,
      paddingRight,
      paddingTop,
    } = component.props.style;

    expect(paddingLeft).toBe(25);
    expect(paddingRight).toBe(25);
    expect(paddingBottom).toBe(25);
    expect(paddingTop).toBe(25);
    expect(component).toMatchSnapshot();
  });

  it('Always renders with a fontsize of 35 in bold', () => {
    const component = renderer.create(<Header>Header 50px</Header>).toJSON();
    const { fontSize, fontWeight } = component.props.style;

    expect(fontSize).toBe(35);
    expect(fontWeight).toBe('bold');
  });
});
