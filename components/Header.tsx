import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { goToCronograma } from '../app/navigation'; // Importe a função de navegação

// Define o tipo para o estado do usuário
interface User {
  name: string;
  avatarUri: string;
}

const Header: React.FC = () => {
  // Estado inicial para o usuário
  const [user, setUser] = useState<User>({
    name: 'USERNAME', // Nome do usuário inicial
    avatarUri: 'https://via.placeholder.com/50', // URL do avatar inicial
  });

  const [newName, setNewName] = useState<string>('');
  const [newAvatarUri, setNewAvatarUri] = useState<string>('');

  const todayDate = new Date().toLocaleDateString(); // Obtém a data atual

  // Função para atualizar o nome e o avatar
  const updateUserInfo = () => {
    if (newName.trim() !== '') {
      setUser(prevUser => ({
        ...prevUser,
        name: newName,
      }));
    }
    if (newAvatarUri.trim() !== '') {
      setUser(prevUser => ({
        ...prevUser,
        avatarUri: newAvatarUri,
      }));
    }
  };

  return (
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <Image
          source={{ uri: user.avatarUri }} // Usa a URL do avatar do estado
          style={styles.avatar}
        />
        <View style={styles.textContainer}>
          <Text style={styles.greeting}>Hello, {user.name}</Text> {/* Usa o nome do estado */}
          <Text style={styles.date}>{todayDate}</Text> {/* Mostra a data atual */}
        </View>
        <TouchableOpacity style={styles.calendarButton} onPress={goToCronograma}>
          <FontAwesome name="calendar" size={20} color="#FFF" />
          <Text style={styles.calendarText}>Hoje</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Pesquisar" 
        />
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={20} color="#B0B0B0" />
        </TouchableOpacity>
      </View>
      {/* Adiciona campos para atualizar o nome e o avatar */}
      <View style={styles.updateContainer}>
        <TextInput
          style={styles.input}
          placeholder="Novo nome"
          value={newName}
          onChangeText={setNewName}
        />
        <TextInput
          style={styles.input}
          placeholder="URL do novo avatar"
          value={newAvatarUri}
          onChangeText={setNewAvatarUri}
        />
        <View style={styles.buttonContainer}>
          <Button title="Atualizar Info" onPress={updateUserInfo} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: '#4A90E2',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  greeting: {
    fontSize: 18,
    color: '#FFF',
  },
  date: {
    fontSize: 14,
    color: '#FFF',
  },
  calendarButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
  },
  calendarText: {
    fontSize: 14,
    color: '#FFF',
    marginLeft: 4,
    marginTop: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.5,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
  },
  searchButton: {
    marginLeft: 8,
  },
  updateContainer: {
    marginTop: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  buttonContainer: {
    marginTop: 8,
  },
});

export default Header;
