import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import SimpleHeader from '@/components/SimpleHeader';
import { goToCursoConfirm, goToHome } from './navigation';

// Obter as dimensões da tela para ajuste responsivo
const { width } = Dimensions.get('window');

const TelaCurso: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={estilos.container}>
      <SimpleHeader title='CONTEÚDOS' onBackPress={goToHome} />
      <View style={estilos.cabecalho}>
        <Image source={require('../assets/images/quimica.jpeg')} style={estilos.imagem} />
        <View style={estilos.informacoesCurso}>
          <Text style={estilos.tituloCurso}>Introdução à Química</Text>
          <View style={estilos.linhaAutor}>
            <Image source={require('../assets/images/userprof.jpg')} style={estilos.imagemAutor} />
            <Text style={estilos.nomeAutor}>Patrícia Ladeira</Text>
          </View>
          <View style={estilos.detalhesCurso}>
            <Text style={estilos.detalhe}>Fuvest</Text>
            <Text style={estilos.ponto}>•</Text>
            <Text style={estilos.detalhe}>2h30min</Text>
            <Text style={estilos.ponto}>•</Text>
            <Text style={estilos.detalhe}>15 conteúdos</Text>
            <Text style={estilos.ponto}>•</Text>
            <Text style={estilos.detalhe}>Básico</Text>
          </View>
          <Text style={estilos.descricao}>
          Explore os fundamentos da Química de forma clara e objetiva, com foco em conteúdos relevantes para vestibulares como Fuvest e Enem. Aprofunde seu conhecimento e esteja preparado para seus exames.
          </Text>
          <TouchableOpacity style={estilos.botaoMatricular} onPress={goToCursoConfirm}>
            <Text style={estilos.textoMatricular}>ME MATRICULAR</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Lista de conteúdos do curso */}
      <View style={estilos.listaConteudos}>
        {['Introdução ao Curso', 'Aula 1', 'Aula 2', 'Aula 3', 'Aula 4', 'Aula 5'].map((conteudo, index) => (
          <TouchableOpacity key={index} style={estilos.itemConteudo}>
            <View style={estilos.numeroConteudo}>
              <Text style={estilos.textoNumero}>{String(index + 1).padStart(2, '0')}</Text>
            </View>
            <Text style={estilos.textoConteudo}>{conteudo}</Text>
            <FontAwesome name="lock" size={16} color="#8e8e8e" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const estilos = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
  },
  cabecalho: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 16,
    overflow: 'hidden',
  },
  imagem: {
    width: '100%',
    height: 180,
  },
  informacoesCurso: {
    padding: 16,
  },
  tituloCurso: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  linhaAutor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  imagemAutor: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  nomeAutor: {
    fontSize: 16,
    color: '#333',
  },
  detalhesCurso: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 8,
  },
  detalhe: {
    fontSize: 14,
    color: '#666',
  },
  ponto: {
    fontSize: 14,
    marginHorizontal: 4,
    color: '#666',
  },
  descricao: {
    fontSize: 14,
    color: '#333',
    marginBottom: 16,
  },
  botaoMatricular: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 60,
    alignItems: 'center',
  },
  textoMatricular: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listaConteudos: {
    paddingHorizontal: 16,
  },
  itemConteudo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#eaeef0',
    padding: 12,
    borderRadius: 40,
    marginVertical: 6,
  },
  numeroConteudo: {
    backgroundColor: '#a0d2eb',
    borderRadius: 20,
    padding: 8,
    width: 40,
    alignItems: 'center',
  },
  textoNumero: {
    color: '#fff',
    fontWeight: 'bold',
  },
  textoConteudo: {
    flex: 1,
    marginLeft: 16,
    fontSize: 16,
    color: '#333',
  },
});

export default TelaCurso;
