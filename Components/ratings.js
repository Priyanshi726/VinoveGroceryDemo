import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
 
const Ratings = () => {
  // To set the default Star Selected
  const [defaultRating, setDefaultRating] = useState(2);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
 

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? require( '../Assets/star_filled.png')
                    : require('../Assets/star_corner.png')
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.textStyleSmall}>
          Please Rate Us
        </Text>
        <View style={{marginLeft:200}}>                              
        {/* View to hold our Stars */}
        <CustomRatingBar />
        <Text style={styles.textStyle}>
          {/* To show the rating selected */}
          {defaultRating} / {Math.max.apply(null, maxRating)}
        </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
 
export default Ratings;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 18,
    color: '#000',
    marginTop: 18,
    fontWeight:'bold'
  },
  textStyleSmall: {
    textAlign: 'left',
    fontSize: 16,
    color: '#000',
    marginTop: 15,
    fontWeight:'bold',
  },
  buttonStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
    padding: 15,
    backgroundColor: '#8ad24e',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  starImageStyle: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
    
  },
});