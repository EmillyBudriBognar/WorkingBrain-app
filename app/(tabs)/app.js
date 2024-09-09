import React from "react";
import { SafeAreaView, Text, View, StatusBar, Image, StyleSheet } from "react-native";
import Onboard from "../../components/Onboard";
import AppIntroSlider from 'react-native-app-intro-slider';

//parei na part 2 em: 7:32

const data = [
    {
      title: 'Title 1',
      text: 'Description.\nSay something cool',
      image: require('../../assets/images/Onboard1.png'),
      bg: '#59b2ab',
    },
    {
      title: 'Title 2',
      text: 'Other cool stuff',
      image: require('../../assets/images/Onboard2.png'),
      bg: '#febe29',
    },
    {
      title: 'Rocket guy',
      text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
      image: require('../../assets/images/Onboard3.png'),
      bg: '#22bcb5',
    },
  ];

const App = () => {

    const renderItem = ({item}) => {
        return(
            <View>
                <Image source={item.image} />
                <View>
                    <Text>{item.title}</Text>
                    <Text>{item.text}</Text>
                </View>
            </View>
        );
    }

    const keyExtractor = (item) => item.title;

    return (
        <View style={{flex: 1}}>
          <StatusBar translucent backgroundColor="transparent" />
          <AppIntroSlider
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            data={data}
          />
        </View>
      );
}

const styles => StyleSheet.create({

});

export default App;