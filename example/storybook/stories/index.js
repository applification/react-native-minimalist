import React from 'react';

import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import CenterView from './CenterView';

import { Text } from 'react-native-elements-minimalist';

storiesOf('Minimalist UI', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('Text', () => <Text>Hey Hey Hey!!!</Text>)
  .add('Text Other', () => <Text>Other text</Text>);
