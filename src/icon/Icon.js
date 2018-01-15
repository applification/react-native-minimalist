import React, { Component } from 'react';
import PropTypes from 'prop-types';

import getIconType from '../helpers/getIconType';

class IconElement extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
  };

  static defaultProps = {
    type: 'feather',
    name: 'user',
    color: '#000000',
  };

  render() {
    const Icon = getIconType(this.props.type);

    return (
      <Icon
        name={this.props.name}
        testID={this.props.name}
        size={30}
        color={this.props.color}
        style={{ padding: 10 }}
      />
    );
  }
}

export default IconElement;
