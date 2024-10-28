// Home.js
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
 import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './loginsignup/login';
import Signup from './loginsignup/signup';
const Stack = createStackNavigator();
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={ {headerShown :false}} />
         <Stack.Screen name="Login" component={Login}  options={ {headerShown :false}}/>
        <Stack.Screen name="Signup" component={Signup} options={ {headerShown :false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './types'; 

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const Home = ({ navigation }: { navigation: HomeScreenNavigationProp }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcometext}>
        Welcome to the demo app and this app is under development. Stay tuned.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.buttonText}>Signup here</Text>
      </TouchableOpacity>
    </View>
  );
};


export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'blue',
  },
  welcometext: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 26,
  },
});
