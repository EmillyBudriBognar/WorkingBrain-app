import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';

const DesafiosScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <Text style={styles.sectionHeader}>Teste suas Habilidades!</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  sectionHeader: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 15,
    marginBottom: 15,
  },
});

export default DesafiosScreen;
