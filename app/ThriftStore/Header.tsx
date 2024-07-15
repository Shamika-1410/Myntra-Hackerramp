import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <ImageBackground
    source={require('../../assets/images/thriftp1header.png')}
      style={styles.imageBackground}
    >
      <Text style={styles.text}>UpCycle Wardrobe</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    height: 300,
  },
  text: {
    fontFamily: 'Italiana-Regular',
    color: 'white',
    fontSize: 30,
    marginTop: 50,
    marginLeft: 70,
  },
});

export default Header;
