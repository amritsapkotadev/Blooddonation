import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login'; // Assuming your file is named Login.js
import Signup from './Signup'; // Assuming your file is named Signup.js

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} // Hides the header for the login screen
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }} // Hides the header for the signup screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
