import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../_layout';

type ConfirmPageNavigationProp = StackNavigationProp<RootStackParamList, 'App'>;
const ConfirmPage: React.FC = () => {
  const navigation = useNavigation<ConfirmPageNavigationProp>();
  const handleConfirmation = (isGoodQuality: boolean) => {
    if (isGoodQuality) {
      navigation.navigate('ThriftPickUp')
      console.log('Product quality meets the required standards.');
    } else {
      alert('Product quality does not meet the required standards.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Quality Confirmation</Text>
      <Text style={styles.message}>
        Is the product quality good enough to be thrifted? 
        Please note that if it is later found that the product quality does not meet Myntra standards, 
        it will not be eligible for thrifting.
      </Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleConfirmation(true)}>
          <Text style={styles.buttonText}>Yes, it's good</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.noButton]} onPress={() => handleConfirmation(false)}>
          <Text style={styles.buttonText}>No, it's not</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#FFF6F5',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    message: {
      fontSize: 16,
      textAlign: 'center',
      marginBottom: 40,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
    },
    button: {
      backgroundColor: '#F9426E',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      width: '40%',
    },
    noButton: {
      backgroundColor: '#B0B0B0',
    },
    buttonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
  });

export default ConfirmPage;