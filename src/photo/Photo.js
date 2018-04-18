import React, { Component } from 'react';
import { Image } from 'react-primitives';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';

let windowWidth = 375;
if (typeof window !== `undefined`) {
  windowWidth = Dimensions.get('window').width;
}

class PhotoElement extends Component {
  static propTypes = {
    imageURL: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Image
        style={{ width: windowWidth, height: 350 }}
        source={{ uri: this.props.imageURL }}
      />
    );
  }
}

export default PhotoElement;
