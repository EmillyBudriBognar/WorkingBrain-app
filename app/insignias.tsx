import React from 'react';
import { View, ScrollView, StyleSheet, Text, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SimpleHeader from '@/components/SimpleHeader';
import { goToHome } from './navigation';

// Array de insígnias com imagens
const insignias = [
  { id: '1', title: 'Mestre do Desafio Diário', image: require('../assets/images/insignia-diario.png') },
  { id: '2', title: 'Mestre da Ecologia', image: require('../assets/images/insignia-eco.png') },
  { id: '3', title: 'Mestre da Urbanização', image: require('../assets/images/insignia-urban.png') },
  { id: '4', title: 'Mestre do Sistema Solar', image: require('../assets/images/insignia-solar.png') },
  { id: '5', title: 'Mestre da Cartografia', image: require('../assets/images/insignia-cartog.png') },
  { id: '6', title: 'Mestre da Física Óptica', image: require('../assets/images/insignia-optica.png') }
];

// Função para dividir o título em duas partes
const splitTitle = (title: string) => {
  const [firstPart, ...rest] = title.split(' ');
  return {
    firstLine: `${firstPart} ${rest.shift()}`, // 'Mestre da' ou 'Mestre do'
    secondLine: rest.join(' '), // O restante do título
  };
};

const InscricoesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SimpleHeader title='Insígnias' onBackPress={goToHome} />
      <ScrollView>
        <View style={styles.insigniasContainer}>
          {insignias.map(insignia => {
            const { firstLine, secondLine } = splitTitle(insignia.title);
            return (
              <View key={insignia.id} style={styles.insigniaItem}>
                <Image source={insignia.image} style={styles.insigniaImage} />
                <Text style={styles.insigniaTitleFirst}>{firstLine}</Text>
                <Text style={styles.insigniaTitleSecond}>{secondLine}</Text>
              </View>
            );
          })}
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
  insigniasContainer: {
    flexDirection: 'row', // Organiza os itens horizontalmente
    flexWrap: 'wrap', // Permite que quebrem linha quando necessário
    justifyContent: 'space-between', // Distribui os itens igualmente
    paddingHorizontal: 15, // Margem lateral
    paddingTop: 30,
  },
  insigniaItem: {
    width: '48%', // Ajusta para caber duas insígnias por linha
    marginBottom: 15, // Espaçamento inferior
    alignItems: 'center',
  },
  insigniaImage: {
    width: 130,
    height: 130,
  },
  insigniaTitleFirst: {
    marginTop: 5,
    color: '#404040',
    fontSize: 15,
    textAlign: 'center',
  },
  insigniaTitleSecond: {
    color: '#404040',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default InscricoesScreen;
