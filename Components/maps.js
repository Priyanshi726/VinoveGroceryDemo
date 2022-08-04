import React, {useState,useEffect} from 'react';
import Geocoder from 'react-native-geocoding';
import { View, Text, ActivityIndicator, Button } from 'react-native';
import MapView, { Marker,Geojson,PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import { FlatList } from 'react-native-gesture-handler';


const Map = () => {

  const [lats,setLats] =useState (23.456778)
  const [longs,setLongs] = useState(84.54768)

  Geocoder.init("AIzaSyAoiaUHpcKsVu_hCQzriK06dLYdKs-FAx4"); // use a valid API key
// Search by geo-location (reverse geo-code)
Geocoder.from(84.54, 23.45)
        .then(json => {
                var addressComponent = json.results[0].address_components[0];
            // console.log(addressComponent);
        })
        .catch(error => console.warn(error));
  
  Geolocation.getCurrentPosition(
    (position) => {
    // console.log(position);


  
    setLats(position.coords.latitude)
    setLongs(position.coords.longitude)
    },
    (error) => {
    console.log(error.code, error.message);
    },
    { enableHighAccuracy:
    true, timeout:
    9999999,maximumAge:
    9999999 }
    );

  return(
   
    <View>

       <MapView
          style={{width:'100%',height:'100%'}}
          provider = {PROVIDER_GOOGLE}
          showsUserLocation={true}
          mapType='satellite'
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          >
          <Marker
            // key={index}
            coordinate={{latitude : lats , longitude : longs}}
            title={'THIS is ME'}
            description={'NOT a Desc'}
          />

          </MapView>
          <FlatList>



          </FlatList>
    </View>
  )  
}                                                                               

export default Map






















// import React, {useState, useEffect} from 'react';
// import {View, Text, ActivityIndicator, Button} from 'react-native';
// import MapView, {
//   Marker,
//   PROVIDER_DEFAULT,
//   PROVIDER_GOOGLE,
// } from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';


// const Locations = navigation => {
//   const [lats, setLats] = useState(23.456778);
//   const [longs, setLongs] = useState(84.54768);



  

//   Geolocation.getCurrentPosition(
//     position => {
//       // console.log(position);
//       setLats(position.coords.latitude);
//       setLongs(position.coords.longitude);
//     },
//     error => {
//       console.log(error.code, error.message);
//     },
//     {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
//   );
  

//   return (
//     <View style={{flex: 1, width: '100%', height: '100%'}}>
//       <MapView
//         style={{flex: 1, width: '100%', height: '100%'}} 
//         provider={'google'}
//         showsUserLocation={true}
//         mapType="hybrid"
//         region={{
//           latitude: 23.456778,
//           longitude: 84.54768,
//           latitudeDelta: 0.7,
//           longitudeDelta: 0.7,
//         }}>
//         <Marker
//           // key={index}
//           coordinate={{latitude: lats, longitude: longs}}
//           title={'THIS is ME'}
//           description={'NOT a Desc'}
//         />
//       </MapView>
    
//       {/* <Button
//           onPress={'getAddressFromCoordinates'}></Button> */}

//       {/* <getAddressFromCoordinates/> */}

      
//     </View>
//   );
// };

// export default Locations;
