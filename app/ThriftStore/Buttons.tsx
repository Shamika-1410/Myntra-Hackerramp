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
        <Text style={styles.text} onPress={() => navigation.navigate('SellScreen')}>Sell</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    width:150,
    height: 60,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  text: {
    fontFamily: 'Italiana-Regular',
    marginLeft: 25, 
    fontSize: 35,
    color: 'black',
  },
});

export default Buttons;
