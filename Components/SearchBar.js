import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity, FlatList,} from 'react-native'
import React, {useState} from 'react'

const SearchBar = () => {
  const [result, setResult] = useState('')
  console.log(result)
  return (
    <View style={{ backgroundColor:'#f3f2f3',overflow:'hidden',alignItems:'center',flexDirection:'row',height: 40,width:'95%',borderRadius:10,backgroundColor:'#f2f3f2',marginHorizontal:10,marginVertical:20}}>
    <Image
      style={{justifyContent:'center',alignItems:'center',marginHorizontal:10,}}
      source={require('../Assets/search.png')}
    />
    <TextInput
      style={{flexWrap:'wrap', flex:1,}}
      placeholder="Search Store"
      value={result}
      onChangeText={setResult}
    />
    </View>

  )
}

export default SearchBar

const styles = StyleSheet.create({})