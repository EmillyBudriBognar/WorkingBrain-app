import React from "react";
import { Text, View, StatusBar, Image, StyleSheet, ImageSourcePropType, Dimensions, TouchableOpacity } from "react-native";
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { goToLogin, goToPreCadastro } from "../app/navigation";

// Pegando as dimensões da tela do dispositivo
const { width } = Dimensions.get('window');

interface Slide {
  title: string;
  text: string;
  image: ImageSourcePropType;
  bg: string;
}

const data: Slide[] = [
  {
    title: 'BOAS VINDAS!',
    text: 'Aprender fácil, crescer sem limites!',
    image: require('../assets/images/Onboard1.png'),
    bg: '#F2F2F2',
  },
  {
    title: 'BOAS VINDAS!',
    text: 'Aprender fácil, crescer sem limites!',
    image: require('../assets/images/Onboard2.png'),
    bg: '#F2F2F2',
  },
  {
    title: 'BOAS VINDAS!',
    text: "Aprender fácil, crescer sem limites!",
    image: require('../assets/images/Onboard3.png'),
    bg: '#F2F2F2',
  },
];

const IntroSlider = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  const renderItem = ({ item }: { item: Slide }) => (
    <View style={[styles.slide, { backgroundColor: item.bg }]}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </View>
  );

  const keyExtractor = (item: Slide) => item.title;

  const renderDoneButton = () => (
    <View style={styles.rightTextWrapper}>
      <TouchableOpacity onPress={goToLogin}>
        <Text style={[styles.rightText, { color: '#0353FE' }]}>FEITO</Text>
      </TouchableOpacity>
    </View>
  );

  const renderNextButton = () => (
    <View style={styles.rightTextWrapper}>
      <Text style={styles.rightText}>Próximo</Text>
    </View>
  );

  const renderPrevButton = () => (
    <View style={styles.leftTextWrapper}>
      <Text style={styles.leftText}>Voltar</Text>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={data}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton} // Adiciona o botão "Voltar"
        showPrevButton // Habilita o botão "Voltar"
      />
    </View>
  );
};

const App = () => {
  return (
      <IntroSlider />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    marginTop: -100,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: width * 0.1,
    paddingBottom: 110,
  },
  title: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: '#252525',
    textAlign: 'center',
  },
  text: {
    fontSize: width * 0.045,
    color: '#252525',
    textAlign: 'center',
  },
  rightTextWrapper: {
    marginRight: width * 0.03,
  },
  rightText: {
    fontSize: width * 0.045,
    color: '#262626',
    fontWeight: 'bold',
  },
  leftTextWrapper: {
    marginLeft: width * 0.03,
  },
  leftText: {
    fontSize: width * 0.045, 
    color: '#909090',
    fontWeight: 'bold',
  },
});

export default App;
