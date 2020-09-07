import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

import ButtonStyles from '../../styles/Button.component.style';

const Button = ({ text, style,clickEvent }) => {
  return (
    <TouchableOpacity style={style} onPress={()=>{clickEvent()}} >
      <Text style={ButtonStyles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;