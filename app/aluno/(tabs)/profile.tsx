import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  const SimpleHeader = ({ title }: { title: string }) => (
    <View style={headerStyles.container}>
      <Text style={headerStyles.title}>{title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SimpleHeader title="Meu Perfil" />

      <ScrollView>
        <Text style={styles.sectionHeader}>Para você...</Text>
        {/* Adicionar mais conteúdo aqui conforme necessário */}
      </ScrollView>
    </View>
  );
};

// Estilos para o SimpleHeader
const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4D81F7',
    padding: 18,
    paddingTop: 58,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 100,
    marginTop: -30,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

// Estilos gerais da tela ProfileScreen
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
});

export default ProfileScreen;
