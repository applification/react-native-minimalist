import React from 'react';
import renderer from 'react-test-renderer';

import BodyText from './BodyText';

describe('HEADER TEXT', () => {
  it('renders BodyText component', () => {
    expect(renderer.create(<BodyText>Body text</BodyText>)).toMatchSnapshot();
  });

  it('renders BodyText in red using passed in prop', () => {
    expect(
      renderer.create(<BodyText color="red">Red text</BodyText>)
    ).toMatchSnapshot();
  });

  it('renders BodyText with a fontsize of 25, normal', () => {
    const componentOutput = JSON.parse(
      JSON.stringify(renderer.create(<BodyText>Header 50px</BodyText>))
    );
    const fontSize = componentOutput.props.style.fontSize;
    const fontWeight = componentOutput.props.style.fontWeight;

    expect(fontSize).toBe(17);
    expect(fontWeight).toBe('normal');
  });
});
