import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const ChatScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.date}>27 June, 11:26</Text>
      <View style={styles.messageContainer}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/girl6.png')} // Replace with your image URL
            style={styles.profilePic}
          />
          <Text style={styles.username}>Monica Singh • Admin</Text>
        </View>
        <View style={styles.card}>
          <Image
            source={require('../../assets/images/girl6.png')} // Replace with your image URL
            style={styles.postImage}
          />
          <View style={styles.cardFooter}>
            <Text style={styles.postUsername}>singhmonica</Text>
            <Text style={styles.postText}>And just like that...it’s a wrap for #...</Text>
            <View style={styles.reactions}>
              <TouchableOpacity style={styles.reaction}>
                <Ionicons name="heart" size={16} color="red" />
                <Text style={styles.reactionText}>431</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.message}>
          <Text style={styles.messageText}>What was your fav looook girls? <Text style={styles.emoji}>🎀🎀🎀</Text></Text>
          <View style={styles.reactions}>
            <TouchableOpacity style={styles.reaction}>
              <Ionicons name="heart" size={16} color="red" />
              <Text style={styles.reactionText}>227</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.reaction}>
              <Ionicons name="chatbubble" size={16} color="gray" />
              <Text style={styles.reactionText}>63</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    marginTop:-6,
  },
  date: {
    color: 'gray',
    textAlign: 'center',
    marginBottom: 10,
  },
  messageContainer: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    marginLeft:15,
  },
  username: {
    color: 'black',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FF8FAA',
    borderRadius: 10,
    overflow: 'hidden',
    height:'75%',
    width:'70%',
    marginLeft:15,
  },
  postImage: {
    width: '100%',
    height: 400,
  },
  cardFooter: {
    padding: 10,
  },
  postUsername: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postText: {
    color: 'white',
    marginBottom: 10,
  },
  reactions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reaction: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  reactionText: {
    color: 'black',
    marginLeft: 5,
  },
  message: {
    backgroundColor: '#FF8FAA',
    padding: 10,
    borderRadius: 10,
    marginTop: 30,
    // height:'20%',
    width:'60%',
    marginLeft:15,
  },
  messageText: {
    color: 'white',
    marginBottom: 10,
  },
  emoji: {
    fontSize: 16,
  },
});

export default ChatScreen;