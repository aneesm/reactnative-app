import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import ButtonStyles from '../../styles/Button.component.style';

const Button = ({ text, style }) => {
  return (
    <TouchableOpacity style={style}>
      <Text style={ButtonStyles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;