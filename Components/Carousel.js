import React, {useState, useRef,useEffect} from 'react';
import {FlatList,Text, View, Dimensions, Image,Animated,StyleSheet} from 'react-native';


const data = [
  {
    id: 1,
    name: 'React JS',
    pic: require('../Assets/banner.png'),
  },
  {
    id: 2,
    name: 'JavaScript',
    pic: require('../Assets/banner.png'),
  },
  {
    id: 3,
    name: 'Node JS',
    pic: require('../Assets/banner.png'),
  },
];


const { width, heigth } = Dimensions.get('window')
let flatList

function infiniteScroll(dataList){
    const numberOfData = dataList.length
    let scrollValue = 0, scrolled = 0

    setInterval(function() {
        scrolled ++
        if(scrolled < numberOfData)
        scrollValue = scrollValue + width

        else{
            scrollValue = 0
            scrolled = 0
        }

        this.flatList.scrollToOffset({ animated: true, offset: scrollValue})
        
    }, 3000)
}

const renderItem = ({item}) => {
  return (
    <View>
      <Image source={item.pic} style={{marginHorizontal:10}} />
    </View>
  );
};

const Carousel = () => {
  const scrollX = new Animated.Value(0)
  let position = Animated.divide(scrollX, width)
  const [dataList, setDataList] = useState(data)

  useEffect(()=> {
    setDataList(data)
    infiniteScroll(dataList)
})


  if (data && data.length){
    
    return (
      <View>
  
      <FlatList
          data={dataList}
          renderItem={renderItem}
          ref = {(flatList) => {this.flatList = flatList}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          snapToAlignment="center"
          pagingEnabled
          scrollEnabled
          onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {useNativeDriver: false}
          )}
        />
        
        <View style={styles.dotView}>
          {data.map((_, i) => { 
              let opacity = position.interpolate({
                  inputRange: [i - 1, i, i + 1],
                  outputRange: [0.2, 1, 0.2],
                  extrapolate: 'clamp'

              })
              let widths = position.interpolate({
                  inputRange: [i-2, i, i+2],
                  outputRange: [10, 20, 10],
                  // extrapolate: 'clamp'
              })
              let margins = position.interpolate({
                  inputRange: [i-2, i, i+2],
                  outputRange: [5, 10, 5],
                  // extrapolate: 'clamp'
              })
              return (
                  <Animated.View
                      key={i}
                      style={{ opacity, height: 10, width: widths, backgroundColor: '#53B175', margin: 8, borderRadius: 5 }}
                  />
              )
          })}

      </View>
                
      </View>
    );
  }
};

export default Carousel;

const styles = StyleSheet.create({
  dotView: { flexDirection: 'row', justifyContent: 'center',bottom:27,  }
})