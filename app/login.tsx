import React, { useState, useEffect } from "react";
import { Text, View, Alert, TextInput, StyleSheet, TouchableOpacity, Image, Dimensions } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { goToLogin, goToPreCadastro, goToHome } from "../app/navigation";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Adicionando estado de autenticação
  const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));

  // Efeito para atualizar as dimensões da janela
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setWindowDimensions(window);
    });

    // Cleanup do evento
    return () => subscription?.remove();
  }, []);

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
      <Image
        source={require('../assets/images/wallpaper-login.png')}
        style={[styles.backgroundImage, { width: windowDimensions.width, height: windowDimensions.height }]}
        resizeMode="cover" 
      />

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

      <TouchableOpacity style={styles.loginButton} onPress={goToHome}>
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
    justifyContent: 'center',
    position: 'relative', 
    padding: 20, 
  },
  backgroundImage: {
    position: 'absolute', 
    top: 0,
    left: 0,
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
    width: '90%', 
    alignSelf: 'center', 
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
    width: '90%', 
    alignSelf: 'center', 
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
