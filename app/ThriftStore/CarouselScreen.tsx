import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProductCard = () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
        <TouchableOpacity>
          <Image source={require('../../assets/images/myntralogo.png')} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Street By Tokyo Talkies</Text>
        <TouchableOpacity>
          <Image source={require('../../assets/images/myntralogo.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/images/myntralogo.png')} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../../assets/images/myntralogo.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <ScrollView horizontal pagingEnabled style={styles.imageCarousel}>
        <Image source={require('../../assets/images/card1.png')} style={styles.image} />
        <Image source={require('../../assets/images/card2.png')} style={styles.image} />
        <Image source={require('../../assets/images/card3.png')} style={styles.image} />
      </ScrollView>
      <View style={styles.carouselIndicators}>
        <View style={styles.indicator} />
        <View style={styles.indicator} />
        <View style={styles.indicator} />
      </View>
      <Text style={styles.productTitle}>Street By Tokyo Talkies</Text>
      <Text style={styles.productDescription}>Typography Printed Tip-Ups Styled Crop Top</Text>
      <Text style={styles.productPrice}>₹409 <Text style={styles.originalPrice}>₹999</Text> <Text style={styles.discount}>59% OFF</Text></Text>
      <Text style={styles.coupon}>Best price ₹209 with coupon FWDNEW200</Text>
      <Text style={styles.save}>Add to bag and save ₹200</Text>
      <View style={styles.rating}>
        <Text style={styles.ratingText}>4.5</Text>
        <Text style={styles.ratingCount}>(30)</Text>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.wishlistButton}>
          <Text style={styles.buttonText}>Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.addToBagButton}>
          <Text style={styles.buttonText}>Add to Bag</Text>
        </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
  imageCarousel: {
    height: 500,
    marginVertical: 16,
  },
  image: {
    width: 300,
    height: 500,
    resizeMode: 'contain',
  },
  carouselIndicators: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 8,
  },
  indicator: {
    width: 8,
    height: 8,
    backgroundColor: '#ccc',
    borderRadius: 4,
    marginHorizontal: 4,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#666',
  },
  discount: {
    color: 'red',
  },
  coupon: {
    color: 'green',
  },
  save: {
    color: '#666',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  ratingText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  ratingCount: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  wishlistButton: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    marginRight: 8,
    borderRadius: 4,
  },
  addToBagButton: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ff3b3b',
    alignItems: 'center',
    marginLeft: 8,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductCard;
