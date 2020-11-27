import React from 'react';
import { ActivityIndicator, Text, Modal } from 'react-native';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
import PropTypes from 'prop-types';

import { getAllBoards, createBoard } from '../services/boardService';
import BoardsList from '../components/BoardList';

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
      showAddBoardModal: true,
      items: [],
    };
  }

  async componentDidMount() {
    try {
      const items = await getAllBoards();

      this.setState({
        loading: false,
        items,
      });
    } catch (e) {
      this.setState({
        loading: false,
        error: true,
      });
    }
  }

  // onSubmitComment = text => {
  //   const { selectedItemId, commentsForItem } = this.state;
  //   const comments = commentsForItem[selectedItemId] || [];

  //   const updated = {
  //     ...commentsForItem,
  //     [selectedItemId]: [...comments, text],
  //   };

  //   this.setState({ commentsForItem: updated });

  //   try {
  //     AsyncStorage.setItem(ASYNC_STORAGE_COMMENTS_KEY, JSON.stringify(updated));
  //   } catch (e) {
  //     console.log('Failed to save comment', text, 'for', selectedItemId);
  //   }
  // };

  showAddBoardModal = (id) => {
    this.setState({
      showAddBoardModal: true,
    });
  };

  hideAddBoardModal = () => {
    this.setState({
      showAddBoardModal: false,
    });
  };

  async createBoard(board) {
    if (await createBoard(board).catch((e) => {
      console.log('Got error while creating board.', e);
    })) {
      // Lets update our boards
      this.fetchItems();
      return true;
    }
    /* eslint-enable */
    return false;
  }

  render() {
    const { navigation } = this.props;
    const { loading, error, items, showAddBoardModal } = this.state;

    if (loading) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      return <Text>Error...</Text>;
    }

    return (
      <Container>
        <BoardsList items={items} navigation={navigation} />
        {/*
        <Modal
          visible={showAddBoardModal}
          animationType="slide"
          onRequestClose={this.hideAddBoardModal}
        >
        <AddBoardModal
          title="Create a new board"
          onClose={this.closeCommentScreen}
          onSubmitComment={this.onSubmitComment}
        />
        </Modal>
        */}
        <Fab
          direction="up"
          containerStyle={{}}
          position="bottomRight"
        >
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}

Boards.propTypes = propTypes;
Boards.defaultProps = defaultProps;

export default Boards;
