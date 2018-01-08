import React from 'react';
import { Text } from 'react-native';

const TextElement = props => {
  const { children } = props;

  return <Text>{children}</Text>;
};

export default TextElement;
