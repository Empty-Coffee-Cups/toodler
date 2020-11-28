import React, { Component } from 'react';
import { FlatList } from 'react-native';
import {
  Container, Icon, Fab, List,
} from 'native-base';
import PropTypes from 'prop-types';

import Data from '../resources/data.json';
import BoardListItem from '../components/BoardListItem';
import AddBoardModal from '../components/AddBoardModal';

const propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {};

class Boards extends Component {
  constructor() {
    const { boards } = Data;

    super();
    this.state = {
      isAddBoardModalVisible: false,
      boards,
    };
  }

  async createBoard(board) {
    const { boards } = this.state;

    this.setState({
      boards: [
        ...boards, board,
      ],
    });

    this.setState({ isAddBoardModalVisible: false });
  }

  async deleteBoard(boardId) {
    const { boards } = this.state;

    const b = boards.filter((board) => board.id !== boardId);
    console.log(b);

    this.setState({
      boards: b,
    });
  }

  renderItem = ({ item }) => {
    const { id, name, thumbnailPhoto } = item;
    const { navigation: { navigate } } = this.props;

    return (
      <BoardListItem
        id={id}
        name={name}
        thumbnailPhoto={thumbnailPhoto}
        onPress={() => navigate('Board', { id })}
        onDelete={(boardId) => this.deleteBoard(boardId)}
      />
    );
  };

  render() {
    const {
      boards, isAddBoardModalVisible,
    } = this.state;

    return (
      <Container>
        <List>
          <FlatList
            data={boards}
            renderItem={this.renderItem}
          />
        </List>
        <AddBoardModal
          isVisible={isAddBoardModalVisible}
          closeModal={() => this.setState({ isAddBoardModalVisible: false })}
          submitFunction={(board) => this.createBoard(board)}
        />
        <Fab>
          <Icon name="add" onPress={() => this.setState({ isAddBoardModalVisible: true })} />
        </Fab>
      </Container>
    );
  }
}

Boards.propTypes = propTypes;
Boards.defaultProps = defaultProps;

export default Boards;
