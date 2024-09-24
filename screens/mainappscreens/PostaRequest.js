import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
import { bloodGroups } from './options';

const genders = ['Male', 'Female', 'Other'];

const Donate = () => {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [patientName, setPatientName] = useState('');
  const [number, setNumber] = useState('');
  const [address, setAddress] = useState('');
  const [bloodUnits, setBloodUnits] = useState(1);

  const handleSubmit = () => {
    if (!patientName || !number || !address || !selectedBloodGroup || !selectedGender) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }
    Alert.alert('Success', `Your request for ${bloodUnits} blood unit(s) has been submitted.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.postRequest}>Post a Request</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Patient Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor={'black'}
          value={patientName}
          onChangeText={setPatientName}
        />

        <Text style={styles.label}>Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Number"
          placeholderTextColor={'black'}
          keyboardType="numeric"
          value={number}
          onChangeText={setNumber}
        />

        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Address"
          placeholderTextColor={'black'}
          value={address}
          onChangeText={setAddress}
        />

        <Text style={styles.label}>Select Gender</Text>
        <View style={styles.genderPicker}>
          {genders.map(gender => (
            <TouchableOpacity
              key={gender}
              style={[
                styles.genderButton,
                selectedGender === gender && styles.selectedGenderButton,
              ]}
              onPress={() => setSelectedGender(gender)}>
              <Text
                style={[
                  styles.genderText,
                  selectedGender === gender && styles.selectedGenderText,
                ]}>
                {gender}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Select Blood Type</Text>
        <View style={styles.pickbloodgroup}>
          {bloodGroups.map(group => (
            <TouchableOpacity
              key={group}
              style={[
                styles.bloodGroupButton,
                selectedBloodGroup === group && styles.selectedButton,
              ]}
              onPress={() => setSelectedBloodGroup(group)}>
              <Text
                style={[
                  styles.bloodGroupText,
                  selectedBloodGroup === group && styles.selectedText,
                ]}>
                {group}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Blood Unit Slider */}
        <Text style={styles.label}>Select Blood Units: {bloodUnits}</Text>
        <Slider
          minimumValue={1}
          maximumValue={10}
          step={1}
          value={bloodUnits}
          onValueChange={setBloodUnits}
          minimumTrackTintColor="red"
          maximumTrackTintColor="#d3d3d3"
          thumbTintColor="blue"
          style={styles.slider}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit Request</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Donate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  postRequest: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
  },
  form: {
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'black',
    backgroundColor: '#f0f0f0',
    paddingLeft: 25,
  },
  genderPicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  genderButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  selectedGenderButton: {
    backgroundColor: 'red',
  },
  genderText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedGenderText: {
    color: 'white',
  },
  slider: {
    width: '100%',
    height: 40,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pickbloodgroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  bloodGroupButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 8,
    height: 50,
    width: '20%',
    marginBottom: 10,
    marginRight: 10,
  },
  selectedButton: {
    backgroundColor: 'red',
  },
  bloodGroupText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  selectedText: {
    color: 'white',
  },
});
