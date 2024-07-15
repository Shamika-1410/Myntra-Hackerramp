import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from './Header'
import Buttons from './Buttons'
import Trends from './Trends'
import Shopping from './Shopping'

const TrendHome = () => {
  const [isTrendsSelected, setTrendsSelected] = useState(true);
  const [isShoppingSelected, setShoppingSelected] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Buttons setTrendsSelected={setTrendsSelected} setShoppingSelected={setShoppingSelected} />
      {isTrendsSelected && <Trends />}
      {isShoppingSelected && <Shopping />}
    </SafeAreaView>
  )
}

export default TrendHome

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
