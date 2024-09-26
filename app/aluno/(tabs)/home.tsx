import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import Banner from '../../../components/Banner';
import MateriasCarousel from '../../../components/MateriasCarousel'; 
import { goToMaterias } from '@/app/navigation';
import CardAula from '@/components/CardAula';
import { goToAulas } from '@/app/navigation';
import CardAulaCarousel from '@/components/CardAulaCarousel';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <Text style={styles.sectionHeader}>Para você...</Text>
        <Banner />

        <View style={styles.materiasHeaderContainer}>
          <Text style={styles.sectionHeader}>Matérias</Text>
          <TouchableOpacity onPress={goToMaterias}>
            <Text style={styles.verTodas}>VER TODAS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.carouselContainer}>
          <MateriasCarousel />
        </View>
        <View style={styles.materiasHeaderContainer}>
          <Text style={styles.sectionHeader}>Últimas Atualizações</Text>
          <TouchableOpacity onPress={goToAulas}>
            <Text style={styles.verTodas}>VER TODAS</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardContainer}>
        <CardAulaCarousel/>
        </View>
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
  materiasHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 20,
  },
  verTodas: {
    color: '#007BFF', 
    fontSize: 16,
    fontWeight: 'bold',
  },
  carouselContainer: {
    marginTop: 8,
    marginLeft: -58, 
  },
  cardContainer: {
    marginHorizontal: 15,  // Adicionando margin ao CardAula
    marginBottom: 20,
  },
});

export default HomeScreen;
