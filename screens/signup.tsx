import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { isValidPhoneNumber } from 'libphonenumber-js'; // Add this library

const Signup = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const signup = async () => {
    // Validate the phone number
    if (!isValidPhoneNumber(phoneNumber, 'NP')) {
      Alert.alert('Invalid phone number format.');
      return;
    }

    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      navigation.navigate('Verification', { confirmation, fullName, password });
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message);
      } else {
        Alert.alert('An unknown error occurred.');
      }
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

      <TouchableOpacity style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
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
    color: 'white',
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
