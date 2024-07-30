import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, ActivityIndicator } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
import Card from './Card';

// Define the interface for card data
interface CardData {
  image: { uri: string };
  name: string;
  price: string;
  productId: string; // Add productId to CardData
}

const CardGrid = () => {
  const [cards, setCards] = useState<CardData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const products = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        const cardsData: CardData[] = products.map((product: any) => ({
          image: { uri: product.images[0] },
          name: product.productName,
          price: product.price,
          productId: product.id, // Ensure productId is included
        }));

        setCards(cardsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cards.map((card, index) => (
        <View style={styles.cardContainer} key={index}>
          <Card image={card.image} name={card.name} price={card.price} productId={card.productId} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    columnGap: 30,
    marginLeft: 35,
  },
  cardContainer: {
    width: '40%',
  },
});

export default CardGrid;
