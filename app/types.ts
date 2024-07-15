export type RootStackParamList = {
    Home: undefined;
    Trends: undefined;
    Shopping: undefined;
  };
export type NavigationHandler = (screen: string) => void;
export interface Product {
  id: number;
  image: any; 
  price: string;
  originalPrice: string;
}