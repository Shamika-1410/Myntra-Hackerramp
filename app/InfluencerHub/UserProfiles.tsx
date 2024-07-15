//UserProfiles.tsx


import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../_layout';

type UserProfilesNavigationProp = StackNavigationProp<RootStackParamList, 'App'>;
const UserProfiles: React.FC = () => {
  const navigation = useNavigation<UserProfilesNavigationProp>();
  const users = [
    {
      id: 1,
      username: 'shanayasingh44',
      followers: '2.1K',
      image: require('../../assets/images/girl7.png')
    },
    {
      id: 2,
      username: 'astiarora@99',
      followers: '1.5K',
      image: require('../../assets/images/girl8.png')
    },
    {
      id: 3,
      username: 'sayanamahaja',
      followers: '1.1K',
      image: require('../../assets/images/girl5.png')
    }
  ];

  const buttons = [
    { id: 1, title: 'Style Circle' },
    { id: 2, title: 'Peeps' },
    { id: 3, title: 'UpCycle' }
  ];
 
  const handleNavigation = (option: string) => {
    if (option === 'UpCycle') {
      navigation.navigate('ThriftStorep1');
    }else if (option === 'Style Circle') {
      navigation.navigate('StyleCircle');
    }
  };
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {users.map(user => (
          <View key={user.id} style={styles.card}>
            <Image source={user.image} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.username}>{user.username}</Text>
              <Text style={styles.followers}>{user.followers} followers</Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.buttonContainer}>
        {buttons.map(button => (
          <TouchableOpacity key={button.id} style={styles.button} onPress={() => handleNavigation(button.title)}>
            <Text style={styles.buttonText}>{button.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    backgroundColor: '#FFF',
    marginTop:10,
    paddingTop:1,
    marginLeft:-10,
  },
  scrollContainer: {
    paddingHorizontal: 10,
  },
  card: {
    width: 150,
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: '#FFE9ED',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  textContainer: {
    padding: 0.5,
    paddingBottom:0.1,
    alignItems: 'center',
  },
  username: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#000',
  },
  followers: {
    fontSize: 10,
    color: '#555',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 18,
  },
  button: {
    backgroundColor: '#F9426E',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginBottom:5,
    opacity: 0.9,
    marginLeft: 20,
    marginRight:15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default UserProfiles;