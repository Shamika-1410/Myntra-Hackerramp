import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

interface HeaderProps {
  handleSearch: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onSearch = () => {
    handleSearch(searchQuery);
    Keyboard.dismiss(); // Dismiss the keyboard after search
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.logoContainer}>
          <View style={styles.logoBackground}>
            <Text style={styles.logo}>fwd</Text>
            <Ionicons name="chevron-down-outline" size={20} color="#be5f75" />
          </View>
        </View>
        <TouchableOpacity style={styles.insiderContainer}>
          <FontAwesome5 name="crown" size={24} color="#d4af37" />
          <View style={styles.insiderTextContainer}>
            <Text style={[styles.insiderText, { fontSize: 12, color: 'black' }]}>BECOME</Text>
            <Text style={[styles.insiderText, { fontSize: 14 }]}>INSIDER</Text>
          </View>
          <View style={{ marginLeft: 7, marginTop: 16 }}>
            <Ionicons name="chevron-forward-outline" size={16} color="#d4af37" />
          </View>
        </TouchableOpacity>
        <View style={styles.iconContainer}>
          <View style={styles.notificationContainer}>
            <Ionicons name="notifications-outline" size={24} color="#000" />
            <View style={styles.notificationBadge}>
              <Text style={styles.badgeText}>1</Text>
            </View>
          </View>
          <Ionicons name="heart-outline" size={24} color="#000" style={styles.icon} />
          <Ionicons name="bag-outline" size={24} color="#000" style={styles.icon} />
        </View>
      </View>
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={24} color="#aaa" />
        <TextInput
          placeholder="Search for"
          placeholderTextColor="#aaa"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={onSearch} // Triggers search on keyboard "Submit"
        />
        <TouchableOpacity onPress={onSearch}>
          <Ionicons name="camera-outline" size={24} color="#aaa" style={styles.iconMargin} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onSearch}>
          <Ionicons name="mic-outline" size={24} color="#aaa" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingVertical: 45,
    paddingHorizontal: 15,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoBackground: {
    flexDirection: 'row',  // Ensures items inside are aligned horizontally
    backgroundColor: '#f9f3e9',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 5,
    borderWidth: 2,
    borderColor: '#f3e7d9',
    alignItems: 'center',
  },
  logo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 5,
  },
  insiderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 2,
    paddingVertical: 10,
  },
  insiderTextContainer: {
    marginLeft: 5,
    marginRight: -8,
  },
  insiderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#d4af37',
  },
  insiderTextBold: {
    color: '#d4af37',
    fontWeight: 'bold',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 15,
  },
  notificationContainer: {
    position: 'relative',
    marginLeft: 15,
  },
  notificationBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#ff0000',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    elevation: 5,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  iconMargin: {
    marginRight: 10,
  },
});

export default Header;
