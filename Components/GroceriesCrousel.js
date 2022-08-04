import React, {useState, useRef} from 'react';
import {
  FlatList,
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
} from 'react-native';

const data = [
  {
    id: 1,
    name: 'Rice',
    pic: require('../Assets/pulses.png'),
  },
  {
    id: 2,
    name: 'Pulses',
    pic: require('../Assets/rice.png'),
  },
  {
    id: 3,
    name: 'Rice',
    pic: require('../Assets/pulses.png'),
  },
];


const renderItem = ({item}, navigation) => {
  return (
    <View
      style={{
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(248, 164, 76, 0.3)',
        borderRadius: 20,
        marginRight:10
      }}>
      <Image source={item.pic} />
      <Text style={{marginLeft: 10, paddingRight: 70}}>{item.name}</Text>
    </View>
  );
};

const GroceriesCrousel = ({navigation}) => {
  // const [index, setIndex] = useState(0);
  // const isCarousel = useRef(null);
  return (
    <FlatList
      data={data}
      renderItem={item => renderItem(item, navigation)}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
    />
  );
};

export default GroceriesCrousel;

const styles = StyleSheet.create({});

//  {/* ITEM 1111111111 GROCERIES */}
//  <View style={{marginBottom:20,flexDirection:'row',alignItems:'center',backgroundColor:'rgba(248, 164, 76, 0.3)',borderRadius:20}}>
//  <Image
//    source={require('../Assets/pulses.png')}
//  />
//  <Text style={{marginLeft:10,paddingRight:70}}>Pulses</Text>
// </View>

//  {/* ITEM 2222222222 GROCERIES */}
// <View style={{marginBottom:20,flexDirection:'row',alignItems:'center',backgroundColor:'rgba(248, 164, 76, 0.3)',borderRadius:20,paddingVerticle:5}}>
//  <Image
//    source={require('../Assets/rice.png')}
//  />
//  <Text style={{marginLeft:10,paddingRight:70}}>Rice</Text>
// </View>
