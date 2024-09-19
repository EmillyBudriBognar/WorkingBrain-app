import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

const CustomHeader = (customProps) => {
    const { title, iconName, onPress } = customProps;

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onPress} style={styles.iconContainer}>
        <MaterialIcons name={iconName} size={24} color="white" /> 
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5a9bfc',
    padding: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 110,
    marginTop: -30,
  },
  iconContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default CustomHeader;
