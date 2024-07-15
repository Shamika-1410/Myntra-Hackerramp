import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../_layout';

const closetOptions = [
  'Sneakers',
  'Cosmetics',
  'Dresses',
  'Jeans',
  'T-shirts',
  'Co-ords',
];
const IHp3Content: React.FC = () => {
  type IHp3ContentNavigationProp = StackNavigationProp<RootStackParamList, 'App'>;
  const navigation = useNavigation<IHp3ContentNavigationProp>();
  const animatedValues = useRef(closetOptions.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    const animations = closetOptions.map((_, index) => {
      return Animated.timing(animatedValues[index], {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
        delay: index * 100, // Stagger the animation
      });
    });

    Animated.stagger(100, animations).start();
  }, []);

  const handleNavigation = (option: string) => {
    if (option === 'Sneakers') {
       navigation.navigate('IHp4');
    } else if(option === 'Cosmetics'){
      navigation.navigate('Cosmetics');
    }
  };

  return (
    <ScrollView style={styles.container}>
      {closetOptions.map((option, index) => {
        const translateY = animatedValues[index].interpolate({
          inputRange: [0, 1],
          outputRange: [50, 0],
        });
        return (
          <Animated.View
            key={index}
            style={[styles.optionButton, { transform: [{ translateY }] }]}
          >
            <TouchableOpacity onPress={() => handleNavigation(option)} style={styles.touchableOpacity}>
              <Text style={styles.optionText}>{option}</Text>
              <Text style={styles.arrowText}>{'>'}</Text>
            </TouchableOpacity>
          </Animated.View>
        );
      })}
    </ScrollView>
  );
};

export default IHp3Content;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    width: '100%',
    marginBottom: 10,
    marginLeft: 5,
  },
  optionButton: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 14,
    borderRadius: 36,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    elevation: 3,
  },
  touchableOpacity: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    color: '#F9426E',
    fontSize: 18,
    marginRight: 180, // Adjust as needed for spacing between text and arrow
  },
  arrowText: {
    color: 'black',
    fontSize: 30,
  },
});