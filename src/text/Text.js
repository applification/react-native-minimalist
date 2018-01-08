import React from 'react';
import { Text } from 'react-native';

const TextElement = props => {
  const { children } = props;

  return <Text style={{ color: 'red' }}>{children}</Text>;
};

export default TextElement;
