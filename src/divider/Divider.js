import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-primitives';

const Divider = ({ fullWidth, color }) => (
  <View
    style={{
      backgroundColor: color,
      marginTop: 10,
      marginLeft: fullWidth ? 0 : 30,
      height: 1,
      width: '100%',
    }}
  />
);

Divider.propTypes = {
  fullWidth: PropTypes.bool.isRequired,
  color: PropTypes.string.isRequired,
};

Divider.defaultProps = {
  fullWidth: false,
  color: '#DADADA',
};

export default Divider;
