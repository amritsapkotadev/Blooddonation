import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Verification = ({route, navigation}) => {
  const {confirmation} = route.params; // Get confirmation from navigation params
  const [otp, setOtp] = useState('');

  const confirmCode = () => {
    // Placeholder for OTP confirmation logic
    console.log('Confirming OTP:', otp);
    // Implement confirmation logic here
  };

  return (
    <View style={styles.verificationPage}>
      <Text style={styles.heading}>Verify Your Phone Number</Text>
      <TextInput
        placeholder="Enter OTP"
        style={styles.input}
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
      />

      <TouchableOpacity style={styles.verifyButton} onPress={confirmCode}>
        <Text style={styles.buttonText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  verificationPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  heading: {
    fontSize: 30,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
    borderRadius: 5,
    color: 'white',
    width: '80%',
  },
  verifyButton: {
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
});

export default Verification;
