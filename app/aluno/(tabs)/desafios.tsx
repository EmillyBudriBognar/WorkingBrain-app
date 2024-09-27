import React from 'react';
import { View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/Header';
import Desafios from '@/components/DesafiosCarousel';
import { goToInsignias, goToVerDesafios } from '@/app/navigation';
import Insignias from '@/components/Insignias';

const DesafiosScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        {/* Seção "Teste suas Habilidades!" */}
        <View style={styles.headerRow}>
          <Text style={styles.sectionHeader}>Teste suas Habilidades!</Text>
          <TouchableOpacity onPress={goToVerDesafios}>
            <Text style={styles.verTodas}>VER TUDO</Text>
          </TouchableOpacity>
        </View>

        {/* Componente de Desafios */}
        <Desafios />

        {/* Seção "Insígnias Disponíveis" */}
        <View style={styles.headerRow}>
          <Text style={styles.sectionHeader}>Insígnias Disponíveis</Text>
          <TouchableOpacity onPress={goToInsignias}>
            <Text style={styles.verTodas}>VER TODAS</Text>
          </TouchableOpacity>
        </View>

        {/* Componente de Insígnias */}
        <Insignias />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  headerRow: {
    flexDirection: 'row', // Coloca os elementos lado a lado
    justifyContent: 'space-between', // Adiciona espaço entre o título e o botão
    alignItems: 'center', // Alinha verticalmente no centro
    paddingHorizontal: 15, // Adiciona espaço lateral
    marginBottom: 15, // Espaço abaixo do cabeçalho
  },
  sectionHeader: {
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 15,
  },
  verTodas: {
    color: '#007BFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DesafiosScreen;
