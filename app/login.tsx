import React, { useState } from "react";
import { Text, View, Alert, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { goToLogin, goToPreCadastro, goToHome } from "../app/navigation";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Adicionando estado de autenticação

  const handleLoginPress = () => {
    // implementar a lógica de autenticação

    if (isAuthenticated) { // Se já estiver autenticado
      goToHome();
    } else {
      Alert.alert('Erro', 'Credenciais inválidas.'); 
    }
  };

  const handleSignUpPress = () => {
    goToPreCadastro(); // Navega para a tela de pré-cadastro
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Boas-Vindas!</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity onPress={() => Alert.alert('Esqueci a senha', 'Redirecionar para recuperação de senha.')}>
        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>Ainda não possui conta?</Text>
        <TouchableOpacity onPress={handleSignUpPress}>
          <Text style={styles.signUpLink}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 20,
    justifyContent: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 20,
    backgroundColor: '#F5F5F5',
    fontSize: 16,
  },
  forgotPasswordText: {
    textAlign: 'right',
    color: '#6C6C6C',
    marginBottom: 30,
  },
  loginButton: {
    backgroundColor: '#468EF7',
    borderRadius: 8,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    color: '#6C6C6C',
    marginRight: 5,
  },
  signUpLink: {
    color: '#468EF7',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
