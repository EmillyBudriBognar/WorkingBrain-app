import React from "react";
import { Text, View, StatusBar, Image, StyleSheet, ImageSourcePropType } from "react-native";
import AppIntroSlider from 'react-native-app-intro-slider';

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
    image: require('../../assets/images/Onboard1.png'),
    bg: '#F2F2F2',
  },
  {
    title: 'BOAS VINDAS!',
    text: 'Aprender fácil, crescer sem limites!',
    image: require('../../assets/images/Onboard2.png'),
    bg: '#F2F2F2',
  },
  {
    title: 'BOAS VINDAS!',
    text: "Aprender fácil, crescer sem limites!",
    image: require('../../assets/images/Onboard3.png'),
    bg: '#F2F2F2',
  },
];

const App: React.FC = () => {

  const renderItem = ({ item }: { item: Slide }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.bg }]}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = (item: Slide) => item.title;

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        data={data}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    marginTop: -90,
    height: 600,
    resizeMode: 'contain',
  },
  textContainer: {
    margin: 50,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#252525',
  },
  text: {
    fontSize: 16,
    color: '#252525',
    textAlign: 'center',
  },
});

export default App;
