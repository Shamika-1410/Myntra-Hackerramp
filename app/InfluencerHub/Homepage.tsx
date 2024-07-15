import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import Header from './Header';
import GenderButtons from './GenderButtons';
import MenShopScreen from './MenShopScreen';
import WomenShopScreen from './WomenShopScreen';
import Footer from '../Footer';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../_layout';
type HomepageNavigationProp = StackNavigationProp<RootStackParamList, 'App'>;

const HomePage: React.FC = () => {
  const [selectedGender, setSelectedGender] = useState<'men' | 'women'>('men');
  const navigation = useNavigation<HomepageNavigationProp>();
  const handleSearch = (query: string) => {
    if (query.toLowerCase() === 'tops') {
      navigation.navigate('TrendHome');
    }
  };

  const renderShopScreen = () => {
    if (selectedGender === 'men') {
      return <MenShopScreen />;
    } else {
      return <WomenShopScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <Header handleSearch={handleSearch} />
      <GenderButtons onSelectGender={setSelectedGender} />
      <ScrollView>
        {renderShopScreen()}
      </ScrollView>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomePage;
