import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../_layout';

type ButtonsNavigationProp = StackNavigationProp<RootStackParamList, 'App'>;

const Buttons = () => {
  const navigation = useNavigation<ButtonsNavigationProp>();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text} onPress={() => navigation.navigate('ThriftStorep2')}>Buy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text} onPress={() => navigation.navigate('TermsConditions')}>Register Your Store</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text} onPress={() => navigation.navigate('TermsandConditions')}>Connect with a store </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    width: '80%',
    height: 60,
    borderWidth: 1,
    borderColor: '#F9426E',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Italiana-Regular',
    fontSize: 28,
    color: 'black',
  },
});

export default Buttons;