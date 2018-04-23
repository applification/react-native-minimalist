import React, { Component } from 'react';
import { View, Text } from 'react-primitives';
import PropTypes from 'prop-types';

class ListItemComponent extends Component {
  static propTypes = {
    title: PropTypes.string,
  };

  render() {
    const { title } = this.props;
    return (
      <View
        style={{
          backgroundColor: '#F6F6F6',
          paddingLeft: 20,
          paddingTop: 20,
          paddingBottom: 20,
        }}
      >
        <Text>{title}</Text>
      </View>
    );
  }
}

export default ListItemComponent;
