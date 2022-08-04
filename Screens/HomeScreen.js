import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  RefreshControl,
} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';

import React from 'react';

import Carousel from '../Components/Carousel';
import SearchBar from '../Components/SearchBar';
import GroceriesCrousel from '../Components/GroceriesCrousel';
import ExclusiveCrousel from '../Components/ExclusiveCrousel';
import BestSellingCrousel from '../Components/BestSellingCrousel';
import ItemAfterGroceries from '../Components/ItemAfterGroceries';
import Locations from '../Components/maps';

const HomeScreen = ({navigation}) => {
  // console.log("HOMESCREEN ===>>>>",navigation)
  return (
    <View
    // style={{height:100}}
    >
      <ScrollView
      // onRefresh={onRefresh}
      >
        <View style={styles.container}>
          {/* LOGO */}
          <View style={{marginTop: 10}}>
            <Image
              style={{marginHorizontal: 180}}
              source={require('../Assets/Group.png')}
            />
          </View>
          {/* location */}
          <View
            style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
            <TouchableOpacity onPress={() => navigation.navigate(Locations)}>
              <Text style={{fontWeight: 'bold', fontSize: 20}}>
                Sector 126,Noida
              </Text>
            </TouchableOpacity>
          </View>
          {/* SearchBar */}
          <SearchBar />
          {/* CROUSEL */}
          <View
          // style={{borderWidth:1,borderRadius:10,marginHorizontal:10}}
          >
            <Carousel />
          </View>
          {/* HEADER EXCLUSIVE OFFER */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 15,
              marginVertical: 20,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
              Exclusive Offer
            </Text>
            <TouchableOpacity
              onPress={() => {
                alert(' EXCLUSIVE OFFER ');
              }}>
              <Text style={{color: '#53B175'}}>See all</Text>
            </TouchableOpacity>
          </View>
          {/* ITEM EXCLUSIVE OFFER */}
          <View style={styles.item1}>
            <ExclusiveCrousel navigation={navigation} />
          </View>
          {/* HEADER Best Selling  */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 15,
              marginVertical: 20,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
              Best Selling
            </Text>
            <TouchableOpacity
              onPress={() => {
                alert(' Best Selling ');
              }}>
              <Text style={{color: '#53B175'}}>See all</Text>
            </TouchableOpacity>
          </View>
          {/* ITEM BEST SELLING  */}
          <View style={styles.item1}>
            <BestSellingCrousel navigation={navigation} />
          </View>
          {/* HEADER Groceries */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginHorizontal: 15,
              marginVertical: 20,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>
              Groceries
            </Text>
            <TouchableOpacity
              onPress={() => {
                alert(' Groceries ');
              }}>
              <Text style={{color: '#53B175'}}>See all</Text>
            </TouchableOpacity>
          </View>
          {/* Grocerie's CARD */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginLeft: 15,
            }}>
            <GroceriesCrousel navigation={navigation} />
          </View>
          {/* ITEM AFTER GROCERIES  */}
          <View style={styles.item1}>
            <ItemAfterGroceries navigation={navigation} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    // borderWidth:3,
    // borderColor:"red",
    // backgroundColor:'#fff'
  },
  item1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  item2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 40,
  },
  itemCard1: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#E2E2E2',
  },
  itemCardImg: {
    alignItems: 'center',
    marginVertical: 30,
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
