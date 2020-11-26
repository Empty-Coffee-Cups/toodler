import React from 'react';
import { View, TouchableOpacity, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Modal from '../Modal';
import styles from './style';

class AddBoardModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      validInput: true,
    };
    const {
      id, name, description, thumbnailPhoto,
    } = this.props;
    this.board = {
      id, name, description, thumbnailPhoto,
    };
  }

  // On change event that set the handler name and value to correct values
  // (one func to rule them all!)
  handleChange(formName, value) {
    this.setState({ validInput: true });
    this.board = {
      ...this.board,
      [formName]: value,
    };
  }

  render() {
    const {
      title, isOpen, closeModal, addFunction,
    } = this.props;
    const { validInput } = this.state;

    return (
      <Modal
        style={styles.modal}
        isOpen={isOpen}
        closeModal={closeModal}
        title={title}
      >
        <TouchableOpacity>
          <TextInput
            autoFocus
            required
            value={this.board.name}
            style={validInput ? styles.input : [styles.input, styles.error]}
            onChangeText={(value) => this.handleChange('name', value)}
            placeholder="Enter name *"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter a description"
            value={this.board.description}
            onChangeText={(value) => this.handleChange('description', value)}
            multiline
            numberOfLines={6}
          />
          <TextInput
            value={this.board.thumbnailPhoto}
            style={validInput ? styles.input : [styles.input, styles.error]}
            onChangeText={(value) => this.handleChange('thumbnailPhoto', value)}
            placeholder="Enter your Thumb URL *"
          />
          <View style={styles.buttons}>
            <FontAwesomeIcon
              style={styles.decline}
              icon={faTimesCircle}
              size={40}
              onPress={() => { closeModal(); }}
            />
            <FontAwesomeIcon
              style={styles.submit}
              icon={faCheckCircle}
              size={40}
              onPress={() => {
                addFunction(this.board).then((valid) => {
                  if (valid) {
                    this.setState({ validInput: true });
                    closeModal();
                  } else {
                    this.setState({ validInput: false });
                  }
                });
              }}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  }
}

export default AddBoardModal;

AddBoardModal.defaultProps = {
  id: -1,
  name: '',
  description: '',
  thumbnailPhoto: '',
};

AddBoardModal.propTypes = {
  // Title of the modal
  title: PropTypes.string.isRequired,
  // Boolean value if the Modal is open
  isOpen: PropTypes.bool.isRequired,
  // Function that closes the Modal
  closeModal: PropTypes.func.isRequired,
  // Function that does the Add functiality
  addFunction: PropTypes.func.isRequired,
  // Some proptypes for edit a board (optional parameters)
  id: PropTypes.number,
  name: PropTypes.string,
  description: PropTypes.string,
  thumbnailPhoto: PropTypes.string,
};
