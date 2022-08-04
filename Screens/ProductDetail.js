import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import { ScrollView } from 'react-native-virtualized-view';

import Ratings from '../Components/ratings';
import QtyCounter from '../Components/QtyCounter';
import {useDispatch, useSelector} from 'react-redux';
import countReducer from '../store/reducers/countreducer';
import {Button, TextInput} from 'react-native-paper';

import {addGroceryItem ,addToCart,addFavourite, delFavourite,increment, decrement} from '../store/actions/grocery'




const ProductDetail = props => {
  const [prdctDetail, setprdctDetail] = useState(true);
  const [Nutrients, setNutrients] = useState(false);
  const [Favourite, setFavourite] = useState(true);
  // const counter = useSelector(state=>state.groceryReducers.groceryItems.map(item => (item)));
  
  const Favouritesss = useSelector(state=>state.groceryReducers.Favourites);
  
  // const priceCounter = useSelector(state =>state.priceReducer)
  // const prccount = priceCounter.count;
  const {Img, title, qty, desc, rating,price,id,key} = props.route.params;
  const addtoBasketCounter=useSelector(state=>state.groceryReducers.cart);
  
  
  console.log('hiiiiiii=====>',addtoBasketCounter)
  const favouritess=useSelector(state=>state.groceryReducers)
  const dispatch = useDispatch();


  
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Items */}
        <View style={styles.itemImg}>
          <Image
            style={{height: 100, width: 100}}
            source={
              {uri: Img}
              // require('../Assets/itemApple.png')
            }
            />

        </View>

<View style={styles.itemTitle}>
          <View>
            <Text style={styles.itemTitleTxt}>{title}</Text>
            <Text>{qty}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              setFavourite(!Favourite);
              if (Favourite) {
                dispatch(
                  addFavourite({
                    
                    Img: Img,
                    title: title,
                    qty: qty,
                    price:price,
                    id:id
                  }),
                );
              } else {
                dispatch(          
                  delFavourite({key:key}
                  ),
                );
              }
            }}>
            {Favourite ? (
              <Image
                style={styles.centerView}
                source={require('../Assets/heart.png')}
              />
            ) : (
              <Image
                style={styles.centerView}
                source={require('../Assets/fullHeart.png')}
              />
            )}
          </TouchableOpacity>
        </View>

        {/* Rate */}
        <View style={styles.itemRateCard}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={()=>dispatch(decrement({ id:id,
          
          Img:Img, 
          title:title,
          qty:qty, 
          price:(price)}))}>
             <Image source={require('../Assets/minus.png')}/>
            </TouchableOpacity>
            <Text style={{margin:15,alignItems:'center'}}>
              {/* {counter.amount} */}
            </Text>

            <TouchableOpacity onPress={()=>dispatch(increment({ id:id,
          
          Img:Img, 
          title:title,
          qty:qty, 
          price:(price)}))}>
             <Image source={require('../Assets/plus.png')}/>
            </TouchableOpacity>
          {/* <QtyCounter pId={id}/> */}
          </View>
          {/* <Text style={styles.itemRate}>${route.params.price}</Text> */}
          {/* <Text>${price*{counter.amount}}</Text> */}
         
        </View>

        {/* Item Detail */}
        <View style={{marginBottom: 10}}>
          <View style={styles.productDetailView}>
            <Text style={styles.productDetailTitle}>Product Detail</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setprdctDetail(!prdctDetail);
                // alert(nutrient)
              }}>
              {prdctDetail ? (
                <Image source={require('../Assets/downArrow.png')} />
              ) : (
                <Image source={require('../Assets/rightArrow.png')} />
              )}
            </TouchableOpacity>
          </View>
          {prdctDetail ? (
            <View style={styles.productDetailDesc}>
              <Text>{desc}</Text>
            </View>
          ) : null}
        </View>

        {/* Nutrition */}
        <View style={{marginBottom: 15}}>
          <View style={styles.nutritionView}>
            <Text style={styles.nutritionTitle}>Nutritions</Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setNutrients(!Nutrients);
                // alert(nutrient)
              }}>
              {Nutrients ? (
                <Image source={require('../Assets/downArrow.png')} />
              ) : (
                <Image source={require('../Assets/rightArrow.png')} />
              )}
            </TouchableOpacity>
          </View>
          {Nutrients ? (
            <View style={styles.nutritionDesc}>
              <Text>{desc}</Text>
            </View>
          ) : null}
        </View>

        <Ratings />

        <TouchableOpacity style={styles.basketBtn} onPress={()=>dispatch(addToCart({
           id:id,
          amount:1,
    Img:Img, 
    title:title,
    qty:qty, 
    price:(price*(1))}))}>
          <Text style={styles.basketBtnTxt}>Add To Basket</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  itemImg: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
    paddingBottom: 50,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderEndWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
  },
  itemTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  itemTitleTxt: {color: '#000', fontSize: 20, fontWeight: 'bold'},
  centerView: {alignItems: 'center', justifyContent: 'center'},
  itemRateCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  itemQty: {
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    borderColor: '#E2E2E2',
  },
  minusImg: {marginVertical: 20},
  plusImg: {marginVertical: 10},
  itemRate: {marginVertical: 10},
  itemDetailCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  productDetail: {color: '#000', fontSize: 15, fontWeight: '500'},
  productDetailDesc: {marginHorizontal: 15, marginVertical: 10},
  nutritionView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 30,
  },
  nutrition: {color: '#000', fontSize: 15, fontWeight: '500'},
  reviewCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  review: {color: '#000', fontSize: 15, fontWeight: '500'},
  star: {flexDirection: 'row'},
  lastStar: {marginLeft: 20},
  basketBtn: {
    backgroundColor: '#53B175',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 10,
    marginVertical: 25,
  },
  basketBtnTxt: {color: '#fff'},
  productDetailView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginBottom: 10,
  },
  productDetailTitle: {
    color: '#000',
    fontSize: 15,
    fontWeight: '500',
  },
  nutritionTitle: {
    fontWeight: 'bold',
    color: '#000',
  },
});