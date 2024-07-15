//GenderButtons.tsx


import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

interface GenderButtonsProps {
  onSelectGender: (gender: 'men' | 'women') => void;
}

const GenderButtons: React.FC<GenderButtonsProps> = ({ onSelectGender }) => {
  const [selectedGender, setSelectedGender] = useState<'men' | 'women'>('men');

  const handleSelectGender = (gender: 'men' | 'women') => {
    setSelectedGender(gender);
    onSelectGender(gender);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          selectedGender === 'men' && styles.activeButton,
        ]}
        onPress={() => handleSelectGender('men')}
      >
        <Image
          source={require('../../assets/images/men2.png')}
          style={styles.image}
        />
        <Text style={[
          styles.text,
          selectedGender === 'men' && styles.activeText,
        ]}>
          Men
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedGender === 'women' && styles.activeButton,
        ]}
        onPress={() => handleSelectGender('women')}
      >
        <Image
          source={require('../../assets/images/women1.png')}
          style={styles.image}
        />
        <Text style={[
          styles.text,
          selectedGender === 'women' && styles.activeText,
        ]}>
          Women
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 1,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    marginHorizontal: 10,
  },
  activeButton: {
    backgroundColor: '#272C3F',
    borderColor: '#272C3F',
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
  activeText: {
    color: '#fff',
  },
});

export default GenderButtons;