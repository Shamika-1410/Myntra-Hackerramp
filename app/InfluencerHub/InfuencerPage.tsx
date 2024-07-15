//InfluencerPage.tsx
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Footer from '../Footer';
import User1 from './User1';
import User2 from './User2';


const InfluencerPage = () => {
  const [following, setFollowing] = useState(false);

  const toggleFollow = () => {
    setFollowing(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <User1 following={following} toggleFollow={toggleFollow} />
        <User2 following={following} toggleFollow={toggleFollow} />
        <Footer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});

export default InfluencerPage;