import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { bloodSeekersData, options } from './options';
const Firstpage = ({ navigation }) => {
  const [bloodSeekers] = useState(bloodSeekersData);

  const renderOption = ({ item }: { item: { id: string; label: string } }) => (
    <TouchableOpacity
      style={styles.option}
      onPress={() => {
        if (item.id === '5') {
          navigation.navigate('postarequest');
        }
      }}
    >
      <Text style={styles.optionText}>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderBloodSeeker = ({ item }: { item: { id: string; name: string; details: string; bloodgroup: string; address: string } }) => (
    <View style={styles.requestCard}>
      <Text onPress={() => navigation.navigate('PostaRequest')} style={styles.requestName}>
        {item.name}
      </Text>
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
        {['Home', 'Notification', 'Profile', <Text key="Setting">Setting</Text>].map((label, index) => (
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
    backgroundColor: '#f9f9f9',
  },
  optionsContainer: {
    marginBottom: 20,
    marginTop: 30,
  },
  option: {
    flex: 1,
    margin: 5,
    padding: 15,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  seekerContainer: {
    flex: 1,
    marginBottom: 20,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  seekerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  seeAllSeekerList: {
    textAlign: 'right',
  },
  seeAllText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: '500',
  },
  requestCard: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  requestName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#444',
  },
  requestDetails: {
    fontSize: 16,
    color: '#777',
    marginVertical: 8,
  },
  requestAddress: {
    fontSize: 14,
    color: '#007bff',
    marginTop: 5,
  },
  bloodgroup: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#e63946',
    marginTop: 5,
  },
  donate: {
    backgroundColor: '#e63946',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: 100,
  },
  donateText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  navButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  navText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  Addressandbutton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default Firstpage; 