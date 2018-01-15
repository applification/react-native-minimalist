import React from 'react';
import renderer from 'react-test-renderer';

import Icon from './Icon';

describe('ICON', () => {
  it('Renders with DefaultProps', () => {
    const component = renderer.create(<Icon type="feather" />).toJSON();
    const { testID } = component.props;
    const { color } = component.props.style[0];
    const { padding } = component.props.style[1];
    const { fontFamily } = component.props.style[2];

    expect(testID).toBe('user');
    expect(color).toBe('#000000');
    expect(fontFamily).toBe('Feather');
    expect(padding).toBe(10);

    expect(component).toMatchSnapshot();
  });

  it('Renders with a user selected icon font', () => {
    const component = renderer
      .create(<Icon type="simple-line-icons" />)
      .toJSON();
    const { testID } = component.props;
    const { color } = component.props.style[0];
    const { padding } = component.props.style[1];
    const { fontFamily } = component.props.style[2];

    expect(testID).toBe('user');
    expect(color).toBe('#000000');
    expect(fontFamily).toBe('simple-line-icons');
    expect(padding).toBe(10);

    expect(component).toMatchSnapshot();
  });

  it('Renderes with a custom color', () => {
    const component = renderer.create(<Icon color="#D7235F" />).toJSON();
    const { testID } = component.props;
    const { color } = component.props.style[0];
    const { padding } = component.props.style[1];
    const { fontFamily } = component.props.style[2];

    expect(testID).toBe('user');
    expect(color).toBe('#D7235F');
    expect(fontFamily).toBe('Feather');
    expect(padding).toBe(10);

    expect(component).toMatchSnapshot();
  });
});
