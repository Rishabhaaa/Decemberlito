import React,{Component, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/Home/Home'; 
import Handbags from './pages/WOMEN/Handbags';
import { TouchableOpacity ,Text,View,Image,TextInput} from 'react-native';
import Header from "./Component/Header";
import Footer2 from "./Component/Footer2";
import Shop from './pages/Home/Shop';
import Itemdata from './pages/Home/itemdata';
import { FlatList } from 'react-native-gesture-handler';
import RentHandbags from './pages/RENT/RentHandbags';
import Bidtowin from './pages/Home/Bidtowin';
import Itemdetailsscreen from './pages/Itemdetails/Itemdetailsscreen';

import MensShoes from './pages/MENS/MensShoes'; 
import Girls from './pages/Kids/Girls';
import Boys from './pages/Kids/Boys';

import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup';
import Offerheader from './Component/Offerheader';
import Whatsapp from './Component/Whatsapp';
import Rentscreen from './pages/RENT/Rentscreen';
import Shopingcartscreen from './pages/Shopingcart/Shopingcartscreen';
// import MensBelt from './pages/MENS/MensBelt';
// import MensWallet from './pages/MENS/MensWallet';



import Forgot from './pages/Forgot/Forgot'

import Viewitems from './pages/Home/Viewitems';

import Drawer_menu from './Component/Drwar';

import SellWithUss from './pages/Sellwithus/SellWithUss';

import Brandscreen  from './pages/Brands/Brandscreen';

import Authenticationscreen from './pages/Authentication/Authenticationscreen';

import Salescreen from './pages/Sale/Salescreen';



 


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function CustomDrawerContent({ navigation }) {
  return (
    <Drawer_menu/>
//     <View style={{marginLeft:12}}>
//         <View style={{flexDirection:"row",marginTop:12,justifyContent:"space-between",marginTop:20}}>
//         <TextInput placeholder='Search' style={{width:"70%",fontSize:16}}></TextInput>
//           <Image source={require('./Images/search.png')} style={{width:"18%",height:20,alignSelf:"center"}}/>
//         </View>


//    <View style={{borderBottomWidth:.24,borderBottomColor:"grey",width:"95%",alignSelf:"center"}}></View>
      
//       <View style={{padding:15,marginTop:20,marginBottom:12}}>
//               <TouchableOpacity 
//               onPress={()=>navigation.navigate('Home')}
//               style={{fontWeight:"bold",fontSize:17,color:"#000"}}><Text style={{fontWeight:"bold",fontSize:17,color:"#000"}}>HOME</Text></TouchableOpacity>
//               <View style={{flexDirection:"row",justifyContent:"space-between"}}>
//                       <Text style={{fontWeight:"bold",fontSize:17,color:"#000",marginTop:18}}>WOMEN</Text>
//                       <TouchableOpacity 
//                       onPress={()=>{}}
//                       style={{justifyContent:"center"}}><Image source={require('./Images/play.png')} style={{width:"64%",height:10,marginRight:12,tintColor:"#918e97"}}/></TouchableOpacity>
//               </View>
//               <FlatList
//               data={[1,2,3]}
//                 renderItem={({item})=>
//                 <TouchableOpacity>
//                    <Text>yesss</Text>
//                 </TouchableOpacity>
               
//               }
//               />

//               <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between"}}>
//                   <Text style={{fontWeight:"bold",fontSize:17,color:"#000",marginTop:18}}>RENT</Text>
//                   <TouchableOpacity style={{justifyContent:"center"}}><Image source={require('./Images/play.png')} style={{width:"64%",height:10,marginRight:12,tintColor:"#918e97"}}/>
//                   </TouchableOpacity>
//               </TouchableOpacity>

//               <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between"}}>
//                     <Text style={{fontWeight:"bold",fontSize:17,color:"#000",marginTop:18}}>MEN'S</Text>
//                     <TouchableOpacity style={{justifyContent:"center"}}><Image source={require('./Images/play.png')} style={{width:"64%",height:10,marginRight:12,tintColor:"#918e97"}}/></TouchableOpacity>
//              </TouchableOpacity>

//              <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between"}}>
//                     <Text style={{fontWeight:"bold",fontSize:17,color:"#000",marginTop:18}}>KIDS</Text>
//                     <TouchableOpacity style={{justifyContent:"center"}}><Image source={require('./Images/play.png')} style={{width:"64%",height:10,marginRight:12,tintColor:"#918e97"}}/></TouchableOpacity>
//              </TouchableOpacity>

//               <TouchableOpacity style={{fontWeight:"bold",fontSize:17,color:"#000"}}><Text style={{fontWeight:"bold",fontSize:17,color:"#000",marginTop:18}}>SALE</Text></TouchableOpacity>

//               <TouchableOpacity style={{fontWeight:"bold",fontSize:17,color:"#000"}}><Text style={{fontWeight:"bold",fontSize:17,color:"#000",marginTop:18}}>SELL WITH US</Text></TouchableOpacity>

//               <TouchableOpacity style={{fontWeight:"bold",fontSize:17,color:"#000"}}><Text style={{fontWeight:"bold",fontSize:17,color:"#000",marginTop:18}}>BRANDS</Text></TouchableOpacity>

//               <TouchableOpacity style={{fontWeight:"bold",fontSize:17,color:"#000"}}><Text style={{fontWeight:"bold",fontSize:17,color:"#000",marginTop:18}}>AUTHENTICATION</Text></TouchableOpacity>
//       </View>
//       <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:90,marginRight:18}}>
//             <View style={{flexDirection:"row"}}>
//             <Image source={require('./Images/trolley.png')} style={{width:20,height:20,resizeMode:"contain"}}/>
//             <TouchableOpacity><Text style={{fontWeight:"bold",fontSize:17,color:"#000",marginLeft:12}}>SHOPPING CART</Text>
// </TouchableOpacity>
//             </View>
//             <Text style={{borderRadius:20,borderWidth:1,backgroundColor:"#000",color:"#fff",alignContent:"center",marginBottom:30,width:22,textAlign:"center"}}>0</Text>

//       </View>

//       <View style={{flexDirection:"row"}}>
//             <Image source={require('./Images/user.png')} style={{width:20,height:20,resizeMode:"contain"}}/>
//             <TouchableOpacity><Text style={{fontWeight:"bold",fontSize:17,color:"#000",marginLeft:12}}>LOGIN</Text>
// </TouchableOpacity>
//             </View>



//   </View>
  );
}




export default class App extends Component {
  
constructor(props){
  super(props)
  this.state={}
}
MyDrawarFun(){
  return(
   <Drawer.Navigator  drawerContent={(props) => <Drawer_menu {...props} />}screenOptions={{ headerShown: false }}>
             {/* <Drawer.Screen name="Header" component={Header} />  */}
             <Drawer.Screen name="Home" component={Home} /> 
             <Drawer.Screen name="Handbags" component={Handbags} />
             <Drawer.Screen name='Itemdata' component={Itemdata}/>
             <Drawer.Screen name='Viewitems' component={Viewitems}/>
             <Drawer.Screen name='RentHandbags' component={RentHandbags}/>

               {/* <Drawer.Screen name='MensBelt' component={MensBelt}/> */}
             <Drawer.Screen name='MensShoes' component={MensShoes}/>
             <Drawer.Screen name='Boys' component={Boys}/>
             <Drawer.Screen name='Girls' component={Girls}/>
             <Drawer.Screen name='SellWithUss' component={SellWithUss}/>
             <Drawer.Screen name='Brandscreen' component={Brandscreen}/>
             <Drawer.Screen name='Authenticationscreen' component={Authenticationscreen}/>
             <Drawer.Screen name='Salescreen' component={Salescreen}/>

             <Drawer.Screen name='Shopingcartscreen' component={Shopingcartscreen}/>  

              <Drawer.Screen name='Itemdetailsscreen' component={Itemdetailsscreen}/>

             <Drawer.Screen name='Login' component={Login}/>
             <Drawer.Screen name='Signup' component={Signup}/>
             <Drawer.Screen name='Shop' component={Shop}/>
             <Drawer.Screen name='Rentscreen' component={Rentscreen}/>
             <Drawer.Screen name='Bidtowin' component={Bidtowin}/>


 </Drawer.Navigator>
  )
 }
render(){
  return (
  
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="MyDrawarFun" component={this.MyDrawarFun}/>
        {/* <Stack.Screen name="Shop" component={Shop}/> */}
        <Stack.Screen name="Handbags" component={Handbags}/>
{/*         
        <Stack.Screen name='MensWallet' component={MensWallet}/>
        <Stack.Screen name='MensBelt' component={MesnBelt}/> */}

        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Offerheader" component={Offerheader}/>
        <Stack.Screen name="Forgot" component={Forgot}/>
        {/* <Stack.Screen name="Shopingcartscreen" component={Shopingcartscreen}/> */}

      </Stack.Navigator>
    </NavigationContainer> 
  );
}
  

}



// import React, { Component } from "react";
// import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity,Image } from "react-native";

// class App extends Component {
//   state = {
//     modalVisible: false
//   };

//   setModalVisible = (visible) => {
//     this.setState({ modalVisible: visible });
//   }

//   render() {
//     const { modalVisible } = this.state;
//     return (
//       <View style={styles.centeredView}>
//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           style={styles.modelBox}
//           onRequestClose={() => {
//             Alert.alert("Modal has been closed.");
//             this.setModalVisible(!modalVisible);
//           }}
//         >
//           <View style={styles.centeredView}>
//             <View style={styles.modalView}>
//             <TouchableOpacity
//                 style={[styles.button, styles.buttonClose]}
//                 onPress={() => this.setModalVisible(!modalVisible)}
//               >
//                 <Text style={styles.textStyle}>X</Text>
//               </TouchableOpacity>
//               <Text style={{fontWeight:'bold',justifyContent:'flex-start',fontSize:35,color:'black'}}>Welcome to Lito!</Text>
//     <Text style={{color:'black'}}> How can i help you today ?</Text>
//     <View style={{flexDirection:'row',backgroundColor:'#25D366',borderRadius:20,marginTop:15}}>           
//  <View style={{width:'40%',height:30}}>
// <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://web.whatsapp.com/')}}><Image source={require('./Images/whatsapp.png')} style={{width:20,height:20,marginTop:7,marginLeft:80}} />
// </TouchableOpacity>
// </View>

// <View> 
// <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://web.whatsapp.com/')}}>
// <Text style={{color:'white',fontSize:10,marginRight:80,fontSize:15,marginTop:5}}>START CHAT</Text>
// </TouchableOpacity>
// </View>

// </View>
             
//             </View>
//           </View>
//         </Modal>
//         <TouchableOpacity
          
//           onPress={() => this.setModalVisible(true)}
//         >
//           {/* <Text style={styles.textStyle}>Show Modal</Text> */}
//           <Image source={require('./Images/whatsapp.png')}         
//                  style={{width:30,height:30}}/>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22,
    
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     borderWidth:2,
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2
//   },
//   buttonOpen: {
//     backgroundColor: "#ffb606",
//   },
//   buttonClose: {
//      color:"#e5e5e5"
//   },
//   textStyle: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: "center",
//     borderWidth:2,

//   },
//   modelBox:{
//     backgroundColor:'rgba(52, 52, 52, 0.8)',
//   }
// });

// export default App;
