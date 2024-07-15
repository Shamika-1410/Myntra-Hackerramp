//SecondPage.tsx
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from './Header';
import Footer from '../Footer';
import TopSearches from './TopSearches';
import UserProfiles from './UserProfiles';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../_layout';


type SecondpageNavigationProp = StackNavigationProp<RootStackParamList, 'App'>;
const loadFonts = () => {
    return Font.loadAsync({
      'Italiana-Regular': require('../../assets/fonts/Italiana-Regular.ttf'),
    });
  };
const SecondPage = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const navigation = useNavigation<SecondpageNavigationProp>();
  const handleSearch = (query: string) => {
    if (query.toLowerCase() === 'tops') {
      navigation.navigate('TrendHome');
    }
  };
    return (
      <View style={styles.container}>
        <Header handleSearch={handleSearch}/> 
        <TopSearches />
        <UserProfiles/>
        <Footer />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });
  
  export default SecondPage;