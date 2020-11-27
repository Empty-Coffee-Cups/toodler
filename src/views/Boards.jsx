import React, { useState } from 'react';
import { ActivityIndicator, Text, Modal, FlatList } from 'react-native';
import { Container, Header, View, Button, Icon, Fab, List } from 'native-base';
import PropTypes from 'prop-types';

import { getAllBoards, createBoard } from '../services/boardService';
import BoardsList from '../components/BoardList';
import BoardListItem from '../components/BoardListItem';
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

      console.log(boards);

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
    await this.fetchBoards();
    this.setState({ isAddBoardModalVisible: false });
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
      />
    );
  };

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
        <List>
          <FlatList
            data={this.state.boards}
            renderItem={this.renderItem}
          />
        </List>
        {/* <BoardsList boards={this.state.boards} navigation={navigation} /> */}
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
