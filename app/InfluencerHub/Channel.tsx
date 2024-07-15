import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import Footer from '../Footer';
import ChannelHeader from './ChannelHeader';
import ChatScreen from './ChatScreen';
import ChatScreen2 from './ChatScreen2';

const loadFonts = () => {
  return Font.loadAsync({
    'Italiana-Regular': require('../../assets/fonts/Italiana-Regular.ttf'),
  });
};

const Channel: React.FC = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
        <ChannelHeader />
      <ScrollView>
        <ChatScreen />
        <ChatScreen2 />
      </ScrollView>
      {/* <Footer /> */}
    </SafeAreaView>
  );
};

export default Channel;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});