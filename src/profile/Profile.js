import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

class ProfileElement extends Component {
  static propTypes = {
    source: PropTypes.any.isRequired,
    small: PropTypes.bool,
  };
  static defaultProps = {
    source: {
      uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    },
    small: false,
  };

  render() {
    const { source, small } = this.props;

    return (
      <Image
        style={{
          width: small ? 30 : 50,
          height: small ? 30 : 50,
          borderRadius: small ? 15 : 25,
          margin: small ? 7 : 10,
        }}
        source={source}
      />
    );
  }
}

export default ProfileElement;
