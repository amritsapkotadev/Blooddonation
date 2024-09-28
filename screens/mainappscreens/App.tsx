import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../loginsignup/login.js';
import Signup from '../loginsignup/signup.tsx';
import Firstpage from './Firstpage.js'; // Make sure this matches the file extension
import Donate from './PostaRequest.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Firstpage"
          component={Firstpage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="postarequest"
          component={Donate}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
