import React, { useEffect, useRef } from 'react';
import { StyleSheet, ScrollView, View, Animated, Dimensions } from 'react-native';
import Card from '../ThriftStore/Card';

const { width } = Dimensions.get('window');

const CosContent: React.FC = () => {
  const cards = [
    { image: require('../../assets/images/lipstick.png'), name: 'Lipstick', price: '399/-' },
    { image: require('../../assets/images/foundation.png'), name: 'Foundation', price: '299/-' },
    { image: require('../../assets/images/eyeshadow.png'), name: 'Eyeshadow', price: '299/-' },
    { image: require('../../assets/images/nailpaint.png'), name: 'Nail Polish', price: '199/-' },
    { image: require('../../assets/images/Mascara.png'), name: 'Mascara', price: '399/-' },
    { image: require('../../assets/images/moisturizer.png'), name: 'Moisturizer', price: '699/-' },
    { image: require('../../assets/images/liploss.png'), name: 'Lip Gloss', price: '499/-' },
    { image: require('../../assets/images/brushes.png'), name: 'Brushes', price: '899/-' },
    { image: require('../../assets/images/eyeliner.png'), name: 'Eyeliner', price: '499/-' },
    { image: require('../../assets/images/spray.png'), name: 'Setting Spray', price: '599/-' },
    { image: require('../../assets/images/pencil.png'), name: 'Brow Pencil', price: '299/-' },
    { image: require('../../assets/images/compact.png'), name: 'Compact', price: '999/-' },
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

export default CosContent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
    columnGap: 30,
    marginLeft: 35,
  },
  cardContainer: {
    width: '40%',
  },
});







