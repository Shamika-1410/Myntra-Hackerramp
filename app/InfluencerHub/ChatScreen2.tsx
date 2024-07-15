import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ProgressBarAndroid } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

// Poll Component
const Poll = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [greenVotes, setGreenVotes] = useState(1600);
  const [redVotes, setRedVotes] = useState(533);

  const vote = (option: string) => {
    if (option === 'green') {
      setGreenVotes(greenVotes + 1);
    } else if (option === 'red') {
      setRedVotes(redVotes + 1);
    }
    setSelectedOption(option);
  };

  return (
    <View style={styles.pollContainer}>
      <Image
        source={require('../../assets/images/girl6.png')} // Replace with your image URL
        style={styles.profilePic}
      />
      <Text style={styles.pollQuestion}>Choose?</Text>
      <View style={styles.pollOption}>
        <Text style={styles.optionText}>Green</Text>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={greenVotes / (greenVotes + redVotes)}
          color="white"
        />
        <Text style={styles.voteCount}>{greenVotes}</Text>
      </View>
      <View style={styles.pollOption}>
        <Text style={styles.optionText}>Red</Text>
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={redVotes / (greenVotes + redVotes)}
          color="white"
        />
        <Text style={styles.voteCount}>{redVotes}</Text>
      </View>
      <TouchableOpacity onPress={() => vote('green')} style={styles.voteButton}>
        <Text style={styles.voteButtonText}>Vote Green</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => vote('red')} style={styles.voteButton}>
        <Text style={styles.voteButtonText}>Vote Red</Text>
      </TouchableOpacity>
    </View>
  );
};

// Chat Message Component
const ChatMessage = () => {
  return (
    <View style={styles.messageContainer}>
      <Text style={styles.date}>2 July, 15:45</Text>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/girl6.png')} // Replace with your image URL
          style={styles.profilePic}
        />
        <Text style={styles.username}>Monica Singh • Admin</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={require('../../assets/images/girl10.png')} // Replace with your image URL
          style={styles.postImage}
        />
        <View style={styles.cardFooter}>
          <Text style={styles.postUsername}>singhmonica</Text>
          <Text style={styles.postText}>There is so much style in the silence...</Text>
        </View>
      </View>
    </View>
  );
};

// Main Channel Component
const ChatScreen2 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Poll />
      <ChatMessage />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
  },
  pollContainer: {
    backgroundColor: '#FF8FAA',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    width:'75%',
    marginLeft:40,
  },
  pollQuestion: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  pollOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    color: 'white',
    marginRight: 10,
  },
  voteCount: {
    color: 'white',
    marginLeft: 10,
  },
  voteButton: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  voteButtonText: {
    color: '#FD6186',
    textAlign: 'center',
  },
  messageContainer: {
    marginBottom: 20,
    width:'70%',
    marginLeft:15,
  },
  date: {
    color: 'gray',
    textAlign: 'center',
    marginBottom: 10,
    marginLeft:70,
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
  },
  username: {
    color: 'black',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#FF8FAA',
    borderRadius: 10,
    overflow: 'hidden',
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
  },
});

export default ChatScreen2;