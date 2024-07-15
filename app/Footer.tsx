import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './_layout';

type FooterNavigationProp = StackNavigationProp<RootStackParamList, 'App'>;
const Footer = () => {
  const navigation = useNavigation<FooterNavigationProp>();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.navItem} onPress={ () => {navigation.navigate('HomePage') }}>
        <Image
          source={require('../assets/images/myntra-icon-3.jpg')}
          style={{width:35, height:25}}
        />
        <Text style={styles.text} onPress={ () => {navigation.navigate('HomePage') }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image
          source={require('../assets/images/flash.png')}
          style={styles.icon}
        />
        <Text style={styles.text}>New</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image
          source={require('../assets/images/fwd.png')}
          style={{width:30, height:25}}
        />
        <Text style={styles.text}>Stores</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image
          source={require('../assets/images/up-right.png')}
          style={styles.icon}
        />
        <Text style={styles.text}>TrendNxt</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem} onPress={ () => {navigation.navigate('SecondPage') }}>
        <Image
          source={require('../assets/images/influencer.png')}
          style={styles.icon}
        />
        <Text style={styles.text} onPress={ () => {navigation.navigate('SecondPage') }}>Influencer's Hub</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Image
          source={require('../assets/images/letter-m.png')}
          style={styles.icon}
        />
        <Text style={styles.text}>Maya</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#DDD',
  },
  navItem: {
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginBottom: 4,
  },
  text: {
    fontSize: 9,
    color: '#000',
  },
});

export default Footer;
