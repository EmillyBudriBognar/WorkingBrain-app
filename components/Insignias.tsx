import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

// Definindo o tipo para cada item de insígnia
interface Insignia {
  id: string;
  title: string;
  image: any; // Tipo 'any' para imagens importadas com require()
}

// Array de insígnias com imagens
const insignias: Insignia[] = [
  { id: '1', title: 'Mestre do Desafio Diário', image: require('../assets/images/insignia-diario.png') },
  { id: '2', title: 'Mestre da Ecologia', image: require('../assets/images/insignia-eco.png') },
  { id: '3', title: 'Mestre da Urbanização', image: require('../assets/images/insignia-urban.png') },
  { id: '4', title: 'Mestre do Sistema Solar', image: require('../assets/images/insignia-solar.png') },
  { id: '5', title: 'Mestre da Cartografia', image: require('../assets/images/insignia-cartog.png') },
  { id: '6', title: 'Mestre da Física Óptica', image: require('../assets/images/insignia-optica.png') },
];

// Função para dividir o título em duas partes
const splitTitle = (title: string) => {
  const [firstPart, ...rest] = title.split(' ');
  return {
    firstLine: `${firstPart} ${rest.shift()}`, // 'Mestre da' ou 'Mestre do'
    secondLine: rest.join(' '), // O restante do título
  };
};

const Insignias: React.FC = () => {
  const renderInsignia = ({ item }: { item: Insignia }) => {
    const { firstLine, secondLine } = splitTitle(item.title);
    
    return (
      <View style={styles.insigniaContainer}>
        <Image source={item.image} style={styles.insigniaImage} />
        <Text style={styles.insigniaTitleFirst}>{firstLine}</Text>
        <Text style={styles.insigniaTitleSecond}>{secondLine}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={insignias}
        horizontal
        renderItem={renderInsignia}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 10,
    marginTop: -18,
  },
  insigniaContainer: {
    marginRight: 15,
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

export default Insignias;
