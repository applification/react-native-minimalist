import React, { Component } from 'react';
import { View, Text } from 'react-primitives';
import PropTypes from 'prop-types';

import Profile from '../profile/Profile';

class PhotoInfoComponent extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    photo: PropTypes.any,
    icon: PropTypes.any,
  };

  render() {
    const { icon, title, photo, subtitle } = this.props;
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-start',
          paddingLeft: 3,
          paddingTop: 5,
          paddingBottom: 5,
          height: 50,
        }}
      >
        {photo ? (
          <Profile small source={photo} style={{ alignSelf: 'flex-start' }} />
        ) : null}

        {title && subtitle ? (
          <Text
            style={{
              alignSelf: 'center',
              alignContent: 'flex-start',
              flexGrow: 1,
              paddingLeft: 7,
            }}
          >
            {title}
            {'\n'}
            {subtitle}
          </Text>
        ) : (
          <Text
            style={{
              alignSelf: 'center',
              alignContent: 'flex-start',
              flexGrow: 1,
              paddingLeft: 7,
            }}
          >
            {title}
          </Text>
        )}

        <View
          style={{
            alignSelf: 'center',
            marginLeft: 10,
            marginRight: 10,
          }}
        >
          {icon}
        </View>
      </View>
    );
  }
}

export default PhotoInfoComponent;
