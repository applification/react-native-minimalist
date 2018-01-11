import React from 'react';
import renderer from 'react-test-renderer';

import Profile from './Profile';

describe('PROFILE', () => {
  it('Renders profile image with DefaultProps', () => {
    expect(renderer.create(<Profile />)).toMatchSnapshot();
  });

  it('Renders profile image from URI', () => {
    expect(
      renderer.create(
        <Profile
          source={{
            uri:
              'https://pbs.twimg.com/profile_images/941645845409226752/Lt1apZ3Q_400x400.jpg',
          }}
        />
      )
    ).toMatchSnapshot();
  });

  it('Always renders with size 50dp, borderRadius 25dp and a margin of 10dp', () => {
    const component = renderer.create(<Profile />).toJSON();
    const { width, height, borderRadius, margin } = component.props.style;

    expect(width && height).toBe(50);
    expect(borderRadius).toBe(25);
    expect(margin).toBe(10);
  });

  it('Renders small profile image with small prop', () => {
    const component = renderer.create(<Profile small />).toJSON();
    const { width, height, borderRadius, margin } = component.props.style;

    expect(width && height).toBe(30);
    expect(borderRadius).toBe(15);
    expect(margin).toBe(7);
  });
});
