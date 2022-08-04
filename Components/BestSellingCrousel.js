import React, {useState, useRef, useEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import database from '@react-native-firebase/database';
import {addGroceryItem, addToCart} from '../store/actions/grocery';
import {useDispatch} from 'react-redux';

// const data = [
//   {
//     id: 1,
//     pic: require('../Assets/pepper.png'),
//     name: 'Bell Pepper Red',
//     qty:'1kg',
//     price:'1.99'
//   },
//   {
//     id: 2,
//     pic: require('../Assets/ginger.png'),
//     name: 'Ginger',
//     qty:'250gm',
//     price:'4.99'
//   },
//   {
//     id: 3,
//     pic: require('../Assets/OrganicBanana.png'),
//     name: 'Organic Bananas',
//     qty:'7pcs',
//     price:'4.99'
//   },
// ];

const renderItem = ({item}, navigation, Dispatch) => {
  if (item.offer == 'BestSelling') {
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
              amount: item.amount,
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

        <View style={styles.itemPriceView}>
          <Text style={styles.itemPrice}>${item.price}</Text>
          <TouchableOpacity
            style={styles.itemQtyBtn}
            onPress={() =>
              Dispatch(
                addToCart({
                  id:item.id,
                  Img: item.Img,
                  title: item.title,
                  qty: item.qty,
                  price: item.price,
                  amount: item.amount,
                }),
              )
            }>
            <Image source={require('../Assets/plusWhite.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const BestSellingCrousel = ({navigation}) => {
  const [data, setData] = useState([]);
  const Dispatch = useDispatch();
  useEffect(() => {
    readUserData();
  }, []);

  //ReadUser data from rnFirebase realtime DB
  const readUserData = async () => {
    database()
      .ref('/Data/')
      .on('value', snapshot => {
        //  console.log("data ====>>>",Object.values(snapshot.val()))
        setData(Object.values(snapshot.val()));
      });
  };
  return (
    <FlatList
      data={data}
      renderItem={item => renderItem(item, navigation, Dispatch)}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      keyExtractor={item => item.id}
    />
  );
};

export default BestSellingCrousel;

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
    alignItems: 'center',
    justifyContent: 'center',
    // height:60,
    // width:100,
    // borderWidth:2,
    // backgroundColor:'red',
    // left:30
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

// id:1,2,3.....
// 	title: apple,banana,meat,pepper
// 	img: path
// 	category: Rice ,Pulse, Bevrage
// 	price: $4.55
// 	qty: 1kg , 1Ltr, 250 gm [unit and qty]
// 	desc: this is product.....
// 	offer: Best selling,  Exculsive offer ,null
// 	rating: 2.4 [total rating user(345)]
