import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { ScrollView } from 'react-native-virtualized-view';
import {useDispatch, useSelector} from 'react-redux';
import React, {useState} from 'react';
import { increment,decrement } from '../store/actions/grocery';

const QtyCounter = (pId) => {
  // console.log(pId)
  let [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const addtoBasketCounter = useSelector(
    state => state.groceryReducers.groceryItems.map((item)=>{
     return(item.id)
    }),
  );
  // console.log("qtycounter",addtoBasketCounter)

  return (
    //  Qty Count
    <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
      <TouchableOpacity
        onPress={() =>  dispatch(decrement())}
            
        style={{
          justifyContent: 'center',
        }}>
        <Image
          // style={styles.minusImg}
          source={require('../Assets/minus.png')}
        />
      </TouchableOpacity>
      <View style={styles.itemQty}>
        <TextInput
          textAlign={'center'}
          maxLength={2}
        //   value={qty}
        //   onEndEditing={(val) => {
        //     setQty(val);
        //   }}
        >
          {addtoBasketCounter}
        </TextInput>
      </View>
      <TouchableOpacity
        onPress={() =>  dispatch(increment())}
        style={{justifyContent: 'center'}}>
        <Image
          // style={styles.minusImg}
          source={require('../Assets/plus.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default QtyCounter;

const styles = StyleSheet.create({
  itemQty: {
    borderWidth: 2,
    borderRadius: 10,
    // paddingHorizontal: 10,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E2E2E2',
  },
});
