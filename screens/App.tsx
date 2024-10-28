import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Firstpage from './Firstpage'; // Import your Firstpage
import PostaRequest from './mainappscreens/PostaRequest'; // Ensure this path is correct
import Donate from './Donate'; // Import your Donate screen
import FindDonor from './FindDonor'; // Import your Find Donor screen

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Firstpage">
        <Stack.Screen name="Firstpage" component={Firstpage} options={{ headerShown: false }} />
        <Stack.Screen name="Donate" component={Donate} options={{ headerShown: false }} />
        <Stack.Screen name="Find Donor" component={FindDonor} options={{ headerShown: false }} />
        <Stack.Screen name="Postarequest" component={PostaRequest} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
