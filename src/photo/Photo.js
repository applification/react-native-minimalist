import React, { Component } from 'react';
import { Image } from 'react-primitives';
import PropTypes from 'prop-types';

class PhotoElement extends Component {
  static propTypes = {
    imageURL: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Image
        style={{ width: 350, height: 350 }}
        source={{ uri: this.props.imageURL }}
      />
    );
  }
}

export default PhotoElement;
