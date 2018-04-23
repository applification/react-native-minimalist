import React from 'react';
//import { Dimensions } from 'react-native';
import renderer from 'react-test-renderer';

import Photo from './Photo.js';

describe('IMAGE', () => {
  it('Renders image', () => {
    const component = renderer
      .create(
        <Photo imageURL="https://scontent-lht6-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/26152588_1188914984576015_4446380707253583872_n.jpg" />
      )
      .toJSON();

    const width = component.props.style.width;
    // const deviceWidth = Dimensions.get('window').width;

    // expect(width).toBe(deviceWidth);
    expect(width).toBe(375);
    expect(component).toMatchSnapshot();
  });
});
