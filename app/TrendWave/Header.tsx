import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons/Feather';
import FreeShippingBanner from "./FreeShippingBanner";

const Header = () => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={26} style={styles.icon} />
        </TouchableOpacity>
        <Image source={require('../../assets/images/Frame 3.jpg')} style={styles.img} />
        <Text style={styles.text}>Tops</Text>
        <View style={styles.iconContainer}>
          <Icon name="search" size={26} style={styles.icon} />
          <Icon name="heart" size={26} style={styles.icon} />
          <Icon name="shopping-bag" size={26} style={styles.icon} />
        </View>
      </View>
      <View style={styles.bannerContainer}>
        <FreeShippingBanner />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection:'column',
    gap:5
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop:20
  },
  icon: {
    marginHorizontal: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
  img: {
    height: 30,
    width: 40,
    marginHorizontal: 10,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;