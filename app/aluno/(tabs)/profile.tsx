import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Ícones para dropdowns
import { goToLogin } from '@/app/navigation';

const ProfileScreen = () => {
  // Estados para os dados do perfil (normalmente viriam de um backend)
  const [userName, setUserName] = useState('EMILLY BUDRI'); // Nome fictício
  const [insigniasExpanded, setInsigniasExpanded] = useState(false);
  const [infoExpanded, setInfoExpanded] = useState(false);

  // Dados simulados de informações do usuário (viriam de um banco de dados)
  const userInfo = {
    name: userName,
    email: 'emilly.budri@example.com',
    phoneNumbers: ['(11) 99999-9999', '(21) 88888-8888'],
  };

  // Simulação de busca do nome do usuário de um banco de dados
  useEffect(() => {
    const fetchUserData = async () => {
      // Simulação de delay para buscar dados
      setTimeout(() => {
        // Isso seria substituído pela busca real no banco de dados
        setUserName('EMILLY BUDRI'); 
      }, 1000);
    };

    fetchUserData();
  }, []);

  return (
    <View style={styles.container}>
      {/* Cabeçalho Simples */}
      <SimpleHeader title="Meu Perfil" />

      <ScrollView>
        {/* Seção de Perfil */}
        <View style={styles.profileSection}>
          <Image 
            source={require('../../../assets/images/user.png')} 
            style={styles.avatar}
          />
          <Text style={styles.name}>{userName}</Text>
          <Text style={styles.role}>Aluno</Text>
        </View>

        {/* Resumo de Desempenho */}
        <View style={styles.performanceSection}>
          <Text style={styles.performanceTitle}>RESUMO DE DESEMPENHO DOS TESTES</Text>
          <View style={styles.performanceMetrics}>
            <View style={styles.metricBox}>
              <View style={[styles.circle, styles.blueCircle]}>
                <Text style={styles.metricValue}>--</Text>
              </View>
              <Text style={styles.metricLabel}>Completos</Text>
            </View>
            <View style={styles.metricBox}>
              <View style={[styles.circle, styles.greenCircle]}>
                <Text style={styles.metricValue}>--</Text>
              </View>
              <Text style={styles.metricLabel}>Acertos</Text>
            </View>
            <View style={styles.metricBox}>
              <View style={[styles.circle, styles.redCircle]}>
                <Text style={styles.metricValue}>--</Text>
              </View>
              <Text style={styles.metricLabel}>Erros</Text>
            </View>
          </View>
        </View>

        {/* Seção de Insígnias */}
        <TouchableOpacity onPress={() => setInsigniasExpanded(!insigniasExpanded)}>
          <View style={styles.listItem}>
            <Text style={styles.listTitle}>Minhas Insígnias</Text>
            <AntDesign name={insigniasExpanded ? "up" : "down"} size={20} />
          </View>
        </TouchableOpacity>
        {insigniasExpanded && (
          <View style={styles.insignias}>
            {/* Substituir por imagens reais de insígnias */}
            <View style={styles.insigniaBadge}></View>
            <View style={styles.insigniaBadge}></View>
            <View style={styles.insigniaBadge}></View>
            <View style={styles.insigniaBadge}></View>
            <View style={styles.insigniaBadge}></View>
          </View>
        )}

        {/* Informações Pessoais */}
        <TouchableOpacity onPress={() => setInfoExpanded(!infoExpanded)}>
          <View style={styles.listItem}>
            <Text style={styles.listTitle}>Informações Pessoais</Text>
            <AntDesign name={infoExpanded ? "up" : "down"} size={20} />
          </View>
        </TouchableOpacity>
        {infoExpanded && (
          <View style={styles.personalInfo}>
            {/* Nome do Usuário */}
            <Text style={styles.infoText}>Nome: {userInfo.name}</Text>
            {/* Email do Usuário */}
            <Text style={styles.infoText}>Email: {userInfo.email}</Text>
            {/* Telefones do Usuário */}
            <Text style={styles.infoText}>Telefones:</Text>
            {userInfo.phoneNumbers.map((number, index) => (
              <Text key={index}>
                {number}
              </Text>
            ))}
          </View>
        )}

        {/* Cronograma */}
        <TouchableOpacity>
          <View style={styles.listItem}>
            <Text style={styles.listTitle}>Cronograma</Text>
          </View>
        </TouchableOpacity>

        {/* Sair */}
        <TouchableOpacity onPress={goToLogin}>
          <View style={styles.listItem}>
            <Text style={styles.listTitle}>Sair</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

// Cabeçalho
const SimpleHeader = ({ title }: { title: string }) => (
  <View style={headerStyles.container}>
    <Text style={headerStyles.title}>{title}</Text>
  </View>
);

const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4D81F7',
    padding: 18,
    paddingTop: 88,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 140,
    marginTop: -30,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

// Estilos principais
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  profileSection: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#E0E0E0',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    textTransform: 'uppercase',
  },
  role: {
    fontSize: 14,
    color: '#888',
  },
  performanceSection: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  performanceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  performanceMetrics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  metricBox: {
    alignItems: 'center',
  },
  metricValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  metricLabel: {
    fontSize: 14,
    color: '#888',
    marginTop: 5,
  },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  blueCircle: {
    backgroundColor: '#4A90E2', // Azul para "Completos"
  },
  greenCircle: {
    backgroundColor: '#50C878', // Verde para "Acertos"
  },
  redCircle: {
    backgroundColor: '#FF6F61', // Vermelho para "Erros"
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#FFF',
  },
  listTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  personalInfo: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#FFF',
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
  },
  phoneNumber: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  insignias: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FFF',
  },
  insigniaBadge: {
    width: 50,
    height: 50,
    backgroundColor: '#E0E0E0', // Placeholder para insígnias
    borderRadius: 5,
  },
});

export default ProfileScreen;
