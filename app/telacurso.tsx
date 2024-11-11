import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Obter as dimensões da tela para ajuste responsivo
const { width } = Dimensions.get('window');

const TelaCurso: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={estilos.container}>
      {/* Cabeçalho do Curso */}
      <View style={estilos.cabecalho}>
        <Image source={require('../assets/images/quimica.jpeg')} style={estilos.imagem} />
        <View style={estilos.informacoesCurso}>
          <Text style={estilos.tituloCurso}>Introdução à Química Orgânica</Text>
          <View style={estilos.linhaAutor}>
            <Image source={require('./assets/imagens/quimica.jpeg')} style={estilos.imagemAutor} />
            <Text style={estilos.nomeAutor}>John Doe</Text>
          </View>
          <View style={estilos.detalhesCurso}>
            <Text style={estilos.detalhe}>Fuvest e Enem</Text>
            <Text style={estilos.ponto}>•</Text>
            <Text style={estilos.detalhe}>2h30min</Text>
            <Text style={estilos.ponto}>•</Text>
            <Text style={estilos.detalhe}>15 conteúdos</Text>
            <Text style={estilos.ponto}>•</Text>
            <Text style={estilos.detalhe}>Básico</Text>
          </View>
          <Text style={estilos.descricao}>
            Uma breve descrição do curso. Aqui é onde o texto descritivo deve ser exibido.
          </Text>
          <TouchableOpacity style={estilos.botaoMatricular}>
            <Text style={estilos.textoMatricular}>ME MATRICULAR</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Conteúdos do Curso */}
      <View style={estilos.conteudos}>
        <Text style={estilos.tituloConteudos}>Conteúdos</Text>
        {dadosConteudos.map((conteudo, index) => (
          <TouchableOpacity key={index} style={[estilos.itemConteudo, conteudo.completo && estilos.conteudoCompleto]}>
            <Text style={estilos.indiceConteudo}>{conteudo.indice}</Text>
            <Text style={estilos.tituloConteudo}>{conteudo.titulo}</Text>
            <FontAwesome name="play-circle" size={24} color="#333" />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const dadosConteudos = [
  { indice: '01', titulo: 'Introdução', completo: true },
  { indice: '02', titulo: 'Vídeo', completo: false },
  { indice: '03', titulo: 'Vídeo', completo: false },
  { indice: '04', titulo: 'Vídeo', completo: false },
  { indice: '05', titulo: 'Vídeo', completo: false },
  { indice: '06', titulo: 'Vídeo', completo: false },
];

const estilos = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  cabecalho: {
    backgroundColor: '#E0E4FF',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  imagem: {
    width: width * 0.9,
    height: width * 0.5,
    borderRadius: 8,
    marginBottom: 8,
    alignSelf: 'center',
  },
  informacoesCurso: {
    marginTop: 8,
  },
  tituloCurso: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  linhaAutor: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  imagemAutor: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  nomeAutor: {
    fontSize: 14,
    color: '#333',
  },
  detalhesCurso: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginVertical: 4,
  },
  detalhe: {
    fontSize: 12,
    color: '#666',
  },
  ponto: {
    marginHorizontal: 4,
    fontSize: 12,
    color: '#666',
  },
  descricao: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
  },
  botaoMatricular: {
    backgroundColor: '#4A90E2',
    paddingVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 12,
  },
  textoMatricular: {
    color: '#fff',
    fontWeight: 'bold',
  },
  conteudos: {
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    padding: 16,
  },
  tituloConteudos: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  itemConteudo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
  },
  conteudoCompleto: {
    backgroundColor: '#E0FFE0',
  },
  indiceConteudo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4A90E2',
    marginRight: 16,
  },
  tituloConteudo: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
});

export default TelaCurso;
