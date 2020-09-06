import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import Colors from '../config/Colors';

const ViewImageScreen = () => (
  <View style={styles.container}>
    <View style={styles.closeIcon}></View>
    <View style={styles.deleteIcon}></View>
    <Image
      style={styles.image}
      source={require("../assets/background-1.jpg")}
    />
  </View>
);

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: Colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
    zIndex: 1
  },
  container: {
    flex: 1,
    backgroundColor: Colors.black
  },
  deleteIcon: {
    width: 50,
    height: 50,
    backgroundColor: Colors.secondary,
    position: "absolute",
    top: 40,
    right: 30,
    zIndex: 1
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  }
})

export default ViewImageScreen;