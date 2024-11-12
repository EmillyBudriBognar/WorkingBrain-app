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

// Função que redireciona para a tela de login
export const goToCursoConfirm = () => {
  router.replace('/cursoconfirm'); 
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
  router.replace('../aluno/(tabs)/home'); 
  hideSplashScreen();
};

// Função que redireciona para a tela de Inscrições
export const goToInscricoes = () => {
  router.replace('../aluno/(tabs)/inscricoes'); 
  hideSplashScreen();
};

// Função que redireciona para a tela de Desafios
export const goToDesafios = () => {
  router.replace('../aluno/(tabs)/desafios'); 
  hideSplashScreen();
};

// Função que redireciona para a tela de Perfil
export const goToProfile= () => {
  router.replace('../aluno/(tabs)/profile'); 
  hideSplashScreen();
};

// Função que redireciona para a tela de Sobre Curso
export const goToTelaCurso = () => {
  router.replace('/telacurso'); 
  hideSplashScreen();
};

// Função que redireciona para a tela de Desafio Diário
export const goToDesafioDiario = () => {
  router.replace('/desafiodiario'); 
  hideSplashScreen();
};

// Função que redireciona para a tela de Matérias
export const goToMaterias = () => {
  router.replace('/materias'); 
  hideSplashScreen();
};

// Função que redireciona para a tela de Cronograma
export const goToCronograma = () => {
  router.replace('/cronograma'); 
  hideSplashScreen();
};

// Função que redireciona para a tela de Aulas
export const goToAulas = () => {
  router.replace('/aulas'); 
  hideSplashScreen();
};

// Função que redireciona para a tela de Todos os Desafios
export const goToVerDesafios = () => {
  router.replace('/todosdesafios'); 
  hideSplashScreen();
};

// Função que redireciona para a tela de Insígnias
export const goToInsignias = () => {
  router.replace('/insignias'); 
  hideSplashScreen();
};

// Função que redireciona para a tela de Home do Prof
export const goToProf = () => {
  router.replace('../prof/(tabs)/homeprof'); 
  hideSplashScreen();
};

// Simula a lógica de esconder a splash screen
export const hideSplashScreen = () => {
  console.log('Splash screen hidden');
};

