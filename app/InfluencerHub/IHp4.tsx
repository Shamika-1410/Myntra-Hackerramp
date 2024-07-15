import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import IHp4Head from './IHp4Head'
import IHp4Content from './IHp4Content'
import * as Font from 'expo-font';
// import AppLoading from 'expo-app-loading';
import Footer from '../Footer';

const loadFonts = () => {
  return Font.loadAsync({
    'Italiana-Regular': require('../../assets/fonts/Italiana-Regular.ttf'),
  });
};
const IHp4 = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <IHp4Head />
      <ScrollView>
       <IHp4Content />
      </ScrollView>
      <Footer />
    </SafeAreaView>
  )
}

export default IHp4

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
})