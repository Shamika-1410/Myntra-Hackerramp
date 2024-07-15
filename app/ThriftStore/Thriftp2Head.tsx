import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Thriftp2Head = () => {
  return (
    <View >
      <Text style={styles.title}>Myntra's</Text>
      <Text style={styles.subtitle}>Sustainable Fashion</Text>
    </View>
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
  headerContainer: {
    flex: 1,
  },
  title: {
    marginTop: 45,
    fontSize: 35,
    fontWeight: '300',
    fontFamily: 'Italiana-Regular',
    textAlign: 'center',
  },
  subtitle:{
    marginBottom:20,
    fontSize: 35,
    fontWeight: '300',
    fontFamily: 'Italiana-Regular',
    textAlign: 'center',
  }
})

export default Thriftp2Head;
