import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import BoardListItem from './BoardListItem';

const defaultProps = {
  items: [{
    id: -1,
    name: 'unnamed',
  }],
};

const propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
  ),
};

const keyExtractor = ({ id }) => id.toString();

class BoardList extends React.Component {
  renderItem = ({ item: { id, name } }) => (
    <BoardListItem id={id} name={name} />
  );

  render() {
    const { items } = this.props;
    return (
      <FlatList
        data={items}
        renderItem={this.renderItem}
        keyExtractor={keyExtractor}
      />
    );
  }
}

BoardList.propTypes = propTypes;
BoardList.defaultProps = defaultProps;

export default BoardList;
