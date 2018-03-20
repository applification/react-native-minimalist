import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-primitives';

class HeaderTextElement extends Component {
  static propTypes = {
    color: PropTypes.string.isRequired,
  };
  static defaultProps = {
    color: '#000000',
  };

  render() {
    return (
      <Text
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
      </Text>
    );
  }
}

export default HeaderTextElement;
