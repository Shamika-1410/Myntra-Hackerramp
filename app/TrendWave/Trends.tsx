import React, { useState, useEffect } from 'react';
import { StyleSheet, View, BackHandler, FlatList, TouchableOpacity, Text, Alert } from 'react-native';
import Graph from './Graph';
import Tops from './Tops';
import CropTops from './CropTops';
import VoteForTop from './VoteForTop'; 
import { NavigationHandler } from '../types';

function Trends() {
  const [currentScreen, setCurrentScreen] = useState('Trends');
  const [showVoteForTop, setShowVoteForTop] = useState(false); 

  const handleNavigation: NavigationHandler = (screen: string) => {
    setCurrentScreen(screen);
  };

  const toggleVoteForTop = () => {
    setShowVoteForTop(!showVoteForTop);
  };

  const handleVoteSubmitted = () => {
    setShowVoteForTop(false);
    Alert.alert('Vote Submitted', 'Thank you for voting!');
  };

  useEffect(() => {
    const backAction = () => {
      if (currentScreen !== 'Trends') {
        setCurrentScreen('Trends');
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, [currentScreen]);

  const renderItem = () => {
    if (currentScreen === 'CropTops') {
      return <CropTops />;
    }
    return null;
  };

  return (
    <FlatList
      data={[{ key: '1' }]}
      renderItem={renderItem}
      ListHeaderComponent={
        currentScreen === 'Trends' ? (
          <>
            <Graph />
            <TouchableOpacity style={styles.upvoteButton} onPress={toggleVoteForTop}>
              <Text style={styles.upvoteText}>Upvote</Text>
            </TouchableOpacity>
            {showVoteForTop && <VoteForTop onVoteSubmitted={handleVoteSubmitted} />} 
            <Tops onNavigate={handleNavigation} />
          </>
        ) : null
      }
      contentContainerStyle={styles.scrollContainer}
      keyExtractor={(item) => item.key}
    />
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    gap: 5,
  },
  upvoteButton: {
    backgroundColor: '#F9426E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  upvoteText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Trends;