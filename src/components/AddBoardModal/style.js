import { StyleSheet } from 'react-native';
import { addModalnput } from '../../styles';

export default StyleSheet.create({
  modal: {
    flex: 1,
  },
  input: {
    ...addModalnput,
  },
  submit: {
    color: 'green',
  },
  decline: {
    color: 'red',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  error: {
    color: 'red',
    borderColor: 'red',
  },
});
