import React, { useState, useEffect , useRef} from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Modal, FlatList,Animated, Easing } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ShareIcon from 'react-native-vector-icons/Feather';
import FeatherIcon from 'react-native-vector-icons/Feather';
import HeartIcon from 'react-native-vector-icons/Feather';
import ShoppingIcon from 'react-native-vector-icons/Feather';
import { getFirestore, collection, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../_layout';

const { width: screenWidth } = Dimensions.get('window');

// Define route parameters type
type ProductCardRouteProp = RouteProp<RootStackParamList, 'ProductCard'>;

interface Product {
  productName: string;
  price: number;
  images: string[];
}

const ProductCard: React.FC = () => {
  const animationValue = useRef(new Animated.Value(0)).current;
  const [wishlistClicked, setWishlistClicked] = useState(false);
  const [addToBagClicked, setAddToBagClicked] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const route = useRoute<ProductCardRouteProp>();
  const productId = route.params.productId;
  useEffect(() => {
    // Define the animation
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, [animationValue]);

  // Interpolate the animation value to control opacity
  const animatedStyle = {
    opacity: animationValue,
  };
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        if (productId) {
          const docRef = doc(db, 'products', productId);
          const docSnap = await getDoc(docRef);

          if (docSnap.exists()) {
            setProduct(docSnap.data() as Product);
          } else {
            console.error('No such document!');
          }
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    const fetchAllProducts = async () => {
      const querySnapshot = await getDocs(collection(db, 'products'));
      const productsData = querySnapshot.docs.map(doc => doc.data() as Product);
      setProducts(productsData);
    };

    fetchProductData();
    fetchAllProducts();
  }, [productId]);

  const handleWishlistPress = () => {
    setWishlistClicked(!wishlistClicked);
  };

  const handleAddToBagPress = () => {
    setAddToBagClicked(!addToBagClicked);
  };

  const handleProductSelect = (index: number) => {
    setProduct(products[index]);
    setModalVisible(false);
  };

  if (!product) {
    return (
      <SafeAreaView style={styles.container}>
        <Animated.Image
        source={require('../../assets/images/myntralogo.png')}
        style={[styles.imagee, animatedStyle]}
      />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <FeatherIcon name="arrow-left" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{product.productName}</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <FeatherIcon name="list" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <ShareIcon name="share-2" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <HeartIcon name='heart' size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <ShoppingIcon name='shopping-bag' size={24} color="#000" />
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        style={styles.imageScrollContainer}
      >
        {product.images.map((imageUrl, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <View style={styles.circle}>
              <Image source={require('../../assets/images/c1.jpeg')} style={styles.circleImage} />
            </View>
          </View>
        ))}
      </ScrollView>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.detailsContainer}>
          <Text style={styles.productTitle}>{product.productName}</Text>
          <Text style={styles.productDescription}>Typography Printed Tip-Ups Styled Crop Top</Text>
          <Text style={styles.productPrice}>
            ₹ {product.price}
          </Text>
          <Text style={styles.coupon}>Best price ₹209 with coupon FWDNEW200</Text>
          <Text style={styles.save}>Add to bag and save ₹200</Text>
          <View style={styles.rating}>
            <Text style={styles.ratingText}>4.5</Text>
            <Text style={styles.ratingCount}>(30)</Text>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={[styles.wishlistButton, wishlistClicked && styles.wishlistButtonClicked]}
              onPress={handleWishlistPress}
            >
              <Text style={styles.buttonText}>Wishlist</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.addToBagButton, addToBagClicked && styles.addToBagButtonClicked]}
              onPress={handleAddToBagPress}
            >
              <Text style={styles.buttonText}>Add to Bag</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={products}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => handleProductSelect(index)}>
                  <View style={styles.productThumbnailContainer}>
                    <Image source={{ uri: item.images[0] }} style={styles.productThumbnail} />
                    <Text style={styles.productThumbnailTitle}>{item.productName}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 20,
    padding: 10,
  },
  contentContainer: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    width: 24,
    height: 24,
  },
  imageScrollContainer: {
    height: 400,
    marginBottom: 16,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: screenWidth,
    height: 500,
    resizeMode: 'cover',
  },
  imagee: {
    width: 300, // Adjust the size as needed
    height: 300,
    marginLeft:50,
    marginTop:200,
  },
  circle: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 300,
  },
  circleImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  detailsContainer: {
    paddingVertical: 16,
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
    marginVertical: 8,
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
    backgroundColor: '#F9426E',
    alignItems: 'center',
    marginLeft: 8,
    borderRadius: 4,
  },
  wishlistButtonClicked: {
    backgroundColor: '#F9426E',
  },
  addToBagButtonClicked: {
    backgroundColor: '#f0f0f0',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  productThumbnailContainer: {
    alignItems: 'center',
    marginRight: 10,
    marginVertical: 10,
  },
  productThumbnail: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius: 4,
  },
  productThumbnailTitle: {
    marginTop: 8,
    fontSize: 14,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
  },
  closeButton: {
    marginTop: 16,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F9426E',
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProductCard;
