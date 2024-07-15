//TopSearches.tsx

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../_layout';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TopSearches = () => {
  type TopSearchesNavigationProp = StackNavigationProp<RootStackParamList, 'App'>;
  const navigation = useNavigation<TopSearchesNavigationProp>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Searches</Text>
      <View style={styles.row}>
        <TouchableOpacity style={styles.card} onPress={() => {navigation.navigate('InfluencerPage')}}>
          <Image source={require('../../assets/images/topsearch1.png')} style={styles.image} />
          <Text style={styles.name}>Taniya Sharma</Text>
        </TouchableOpacity>
        <View style={styles.card}>
          <Image source={require('../../assets/images/topsearch2.png')} style={styles.image} />
          <Text style={styles.name}>Monika Sethi</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F5',
    marginTop:-30,
    paddingHorizontal:8,
    paddingVertical:6,
    paddingBottom:-10,
  },
  title: {
    fontFamily: 'Italiana-Regular',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop:5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  card: {
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 180,
    borderRadius: 10,
  },
  name: {
    marginTop: 10,
    fontFamily: 'Italiana-Regular',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default TopSearches;