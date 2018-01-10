import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';

class ProfileElement extends Component {
  static propTypes = {
    source: PropTypes.object.isRequired,
  };
  static defaultProps = {
    source: {
      uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg',
    },
  };

  render() {
    return (
      <Image
        style={{ width: 50, height: 50, borderRadius: 25, margin: 10 }}
        source={this.props.source}
      />
    );
  }
}

export default ProfileElement;
