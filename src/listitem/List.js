import React, { Component } from 'react';
import { FlatList, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import ListItem from './ListItem';

class ListElement extends Component {
  static propTypes = {
    data: PropTypes.object.isRequired,
  };
  static defaultProps = {
    data: {},
  };

  // need to make render wait for data

  render() {
    if (this.props.data) {
      return (
        <ScrollView
          style={{
            flex: 1,
          }}
        >
          <FlatList
            data={this.props.data.results}
            renderItem={({ item }) => <ListItem title={item.email} />}
            keyExtractor={item => item.id.value}
          />
        </ScrollView>
      );
    }
  }
}

export default ListElement;
