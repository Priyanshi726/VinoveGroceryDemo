import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Cart from '../Screens/Cart';
import Checkout from '../Screens/Checkout';
import OrderAccepted from '../Screens/OrderAccepted'
import ErrorScreen from '../Screens/ErrorScreen'
import ProductDetail from '../Screens/ProductDetail';
import HomeScreen from '../Screens/HomeScreen';
import Locations from '../Components/maps';


const Stack = createStackNavigator();

const ProductDetailNavigation = () => {
    return (
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="ProductDetail" component={ProductDetail} />
          {/* <Stack.Screen name="Locations" component={Locations} /> */}
        </Stack.Navigator>
      );
}

export default ProductDetailNavigation