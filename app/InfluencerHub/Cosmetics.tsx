import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import CosHead from './CosHead'
import CosContent from './CosContent'
import * as Font from 'expo-font';
import Footer from '../Footer';

const loadFonts = () => {
  return Font.loadAsync({
    'Italiana-Regular': require('../../assets/fonts/Italiana-Regular.ttf'),
  });
};
const Cosmetics = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <CosHead />
      <ScrollView>
       <CosContent />
      </ScrollView>
      <Footer />
    </SafeAreaView>
  )
}

export default Cosmetics

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
})