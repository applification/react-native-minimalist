import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-primitives';

class Header extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
    children: PropTypes.any,
  };
  static defaultProps = {
    color: '#000000',
  };

  render() {
    return (
      <Text
        numberOfLines={1}
        style={{
          color: this.props.color,
          paddingLeft: 25,
          paddingBottom: 25,
          paddingRight: 25,
          paddingTop: 25,
          fontWeight: 'bold',
          fontSize: 35,
        }}
      >
        {this.props.children}
      </Text>
    );
  }
}

export default Header;
