import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../types'; // Adjust the import path according to your project structure

type SignupScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Signup'>;

type Props = {
  navigation: SignupScreenNavigationProp;
};

const Signup = ({navigation}: Props) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const signup = async () => {
    try {
      const response = await fetch('http://192.168.18.1:3000/signup', {
        // Change to your computer's IP address
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: fullName,
          phonenumber: phoneNumber,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Signup successful', data.message);
        navigation.navigate('Login'); // Navigate to the login screen after signup
      } else {
        Alert.alert('Signup failed', data.message);
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong, please try again.');
    }
  };

  return (
    <View style={styles.signuppage}>
      <Text style={styles.heading}>Create an account✨</Text>
      <Text style={styles.subheading}>Welcome, please add your details</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          placeholder="Enter Your Full Name"
          style={styles.input}
          placeholderTextColor={'#888'}
          value={fullName}
          onChangeText={setFullName}
        />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.signupbutton} onPress={signup}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.loginLink}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  signuppage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  heading: {
    fontSize: 30,
    color: 'white',
    marginBottom: 10,
  },
  subheading: {
    fontSize: 18,
    marginBottom: 20,
    color: 'white',
  },
  formContainer: {
    width: '80%',
  },
  label: {
    fontSize: 18,
    marginTop: 5,
    color: 'white',
  },
  input: {
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
    color: 'white',
  },
  signupbutton: {
    backgroundColor: '#6200ee',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  loginLink: {
    marginTop: 20,
  },
  loginText: {
    color: 'white',
    fontSize: 16,
  },
});

export default Signup;
