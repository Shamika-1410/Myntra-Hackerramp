//Head.tsx

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Head = () => {
  return (
        <View >
          <Text style={styles.title}>Style Circle</Text>
        </View>
  )
}

export default Head

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
      },
      headerContainer: {
        flex: 1,
      },
      title: {
        marginTop: 75,
        marginBottom: 20,
        fontSize: 35,
        fontWeight: '300',
        fontFamily: 'Italiana-Regular',
        textAlign: 'center',
      },
})