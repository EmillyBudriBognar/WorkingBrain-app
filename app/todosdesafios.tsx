import React from 'react';
import { View, ScrollView, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SimpleHeader from '@/components/SimpleHeader';
import { goToDesafios, goToHome } from './navigation';

const desafios = [
  { id: '1', image: require('../assets/images/desafio-diario.png') },
  { id: '2', image: require('../assets/images/desafio-eco.png') },
  { id: '3', image: require('../assets/images/desafio-urban.png') },
  { id: '4', image: require('../assets/images/desafio-solar.png') },
  { id: '5', image: require('../assets/images/desafio-cartog.png') },
  { id: '6', image: require('../assets/images/desafio-optica.png') }
];

const InscricoesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SimpleHeader title='Desafios' onBackPress={goToDesafios} />
      <ScrollView>
        <Text style={styles.sectionHeader}>Desafios Disponíveis</Text>
        <View style={styles.desafiosContainer}>
          {desafios.map((desafio) => (
            <TouchableOpacity key={desafio.id} style={styles.desafioItem} onPress={() => alert(`Desafio: ${desafio.id}`)}>
              <Image source={desafio.image} style={styles.desafioImage} />
            </TouchableOpacity>
          ))}
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
  desafiosContainer: {
    flexDirection: 'row', // Organiza os itens horizontalmente
    flexWrap: 'wrap', // Faz com que quebrem linha quando necessário
    justifyContent: 'space-between', // Ajusta o espaçamento entre os itens
    paddingHorizontal: 15, // Margem nas laterais
  },
  desafioItem: {
    width: '48%', // Controla a largura dos itens para que dois caibam por linha
    marginBottom: 15, // Espaçamento entre os itens
  },
  desafioImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
});

export default InscricoesScreen;
