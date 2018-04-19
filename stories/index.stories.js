import React from 'react';
import { storiesOf } from '@storybook/react';
import { IconCamera } from 'react-native-minimalist-icons';

import Content from '../src/content/Content';
import HeaderText from '../src/headertext/HeaderText';
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
      <HeaderText>Children props</HeaderText>
    </Content>
  ))
  .add('Passed in Props (pink)', () => (
    <Content backgroundColor="pink">
      <HeaderText>Children props</HeaderText>
    </Content>
  ));

storiesOf('HeaderText')
  .add('HeaderText', () => <HeaderText>Big Header</HeaderText>)
  .add('HeaderText in red', () => (
    <HeaderText color="red">Red Header</HeaderText>
  ))
  .add('HeaderText should be single line even if long', () => (
    <HeaderText>React Native Minimalist</HeaderText>
  ));

storiesOf('BodyText').add('BodyText', () => <Text>Body text</Text>);

storiesOf('Profile')
  .add('Profile', () => <Profile />)
  .add('Profile URI', () => (
    <Profile
      source={{
        uri:
          'https://pbs.twimg.com/profile_images/941645845409226752/Lt1apZ3Q_400x400.jpg',
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
      title="josh.duplessis"
      icon={Camera}
    />
  ))
  .add('PhotoInfo Title ONLY', () => (
    <PhotoInfo title="josh.duplessis" icon={Camera} />
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
