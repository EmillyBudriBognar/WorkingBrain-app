import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { goToCronograma } from '@/app/navigation';

const HeaderComponent = () => {
  const [searchQuery, setSearchQuery] = useState(''); // Estado para a consulta de pesquisa

  // Função que trata a pesquisa
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Aqui você pode filtrar ou realizar a busca com base nessa consulta
    console.log('Consulta de Pesquisa:', query);
  };

  return (
    <View style={styles.headerContainer}>
      {/* Seção Esquerda: Avatar */}
      <View style={styles.leftSection}>
      <Image
        source={require('../assets/images/user.png')} // Caminho correto da imagem local
        style={styles.avatar}
      />
        <Text style={styles.greetingText}>EMILLY BUDRI</Text>
      </View>

      {/* Seção Direita: Ícone de Calendário */}
      <TouchableOpacity style={styles.calendarSection} onPress={goToCronograma}>
        <Ionicons name="calendar-outline" size={32} color="#fff" />
        <Text style={styles.calendarText}>HOJE</Text>
      </TouchableOpacity>

      {/* Barra de Pesquisa */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#aaa" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar"
          placeholderTextColor="#aaa"
          value={searchQuery}
          onChangeText={handleSearch} // Isso aciona a função handleSearch
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#4D81F7', 
    padding: 18,
    paddingTop: 35,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 180,
    marginTop: -33,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    marginTop: 22,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greetingText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  calendarSection: {
    position: 'absolute',
    right: 16,
    top: 32,
    alignItems: 'center',
    marginTop: 22,
  },
  calendarText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 10,
    height: 40,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
});

export default HeaderComponent;
