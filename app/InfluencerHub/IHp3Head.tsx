import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const IHp3Head = () => {
  return (
        <View >
          <Text style={styles.title}>Closet</Text>
        </View>
  )
}

export default IHp3Head

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
      },
      headerContainer: {
        flex: 1,
      },
      title: {
        marginTop: 55,
        marginBottom: 20,
        fontSize: 35,
        fontWeight: '300',
        fontFamily: 'Italiana-Regular',
        textAlign: 'center',
      },
})