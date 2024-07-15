//User1.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';



interface User1Props {
  following: boolean;
  toggleFollow: () => void;
}

const User1: React.FC<User1Props> = ({ following, toggleFollow }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Taniya Sharma</Text>
      </View>
      <View style={styles.profileSection}>
        <ImageBackground
          source={require('../../assets/images/topsearch1.png')}
          style={styles.imageBackground}
        >
          
          <View style={styles.overlay}>
            <View style={styles.headerRow}>
              <Text style={styles.name}>Taniya Sharma</Text>
              <TouchableOpacity
            onPress={toggleFollow}
            style={[styles.followButton, following && styles.followingButton]} // Conditional style for following state
          >
            <Text style={[styles.followButtonText, following && styles.followingButtonText]}>
              {following ? 'Following' : 'Follow'}
            </Text>
          </TouchableOpacity>
            </View>
            <Text style={styles.username}>taniya@sharma</Text>
            <View style={styles.statsContainer}>
              <Text style={styles.statsText}>2.2K Followers</Text>
              <Text style={styles.statsText}>211 Posts</Text>
            </View>
            <Text style={styles.description}>
              Electrical Engineer turned fashion and lifestyle influencer with an interest in beauty.
            </Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop:30,
  },
  header: {
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft:10,
    marginBottom:10,
    marginTop:10,
  },
  profileSection: {
    margin: 20,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5, // Adds a shadow for Android
    shadowColor: '#000', // Adds a shadow for iOS
    shadowOffset: { width: 0, height: 2 }, // Adds a shadow for iOS
    shadowOpacity: 0.8, // Adds a shadow for iOS
    shadowRadius: 2, // Adds a shadow for iOS
    marginTop:8,
  },
  imageBackground: {
    height: 400,
    justifyContent: 'flex-end',
    marginTop:-10,
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    height: '40%', // Changed code: restrict overlay height to 1/4 of the image
    justifyContent: 'center', // Center content vertically
  },
  headerRow: {
    flexDirection: 'row', // Changed code: make name and follow button appear in a row
    alignItems: 'center', // Align items vertically in the center
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    marginRight: 70, // Add space between name and follow button
    marginLeft:-5,
  },
  username: {
    fontSize: 14,
    color: '#DDD',
    marginBottom: 10,
    marginTop:-14,
    marginLeft:-4,
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop:-2,
  },
  statsText: {
    fontSize: 11,
    color: '#FFF',
    marginRight: 15,
    marginLeft:-2,
  },
  description: {
    fontSize: 13,
    color: '#FFF',
    marginBottom: 15,
    marginLeft:-2,
  },
  followButton: {
    backgroundColor: '#FF4081',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginLeft:20,
    marginTop:15,
  },
  followingButton: {
    backgroundColor: '#FFF2F5', // Style for when user is following
  },
  followButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
  },
  followingButtonText: {
    color: '#060606', // Text color when user is following
  },
});

export default User1;