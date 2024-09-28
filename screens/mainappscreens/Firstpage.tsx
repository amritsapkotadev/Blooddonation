import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
 import { bloodSeekersData, options } from './options';
const Firstpage = ({navigation}) => {
  const [bloodSeekers] = useState(bloodSeekersData);

  const renderOption = ({ item }) => (
    <TouchableOpacity
      style={styles.option}
      onPress={() => {
        if (item.id === '5') {
          console.log('Navigate to RequestBlood');
        }
      }}
    >
      <Text style={styles.optionText}>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderBloodSeeker = ({ item }) => (
    <View style={styles.requestCard}>
      <Text style={styles.requestName}>{item.name}</Text>
      <Text style={styles.requestDetails}>{item.details}</Text>
      <Text style={styles.bloodgroup}>{item.bloodgroup}</Text>
      <View style={styles.Addressandbutton}>
        <Text style={styles.requestAddress}>{item.address}</Text>
        <TouchableOpacity style={styles.donate}>
          <Text style={styles.donateText}>Donate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.optionsContainer}>
        <FlatList
          data={options}
          keyExtractor={item => item.id}
          renderItem={renderOption}
          numColumns={3}
        />
      </View>

      <View style={styles.seekerContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.seekerTitle}>Blood Seekers</Text>
          <TouchableOpacity style={styles.seeAllSeekerList}>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={bloodSeekers}
          keyExtractor={item => item.id}
          renderItem={renderBloodSeeker}
        />
      </View>

      <View style={styles.navContainer}>
        {['Home', 'Notification', 'Profile', 'Setting'].map((label, index) => (
          <TouchableOpacity key={index} style={styles.navButton}>
            <Text style={styles.navText}>{label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  optionsContainer: {
    marginBottom: 20,
    marginTop: 220,
  },
  option: {
    flex: 1,
    margin: 5,
    padding: 15,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
  },
  optionText: {
    fontSize: 16,
    color: 'black',
  },
  seekerContainer: {
    flex: 1,
    marginBottom: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  seeAllSeekerList: {
    textAlign: 'right',
  },
  seeAllText: {
    color: 'red',
    fontSize: 16,
  },
  seekerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  requestCard: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
    height: 160,
    marginTop: 20,
  },
  requestName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  requestDetails: {
    fontSize: 16,
    color: 'gray',
  },
  requestAddress: {
    fontSize: 16,
    color: 'blue',
    marginTop: 5,
  },
  bloodgroup: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 5,
  },
  donate: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: 'center',
    width: 100,
  },
  donateText: {
    color: 'white',
    fontWeight: 'bold',
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: 'white',
  },
  navButton: {
    flex: 1,
    alignItems: 'center',
  },
  navText: {
    fontSize: 14,
    color: 'black',
  },
  Addressandbutton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default Firstpage;
