import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

import { container } from '../styles';

function BoardListItem({ name }) {
  return (
    <TouchableOpacity style={container}>
      <Text>{name}</Text>
    </TouchableOpacity>
  );
}

BoardListItem.defaultProps = {
  name: 'unnamed',
};

BoardListItem.propTypes = {
  name: PropTypes.string,
};

export default BoardListItem;
