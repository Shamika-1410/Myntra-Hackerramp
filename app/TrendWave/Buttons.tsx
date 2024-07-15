import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ButtonsProps {
  setTrendsSelected: React.Dispatch<React.SetStateAction<boolean>>;
  setShoppingSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const Buttons: React.FC<ButtonsProps> = ({ setTrendsSelected, setShoppingSelected }) => {
  const [isShoppingSelected, setIsShoppingSelected] = useState(false);

  const handleShoppingPress = () => {
    setIsShoppingSelected(true);
    setShoppingSelected(true);
    setTrendsSelected(false);
  };

  const handleTrendsPress = () => {
    setIsShoppingSelected(false);
    setShoppingSelected(false);
    setTrendsSelected(true);
  };

  return (
    <View style={styles.btnView}>
      <TouchableOpacity
        style={[
          styles.shoppingButton,
          { backgroundColor: isShoppingSelected ? '#000' : '#FFF' },
        ]}
        onPress={handleShoppingPress}
      >
        <Text style={[styles.buttonTextShop, { color: isShoppingSelected ? '#FFF' : '#000' }]}>
          Shopping
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.trendsButton,
          { backgroundColor: !isShoppingSelected ? '#000' : '#FFF' },
        ]}
        onPress={handleTrendsPress}
      >
        <Text style={[styles.buttonTextTrend, { color: !isShoppingSelected ? '#FFF' : '#000' }]}>
          Trends
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btnView: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
    marginBottom:20,
  },
  shoppingButton: {
    backgroundColor: '#FFF',
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 40,
    marginRight: 6,
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
  },
  trendsButton: {
    backgroundColor: '#FFF',
    paddingVertical: 5,
    paddingHorizontal: 25,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'grey',
    alignItems: 'center',
  },
  buttonTextShop: {
    fontWeight: 'bold',
  },
  buttonTextTrend: {
    fontWeight: 'bold',
  },
});

export default Buttons;