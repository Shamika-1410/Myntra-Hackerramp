import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const ThriftPickUp = () => {
  const scaleAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(
      scaleAnim,
      {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }
    ).start();
  }, [scaleAnim]);


  return (
    <View style={styles.container}>
      <View style={styles.overlay} />
      <Animated.View style={[styles.popup, { transform: [{ scale: scaleAnim }] }]}>
        <Text style={styles.text}>Product Pickup Confirmed</Text>
      </Animated.View>
      <Text style={styles.info}>Someone from our team will come to take the order shortly.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  popup: {
    backgroundColor: '#F9426E',
    padding: 20,
    width: 300,
    height: 300,
    borderRadius: 200,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    opacity: 0.6,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  info: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default ThriftPickUp;