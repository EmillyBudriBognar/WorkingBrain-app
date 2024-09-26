import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import CardInscricoes from '@/components/CardIncricoes'; // Importa o componente de inscrição
import CardAula from '@/components/CardAula'; // Importa o componente de aula

const InscricoesScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        <Text style={styles.sectionHeader}>Em Progresso...</Text>
        
        {/* Primeiro Card Grande */}
        <View style={styles.largeCardContainer}>
          <CardInscricoes 
            imageUrl={require('../../../assets/images/biologia.jpg')}
            title="Cadeias Alimentares"
            subtitle="Prof Vera Prado"
            progress={75} 
            tags={[
              { label: "biologia", color: "#A3D8A2" },
              { label: "fuvest", color: "#CF906F" }
            ]}
            layout="large" // Define o layout grande para o primeiro card
          />
        </View>

        {/* Container para os dois cards pequenos */}
        <View style={styles.smallCardsContainer}>
          <CardInscricoes 
            imageUrl={require('../../../assets/images/analiseliteraria.jpeg')}
            title="Análise Literária"
            subtitle="Prof Marcos Soares"
            progress={50} 
            tags={[
              { label: "Literatura", color: "#B99EF1" },
              { label: "enem", color: "#F8CEF9" }
            ]}
            layout="small" // Define o layout pequeno para o segundo card
          />
          
          <CardInscricoes 
            imageUrl={require('../../../assets/images/geopolitica.jpg')}
            title="Geopolítica Atual"
            subtitle="Prof Silvana Castro"
            progress={30} 
            tags={[
              { label: "Geografia", color: "#A5D6A7" },
              { label: "Enem", color: "#F8CEF9" }
            ]}
            layout="small" // Define o layout pequeno para o terceiro card
          />
        </View>

        {/* Seção "Não Iniciados" */}
        <Text style={[styles.sectionHeader, styles.nonStartedMargin]}>Não Iniciados</Text>
        <View style={styles.cardListContainer}>
          <CardAula 
            imageUrl={require('../../../assets/images/algebra.jpeg')} // Ajuste o caminho conforme necessário
            title="Álgebra Básica"
            subtitle="Prof João Silva"
            tags={[
              { label: "Matemática", color: "#F48Fd0" },
              { label: "fundamental", color: "#FFD54F" }
            ]}
          />
          <CardAula 
            imageUrl={require('../../../assets/images/culturabr.jpeg')} // Ajuste o caminho conforme necessário
            title="Cultura Brasileira"
            subtitle="Prof Ana Paula"
            tags={[
              { label: "artes", color: "#F48FB1" },
              { label: "ensino médio", color: "#FFAB91" }
            ]}
          />
          <CardAula 
            imageUrl={require('../../../assets/images/plantas.jpeg')} // Ajuste o caminho conforme necessário
            title="Gimnospermas"
            subtitle="Prof Carlos Lima"
            tags={[
              { label: "biologia", color: "#A3D8A2" },
              { label: "ensino médio", color: "#FFAB91" }
            ]}
          />
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
  nonStartedMargin: {
    marginTop: 20, // Adiciona margem superior à seção "Não Iniciados"
    marginLeft: 18,
    marginBottom: 15,
  },
  largeCardContainer: {
    alignItems: 'center', // Centraliza o card grande
    marginBottom: 15, // Espaçamento inferior
  },
  smallCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Espaça os dois cards pequenos uniformemente
    paddingHorizontal: 15, // Espaço nas laterais para os cards pequenos
    marginBottom: 15, // Adiciona margem inferior aos cards pequenos
  },
  cardListContainer: {
    marginLeft: 10,
    marginBottom: 15, // Margem inferior da lista
    marginRight: 23,
  },
});

export default InscricoesScreen;
