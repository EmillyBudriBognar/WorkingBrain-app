import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SimpleHeader from '@/components/SimpleHeader';
import CardAula from '@/components/CardAula'; // Importa o componente de aula
import { goToHome } from './navigation';

// Dados dos cards
const aulasData = [
  {
    imageUrl: require('../assets/images/quimica.jpeg'),
    title: "Introdução à Química",
    subtitle: "Prof Patrícia Ladeira",
    tags: [
      { label: "química", color: "#A3D8A2" },
      { label: "fuvest", color: "#CF906F" }
    ]
  },
  {
    imageUrl: require('../assets/images/literatura.jpg'),
    title: "Escolas Literárias",
    subtitle: "Prof Marcos Soares",
    tags: [
      { label: "Literatura", color: "#B99EF1" },
      { label: "fuvest", color: "#CF906F" }
    ]
  },
  {
    imageUrl: require('../assets/images/geografia.jpeg'),
    title: "Fontes de Energia",
    subtitle: "Prof Silvana Castro",
    tags: [
      { label: "Geografia", color: "#A5D6A7" },
      { label: "Enem", color: "#F8CEF9" }
    ]
  },
  {
    imageUrl: require('../assets/images/historia.jpg'),
    title: "Brasil Colônia I",
    subtitle: "Prof Vinícius Cardoso",
    tags: [
      { label: "História", color: "#D7CCC8" },
      { label: "fuvest", color: "#CF906F" }
    ]
  },
  {
    imageUrl: require('../assets/images/fisica.jpeg'),
    title: "Termodinâmica",
    subtitle: "Prof Gisele Alves",
    tags: [
      { label: "Física", color: "#CFD8DC" },
      { label: "Enem", color: "#F8CEF9" }
    ]
  },
  {
    imageUrl: require('../assets/images/algebra.jpeg'), // Ajuste o caminho conforme necessário
    title: "Álgebra Básica",
    subtitle: "Prof João Silva",
    tags: [
      { label: "Matemática", color: "#F48Fd0" },
      { label: "fundamental", color: "#FFD54F" }
    ]
  },
  {
    imageUrl: require('../assets/images/culturabr.jpeg'), // Ajuste o caminho conforme necessário
    title: "Cultura Brasileira",
    subtitle: "Prof Ana Paula",
    tags: [
      { label: "artes", color: "#F48FB1" },
      { label: "ensino médio", color: "#FFAB91" }
    ]
  },
  {
    imageUrl: require('../assets/images/plantas.jpeg'), // Ajuste o caminho conforme necessário
    title: "Gimnospermas",
    subtitle: "Prof Carlos Lima",
    tags: [
      { label: "biologia", color: "#A3D8A2" },
      { label: "ensino médio", color: "#FFAB91" }
    ]
  }
];

const InscricoesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SimpleHeader title='Aulas Disponíveis' onBackPress={goToHome} />
      <ScrollView contentContainerStyle={styles.cardList}>
        {aulasData.map((aula, index) => (
          <CardAula
            key={index}
            imageUrl={aula.imageUrl}
            title={aula.title}
            subtitle={aula.subtitle}
            tags={aula.tags}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  cardList: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginRight: 16,
  }
});

export default InscricoesScreen;
