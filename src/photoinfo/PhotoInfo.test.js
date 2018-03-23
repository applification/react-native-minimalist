import React from 'react';
import renderer from 'react-test-renderer';
import IconCamera from 'react-native-minimalist-icons/camera';

import PhotoInfo from './PhotoInfo';

const Icon = <IconCamera style={{ color: '#000000', height: '1.6em' }} />;

describe('PHOTOINFO', () => {
  it('Renders photo info component', () => {
    const component = renderer.create(
      <PhotoInfo
        photo={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
        }}
        title="josh.duplessis"
        icon={Icon}
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
        icon={Icon}
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
        icon={Icon}
      />
    );

    expect(component).toMatchSnapshot();
  });
});
