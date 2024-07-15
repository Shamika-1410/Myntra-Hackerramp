import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import IHp3Head from './IHp3Head';
import IHp3Content from './IHp3Content';
import * as Font from 'expo-font';
import Footer from '../Footer';

const loadFonts = () => {
  return Font.loadAsync({
    'Italiana-Regular': require('../../assets/fonts/Italiana-Regular.ttf'),
  });
};

const IHp3: React.FC = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <IHp3Head />
      <ScrollView>
        <IHp3Content />
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

export default IHp3;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});