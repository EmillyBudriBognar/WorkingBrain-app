import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SimpleHeader from '@/components/SimpleHeader';
import { goToHome } from './navigation';

const InscricoesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SimpleHeader title='aulas disponíveis' onBackPress={goToHome} />
      <ScrollView>
    
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

export default InscricoesScreen;
