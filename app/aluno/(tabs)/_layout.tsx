import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Animated } from 'react-native';
import { useEffect, useRef } from 'react';

export default function TabLayout() {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const animateTabBar = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(scale, {
            toValue: 1.1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(scale, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
        ]),
      ).start();
    };

    animateTabBar();
  }, [scale]);

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#407BFF',
        tabBarInactiveTintColor: '#9A9AAB',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#E1E1E1',
          borderTopWidth: 0,
          elevation: 3, // Remove shadow for Android
          height: 75, // Aumenta a altura da tab bar
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.2,
          shadowRadius: 1.5,
        },
        tabBarLabelStyle: {
          fontSize: 14, // Aumenta o tamanho da fonte do rótulo
          marginBottom: 10, // Adiciona mais espaço abaixo do rótulo
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={30} name="home" color={color} /> // Aumenta o ícone
          ),
        }}
      />
      <Tabs.Screen
        name="inscricoes"
        options={{
          title: 'Inscrições',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={23} name="list" color={color} /> // Aumenta o ícone
          ),
        }}
      />
      <Tabs.Screen
        name="desafios"
        options={{
          title: 'Desafios',
          tabBarIcon: ({ color }) => (
              <FontAwesome size={30} name="gamepad" color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Meu Perfil',
          tabBarIcon: ({ color }) => (
            <FontAwesome size={27} name="user" color={color} /> // Aumenta o ícone
          ),
        }}
      />
    </Tabs>
  );
}
