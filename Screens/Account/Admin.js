import React,{useState} from 'react'
import { View, Text ,TextInput,Image,StyleSheet,TouchableOpacity,TouchableWithoutFeedback,ScrollView} from 'react-native'

// import {launchImageLibrary} from 'react-native-image-picker';

import database from '@react-native-firebase/database';

import * as yup from 'yup';
import { Formik } from 'formik';


const Admin = () => {
 
  const [downloadurl, setDownloadurl] = useState("https://reactjs.org/logo-og.png")


  //open library and upload pic to firebase
  // const pickImageAndUpload = ()=>{
  //     launchImageLibrary({quality:0.5},(fileobj)=>{
  //     //    console.log(fileobj.assets[0].uri)
  //      const uploadTask =  storage().ref().child(`/profilePictures/${Date.now()}`).putFile(fileobj.assets[0].uri)
  //             uploadTask.on('state_changed', 
  //              (snapshot) => {

  //                 var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //                 if(progress==100) alert('image uploaded')
                  
  //             }, 
  //             (error) => {
  //                 alert("error uploading image",error)
  //             }, 
  //             //For fetching uploaded photo url
  //             () => {
  //                 uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
  //                     setDownloadurl(downloadURL)
  //                 });
  //             }
  //             );
  //     })
  // }

  //Form validation YUP Schema
  const loginValidationSchema = yup.object().shape({
    name: yup.string().min(3, 'must be at least 3 characters long'),
    phone: yup.string()
    ,email: yup.string(),
    password: yup.string(),
    
  }); 

  //Create user in rnFirebase
  const createUser=(values)=>{ 
    
    const newReference = database().ref('/Data').push();
    
    //Pass all input field as an object to .set() for creating user
    const ids = newReference.key;
    const userData = {
      id: ids,
      Img: downloadurl,
      title: values.title,
      category: values.category,
      price: values.price,
      qty: values.qty,
      desc: values.desc,
      offer: values.offer,
    }
    //Creating refernce in rnFirebase
    newReference.set(userData)
    .then(() => console.log('Data updated.'))
    // .then(()=> navigation.navigate('HomeScreen'))
  }
  
  return (
    <Formik
    initialValues={{name:'', email: '',phone:'+91',password:''}}
    validateOnMount={true}
    onSubmit={
      values => {createUser(values)} 
     //  console.log(values.email)
    }
    validationSchema={loginValidationSchema}
  >
   {({ handleChange, handleBlur, handleSubmit, values,touched,errors,isValid }) => (
    <ScrollView style={styles.main}>
    <View>
            <Image
            style={{height:170,width:170,borderWidth:2,borderColor:"dodgerblue",borderRadius:85,marginHorizontal:120,marginVertical:15}}
            source={{uri:downloadurl}}/>

          <View style={styles.box2}>
             
             
              <TouchableOpacity style={styles.tco} onPress={()=>pickImageAndUpload()}>
                  <Image 
                    style={styles.cty}
                    source={require('../../Assets/plus.png')}/>
              </TouchableOpacity>
             

          </View>
    </View>
        
       <View>

       {/* Title */}
          <Text style={styles.Texts}>Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Yash Dubey"
            autoCapitalize='none'
            // value={name}
            // onChangeText={text => setName(text)}
            onChangeText={handleChange('title')}
            onBlur={handleBlur('title')}
            value={values.title}
          />
          {(errors.name && touched.name) && 
            <Text style={styles.ErrorText}>{errors.name}</Text>
          }

          {/* category */}
          <Text  style={styles.Texts}>category</Text>
          <TextInput
            style={styles.input}
            maxLength={13}
            placeholder="9918745589"
            keyboardType="phone-pad"
            // value={phone}
            // onChangeText={number => setPhone(number)}
            onChangeText={handleChange('category')}
            onBlur={handleBlur('category')}
            value={values.category}
          />
          {(errors.phone && touched.phone) && 
            <Text style={styles.ErrorText}>{errors.phone}</Text>
          }


          {/* price */}
          <Text  style={styles.Texts}>price</Text>
          <TextInput
            style={styles.input}
            autoCapitalize='none'
            placeholder="YashDubey.Official@gemail.com"
            keyboardType="email-address"
            // value={email}
            // onChangeText={text => setEmail(text)}
            onChangeText={handleChange('price')}
            onBlur={handleBlur('price')}
            value={values.price}
          />
          {(errors.email && touched.email) && 
            <Text style={styles.ErrorText}>{errors.email}</Text>
          }

          {/* qty */}
          <Text  style={styles.Texts}>qty</Text>
          <TextInput
            style={styles.input}
            placeholder="Yash@123#"
            keyboardType="default"
            // secureTextEntry
            // onChangeText={text => setPassword(text)}
            // value={password}
            onChangeText={handleChange('qty')}
            onBlur={handleBlur('qty')}
            value={values.qty}
          />
          {(errors.password && touched.password) && 
            <Text style={styles.ErrorText}>{errors.password}</Text>
          }
          {/* desc */}
          <Text style={styles.Texts}>desc</Text>
          <TextInput
            style={styles.input}
            placeholder="Yash Dubey"
            autoCapitalize='none'
            // value={name}
            // onChangeText={text => setName(text)}
            onChangeText={handleChange('desc')}
            onBlur={handleBlur('desc')}
            value={values.desc}
          />
          {(errors.name && touched.name) && 
            <Text style={styles.ErrorText}>{errors.name}</Text>
          }
          {/* offer */}
          <Text style={styles.Texts}>Offer</Text>
          <TextInput
            style={styles.input}
            placeholder="Yash Dubey"
            autoCapitalize='none'
            // value={name}
            // onChangeText={text => setName(text)}
            onChangeText={handleChange('Offer')}
            onBlur={handleBlur('Offer')}
            value={values.offer}
          />
          {(errors.name && touched.name) && 
            <Text style={styles.ErrorText}>{errors.name}</Text>
          }

          

          <TouchableWithoutFeedback  onPress={handleSubmit}>
        
            <View style={styles.button}>
              <Text style={{color:'white'}}>Create User</Text>
            </View>

          </TouchableWithoutFeedback>
       </View>
     
       </ScrollView>
       )}

</Formik>
  
  )
}

export default Admin



const styles = StyleSheet.create({
  text:{
      fontSize:22,
      color:"dodgerblue",
      margin:20,
     
  },

  box2:{
      paddingHorizontal:40,
      justifyContent:"space-evenly",
      
  },
  input: {
    height: 40,
    width:350,
    margin: 12,
    borderWidth: 1,
    borderRadius:50,padding:11

  },
  Texts:{
      marginTop:10,
    marginLeft:20,
    color:'#000'
  },
  button: {
    justifyContent:'center',
    alignItems: "center",
    backgroundColor: "#64beff",
    padding: 10,
    width:150,
    borderRadius:50,
    marginTop:40,
    marginLeft:115,

  },
  ErrorText:{
    marginLeft:20,
    marginTop:-10,
    color:'red'
  },

mod:{
  color:'dodgerblue',
  margin:20,
  flexDirection:'row',
  justifyContent:'space-around'
 

},
tco:{
  flex:1,
  color:'dodgerblue'
},
cty:{
  position:'absolute',
  justifyContent:'center',
  alignItems: "center",
  padding: 1,
  marginLeft:140,
  // marginTop:30,
  bottom:15,
  left:60,
  height:35,
  width:35,
  backgroundColor:'#fff',
  borderRadius:20,
  borderColor:"dodgerblue",
  borderWidth:2
  
},
main:{
  // marginBottom:100
}
});
