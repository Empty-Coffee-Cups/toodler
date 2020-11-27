import React from 'react';
import PropTypes from 'prop-types';
// import { Modal } from 'react-native';
import Modal from 'react-native-modal';
import { Font } from 'expo';
import { Form, Item, Label, Input, Button, Text, Content, Body, Card, CardItem } from 'native-base';

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
    this.state = {
      loading: true,
    };

    const {
      id, name, description, thumbnailPhoto,
    } = this.props;

    this.board = {
      id, name, description, thumbnailPhoto,
    };
  }

  handleChange = (formName, value) => {
    this.board = {
      ...this.board,
      [formName]: value,
    };
  };

  handleSubmit = (data) => {
    this.setState({ loading: false });
    console.log(this.board);
  };

  render() {
    const { loading } = this.state;
    const {
      isVisible,
      closeModal,
      submitFunction,
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
                  value={this.board.name}
                  onChangeText={(value) => this.handleChange('name', value)}
                />
              </Item>
              <Item stackedLabel>
                <Label>Description</Label>
                <Input
                  placeholder="(optional)"
                  value={this.board.description}
                  onChangeText={(value) => this.handleChange('description', value)}
                  multiline
                  numberOfLines={6}
                />
              </Item>
              <Item stackedLabel last>
                <Label>Thumbnail Photo</Label>
                <Input
                  placeholder="(Enter url)"
                  value={this.board.thumbnailPhoto}
                  onChangeText={(value) => this.handleChange('thumbnailPhoto', value)}
                />
              </Item>
              <Button block onPress={(data) => this.handleSubmit(data)}>
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
