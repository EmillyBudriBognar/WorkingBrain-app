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

// Função que redireciona para a tela de Cadastro do Aluno
export const goToCadastroAluno = () => {
  router.replace('/sobremimaluno'); 
  hideSplashScreen();
};

// Função que redireciona para a tela de Cadastro do Professor
export const goToCadastroProfessor = () => {
  router.replace('/sobremimprofessor'); 
  hideSplashScreen();
};

// Função que redireciona para a tela de Home
export const goToHome = () => {
  router.replace('../(tabs)/home'); 
  hideSplashScreen();
};

// Simula a lógica de esconder a splash screen
export const hideSplashScreen = () => {
  console.log('Splash screen hidden');
};

