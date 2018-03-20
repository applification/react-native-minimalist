import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-primitives';

class Content extends Component {
  static propTypes = {
    backgroundColor: PropTypes.string.isRequired,
    children: PropTypes.any,
  };

  static defaultProps = {
    backgroundColor: '#FFFFFF',
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: this.props.backgroundColor,
        }}
      >
        {this.props.children}
      </View>
    );
  }
}

export default Content;
