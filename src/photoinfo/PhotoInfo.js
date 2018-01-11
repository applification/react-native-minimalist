import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import Profile from '../profile/Profile';

class PhotoInfoComponent extends Component {
  static propTypes = {
    photo: PropTypes.any,
    icon: PropTypes.any,
    title: PropTypes.string,
  };

  render() {
    const { icon, title, photo } = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}
      >
        <Profile small source={photo} style={{ alignSelf: 'flex-start' }} />
        <Text
          style={{
            alignSelf: 'center',
            alignContent: 'flex-start',
            flexGrow: 1,
          }}
        >
          {title}
        </Text>
        <Image
          source={icon}
          style={{
            alignSelf: 'center',
            marginLeft: 10,
            marginRight: 10,
            height: 22,
            width: 22,
          }}
        />
      </View>
    );
  }
}

export default PhotoInfoComponent;
