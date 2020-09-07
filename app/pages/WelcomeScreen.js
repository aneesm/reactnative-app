import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text, TouchableOpacity, SafeAreaView } from 'react-native';

import Colors from '../config/Colors';
import Button from '../components/Button/Button.component';
import ButtonComponentStyle from '../styles/Button.component.style';

const WelcomeScreen = ({navigation}) => {
  return (
  <SafeAreaView style={styles.background}>
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
        <Text onPress={() =>navigation.navigate('View')} style={styles.tagLine}>World of Entertainment</Text>
      </View>
      <View style={styles.flexContainer}>
        <Button text={"Login"} style={[ButtonComponentStyle.button, ButtonComponentStyle.green]} 
         clickEvent={()=>{ navigation.navigate('View')}}
        />
        <Button text={"Sign up"} style={ButtonComponentStyle.button}  
       clickEvent={()=>{ navigation.navigate('View')}}
        />
      </View>
    </ImageBackground>
  </SafeAreaView> 
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '100%',
    height: '100%'
  },
  logo: {
    height: 90,
    width: 250,
    resizeMode: 'contain',
    marginBottom: 10
  },
  logoContainer: {
    position: 'absolute',
    top: 100,
    alignItems: 'center'
  },
  tagLine: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "600",
    textTransform: 'uppercase'
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: "flex-end"
  }
})

export default WelcomeScreen;