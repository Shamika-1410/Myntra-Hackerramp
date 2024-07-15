
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import IHp3 from './InfluencerHub/IHp3';
import ThriftStorep1 from './ThriftStore/ThriftStorep1';
import SellScreen from './ThriftStore/SellScreen';
import Trends from './TrendWave/Trends';
import TrendHome from './TrendWave/TrendHome';
import Shopping from './TrendWave/Shopping';
//import HomePage from './InfluencerHub/Homepage';
const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* <HomePage /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
