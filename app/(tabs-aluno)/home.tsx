import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import Banner from '../../components/Banner';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Header /> */}
      <ScrollView>
        <SearchBar />
        <Banner />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
});

export default HomeScreen;
