//StyleCircle.tsx

import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Head from './Head';
import Content from './Content';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Footer from '../Footer';
import { View, Text, FlatList, TouchableOpacity, Image, ListRenderItem, Modal, Animated } from 'react-native';

const loadFonts = () => {
  return Font.loadAsync({
    'Italiana-Regular': require('../../assets/fonts/Italiana-Regular.ttf'),
  });
};

const StyleCircle: React.FC = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <Head />
      <ScrollView>
        <Content />
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default StyleCircle;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});