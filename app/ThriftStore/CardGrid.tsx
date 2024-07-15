// CardGrid.js
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Card from './Card';

const CardGrid = () => {
  const cards = [
    { image: require('../../assets/images/card11.png'), name: 'Rigo', price: '699/-' },
    { image: require('../../assets/images/card7.png'), name: 'Levis', price: '899/-' },
    { image: require('../../assets/images/card3.png'), name: 'Cap', price: '199/-' },
    { image: require('../../assets/images/card4.png'), name: 'Jacket', price: '799/-' },
    { image: require('../../assets/images/card6.png'), name: 'Shrug', price: '799/-' },
    { image: require('../../assets/images/card2.png'), name: 'Jacket', price: '499/-' },
    { image: require('../../assets/images/card8.png'), name: 'Pants', price: '999/-' },
    { image: require('../../assets/images/card9.png'), name: 'Purse', price: '999/-' },
    { image: require('../../assets/images/card10.png'), name: 'Jeans', price: '799/-' },
    { image: require('../../assets/images/card12.png'), name: 'Jacket', price: '799/-' },
    { image: require('../../assets/images/card1.png'), name: 'Shirt', price: '599/-' },
    { image: require('../../assets/images/card5.png'), name: 'Shoes', price: '999/-' },
    // Add more card objects here
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cards.map((card, index) => (
        <View style={styles.cardContainer} key={index}>
          <Card image={card.image} name={card.name} price={card.price} />
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
    columnGap:30,
    marginLeft:35,
  },
  cardContainer: {
    width: '40 %',
  },
});

export default CardGrid;
