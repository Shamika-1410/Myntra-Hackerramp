import { StyleSheet, Text, View } from 'react-native'
import React , { useState, useEffect } from 'react'
import Thriftp2Head from './Thriftp2Head';
import Search from './Search';
import CardGrid from './CardGrid';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { SafeAreaView, ScrollView } from 'react-native';
import Footer from '../Footer';
const loadFonts = () => {
    return Font.loadAsync({
      'Italiana-Regular': require('../../assets/fonts/Italiana-Regular.ttf'),
    });
};
  const ThriftStorep2 = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);
    useEffect(() => {
      loadFonts().then(() => setFontsLoaded(true));
    }, []);
    if (!fontsLoaded) {
      return <AppLoading />;
    }
    return (
        <SafeAreaView style={styles.safeArea}>
        <Thriftp2Head />
        <Search />
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <CardGrid />
        </ScrollView>
        <Footer />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingBottom: 20,
      },
  });
  
export default ThriftStorep2;
