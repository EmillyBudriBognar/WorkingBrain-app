import React from "react";
import { View, Image, StyleSheet, Dimensions, TouchableWithoutFeedback } from "react-native";

const { width, height } = Dimensions.get('window');

// Definindo a interface das props
interface SplashScreenProps {
  onFinish: () => void; // Definindo onFinish como uma função
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  return (
    <TouchableWithoutFeedback onPress={onFinish}>
      <View style={styles.container}>
        <Image
          source={require('../assets/images/workingbrain.png')} // Caminho da imagem
          style={styles.image}
          resizeMode="cover"
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width,
    height: height,
  },
});

export default SplashScreen;
