import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../login';
import Signup from '../signup';
import App from '../firstpage';
import Donate from '../postarequest'; // Import the PostARequest component
import Firstpage from './Firstpage';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}} //mathi aaune header hide garnes
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{headerShown: false}} //mathi aaune header hide garne
        />
        <Stack.Screen
          name="firstpage"
          component={Firstpage}
          options={{headerShown: false}} //mathi aaune header hide garne
        />
        <Stack.Screen
          name="Donate"
          component={Donate}
          options={{headerShown: false}} //mathi aaune header hide garne
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
