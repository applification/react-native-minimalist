import React from 'react';
import renderer from 'react-test-renderer';

import Divider from './Divider';

describe('DIVIDER', () => {
  it('Renders with DefaultProps', () => {
    const component = renderer.create(<Divider />).toJSON();
    expect(component.props.style.marginLeft).toBe(30);
    expect(component).toMatchSnapshot();
  });

  it('Renders with color prop', () => {
    const component = renderer.create(<Divider color="red" />).toJSON();
    expect(component.props.style.backgroundColor).toBe('red');
    expect(component).toMatchSnapshot();
  });

  it('Renders with fullWidth prop', () => {
    const component = renderer.create(<Divider fullWidth />).toJSON();
    expect(component.props.style.width).toBe('100%');
    expect(component.props.style.marginLeft).toBe(0);
    expect(component).toMatchSnapshot();
  });
});
