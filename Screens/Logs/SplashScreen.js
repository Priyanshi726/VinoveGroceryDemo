import {View, Text, StyleSheet, Image, StatusBar} from 'react-native';
import React, { useEffect } from 'react';

import Logo from '../../Assets/Splash.png';
import { NavigationContainer } from '@react-navigation/native';

export default function SplashScreen(navigation) {

//  useEffect(()=>{
//    NavigateToAuthOrBottomNav()

//  },[navigation])

//  function NavigateToAuthOrBottomNav(){
//    const {currentUser} =firebase.Auth()
//    setTimeout(function (){
//      if (currentUser !=null){
//        navigation.reset({
//          index:0,
//          routes: [{name:'BottomNavigation'}]
//        })
//      }else {
//        navigation.reset({
//          index:0,
//          routes:[{name:'Login'}]
//        })
//      }
//    },1000)
//  }


  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />

    

      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />

        
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#53B175',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    height: 100,
    width: 300,
  },
  text: {
    color: '#fff',
  },
  bottomContainer: {},
  bottomText: {
    color: '#fff',
  },
});