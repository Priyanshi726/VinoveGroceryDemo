import React, {useState, useRef, useEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import database from '@react-native-firebase/database';
import {useDispatch, useSelector} from 'react-redux';

import {addGroceryItem, addToCart} from '../store/actions/grocery';

// const data = [
//   {
//     id: 1,
//     pic: require('../Assets/pngfuel.png'),
//     name: 'Diet Coke',
//     qty: '355ml',
//     price: 1.89,
//   },
//   {
//     id: 2,
//     pic: require('../Assets/homebanana.png'),
//     name: 'sprite',
//     qty: '355ml',
//     price: 1.99,
//   },
//   {
//     id: 3,
//     pic: require('../Assets/pngfuel1.png'),
//     name: 'Diet Coke',
//     qty: '355ml',
//     price: 1.99,
//   },
// ];

const renderItem = ({item}, navigation, Dispatch, cart) => {
  // console.log(navigation)

  if (item.offer == 'ExclusiveOffer') {
    return (
      // CARD1111111111111111111111
      <View style={styles.itemCard1}>
        {/* IMG,TITLE,DES */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ProductDetail', {
              id: item.id,
              Img: item.Img,
              title: item.title,
              category: item.category,
              price: item.price,
              qty: item.qty,
              desc: item.desc,
              offer: item.offer,
              amount:item.amount
            });
          }}>
          <View style={styles.itemCardImg}>
            <Image style={{height: 100, width: 100}} source={{uri: item.Img}} />
            {/* <Text>{item.img}</Text> */}
          </View>

          <View style={styles.itemCardDes}>
            <Text style={styles.itemCardHead}>{item.title}</Text>
            <Text>{item.qty}</Text>
          </View>
        </TouchableOpacity>

        <Text style={{color: 'red'}}>{cart}</Text>
        <View style={styles.itemPriceView}>
          <Text style={styles.itemPrice}>${item.price}</Text>
          <TouchableOpacity
            style={styles.itemQtyBtn}
            onPress={() => Dispatch(addToCart({ id:item.id,
              Img:item.Img, 
              title:item.title,
              qty:item.qty, 
              price:item.price,
              amount:item.amount
              }))}>
            <Image source={require('../Assets/plusWhite.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const ExclusiveCrousel = ({navigation}) => {
  const [data, setData] = useState([]);
  
  const Dispatch = useDispatch();
  // console.log('hello ====>>>',cart);
  useEffect(() => {
    readUserData();
  }, []);

  //ReadUser data from rnFirebase realtime DB
  let readUserData = async () => {
    database()
      .ref('/Data/')
      .on('value', snapshot => {
        //  console.log("data ====>>>",Object.values(snapshot.val()).map((item)=>{
        //   console.log("idea",item.amount)
        //  }))
        setData(Object.values(snapshot.val()));
      });
  };
  // useEffect(() => {
  //   updateQTY();
  // }, []);

  //  const updateQTY= async ()=> {
  //   database.ref('/Data/' +id).update({
  //     amount: ServerValue.increment(+1)
  //   })
  // }

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem(item, navigation, Dispatch)}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ExclusiveCrousel;

const styles = StyleSheet.create({
  itemCard1: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#E2E2E2',
    marginHorizontal: 10,
  },
  itemCardImg: {
    alignItems: 'center',
    marginVertical: 30,
    justifyContent: 'center',
    // height:100,
    // width:100,
    // left:30
    // borderWidth:2,
    // backgroundColor:'red',
  },

  itemCardDes: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  itemCardHead: {
    color: '#000',
    fontSize: 15,
    fontWeight: '500',
  },
  itemPriceView: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  itemPrice: {
    marginVertical: 10,
    marginHorizontal: 10,
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  itemQtyBtn: {
    marginLeft: 70,
    marginRight: 10,
    backgroundColor: '#53B175',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});