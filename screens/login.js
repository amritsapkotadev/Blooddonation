import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

const Login = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (phoneNumber.length < 10) {
      Alert.alert('Error', 'Please enter a valid 10-digit phone number');
      return;
    }
    console.log('Login pressed');
  };

  return (
    <View style={styles.loginPage}>
      <Text style={styles.heading}>Welcome back, enter details to login..</Text>
      <View style={styles.loginbox}>
        <TextInput
          style={styles.input}
          placeholderTextColor={'grey'}
          placeholder="Number"
          keyboardType="number-pad"
          maxLength={10}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={'grey'}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.createAccount}>
          Don't have an account? Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  loginbox: {
    width: '80%',
  },
  input: {
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    marginTop: 20,
    marginBottom: 15,
    color: 'black',
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  forgotPassword: {
    textAlign: 'right',
    color: 'blue',
    marginTop: 10,
  },
  createAccount: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});

export default Login;
