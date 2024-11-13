import { goToDesafioDiario } from '@/app/navigation';
import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';

// Definir tipo para os desafios
interface Desafio {
  id: string;
  image: ImageSourcePropType; // Especifica o tipo para a imagem
}

const desafios: Desafio[] = [
  { id: '1', image: require('../assets/images/desafio-diario.png') },
  { id: '2', image: require('../assets/images/desafio-eco.png') },
  { id: '3', image: require('../assets/images/desafio-urban.png') },
  { id: '4', image: require('../assets/images/desafio-solar.png') },
  { id: '5', image: require('../assets/images/desafio-cartog.png') },
  { id: '6', image: require('../assets/images/desafio-optica.png') }
];

const Desafios: React.FC = () => {
  const renderDesafio = ({ item }: { item: Desafio }) => (
    <TouchableOpacity style={styles.desafioContainer} onPress={goToDesafioDiario}>
      <Image source={item.image} style={styles.desafioImage} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={desafios}
        horizontal
        renderItem={renderDesafio}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 18,
    marginTop: -12,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  desafioContainer: {
    marginRight: 15,
    alignItems: 'center',
  },
  desafioImage: {
    borderRadius: 10,
  },
});

export default Desafios;
