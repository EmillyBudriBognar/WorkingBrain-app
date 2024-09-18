import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#B0B0B0" />
      <TextInput style={styles.input} placeholder="Pesquisar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 8,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
  },
  input: {
    flex: 1,
    marginLeft: 8,
  },
});

export default SearchBar;
