import { FlatList } from 'react-native';
import { List, ListItem } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';

import BoardListItem from './BoardListItem';

const defaultProps = {
  boards: [{
    id: -1,
    name: 'unnamed',
  }],
};

const propTypes = {
  boards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const keyExtractor = ({ id }) => id.toString();

class BoardList extends React.Component {
  renderItem = ({ item }) => {
    const { id, name, thumbnailPhoto } = item;
    const { navigation: { navigate } } = this.props;

    return (
      <BoardListItem
        id={id}
        name={name}
        thumbnailPhoto={thumbnailPhoto}
        onPress={() => navigate('Board', { id })}
      />
    );
  };

  render() {
    const { boards } = this.props;
    return (
      <List>
        <FlatList
          data={boards}
          renderItem={this.renderItem}
          keyExtractor={keyExtractor}
        />
      </List>
    );
  }
}

BoardList.propTypes = propTypes;
BoardList.defaultProps = defaultProps;

export default BoardList;
