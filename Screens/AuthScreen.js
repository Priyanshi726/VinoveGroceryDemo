import {View, Text, Image,Button} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyComponent from '../src/Signin'

const AuthScreen = ({navigation}) => {
  return (
    <View style={{marginTop: -35}}>
      <Image
        style={{justifyContent: 'center', alignItems: 'center'}}
        source={require('../Assets/AuthImg.png')}
      />
      <Text style={{fontSize: 30, fontWeight: 'bold', color: '#000'}}>
        Get your groceries
      </Text>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: '#000'}}>
        with nectar
      </Text>
      <Button title='Continue With Mobile Number' onPress={()=>navigation.navigate('MyComponent')} />
    </View>
  );
};

export default AuthScreen;
