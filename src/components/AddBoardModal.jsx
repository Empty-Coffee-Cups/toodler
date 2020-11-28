import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import {
  Form, Item, Label, Input, Button, Text, Body, Card, CardItem,
} from 'native-base';

const defaultProps = {
  id: -1,
  name: '',
  description: '',
  thumbnailPhoto: '',
};

const propTypes = {
  // Boolean value if the Modal is open
  isVisible: PropTypes.bool.isRequired,
  // Function that closes the Modal
  closeModal: PropTypes.func.isRequired,
  // Function that does the Add functiality
  submitFunction: PropTypes.func.isRequired,
  // Some proptypes for edit a board (optional parameters)
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  thumbnailPhoto: PropTypes.string,
};

class AddBoardModal extends React.Component {
  constructor(probs) {
    super(probs);

    const {
      id, name, description, thumbnailPhoto,
    } = this.props;

    this.state = {
      board: {
        id, name, description, thumbnailPhoto,
      },
    };
  }

  handleChange = (formName, value) => {
    const { board } = this.state;
    this.setState({ board: { ...board, [formName]: value } });
  };

  handleSubmit = () => {
    const { submitFunction } = this.props;
    const { board } = this.state;

    submitFunction(board);
  };

  render() {
    const { board } = this.state;
    const {
      isVisible,
      closeModal,
    } = this.props;

    return (
      <Modal
        isVisible={isVisible}
        onBackButtonPress={closeModal}
        onSwipeComplete={closeModal}
        onBackdropPress={closeModal}
      >
        <Card>
          <CardItem>
          <Body style={{ backgroundColor: 'white' }}>
            <Form style={{ width: '100%' }}>
              <Item stackedLabel>
                <Label>Name</Label>
                <Input
                  autoFocus
                  required
                  value={board.name}
                  onChangeText={(value) => this.handleChange('name', value)}
                />
              </Item>
              <Item stackedLabel>
                <Label>Description</Label>
                <Input
                  placeholder="(optional)"
                  value={board.description}
                  onChangeText={(value) => this.handleChange('description', value)}
                  multiline
                  numberOfLines={6}
                />
              </Item>
              <Item stackedLabel last>
                <Label>Thumbnail Photo</Label>
                <Input
                  placeholder="(Enter url)"
                  value={board.thumbnailPhoto}
                  onChangeText={(value) => this.handleChange('thumbnailPhoto', value)}
                />
              </Item>
              <Button block onPress={() => this.handleSubmit()}>
                <Text>Add Board</Text>
              </Button>
            </Form>
          </Body>
          </CardItem>
        </Card>
      </Modal>
    );
  }
}

AddBoardModal.defaultProps = defaultProps;
AddBoardModal.propTypes = propTypes;

export default AddBoardModal;
