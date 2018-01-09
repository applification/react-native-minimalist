import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

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
        numberOfLines={1}
        style={{
          color: this.props.color,
          paddingLeft: 25,
          paddingBottom: 25,
          fontWeight: 'bold',
          fontSize: 50,
        }}
      >
        {this.props.children}
      </Text>
    );
  }
}

export default HeaderTextElement;
