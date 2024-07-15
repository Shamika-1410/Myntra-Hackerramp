import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  horizontalScroll: {
    height:60
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    borderColor: 'black',
    borderWidth: 1.5,
    borderRadius: 30,
    paddingHorizontal: 10,
    height: 36,
  },
  text: {
    marginLeft: 5,
    fontSize: 14,
  },
  imageIcon: {
    width: 24,
    height: 24,
  },
  myntra: {
    width: 24,
    height: 16,
  },
  productContainer: {
    paddingHorizontal: 5,
  },
  productCard: {
    width: '48%',
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
  productImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  productDescription: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  productRating: {
    fontSize: 12,
    color: '#888',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  bestPrice: {
    fontSize: 14,
    color: 'green',
    fontWeight: 'bold',
  },
});

interface Product {
  id: string;
  fabric_details: string;
  product_name: string;
  brand_name: string;
  tags: string;
  avg_ratings: number;
  color: string;
  ratings_count: number;
  product_details: string;
  image: any;
  price: number;
  originalPrice?: number;
  discount?: string;
  bestPrice?: number;
}

const horizontalScrollData = [
  {
    text: 'Top Brands',
    icon: <MaterialIcons name="label-outline" size={24} color="black" />,
  },
  {
    text: 'Top Rated',
    icon: <FontAwesome name="star-o" size={24} color="black" />,
  },
  {
    text: 'Hot Trends 🔥',
    icon: <Image source={require('../../assets/images/Frame 3.jpg')} style={styles.imageIcon} />,
  },
  {
    text: 'Myntra Unique',
    icon: <Image source={require('../../assets/images/myntra-icon-3.jpg')} style={[styles.imageIcon, styles.myntra]} />,
  },
  {
    text: 'Global Trends',
    icon: <SimpleLineIcons name="globe" size={24} color="black" />,
  },
  {
    text: 'Rising Trends',
    icon: <Feather name="trending-up" size={24} color="green" />,
  },
];

const Shopping = () => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const localProducts: Product[] = [
      {
        id: '1',
        fabric_details: 'Denim',
        product_name: 'Non Skinny Jeans',
        brand_name: 'Brand A',
        tags: 'crop, cotton',
        avg_ratings: 4.5,
        color: 'red',
        ratings_count: 100,
        product_details: 'Comfortable cotton crop top',
        image: require('../../assets/images/s1.jpeg'),
        price: 999,
        originalPrice: 1099,
        discount: '17% off',
        bestPrice: 999,
      },
      {
        id: '2',
        fabric_details: 'Polyester',
        product_name: 'Polyester Crop Top',
        brand_name: 'Brand B',
        tags: 'crop, polyester',
        avg_ratings: 4.0,
        color: 'blue',
        ratings_count: 50,
        product_details: 'Stylish polyester crop top',
        image: require('../../assets/images/s2.jpeg'),
        price: 649,
        originalPrice: 497,
        discount: '15% off',
        bestPrice: 649,
      },
      {
        id: '3',
        fabric_details: 'Cotton',
        product_name: 'TeeShirt',
        brand_name: 'Brand B',
        tags: 'crop, polyester',
        avg_ratings: 4.0,
        color: 'blue',
        ratings_count: 50,
        product_details: 'Stylish polyester crop top',
        image: require('../../assets/images/s3.jpeg'),
        price: 549,
        originalPrice: 649,
        discount: '15% off',
        bestPrice: 549,
      },
      {
        id: '4',
        fabric_details: 'Cotton',
        product_name: 'Pleated Skirt',
        brand_name: 'Brand B',
        tags: 'crop, polyester',
        avg_ratings: 4.0,
        color: 'blue',
        ratings_count: 50,
        product_details: 'Stylish polyester crop top',
        image: require('../../assets/images/s4.jpeg'),
        price: 699,
        originalPrice: 999,
        discount: '15% off',
        bestPrice: 699,
      },
      {
        id: '5',
        fabric_details: 'TerryCloth',
        product_name: 'Hoodie',
        brand_name: 'Brand B',
        tags: 'crop, polyester',
        avg_ratings: 4.0,
        color: 'blue',
        ratings_count: 50,
        product_details: 'Stylish polyester crop top',
        image: require('../../assets/images/s5.jpeg'),
        price: 899,
        originalPrice: 1299,
        discount: '15% off',
        bestPrice: 899,
      },
      {
        id: '6',
        fabric_details: 'Denim',
        product_name: 'Wide Leg Jeans',
        brand_name: 'Brand B',
        tags: 'crop, polyester',
        avg_ratings: 4.0,
        color: 'blue',
        ratings_count: 50,
        product_details: 'Stylish polyester crop top',
        image: require('../../assets/images/s6.jpeg'),
        price: 799,
        originalPrice: 999,
        discount: '15% off',
        bestPrice: 799,
      },
    ];
    setProduct(localProducts);
  };

  const renderProduct = ({ item }: { item: Product }) => (
    
    <View style={styles.productCard}>
        <SafeAreaView>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productTitle}>{item.product_name}</Text>
      <Text style={styles.productDescription}>{item.fabric_details}</Text>
      <Text style={styles.productRating}>
        Rating: {item.avg_ratings} ({item.ratings_count} reviews)
      </Text>
      <Text style={styles.productPrice}>
        ₹{item.price}{' '}
        {item.originalPrice && (
          <Text style={styles.originalPrice}>₹{item.originalPrice}</Text>
        )}{' '}
        {item.discount}
      </Text>
      {item.bestPrice && (
        <Text style={styles.bestPrice}>Best Price ₹{item.bestPrice}</Text>
      )}
      </SafeAreaView>
    </View>
    
  );

  const renderItems = () => {
    return horizontalScrollData.map((item, index) => (
      <TouchableOpacity key={index} style={styles.item}>
        {item.icon}
        <Text style={styles.text}>{item.text}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
        {renderItems()}
      </ScrollView>
      <FlatList
        data={product}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.productContainer}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Shopping;