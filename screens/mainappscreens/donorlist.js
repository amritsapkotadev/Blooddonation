import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

const donorsData = [
  { id: '1', name: 'Ram Thapa', address: 'Chitwan', bloodGroup: 'A+' },
  { id: '2', name: 'Anita Gaire', address: 'Butwal', bloodGroup: 'B-' },
  { id: '3', name: 'Amrit Sapkota', address: 'Kathmandu', bloodGroup: 'O+' },
  { id: '4', name: 'Sita Rai', address: 'Pokhara', bloodGroup: 'AB+' },
  { id: '5', name: 'Ravi Kafle', address: 'Bhaktapur', bloodGroup: 'A-' },
  { id: '6', name: 'Sushma Kc', address: 'Dharan', bloodGroup: 'B+' },
  { id: '7', name: 'Suresh Malla', address: 'Dolakha', bloodGroup: 'O-' },
  { id: '8', name: 'Puja Budha', address: 'Nepalgunj', bloodGroup: 'AB-' },
  { id: '9', name: 'Nitesh Sharma', address: 'Indrapur', bloodGroup: 'A+' },
  { id: '10', name: 'Kiran Pokharel', address: 'Morang', bloodGroup: 'B+' },
];

const DonorList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDonors, setFilteredDonors] = useState(donorsData);

  const handleSearch = query => {
    setSearchQuery(query);
    if (query) {
      const filtered = donorsData.filter(donor =>
        donor.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredDonors(filtered);
    } else {
      setFilteredDonors(donorsData);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search Donors"
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredDonors}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.details}>{item.address}</Text>
            <Text style={[styles.details, styles.bloodGroup]}>{item.bloodGroup}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DonorList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  searchInput: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1.5,
    elevation: 3,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  details: {
    fontSize: 16,
    color: 'gray',
  },
  bloodGroup: {
    fontSize: 16,
    color: 'red',
  },
});
