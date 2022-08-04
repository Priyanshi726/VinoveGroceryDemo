import React, {useState, useEffect} from 'react';
import {
  FlatList,
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  LogBox
} from 'react-native';

import database from '@react-native-firebase/database';
import { addGroceryItem, addToCart } from '../store/actions/grocery';
import { useDispatch } from 'react-redux';


  // const data = [
  //   {
  //     id: 1,
  //     pic: require('../Assets/BoilChicken.png'),
  //     name: 'Boiler Chicken',
  //     qty: '1kg',
  //     price: '4.99',
  //     color:'#234455'
  //   },
  //   {
  //     id: 2,
  //     pic: require('../Assets/pngfuel1.png'),
  //     name: 'sprite',
  //     qty: '355ml',
  //     price: 1.99,
  //     color:'red'
  //   },
  //   {
  //     id: 3,
  //     pic: require('../Assets/pngfuel.png'),
  //     name: 'Diet Coke',
  //     qty: '355ml',
  //     price: 1.339,
  //   },
  //   {
  //     id: 4,
  //     pic: require('../Assets/pngfuel.png'),
  //     name: 'Diet Coke',
  //     qty: '355ml',
  //     price: 1.339,
  //   },
  //   {
  //     id: 5,
  //     pic: require('../Assets/pngfuel.png'),
  //     name: 'Diet Coke',
  //     qty: '355ml',
  //     price: 1.339,
  //   },
  //   {
  //     id: 6,
  //     pic: require('../Assets/pngfuel.png'),
  //     name: 'Diet Coke',
  //     qty: '355ml',
  //     price: 1.339,
  //   },
  //   {
  //     id: 7,
  //     pic: require('../Assets/pngfuel.png'),
  //     name: 'Diet Coke',
  //     qty: '355ml',
  //     price: 1.339,
  //   },
  // ];


const numCol = 2;
const WIDTH = Dimensions.get('window').width - 30;

const renderItem = ({item}, navigation,Dispatch) => {
  return (
    // CARD1111111111111111111111
    <View style={styles.itemCard1}>
      <TouchableOpacity
      onPress={() => {
            navigation.navigate('ProductDetail', {
              id:item.id,
              Img:item.Img,
              title: item.title,
              category: item.category,
              price: item.price,
              qty: item.qty,
              desc: item.desc,
              offer: item.offer,
              amount:item.amount
            });
          }}
      >
        <View style={styles.itemCardImg}>
        <Image 
        style={{ height:100,width:100,}}
        source={{uri:item.Img}} 
        />
            {/* <Text>{item.img}</Text> */}
        </View>

        <View style={styles.itemCardDes}>
          <Text style={styles.itemCardHead}>{item.title}</Text>
          <Text>{item.qty}</Text>
        </View>
      </TouchableOpacity>

      <View style={styles.itemPriceView}>
        <Text style={styles.itemPrice}>${item.price}</Text>
        <TouchableOpacity style={styles.itemQtyBtn} onPress={()=>Dispatch(addToCart({ id:item.id,
              Img:item.Img, 
              title:item.title,
              qty:item.qty, 
              price:item.price,
              amount:item.amount}))}>
          <Image source={require('../Assets/plusWhite.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ItemAfterGroceries = ({navigation}) => {

  const Dispatch = useDispatch();
  const [data, setData] = useState([])

    useEffect(() => {
      readUserData()
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
        
      }, [])
    
      //ReadUser data from rnFirebase realtime DB
  const readUserData = async () => {
    database().ref('/Data/')
    .on('value', snapshot => {
    //  console.log("data ====>>>",Object.values(snapshot.val()))
    setData(Object.values(snapshot.val()))
   });
   };

  return (
    <FlatList
      nestedScrollEnabled
      data={data}
      renderItem={item => renderItem(item, navigation,Dispatch)}
      numColumns={numCol}
      keyExtractor={item => item.id}
    />
  );
};

export default ItemAfterGroceries;

const styles = StyleSheet.create({
  itemCard1: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#E2E2E2',
    marginHorizontal: 7,
    marginVertical: 10,
    width: WIDTH / numCol,
  },
  itemCardImg: {
    marginVertical: 30,
    alignItems:'center',
    justifyContent:'center',
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
    marginLeft: 60,
    marginRight: 10,
    backgroundColor: '#53B175',
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
});
