import { StyleSheet } from 'react-native';
import Colors from '../config/Colors';

export default StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 18,
    width: '50%',
    height: 60,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  green: {
    backgroundColor: Colors.secondary
  }
});