import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
const Signup = ({ navigation }) => {
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
            accessibilityLabel="Full Name Input" />

          <Text style={styles.label}>Number</Text>
          <TextInput
            placeholder="Number"
            style={styles.input}
            keyboardType="number-pad" />

          <Text style={styles.label}>Password</Text>
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.input}
            accessibilityLabel="Password Input" />
        </View>

        <TouchableOpacity style={styles.signupbutton}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Login with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <Text style={styles.socialButtonText}>Login with Facebook</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.loginLink}>
          <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    );
  };


  const styles = StyleSheet.create({
    signuppage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      fontSize: 30,
      marginBottom: 20,
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
      color: 'black',
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
    socialContainer: {
      flexDirection: 'column',
      width: '80%',
      marginBottom: 20,
    },
    socialButton: {
      backgroundColor: 'black',
      padding: 15,
      marginTop: 15,
      borderRadius: 5,
      borderColor: 'white',
      borderWidth: 1,
      marginHorizontal: 5,
      alignItems: 'center',
      width: '100%',
    },
    socialButtonText: {
      color: 'white',
      fontSize: 16,
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
