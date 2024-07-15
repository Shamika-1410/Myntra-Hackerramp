import {
    GestureResponderEvent,
    StyleSheet,
    Text,
    View,
    useWindowDimensions,
  } from 'react-native';
  import React, { useEffect, useState } from 'react';
  import { Canvas, Group, useFont, Line, Text as SkiaText } from '@shopify/react-native-skia';
  import * as d3 from 'd3';
  import { useSharedValue, withTiming } from 'react-native-reanimated';
  import BarPath from './BarPath';
  import XAxisText from './XAxisText';
  import { SafeAreaView } from 'react-native-safe-area-context';
  import { Data, data } from './data';
  import * as Font from 'expo-font';
  
  const Graph = () => {
    const { width } = useWindowDimensions();
    const totalValue = data.reduce((acc, cur) => acc + cur.value, 0);
  
    const barWidth = 28;
    const graphMargin = 20;
  
    const canvasHeight = 300;
    const canvasWidth = width;
    const graphHeight = canvasHeight - graphMargin - 50;
    const graphWidth = width;
    const [selectedDay, setSelectedDay] = useState<string>('Total');
    const selectedBar = useSharedValue<string | null>(null);
    const selectedValue = useSharedValue<number>(0);
    const progress = useSharedValue<number>(0);
    const xDomain = data.map((dataPoint: Data) => dataPoint.label);
    const xRange = [0, graphWidth];
    const x = d3.scalePoint().domain(xDomain).range(xRange).padding(1);
    const yDomain = [0, d3.max(data, (yDataPoint: Data) => yDataPoint.value)!];
    const yRange = [0, graphHeight];
    const y = d3.scaleLinear().domain(yDomain).range(yRange);
  
    useEffect(() => {
      progress.value = withTiming(1, { duration: 1000 });
      selectedValue.value = withTiming(totalValue, { duration: 1000 });
    }, [progress, selectedValue, totalValue]);
  
    const touchHandler = (e: GestureResponderEvent) => {
      const touchX = e.nativeEvent.locationX;
      const touchY = e.nativeEvent.locationY;
  
      const index = Math.floor((touchX - barWidth / 2) / x.step());
  
      if (index >= 0 && index < data.length) {
        const { label, value } = data[index];
  
        if (
          touchX > x(label)! - barWidth / 2 &&
          touchX < x(label)! + barWidth / 2 &&
          touchY > graphHeight - y(value) &&
          touchY < graphHeight
        ) {
          selectedBar.value = label;
          selectedValue.value = withTiming(value);
        } else {
          selectedBar.value = null;
          setSelectedDay('Total');
          selectedValue.value = withTiming(totalValue);
        }
      }
    };
  
    const loadFonts = async () => {
      await Font.loadAsync({
        'Italiana-Regular': require('../../assets/fonts/Italiana-Regular.ttf'),
      });
    };
  
    const font = useFont(require('../../assets/fonts/SpaceMono-Regular.ttf'), 16);
  
    const [fontsLoaded, setFontsLoaded] = useState(false);
  
    useEffect(() => {
      loadFonts().then(() => setFontsLoaded(true));
    }, []);
  
    if (!fontsLoaded) {
      return null;
    }
  
    const colors = ['#f9426e', '#a56e7c', '#e7abba', '#b43150', '#902640'];
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>TrendWave</Text>
        </View>
        <Canvas
          onTouchStart={touchHandler}
          style={{ width: canvasWidth, height: canvasHeight }}>
          <Line
            p1={{ x: 0, y: graphHeight }}
            p2={{ x: graphWidth, y: graphHeight }}
            color="black"
            strokeWidth={1}
          />
          {data.map((dataPoint: Data, index) => (
            <Group key={index}>
              <BarPath
                progress={progress}
                x={x(dataPoint.label)!}
                y={y(dataPoint.value)}
                barWidth={barWidth}
                graphHeight={graphHeight}
                label={dataPoint.label}
                selectedBar={selectedBar}
                color={colors[index % colors.length]} 
              />
              <XAxisText
                x={x(dataPoint.label)!-30}
                y={canvasHeight-70} 
                text={dataPoint.label}
                selectedBar={selectedBar}
              />
            </Group>
          ))}
          <SkiaText
            x={graphWidth-220}
            y={canvasHeight - 20} 
            text="Tops"
            font={font} 
            color="black"
          />
        </Canvas>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      height: 400,
      width: 390,
      borderRadius: 10,
      backgroundColor: '#FFF6F5',
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      alignItems: 'center',
      marginBottom: 30,
      fontFamily: 'Italiana-Regular',
      fontSize:28
    },
    textContainer: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 20,
      alignItems:'center'
    },
  });
  
  export default Graph;