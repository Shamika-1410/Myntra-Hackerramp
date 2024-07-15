//User2.tsx

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../_layout';

interface User2Props {
    following: boolean;
    toggleFollow: () => void;
  }
  
  const User2: React.FC<User2Props> = ({ following, toggleFollow }) => {
  const [selectedTab, setSelectedTab] = useState('Posts');
  type User2NavigationProp = StackNavigationProp<RootStackParamList, 'App'>;
  const navigation = useNavigation<User2NavigationProp>();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => setSelectedTab('Posts')}
          style={styles.tabButton}
        >
          <Text style={[styles.headerText, selectedTab === 'Posts' && styles.selectedText]}>
            Posts
          </Text>
          {selectedTab === 'Posts' && <View style={styles.underline} />}
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {navigation.navigate('IHp3')}}
          style={styles.tabButton}
        >
          <Text style={[styles.headerText, selectedTab === 'Closet' && styles.selectedText]}>
            Closet
          </Text>
          {selectedTab === 'Closet' && <View style={styles.underline} />}
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.profileHeader}>
          <View style={styles.profileImageContainer}>
            <Image 
              source={require('../../assets/images/girl9.jpeg')} 
              style={styles.profileImage} 
            />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Taniya Sharma</Text>
            <Text style={styles.timeAgo}>Few months ago</Text>
          </View>
          <TouchableOpacity
            onPress={toggleFollow}
            style={[styles.followButton, following && styles.followingButton]} // Conditional style for following state
          >
            <Text style={styles.followButtonText}>
              {following ? 'Following' : 'Follow'}
            </Text>
          </TouchableOpacity>
        </View>
        <Image 
          source={require('../../assets/images/girl9.jpeg')} 
          style={styles.mainImage} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:0,
    marginTop: -11,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tabButton: {
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  selectedText: {
    color: '#FF4081', // Change this to the desired color
  },
  underline: {
    height: 2,
    backgroundColor: '#FF4081', // Change this to the desired color
    width: '100%',
    marginTop: 2,
  },
  profileContainer: {
    paddingBottom: 5,
    paddingHorizontal:15,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  profileImageContainer: {
    marginRight: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  timeAgo: {
    fontSize: 10,
    color: '#888',
    marginLeft:4,
  },
  followButton: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  followingButton: {
    backgroundColor: '#ddd', // Style for when user is following
  },
  followButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000',
  },
  mainImage: {
    width: '95%',
    height: 350,
    marginTop: 5,
    borderRadius:10,
    marginLeft:10,
  },
});

export default User2;