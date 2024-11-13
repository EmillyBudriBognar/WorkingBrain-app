import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { goToDesafios } from './navigation';

const QuizScreen = () => {

  return (
    <ImageBackground source={require('../assets/images/quiz.png')} style={estilos.imagemFundo}>
      <SafeAreaView style={estilos.container}>
        <TouchableOpacity style={estilos.botaoVoltar} onPress={goToDesafios}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        <View style={estilos.containerConteudo}>
          <Text style={estilos.titulo}>Quiz Geral</Text>
          <Text style={estilos.subtitulo}>Insígnias Disponíveis</Text>

          <View style={estilos.containerInsignia}>
            <Image
              source={require('../assets/images/insignia-diario.png')}
              style={estilos.insignia}
            />
          </View>

          <View style={estilos.containerInfo}>
            <Text style={estilos.textoInfo}>
              <Text style={estilos.textoNegrito}>Tempo:</Text> 10 min
            </Text>
            <Text style={estilos.textoInfo}>
              <Text style={estilos.textoNegrito}>Perguntas:</Text> 05
            </Text>
          </View>

          <Text style={estilos.descricao}>
          Um quiz com 5 perguntas dos principais temas de cada matéria - totalizando 05 perguntas que devem ser respondidas em um tempo de 10 minutos.
          Seus erros e acertos basearão suas maiores dificuldades.
          </Text>

          <Text style={estilos.textoPergunta}>Pronto?</Text>

          <TouchableOpacity style={estilos.botaoPrincipal}>
            <Text style={estilos.textoBotaoPrincipal}>Estou pronto!</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.botaoSecundario} onPress={goToDesafios}>
            <Text style={estilos.textoBotaoSecundario}>Farei o teste depois</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const estilos = StyleSheet.create({
  imagemFundo: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 16,
  },
  botaoVoltar: {
    padding: 10,
    borderRadius: 50,
    backgroundColor: '#0773ed',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    marginTop: 40,
    top: 16,
    left: 16,
    zIndex: 1,
  },
  containerConteudo: {
    flex: 1,
    marginTop: 100,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 16,
    color: '#555',
    marginBottom: 15,
  },
  containerInsignia: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  insignia: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  containerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  textoInfo: {
    fontSize: 16,
    color: '#333',
  },
  textoNegrito: {
    fontWeight: 'bold',
  },
  descricao: {
    fontSize: 14,
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
  },
  textoPergunta: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 25,
  },
  botaoPrincipal: {
    backgroundColor: '#0773ed',
    borderRadius: 8,
    paddingVertical: 10,
    width: '100%',
    marginBottom: 10,
    alignItems: 'center',
  },
  textoBotaoPrincipal: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botaoSecundario: {
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  textoBotaoSecundario: {
    color: '#555',
    fontSize: 16,
  },
});

export default QuizScreen;
