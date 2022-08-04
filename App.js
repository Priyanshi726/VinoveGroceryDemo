import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './Navigation/StackNavigation'
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
// import { persistor } from './store/index';
import reduxStore from './store/index'
import configureStore from "./store/index"


const {store,persistor} = reduxStore();
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

    <NavigationContainer>
       <StackNavigation/>
    </NavigationContainer>
      </PersistGate>
    </Provider> 
  );
};

export default App;

const styles = StyleSheet.create({});
                                                                   