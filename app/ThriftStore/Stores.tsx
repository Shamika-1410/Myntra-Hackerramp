import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Animated, ActivityIndicator, TextInput } from 'react-native';
import { getDocs, collection } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Adjust the import path accordingly
import * as Font from 'expo-font';

type Store = {
  id: string;
  storeName: string;
  description: string;
  location: string;
};

const loadFonts = async () => {
  await Font.loadAsync({
    'Italiana-Regular': require('../../assets/fonts/Italiana-Regular.ttf'),
  });
};

const Stores: React.FC = () => {
  const [stores, setStores] = useState<Store[]>([]);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStores, setFilteredStores] = useState<Store[]>([]);
  
  const slideAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'stores'));
        const storesList: Store[] = querySnapshot.docs.map(doc => {
          const data = doc.data();
          const storeInfo = data.storeInfo || {}; // Ensure storeInfo is defined

          return {
            id: doc.id,
            storeName: storeInfo.storeName || 'Unknown Name',
            description: storeInfo.storeDescription || 'No Description',
            location: storeInfo.storeCity || 'Unknown Location',
          };
        });
        setStores(storesList);
        setFilteredStores(storesList);
      } catch (error) {
        console.error("Error fetching stores: ", error);
      }
    };

    fetchStores();
  }, []);

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  const translateY = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [100, 0], 
  });

  useEffect(() => {
    const searchLowerCase = searchQuery.toLowerCase();
    const filtered = stores.filter(store => 
      (store.storeName && store.storeName.toLowerCase().includes(searchLowerCase)) || 
      (store.location && store.location.toLowerCase().includes(searchLowerCase))
    );
    setFilteredStores(filtered);
  }, [searchQuery, stores]);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#F9426E" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registered Thrift Stores</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by store name or city..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <View style={styles.list}>
        {filteredStores.map((store) => (
          <Animated.View key={store.id} style={[styles.card, { transform: [{ translateY }] }]}>
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{store.storeName}</Text>
              <Text style={styles.description}>{store.description}</Text>
              <Text style={styles.location}>{store.location}</Text>
            </View>
          </Animated.View>
        ))}
      </View>
      <View style={styles.bottomContainer}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bottomContainer: {
    height: 50
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    marginBottom: 40,
  },
  container: {
    marginTop: 60,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
    fontFamily: 'Italiana-Regular',
  },
  searchBar: {
    width: '90%',
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  list: {
    width: '90%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    overflow: 'hidden',
  },
  infoContainer: {
    padding: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#F9426E',
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  location: {
    fontSize: 16,
    color: '#333',
  },
});

export default Stores;
