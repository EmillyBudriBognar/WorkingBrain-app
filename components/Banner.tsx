import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { goToDesafioDiario, goToDesafios } from "../app/navigation";

const Banner = () => {
  return (
    <View style={styles.banner}>
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Mantenha a Constância e Ganhe uma Insígnia!</Text>
          <Text style={styles.subtitle}>Um pequeno passo a cada dia leva a grandes conquistas!</Text>
        </View>
        <Image
          source={require('../assets/images/boneco1.png')} 
          style={styles.image}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={goToDesafioDiario}>
        <Text style={styles.buttonText}>Ir para o Desafio Diário</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#FDDFE9',
    padding: 16,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#787878',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: 12,
    marginTop: -12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: -8,
    color: '#D14987',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: 14,
    color: '#252525',
  },
  button: {
    backgroundColor: '#F490AA',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'uppercase',
  },
});

export default Banner;
