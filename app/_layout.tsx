import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-get-random-values';
import IHp3 from './InfluencerHub/IHp3';
import IHp4 from './InfluencerHub/IHp4';
import ThriftStorep1 from './ThriftStore/ThriftStorep1';
import ThriftStorep2 from './ThriftStore/ThriftStorep2';
import SellScreen from  './ThriftStore/SellScreen';
import ConfirmPage from  './ThriftStore/ConfirmPage';
import ThriftPickUp from  './ThriftStore/ThriftPickUp';
import TermsConditions from  './ThriftStore/TermsConditions';
import TermsandConditions from  './ThriftStore/TermsandConditions';
import Stores from  './ThriftStore/Stores';
import TrendHome from './TrendWave/TrendHome';
import SecondPage from './InfluencerHub/SecondPage';
import HomePage from './InfluencerHub/Homepage';
import StyleCircle from './InfluencerHub/StyleCircle';
import InfluencerPage from './InfluencerHub/InfuencerPage';
import Channel from './InfluencerHub/Channel';
import Cosmetics from './InfluencerHub/Cosmetics';
import CarouselScreen from './ThriftStore/CarouselScreen';
import ThriftStoreRegistration from './ThriftStore/ThriftStoreRegistration';
import ProductCard from './ThriftStore/ProductCard';

export type RootStackParamList = {
  App: undefined;
  IHp4: undefined;
  IHp3: undefined;
  ThriftStorep1:undefined;
  ThriftStorep2:undefined;
  SellScreen:undefined;
  ConfirmPage:undefined;
  ThriftPickUp:undefined;
  TrendHome:undefined;
  SecondPage:undefined;
  HomePage:undefined;
  StyleCircle:undefined;
  InfluencerPage:undefined;
  Channel:undefined;
  Cosmetics:undefined;
  CarouselScreen:undefined;
  TermsConditions:undefined;
  TermsandConditions:undefined;
  Stores:undefined;
  ThriftStoreRegistration:undefined;
  ProductCard:{ productId: string };
};

const Stack = createStackNavigator<RootStackParamList>();
function _layout() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="IHp3" component={IHp3} options={{ headerShown: false }} />
        <Stack.Screen name="IHp4" component={IHp4} options={{ headerShown: false }} />
        <Stack.Screen name="ThriftStorep1" component={ThriftStorep1} options={{ headerShown: false }} />
        <Stack.Screen name="ThriftStorep2" component={ThriftStorep2} options={{ headerShown: false }} />
        <Stack.Screen name="SellScreen" component={SellScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ConfirmPage" component={ConfirmPage} options={{ headerShown: false }} />
        <Stack.Screen name="ThriftPickUp" component={ThriftPickUp} options={{ headerShown: false }} />
        <Stack.Screen name="TrendHome" component={TrendHome} options={{ headerShown: false }} />
        <Stack.Screen name="SecondPage" component={SecondPage} options={{ headerShown: false }} />
        <Stack.Screen name="HomePage" component={HomePage} options={{ headerShown: false }} />
        <Stack.Screen name="StyleCircle" component={StyleCircle} options={{ headerShown: false }} />
        <Stack.Screen name="InfluencerPage" component={InfluencerPage} options={{ headerShown: false }} />
        <Stack.Screen name="Channel" component={Channel} options={{ headerShown: false }} />
        <Stack.Screen name="Cosmetics" component={Cosmetics} options={{ headerShown: false }} />
        <Stack.Screen name="CarouselScreen" component={CarouselScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TermsConditions" component={TermsConditions} options={{ headerShown: false }} />
        <Stack.Screen name="TermsandConditions" component={TermsandConditions} options={{ headerShown: false }} />
        <Stack.Screen name="Stores" component={Stores} options={{ headerShown: false }} />
        <Stack.Screen name="ThriftStoreRegistration" component={ThriftStoreRegistration} options={{ headerShown: false }} />
        <Stack.Screen name="ProductCard" component={ProductCard} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default _layout;
