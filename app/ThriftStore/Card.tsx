// Card.js
import React from 'react';
import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface CardProps {
    image: ImageSourcePropType;
    name: string;
    price: string;
  }
  const Card: React.FC<CardProps> = ({ image, name, price }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%', // Adjust width according to your layout
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 20,
    marginRight:40,
  },
  textContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Card;
