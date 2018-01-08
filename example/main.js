import Expo from 'expo';
import React from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { Text } from 'react-native-elements-minimalist';

const MainRoot = () => (
  <View
    style={{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    {Platform.OS === 'android' && (
      <View style={{ height: Expo.Constants.statusBarHeight }} />
    )}
    <Text>Hello.... from RNEM!</Text>
  </View>
);

Expo.registerRootComponent(MainRoot);
