import React, { Component } from 'react';
import AutoHeightImage from 'react-native-auto-height-image';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';

let windowWidth = 375;
if (typeof window !== `undefined`) {
  windowWidth = Dimensions.get('window').width;
}

class PhotoIOSElement extends Component {
  static propTypes = {
    imageURL: PropTypes.string.isRequired,
  };

  render() {
    return (
      <AutoHeightImage
        width={windowWidth}
        source={{ uri: this.props.imageURL }}
      />
    );
  }
}

export default PhotoIOSElement;
