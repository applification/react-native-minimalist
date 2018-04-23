import React from 'react';
import { storiesOf } from '@storybook/react';
import { IconCamera } from 'react-native-minimalist-icons';

import Content from '../src/content/Content';
import Header from '../src/header/Header';
import Text from '../src/text/Text';
import Profile from '../src/profile/Profile';
import Divider from '../src/divider/Divider';
import ListItem from '../src/listitem/ListItem';
//import Photo from '../src/photo/Photo';
import PhotoInfo from '../src/photoinfo/PhotoInfo';

const Camera = <IconCamera style={{ color: '#000000', height: '1.6em' }} />;

storiesOf('Content')
  .add('DefaultProps (white)', () => (
    <Content>
      <Header>Children props</Header>
    </Content>
  ))
  .add('Passed in Props (pink)', () => (
    <Content backgroundColor="pink">
      <Header>Children props</Header>
    </Content>
  ));

storiesOf('Header')
  .add('Header', () => <Header>Big Header</Header>)
  .add('Header in red', () => <Header color="red">Red Header</Header>)
  .add('Header should be single line even if long', () => (
    <Header>React Native Minimalist</Header>
  ));

storiesOf('Text')
  .add('Text', () => <Text>Body text</Text>)
  .add('Text clean', () => <Text clean>Body text</Text>);

storiesOf('Profile')
  .add('Profile', () => <Profile />)
  .add('Profile URI', () => (
    <Profile
      source={{
        uri: 'https://randomuser.me/api/portraits/women/21.jpg',
      }}
    />
  ))
  .add('Profile small', () => <Profile small />);

storiesOf('Divider')
  .add('Divider', () => <Divider />)
  .add('Divider Red', () => <Divider color="red" />)
  .add('Divider fullWidth', () => <Divider fullWidth />);

// storiesOf('Photo').add('Photo', () => (
//   <Photo
//     imageURL={
//       'https://scontent-lhr3-1.cdninstagram.com/vp/157f88d298739845194d19096bc9834f/5B6F2F47/t51.2885-15/e35/28157443_404441573303128_568809590188146688_n.jpg'
//     }
//   />
// ));

storiesOf('ListItem').add('ListItem', () => (
  <Content>
    <ListItem title="List item title" />
  </Content>
));

storiesOf('PhotoInfo')
  .add('PhotoInfo', () => (
    <PhotoInfo
      photo={{
        uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
      }}
      title="Kristina Taylor"
      icon={Camera}
    />
  ))
  .add('PhotoInfo Title ONLY', () => (
    <PhotoInfo title="Kristina Taylor" icon={Camera} />
  ))
  .add('PhotoInfo Title & Subtitle', () => (
    <PhotoInfo title="bentierney" subtitle="Guitar Center" icon={Camera} />
  ))
  .add('PhotoInfo Title & Subtitle + Photo', () => (
    <PhotoInfo
      photo={{
        uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
      }}
      title="bentierney"
      subtitle="Guitar Center"
      icon={Camera}
    />
  ));
