import { router } from 'expo-router';

// Função que redireciona para a tela de pré-cadastro
export const goToPreCadastro = () => {
  router.replace('/precadastro'); 
  hideSplashScreen();
};

// Função que redireciona para a tela de login
export const goToLogin = () => {
  router.replace('/login'); 
  hideSplashScreen();
};

// Simula a lógica de esconder a splash screen
export const hideSplashScreen = () => {
  console.log('Splash screen hidden');
};

