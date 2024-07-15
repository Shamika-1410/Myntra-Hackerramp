import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

type VoteForTopProps = {
  onVoteSubmitted: () => void;
};

const VoteForTop: React.FC<VoteForTopProps> = ({ onVoteSubmitted }) => {
  type Category = 'Crop Tops' | 'Graphic Tees' | 'Asymmetrical Tops' | 'Hooded Tops' | 'Statement Tops';

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleVote = (category: Category) => {
    setSelectedCategory(category);
  };

  const handleSubmitVote = () => {
    if (selectedCategory) {
      console.log('Vote submitted for: ${selectedCategory}');
      Alert.alert('Vote Submitted', 'Thank you for voting!');
      onVoteSubmitted();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vote for Your Favorite Top Category</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleVote('Crop Tops')}>
        <Text style={styles.buttonText}>Crop Tops</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleVote('Graphic Tees')}>
        <Text style={styles.buttonText}>Graphic Tees</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleVote('Asymmetrical Tops')}>
        <Text style={styles.buttonText}>Asymmetrical Tops</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleVote('Hooded Tops')}>
        <Text style={styles.buttonText}>Hooded Tops</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => handleVote('Statement Tops')}>
        <Text style={styles.buttonText}>Statement Tops</Text>
      </TouchableOpacity>
      {selectedCategory && (
        <Text style={styles.selectedText}>You voted for: {selectedCategory}</Text>
      )}
      <TouchableOpacity
        style={[styles.submitButton, !selectedCategory && styles.disabledButton]}
        onPress={handleSubmitVote}
        disabled={!selectedCategory}
      >
        <Text style={styles.submitButtonText}>Submit Vote</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f2c1bc', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: '80%', 
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#F9426E', 
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '80%',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#c0c0c0',
  },
  selectedText: {
    marginTop: 20,
    fontSize: 16,
    color: 'green',
  },
});

export default VoteForTop;