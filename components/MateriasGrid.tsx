import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
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

const MateriasGrid = () => {
    return (
      <View style={styles.gridContainer}>
        {materias.map((materia, index) => (
          <View key={index} style={styles.card}>
            <View style={[styles.circle, { backgroundColor: materia.cor }]}>
              <MaterialCommunityIcons
                name={materia.icone as keyof typeof MaterialCommunityIcons.glyphMap}
                size={32}
                color="white"
              />
            </View>
            <Text style={styles.cardText}>{materia.nome}</Text>
          </View>
        ))}
      </View>
    );
  };
  
const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 22,
    borderTopLeftRadius: 1,
    alignItems: 'center',
    padding: 30,
    width: screenWidth * 0.4,
    shadowColor: '#252525',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5, // Corrigido para estar dentro do intervalo permitido
    elevation: 6,
    margin: 8,
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

export default MateriasGrid;
