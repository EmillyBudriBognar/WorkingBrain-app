import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const materias = [
  { nome: 'Português', cor: '#A0B8D3', icone: 'book' },
  { nome: 'Literatura', cor: '#B99EF1', icone: 'library' },
  { nome: 'Redação', cor: '#A3D8A2', icone: 'pencil' },
  { nome: 'Inglês', cor: '#90CAF9', icone: 'translate' },
  { nome: 'Espanhol', cor: '#FFF59D', icone: 'flag' },
  { nome: 'Matemática', cor: '#F48FB1', icone: 'calculator' },
  { nome: 'Geometria', cor: '#FFCC80', icone: 'ruler-square' },
  { nome: 'Artes', cor: '#F48FB1', icone: 'palette' },
  { nome: 'Física', cor: '#CFD8DC', icone: 'atom' },
  { nome: 'Química', cor: '#A3D8A2', icone: 'flask' },
  { nome: 'Biologia', cor: '#A3D8A2', icone: 'leaf' },
  { nome: 'Educação Física', cor: '#F48FB1', icone: 'run' },
  { nome: 'História', cor: '#D7CCC8', icone: 'history' },
  { nome: 'Geografia', cor: '#A5D6A7', icone: 'earth' },
  { nome: 'Sociologia', cor: '#FFCC80', icone: 'account-group' },
  { nome: 'Filosofia', cor: '#E0E0E0', icone: 'brain' },
];

const { width: screenWidth } = Dimensions.get('window');

const MateriasCarousel = () => {
  const renderItem = ({ item }: { item: { nome: string, cor: string, icone: string } }) => (
    <View style={styles.card}>
      <View style={[styles.circle, { backgroundColor: item.cor }]}>
        <MaterialCommunityIcons name={item.icone as keyof typeof MaterialCommunityIcons.glyphMap} size={32} color="white" />
      </View>
      <Text style={styles.cardText}>{item.nome}</Text>
    </View>
  );

  return (
    <FlatList
      data={materias}
      renderItem={renderItem}
      keyExtractor={(item) => item.nome}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      decelerationRate="fast"
      snapToInterval={screenWidth * 0.6 + 10} // Largura do item + espaçamento
      contentContainerStyle={{ paddingHorizontal: screenWidth * 0.2 }}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 22,
    borderTopLeftRadius: 1,
    alignItems: 'center',
    padding: 10,
    marginHorizontal: 5,
    width: screenWidth * 0.3,
    shadowColor: '#878787',
    shadowOffset: { width: 0, height: 3 }, // Aumentando a altura para espalhar mais
    shadowOpacity: 0.8, // Aumentando a opacidade da sombra
    shadowRadius: 10, // Adicionando um raio de sombra para suavizar
    elevation: 5, // Aumentando a elevação para Android
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#878787',
    textAlign: 'center',
  },
});

export default MateriasCarousel;
