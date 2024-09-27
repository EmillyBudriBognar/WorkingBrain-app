import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Expo icons

interface SimpleHeaderProps {
  title: string; // Título dinâmico
  onBackPress: () => void; // Função de voltar dinâmica
}

const SimpleHeader: React.FC<SimpleHeaderProps> = ({ title, onBackPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#4D81F7" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4D81F7',
    padding: 18,
    paddingTop: 55,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 120,
    marginTop: -50,
  },
  backButton: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'right',
    color: 'white',
    marginRight: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default SimpleHeader;
