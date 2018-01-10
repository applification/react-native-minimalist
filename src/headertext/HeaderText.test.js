import React from 'react';
import renderer from 'react-test-renderer';

import HeaderText from './HeaderText';

describe('HEADER TEXT', () => {
  it('renders HeaderText component', () => {
    expect(
      renderer.create(<HeaderText>Big Header</HeaderText>)
    ).toMatchSnapshot();
  });

  it('renders HeaderText in red using passed in prop', () => {
    expect(
      renderer.create(<HeaderText color="red">Red Header</HeaderText>)
    ).toMatchSnapshot();
  });

  it('renders HeaderText on a single line', () => {
    const component = renderer
      .create(<HeaderText>Longish Header</HeaderText>)
      .toJSON();
    const { numberOfLines } = component.props;

    expect(numberOfLines).toBe(1);
  });

  it('renders HeaderText with a fontsize of 35, bold', () => {
    const component = renderer
      .create(<HeaderText>Header 50px</HeaderText>)
      .toJSON();
    const { fontSize, fontWeight } = component.props.style;

    expect(fontSize).toBe(35);
    expect(fontWeight).toBe('bold');
  });
});
