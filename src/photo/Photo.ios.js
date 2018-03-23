import React, { Component } from 'react';
import AutoHeightImage from 'react-native-auto-height-image';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';

class PhotoIOSElement extends Component {
  static propTypes = {
    imageURL: PropTypes.string.isRequired,
  };

  render() {
    return (
      <AutoHeightImage
        width={Dimensions.get('window').width}
        source={{ uri: this.props.imageURL }}
      />
    );
  }
}

export default PhotoIOSElement;
