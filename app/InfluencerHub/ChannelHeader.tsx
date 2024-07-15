import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const ChannelHeader = () => {
//   const [notificationsEnabled, setNotificationsEnabled] = useState(true);

//   const toggleNotification = () => {
//     setNotificationsEnabled(!notificationsEnabled);
//   };

  return (
    <View style={styles.container}>
      <View style={styles.channelInfo}>
        <Image 
          source={require('../../assets/images/DripDaily.png')} // Replace with your image URL
          style={styles.profilePic}
        />
        <View style={styles.textContainer}>
          <Text style={styles.channelName}>Drip Daily </Text>
          <Text style={styles.members}>Style Circle • 13.5K members</Text>
        </View>
      </View>
      {/* <TouchableOpacity onPress={toggleNotification}>
        <Ionicons 
          name={notificationsEnabled ? 'notifications' : 'notifications-off'} 
          size={24} 
          color="white" 
        />
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FD6186',
    padding: 10,
    marginTop:40,

  },
  channelInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'center',
  },
  channelName: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  chiliEmoji: {
    fontSize: 16,
  },
  members: {
    color: 'white',
    fontSize: 12,
  },
});

export default ChannelHeader;