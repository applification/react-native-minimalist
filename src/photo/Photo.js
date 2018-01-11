import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import AutoHeightImage from 'react-native-auto-height-image';

class PhotoElement extends Component {
  static propTypes = {
    imageURL: PropTypes.string.isRequired,
  };

  render() {
    return (
      <AutoHeightImage
        width={Dimensions.get('window').width}
        imageURL={this.props.imageURL}
      />
    );
  }
}

export default PhotoElement;
