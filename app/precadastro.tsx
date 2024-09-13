import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { goToLogin, goToCadastroAluno, goToCadastroProfessor } from '../app/navigation'; // Importando as funções de navegação

const SignUpScreen = () => {
  const [role, setRole] = useState<string | null>(null);

  // Funções de navegação e ações
  const handleSignUpStudent = () => {
    setRole('Aluno');
    Alert.alert('Escolha', 'Você escolheu se cadastrar como Aluno.');
    goToCadastroAluno(); // Navega para a tela de cadastro de aluno
  };

  const handleSignUpTeacher = () => {
    setRole('Professor');
    Alert.alert('Escolha', 'Você escolheu se cadastrar como Professor.');
    goToCadastroProfessor(); // Navega para a tela de cadastro de professor
  };

  const handleLoginPress = () => {
    goToLogin(); // Navega para a tela de login
  };

  const handleBackPress = () => {
    goToLogin(); // Navega para a tela de login
  };

  return (
    <View style={styles.container}>
      {/* Botão de Voltar */}
      <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Gostaria de me cadastrar como:</Text>
      
      {/* Botão Aluno */}
      <TouchableOpacity 
        style={[styles.button, styles.studentButton]}
        onPress={handleSignUpStudent}
        accessibilityLabel="Cadastrar como Aluno"
        activeOpacity={0.8}
      >
        <Text style={styles.buttonText}>Aluno</Text>
      </TouchableOpacity>
      
      {/* Botão Professor */}
      <TouchableOpacity 
        style={[styles.button, styles.teacherButton]}
        onPress={handleSignUpTeacher}
        accessibilityLabel="Cadastrar como Professor"
        activeOpacity={0.8} 
      >
        <Text style={styles.buttonText}>Professor</Text>
      </TouchableOpacity>

      {/* Link para Login */}
      <TouchableOpacity onPress={handleLoginPress} activeOpacity={0.8}>
        <Text style={styles.loginText}>
          Já possui conta? <Text style={styles.loginLink}>Entrar</Text>
        </Text>
      </TouchableOpacity>

      {/* Mostrando o estado da escolha */}
      {role && (
        <Text style={styles.roleText}>Você escolheu: {role}</Text>
      )}
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
  backButton: {
    padding: 10,
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  backButtonText: {
    color: '#468EF7',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#252525',
  },
  button: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
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
    fontSize: 16,
    textAlign: 'center',
  },
  loginText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#909090',
    fontSize: 14,
  },
  loginLink: {
    color: '#468EF7',
    fontWeight: 'bold',
  },
  roleText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
