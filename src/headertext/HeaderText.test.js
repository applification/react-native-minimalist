import React from 'react';
import renderer from 'react-test-renderer';

import HeaderText from './HeaderText';

describe('HEADER TEXT', () => {
  it('Renders with DefaultProps', () => {
    expect(
      renderer.create(<HeaderText>Big Header</HeaderText>)
    ).toMatchSnapshot();
  });

  it('should have text as children', () => {
    const component = renderer
      .create(<HeaderText>Children should be text</HeaderText>)
      .toJSON();

    expect(component.children[0]).toBe('Children should be text');
  });

  it('Renders with color prop (red)', () => {
    expect(
      renderer.create(<HeaderText color="red">Red Header</HeaderText>)
    ).toMatchSnapshot();
  });

  it('Always render on a single line', () => {
    const component = renderer
      .create(<HeaderText>Longish Header</HeaderText>)
      .toJSON();
    const { numberOfLines } = component.props;

    expect(numberOfLines).toBe(1);
  });

  it('Always renders with paddingLeft, paddingBottom & paddingRight of 25', () => {
    const component = renderer
      .create(<HeaderText>Padded Header</HeaderText>)
      .toJSON();
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
    const component = renderer
      .create(<HeaderText>Header 50px</HeaderText>)
      .toJSON();
    const { fontSize, fontWeight } = component.props.style;

    expect(fontSize).toBe(35);
    expect(fontWeight).toBe('bold');
  });
});
