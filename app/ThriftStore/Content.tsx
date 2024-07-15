import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Content = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/thriftp1img2.png')}
        style={styles.image}
      />
      <Text style={styles.text}>Myntra's Very Own Thrift Store</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 370,
  },
  text: {
    position: 'absolute',
    fontFamily: 'Italiana-Regular',
    fontSize: 35,
    color: 'white',
    zIndex: 10,
    top: '75%',  // Adjusts vertical position
    left: '25%', // Adjusts horizontal position
    transform: [{ translateX: -50 }, { translateY: -50 }],  // Centers the text
    textAlign: 'center',
    width: '80%', // Ensures text is centered within the width of the image
  },
});

export default Content;
