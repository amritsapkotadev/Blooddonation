import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, FlatList } from 'react-native';

const settingsOptions = [
  { id: '1', label: 'Profile' },
  { id: '2', label: 'Notifications' },
  { id: '3', label: 'Privacy' },
  { id: '4', label: 'Help' },
  { id: '5', label: 'About' },
];

const SettingsScreen = () => {
  const renderSettingOption = ({ item }) => (
    <TouchableOpacity style={styles.option}>
      <Text style={styles.optionText}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Settings</Text>
      <FlatList
        data={settingsOptions}
        keyExtractor={(item) => item.id}
        renderItem={renderSettingOption}
        style={styles.optionsList}
      />
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  optionsList: {
    marginBottom: 20,
  },
  option: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  optionText: {
    fontSize: 18,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#e63946',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default SettingsScreen;
