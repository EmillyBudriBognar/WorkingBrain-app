import React from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import CardInscricoes from '@/components/CardIncricoes'; // Importa o componente de inscricoes
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
            imageUrl={require('../../../assets/images/quimica.jpeg')}
            title="Introdução à Química"
            subtitle="Prof Patrícia Ladeira"
            progress={1} 
            tags={[
              { label: "quimica", color: "#A3D8A2" },
              { label: "fuvest", color: "#CF906F" }
            ]}
            layout="large" // Define o layout grande para o primeiro card
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
