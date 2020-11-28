import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, ActivityIndicator,
} from 'react-native';
import {
  ListItem, Left, Right, Icon, Body, Thumbnail,
} from 'native-base';

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

  handleDelete = () => {
    const { onDelete, id } = this.props;

    onDelete(id);
  };

  render() {
    const { loading } = this.state;
    const {
      name,
      thumbnailPhoto,
      onPress,
    } = this.props;

    return (
      <ListItem thumbnail onPress={onPress}>

        <Left>
          {loading && (
            <ActivityIndicator size="large" />
          )}
          <Thumbnail square source={{ uri: thumbnailPhoto }} onLoad={this.handleLoad} />
        </Left>
        <Body>
          <Text>{name}</Text>
        </Body>
        <Right>
          <Icon name="trash" color="#e33057" onPress={this.handleDelete}/>
        </Right>

      </ListItem>
    );
  }
}

BoardListItem.defaultProps = defaultProps;
BoardListItem.propTypes = propTypes;

export default BoardListItem;
