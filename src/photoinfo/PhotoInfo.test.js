import React from 'react';
import renderer from 'react-test-renderer';

import PhotoInfo from './PhotoInfo';

describe('PHOTOINFO', () => {
  it('Renders photo info component', () => {
    const component = renderer.create(
      <PhotoInfo
        photo={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
        }}
        title="josh.duplessis"
        icon={require('../imgs/more.png')}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('Renders WITHOUT out subtitle', () => {
    const component = renderer.create(
      <PhotoInfo
        photo={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
        }}
        title="josh.duplessis"
        icon={require('../imgs/more.png')}
      />
    );

    expect(component).toMatchSnapshot();
  });

  it('Renders WITH a subtitle', () => {
    const component = renderer.create(
      <PhotoInfo
        photo={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
        }}
        title="bentierney"
        subtitle="Guitar Center"
        icon={require('../imgs/more.png')}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
