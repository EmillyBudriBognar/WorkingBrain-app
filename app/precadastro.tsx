import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const SignUpScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gostaria de me cadastrar como:</Text>
      <TouchableOpacity style={[styles.button, styles.studentButton]}>
        <Text style={styles.buttonText}>Aluno</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.teacherButton]}>
        <Text style={styles.buttonText}>Professor</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/login')}>
        <Text style={styles.loginText}>
          Já possui conta? <Text style={styles.loginLink}>Entrar</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  studentButton: {
    backgroundColor: '#468EF7',
  },
  teacherButton: {
    backgroundColor: '#FF7675',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#999',
  },
  loginLink: {
    color: '#468EF7',
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
