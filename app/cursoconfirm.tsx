import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { goToHome } from './navigation';

const TelaMatriculaConcluida: React.FC = () => {
  return (
    <ImageBackground source={require('../assets/images/cursoconfirm.png')} style={estilos.fundo}>
      <View style={estilos.conteudo}>
        <Text style={estilos.titulo}>SUA MATRÍCULA FOI REALIZADA!</Text>
        <Text style={estilos.subtitulo}>Aproveite o curso!</Text>
        <TouchableOpacity style={estilos.botao} onPress={goToHome}>
          <Text style={estilos.textoBotao}>IR PARA A TELA INICIAL</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const estilos = StyleSheet.create({
  fundo: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  conteudo: {
    marginTop: 350,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3366FF',
    marginBottom: 30,
  },
  subtitulo: {
    fontSize: 16,
    color: '#888',
    marginBottom: 40,
  },
  botao: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#3366FF',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  textoBotao: {
    fontSize: 16,
    color: '#3366FF',
    fontWeight: 'bold',
  },
});

export default TelaMatriculaConcluida;
