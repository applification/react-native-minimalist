import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text as NativeText } from 'react-primitives';

class Text extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    clean: PropTypes.bool.isRequired,
    children: PropTypes.any,
  };
  static defaultProps = {
    color: '#000000',
    clean: false,
  };

  render() {
    return (
      <NativeText
        style={{
          color: this.props.color,
          paddingLeft: this.props.clean ? 0 : 25,
          paddingRight: this.props.clean ? 0 : 25,
          paddingBottom: this.props.clean ? 0 : 15,
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
