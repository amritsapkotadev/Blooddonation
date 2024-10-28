import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Firstpage from './Firstpage';
import PostaRequest from './PostaRequest';

export type RootStackParamList = {
  Firstpage: undefined;
  PostaRequest: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return <Firstpage />;
}

function SettingsScreen() {
  return <Text>Settings</Text>;
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Firstpage">
        <Stack.Screen name="Firstpage" component={MyTabs} />
        <Stack.Screen name="PostaRequest" component={PostaRequest} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
