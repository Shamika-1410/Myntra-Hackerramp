import React, { useEffect, useRef } from 'react';
import { StyleSheet, ScrollView, View, Animated, Dimensions } from 'react-native';
import Card from '../ThriftStore/Card';

const { width } = Dimensions.get('window');

const IHp4Content: React.FC = () => {
  const cards = [
    { image: require('../../assets/images/sneaker1.png'), name: 'Rigo', price: '699/-' },
    { image: require('../../assets/images/sneaker2.png'), name: 'Levis', price: '899/-' },
    { image: require('../../assets/images/sneaker4.png'), name: 'Skool', price: '199/-' },
    { image: require('../../assets/images/sneaker3.png'), name: 'Jazz', price: '799/-' },
    { image: require('../../assets/images/sneaker5.png'), name: 'Blazer', price: '799/-' },
    { image: require('../../assets/images/sneaker6.png'), name: 'Classic', price: '499/-' },
    { image: require('../../assets/images/sneaker2.png'), name: 'Roshe', price: '999/-' },
    { image: require('../../assets/images/sneaker4.png'), name: 'Cortez', price: '999/-' },
    { image: require('../../assets/images/sneaker3.png'), name: 'Gazelle', price: '799/-' },
    { image: require('../../assets/images/sneaker5.png'), name: 'Suede', price: '799/-' },
    { image: require('../../assets/images/sneaker6.png'), name: 'Jordan', price: '599/-' },
    { image: require('../../assets/images/card5.png'), name: 'Stan', price: '999/-' },
  ];

  const animatedValues = useRef(cards.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    const animations = animatedValues.map((animValue, index) => {
      const isLeft = index % 2 === 0;
      return Animated.timing(animValue, {
        toValue: 1,
        duration: 500,
        delay: index * 150,
        useNativeDriver: true,
      });
    });
    Animated.stagger(100, animations).start();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {cards.map((card, index) => {
        const isLeft = index % 2 === 0;
        const translateX = animatedValues[index].interpolate({
          inputRange: [0, 1],
          outputRange: isLeft ? [-width, 0] : [width, 0],
        });

        const animatedStyle = {
          transform: [{ translateX }],
          opacity: animatedValues[index],
        };

        return (
          <Animated.View style={[styles.cardContainer, animatedStyle]} key={index}>
            <Card image={card.image} name={card.name} price={card.price} />
          </Animated.View>
        );
      })}
    </ScrollView>
  );
};

export default IHp4Content;

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