import React from 'react';
import { ActivityIndicator, Text } from 'react-native';
import PropTypes from 'prop-types';

import { getAllBoards } from '../services/boardService';
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

  render() {
    const { navigation: { state: { params } } } = this.props;
    const { id } = params;
    const { loading, error, items } = this.state;

    if (loading) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      return <Text>Error...</Text>;
    }

    return (
      <Text>{id}</Text>
      // <BoardsList items={items} navigation={navigation} />
    );
  }
}

Boards.propTypes = propTypes;
Boards.defaultProps = defaultProps;

export default Boards;
