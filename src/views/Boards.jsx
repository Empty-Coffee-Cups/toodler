import React, { useState } from 'react';
import { ActivityIndicator, Text, Modal } from 'react-native';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
import PropTypes from 'prop-types';

import { getAllBoards, createBoard } from '../services/boardService';
import BoardsList from '../components/BoardList';
import AddBoardModal from '../components/AddBoardModal';

const propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const defaultProps = {
  // style: null,
};

class Boards extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      error: false,
      isAddBoardModalVisible: false,
      boards: [],
    };
  }

  async componentDidMount() {
    await this.fetchBoards();
  }

  async fetchBoards() {
    try {
      const boards = await getAllBoards();

      this.setState({
        loading: false,
        boards,
      });
    } catch (e) {
      this.setState({
        loading: false,
        error: true,
      });
    }
  }

  async createBoard(board) {
    await createBoard(board);
    this.fetchBoards();
  }

  render() {
    const { navigation } = this.props;
    const { loading, error, boards, isAddBoardModalVisible } = this.state;

    if (loading) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      return <Text>Error...</Text>;
    }

    return (
      <Container>
        <BoardsList boards={boards} navigation={navigation} />
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
