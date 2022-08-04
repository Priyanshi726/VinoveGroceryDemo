import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Button,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Checkout from './Checkout';
import QtyCounter from '../Components/QtyCounter';
import {useDispatch, useSelector} from 'react-redux';
import {
  removeGroceryItem,
  removeFromCart,
  clearFromCart,
  addGroceryItem,
} from '../store/actions/grocery';
import {decrement} from '../store/actions/grocery';
import {increment} from '../store/actions/grocery';
import database from '@react-native-firebase/database';

// const data = [
//   {
//     id: 1,
//     Img: require('/home/hritikshukla/React Native/NECTAR/Assets/pepper.png'),
//     title: 'Bell Pepper Red',
//     qty: '1kg',
//     price: 4.99,
//   },
//   {
//     id: 2,
//     Img: require('../Assets/eggs.png'),
//     title: 'Egg Chicken Red',
//     qty: '4pcs',
//     price: 1.99,
//   },
//   {
//     id: 3,
//     Img: require('../Assets/OrganicBanana.png'),
//     title: 'Organic Bananas',
//     qty: '12pcs',
//     price: 3.01,
//   },
//   {
//     id: 4,
//     Img: require('../Assets/ginger.png'),
//     title: 'Ginger',
//     qty: '200gm',
//     price: 2.99,
//   },
//   {
//     id: 5,
//     Img: require('../Assets/redapple.png'),
//     title: 'apple',
//     qty: '1kg',
//     price: 1.99,
//   },
//   {
//     id: 6,
//     Img: require('../Assets/kiwi.png'),
//     title: 'kiwi',
//     qty: '8pcs',
//     price: 3.01,
//   },
//   {
//     id: 7,
//     Img: require('../Assets/ginger.png'),
//     title: 'Ginger',
//     qty: '200gm',
//     price: 2.99,
//   },
// ];

const Cart = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const addtoBasketCounter = useSelector(
    state => state.groceryReducers.groceryItems,
  );

  // console.log('cart Data=====>', JSON.stringify(addtoBasketCounter));

  const renderItem = cartItem => {
    // console.log('item rednder cart', cartItem);
    const item = cartItem.item;

    return (
      <ScrollView>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{
              justifyContent: 'center',
              marginTop: 40,
              marginLeft: 20,
              width: 70,
              height: 55,
            }}
            source={{uri: item.Img}}
          />

          <View>
            <View>
              <Text
                style={{
                  justifyContent: 'center',
                  marginTop: 35,
                  marginLeft: 45,
                  fontWeight: 'bold',
                  color: '#000',
                }}>
                {item.title}
              </Text>
            </View>
            <Text
              style={{
                justifyContent: 'center',
                marginTop: 0,
                marginLeft: 45,
                color: '#000',
              }}>
              {item.qty}
            </Text>
            <View
              style={{
                marginRight: 50,
                marginLeft: 40,
                flexDirection: 'row',
                marginTop: 30,
              }}>
              {/* <QtyCounter/> */}
              <TouchableOpacity onPress={() => dispatch(decrement(item.id))}>
                <Image source={require('../Assets/minus.png')} />
              </TouchableOpacity>
              <Text style={{margin: 20, alignItems: 'center', marginTop: 8}}>
                {item.amount}
              </Text>

              <TouchableOpacity onPress={() => dispatch(increment(item.id))}>
                <Image source={require('../Assets/plus.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{marginLeft: 370, position: 'absolute'}}>
            <Text
              style={{
                justifyContent: 'center',
                marginTop: 90,
                marginLeft: -25,
                fontWeight: 'bold',
                color: '#000',
              }}>
              ${item.price * item.amount}
            </Text>
          </View>
          <View style={{position: 'absolute', marginLeft: 350, marginTop: 40}}>
            <TouchableOpacity
              onPress={() => dispatch(removeGroceryItem(item.id))}>
              <Image style={{}} source={require('../Assets/cross.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  };
  // console.log(addtoBasketCounter)
  // {
  //   let total = [];
  //   addtoBasketCounter.reduce((acc, curr) => {
  //     let Tprice = curr.price * curr.amount;
  //     total.push(Tprice);
  //     total.reduce((sum, i) => {
  //       let pay = sum + i;
  //       console.log(pay);
  //     });
  //   }, 0);
  // }

  return (
    // <ScrollView>
    <View style={{marginBottom: 300}}>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            color: '#000',
            marginLeft: 125,
          }}>
          My Cart
        </Text>
        <TouchableOpacity
          style={{marginTop: 5, marginRight: -10}}
          onPress={() => dispatch(clearFromCart())}>
          <Image
            style={{width: 25, height: 25}}
            source={require('../Assets/bin.png')}></Image>
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={addtoBasketCounter}
          renderItem={item => renderItem(item)}
          keyExtractor={item => item.id}
          // onRefresh={}
        />
        {/* BUTONNNNNNNNNN */}
        <View>
          <TouchableOpacity
            style={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginTop: 20,
              padding: 20,
              backgroundColor: '#53B175',
              borderRadius: 15,
              marginLeft: 20,
              marginRight: 20,
              flexDirection: 'row',
              marginBottom: 20,
            }}
            // onPress={()=>{navigation.navigate('OrderAccepted')}}
            onPress={() => setModal(true)}>
            <Text style={{color: '#000', fontWeight: 'bold', marginRight: 70}}>
              Go to Checkout
            </Text>
            <Text style={{color: '#000', fontWeight: 'bold'}}>
              $100
              {/* {groceryReducers.reduce((acc, curr) => {
                  let Tprice = acc + curr.price * amount;
                  {
                    // / let round = Number(Tprice).toFixed(1) /
                  }
                  return (Tprice);
                }, 0)} */}
            </Text>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modal}
            onRequestClose={() => {
              setModal(false);
            }}>
            <Checkout closeBtn={setModal} />
          </Modal>
        </View>
      </View>
    </View>
    // </ScrollView>
  );
};

export default Cart;
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  inputStyle: {
    margin: 5,
  },
  modalView: {
    position: 'absolute',
    bottom: 2,
    width: '100%',
    backgroundColor: 'white',
  },
  modalButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
