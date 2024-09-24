import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React from 'react';

const imag = require('./profile.jpg'); 

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}> 
        <Image source={imag} style={styles.image} />
        <Text style={styles.name}>Mohan Adhikari</Text>
        <View style={styles.flexrow}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Blood Type</Text>
            <View style={styles.dataContainer}>
              <Text style={styles.data}>A+</Text>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Age</Text>
            <View style={styles.dataContainer}>
              <Text style={styles.data}>25</Text>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Life Saved</Text>
            <View style={styles.dataContainer}>
              <Text style={styles.data}>10</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
          <Text style={styles.buttonText2}>Request</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  profile: {
    marginTop: 150,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  flexrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: 5,
    borderWidth: 1,
    height: 80,
    fontFamily: 'Arial',
    fontSize: 20,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: '#d3d3d3', // Light grey background
  },
  label: {
    fontSize: 16,
    color: 'black',
    padding: 5,
     textAlign: 'center',
  },
  dataContainer: {
    padding: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
   },
  data: {
    fontSize: 19,
    color: 'black',
    textAlign: 'center', fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 90,
  },
  button1: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '40%',
    height: 50,
  },
  button2: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '40%',
    borderWidth: 1,
    borderColor: 'red',
    height: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  buttonText2: {
    color: 'red',
    fontSize: 16,
  },
});
