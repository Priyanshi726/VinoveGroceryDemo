import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,  
  StyleSheet                                                           
} from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-virtualized-view';
import { useSelector,useDispatch } from 'react-redux';
import { addGroceryItem, removeFromCart, removeGroceryItem } from '../store/actions/grocery';
import ProductDetail from './ProductDetail';


const data = [
  {
    id: 1,
    pic: require('../Assets/sprite.png'),
    name: 'Sprite Can',
    qty: '325ml',
    price: '4.99',
  },
  {
    id: 2,
    pic: require('../Assets/DietCoke.png'),
    name: 'Diet Coke',
    qty: '325ml',
    price: '4.99',
  },
  {
    id: 3,
    pic: require('/home/hritikshukla/React Native/NECTAR/Assets/image_2022_04_15T07_39_49_163Z.png'),
    name: 'Apple Juice',
    qty: '1ltr',
    price: 3.01,
  },
  {
    id: 4,
    pic: require('../Assets/pngfuel6.png'),
    name: 'Coca Cola Can',
    qty: '325ml',
    price: 2.99,
  },
  {
    id: 5,
    pic: require('../Assets/pngfuel7.png'),
    name: 'Pepsi Can',
    qty: '325ml',
    price: 2.99,
  },
];

const renderItems = ({item},Dispatch,navigation) => {
  console.log('fromfavLIst===>>>',item)
  return(


    <View style={{flexDirection: 'row'}}>
      <View style={{marginTop:45,position:'relative',marginLeft:10}}>
      <Image
        style={{height:70,width:70}}
        source={{uri:item.Img}}
      />
      </View>
      <View>
        <View  style={{justifyContent: 'center',position:'absolute',marginTop:45,marginLeft:30}}>
        <Text
          style={{
            
            
            fontWeight: 'bold',
            color: '#000',
          }}>
          {item.title}
        </Text>
        </View>
        <View style={{position:'absolute',overflow:'hidden',marginTop:65,marginLeft:40}}>
        <Text
          style={{
            justifyContent: 'center',
            color: '#000',
          }}>
          {item.qty}
        </Text>
        </View>
      </View>
      <View style={{marginLeft:200,position:'absolute'}}>
      <Text
        style={{
          justifyContent: 'center',
          marginTop: 50,
          marginLeft: 90,
          fontWeight: 'bold',
          color: '#000',
          marginRight:10
        }}>$
        {item.price}
      </Text>
      </View>
      <View style={{marginRight:10,marginLeft:300,position:'absolute'}}>
      <TouchableOpacity  onPress={() => {
            navigation.navigate('ProductDetail', {
              id: item.id,
              Img: item.Img,
              title: item.title,
              category: item.category,
              price: item.price,
              qty: item.qty,
              desc: item.desc,
              offer: item.offer,
            });
          }}>
        <Image
          style={{justifyContent: 'center', marginTop: 50, marginLeft: 60}}
          source={require('../Assets/rightArrow.png')}
        />
      </TouchableOpacity>

      </View>
    </View>

)
        };
const Favourites = ({navigation}) => {
  const Dispatch = useDispatch();
  // const {Img, title, qty, price,id} = props.route.params;

  const Favouritesss = useSelector(state=>state.groceryReducers.Favourites);
   console.log('Favourites Items ===<><><><>>>',Favouritesss)

  return (
    <ScrollView>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 5}}>
        <Text style={{fontWeight: 'bold', fontSize: 25, color: '#000'}}>
          Favourites
        </Text>
      </View>
 
        <FlatList
          data={Favouritesss}
          renderItem={(item)=>renderItems(item,Dispatch,navigation)}
          keyExtractor={item => item.key}
        />

        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 50,
            padding: 20,
            backgroundColor: '#53B175',
            borderRadius: 15,
            marginLeft: 20,
            marginRight: 20,
            flexDirection: 'row',
          }}
          onPress={() => {
            alert('clicked')
          }}>
          <Text style={{color: '#000', fontWeight: 'bold'}}>
            Add All To Cart
          </Text>
        </TouchableOpacity>

    </ScrollView>
  );
};

export default Favourites;


