import 'react-native-gesture-handler';
import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from './app/pages/WelcomeScreen';
import ViewImageScreen from './app/pages/ViewImageScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <WelcomeScreen /> */}
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={WelcomeScreen}
        />
        <Stack.Screen
          name="View"
          component={ViewImageScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
