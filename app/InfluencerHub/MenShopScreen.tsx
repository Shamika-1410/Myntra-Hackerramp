import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const MenShopScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        {/* First image section */}
        <View style={styles.imageSection}>
          <Image 
            source={require('../../assets/images/men5.jpeg')} 
            style={[styles.mainImage, { marginTop: 15 }]} 
          />
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>Everything Under ₹999</Text>
            <TouchableOpacity style={styles.shopButton}>
              <Text style={styles.shopButtonText}>SHOP NOW</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Second image section */}
        <View style={styles.splitSection}>
          <View style={styles.textSection}>
            <Text style={styles.discountText}>Everything Under ₹499</Text>
            <Text style={styles.discountText}>International Styles At</Text>
            <Text style={styles.discountText}>MIN. 60% OFF</Text>
            <TouchableOpacity style={styles.shopButton}>
              <Text style={styles.shopButtonText}>SHOP NOW</Text>
            </TouchableOpacity>
          </View>
          <Image source={require('../../assets/images/men4.jpeg')} style={styles.halfImage} />
        </View>

        {/* Third image section */}
        <View style={styles.newTrendingSection}>
          <Image source={require('../../assets/images/men6.jpeg')} style={styles.mainImage} />
          <LinearGradient
            colors={['rgba(0, 0, 0, 0.8)', 'transparent']}
            style={styles.newTrendingOverlay}
          >
            <Text style={styles.newTrendingText}>New & Trending</Text>
            <TouchableOpacity style={styles.shopNowButton}>
              <Text style={styles.shopNowButtonText}>SHOP NOW</Text>
            </TouchableOpacity>
          </LinearGradient>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.filterButton, styles.activeFilterButton]}>
              <Text style={styles.filterButtonText}>This Week</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterButtonText}>Last Week</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <Text style={styles.filterButtonText}>ALL</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>

      {/* Explore button */}
      {/* <TouchableOpacity style={styles.exploreButton}>
        <Text style={styles.exploreButtonText}>XPLORE</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollViewContent: {
    paddingTop: 0,
  },
  imageSection: {
    marginBottom: 5,
    alignItems: 'center',
    position: 'relative',
  },
  splitSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
  },
  textSection: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    padding: 20,
    height: 350,
    borderColor:'pink',
    borderWidth:5,
  },
  discountText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  shopButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
  },
  shopButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  imageContainer: {
    flex: 1,
  },
  mainImage: {
    width: '100%',
    height: 350,
    resizeMode: 'cover',
  },
  halfImage: {
    flex: 1,
    height: 350,
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    alignItems: 'center',
  },
  overlayText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  exploreButton: {
    backgroundColor: '#272C3F',
    padding: 15,
    borderRadius: 50,
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 1,
    borderWidth: 2,
    borderColor: '#fdfffe',
  },
  exploreButtonText: {
    color: '#fff',
    fontSize: 16,
  },


  newTrendingSection: {
    position: 'relative',
    alignItems: 'center',
  },
  newTrendingOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newTrendingText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  shopNowButton: {
    backgroundColor: '#FD6186',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  shopNowButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  filterButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginHorizontal: 5,
  },
  activeFilterButton: {
    backgroundColor: '#FF8FAA',
  },
  filterButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },

});

export default MenShopScreen;