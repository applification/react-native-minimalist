import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text as NativeText } from 'react-primitives';

class Text extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    children: PropTypes.any,
  };
  static defaultProps = {
    color: '#000000',
  };

  render() {
    return (
      <NativeText
        style={{
          color: this.props.color,
          paddingLeft: 25,
          paddingRight: 25,
          paddingBottom: 15,
          fontWeight: 'normal',
          fontSize: 17,
        }}
      >
        {this.props.children}
      </NativeText>
    );
  }
}

export default Text;
