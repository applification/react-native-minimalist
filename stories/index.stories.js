import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Content from '../src/content/Content';
import HeaderText from '../src/headertext/HeaderText';
import BodyText from '../src/bodytext/BodyText';
import Profile from '../src/profile/Profile';

storiesOf('Content', module)
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

storiesOf('HeaderText', module)
  .add('HeaderText', () => <HeaderText>Big Header</HeaderText>)
  .add('HeaderText in red', () => (
    <HeaderText color="red">Red Header</HeaderText>
  ))
  .add('HeaderText should be single line even if long', () => (
    <HeaderText>React Native Minimalist</HeaderText>
  ));

storiesOf('BodyText', module).add('BodyText', () => (
  <BodyText>Body text</BodyText>
));

storiesOf('Profile', module)
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

// storiesOf('Divider', module)
//   .add('Divider', () => <Divider />)
//   .add('Divider Red', () => <Divider color="red" />)
//   .add('Divider fullWidth', () => <Divider fullWidth />);

// storiesOf('Photo', module).add('Photo', () => (
//   <Photo
//     imageURL={
//       'https://scontent-lht6-1.cdninstagram.com/t51.2885-15/sh0.08/e35/p640x640/26152588_1188914984576015_4446380707253583872_n.jpg'
//     }
//   />
// ));

// //const peopleData = require('./data/people.json');
// //storiesOf('List', module).add('List', () => <List data={peopleData} />);

// storiesOf('ListItem', module).add('ListItem', () => (
//   <Content>
//     <ListItem title="List item title" />
//   </Content>
// ));

// storiesOf('PhotoInfo', module)
//   .add('PhotoInfo', () => (
//     <PhotoInfo
//       photo={{
//         uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'
//       }}
//       title="josh.duplessis"
//       icon={require('../../imgs/more.png')}
//     />
//   ))
//   .add('PhotoInfo Title ONLY', () => (
//     <PhotoInfo title="josh.duplessis" icon={require('../../imgs/more.png')} />
//   ))
//   .add('PhotoInfo Title & Subtitle', () => (
//     <PhotoInfo
//       title="bentierney"
//       subtitle="Guitar Center"
//       icon={require('../../imgs/more.png')}
//     />
//   ))
//   .add('PhotoInfo Title & Subtitle + Photo', () => (
//     <PhotoInfo
//       photo={{
//         uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg'
//       }}
//       title="bentierney"
//       subtitle="Guitar Center"
//       icon={require('../../imgs/more.png')}
//     />
//   ));
