import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const Search = () => {
  return (
    <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={24} color="#aaa" />
        <TextInput
          placeholder="Search for"
          placeholderTextColor="#aaa"
          style={styles.searchInput}
        />
        <Ionicons name="camera-outline" size={24} color="#aaa" style={styles.iconMargin} />
        <Ionicons name="mic-outline" size={24} color="#aaa" />
      </View>


  )
}

export default Search

const styles = StyleSheet.create({
    searchContainer: {
        width:330,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical:5,
        elevation: 5,
        marginLeft: 30,
        marginBottom:20,
      },
      searchInput: {
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
      },
      iconMargin: {
        marginRight:10,
    },
})