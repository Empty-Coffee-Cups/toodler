import React from 'react';
import PropTypes from 'prop-types';
import {
  TouchableOpacity,
  Text,
  ActivityIndicator,
  Image,
  StyleSheet,
} from 'react-native';

import { container } from '../styles';

const defaultProps = {
  name: 'unnamed',
  thumbnailPhoto: '',
};

const propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  thumbnailPhoto: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

class BoardListItem extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }

  handleLoad = () => {
    this.setState({ loading: false });
  };

  render() {
    const { loading } = this.state;
    const {
      id,
      name,
      thumbnailPhoto,
      onPress,
    } = this.props;

    return (
      <TouchableOpacity
        style={container}
        onPress={onPress}
      >
        {loading && (
          <ActivityIndicator size="large" />
        )}
        <Image
          style={StyleSheet.absoluteFill}
          source={{ uri: thumbnailPhoto }}
          onLoad={this.handleLoad}
        />
        <Text>{name}</Text>
      </TouchableOpacity>
    );
  }
}

BoardListItem.defaultProps = defaultProps;
BoardListItem.propTypes = propTypes;

export default BoardListItem;
