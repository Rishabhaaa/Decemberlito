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
import Listshow from './pages/Home/Copmonents/ListShow';
import MensShoes from './pages/MENS/MensShoes'; 
// import MensBelt from './pages/MENS/MensBelt';
// import MensWallet from './pages/MENS/MensWallet';


import Girls from './pages/Kids/Girls';
// import Boys from './pages/Kids/Boys';

import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup';
import Offerheader from './Component/Offerheader';
import Whatsapp from './Component/Whatsapp';
import Rentscreen from './pages/RENT/Rentscreen';
import Shopingcartscreen from './pages/Shopingcart/Shopingcartscreen';
// import MensBelt from './pages/MENS/MensBelt';
// import MensWallet from './pages/MENS/MensWallet';



import Forgot from './pages/Forgot/Forgot';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Viewitems from './pages/Home/Viewitems';

import Drawer_menu from './Component/Drwar';

import SellWithUss from './pages/Sellwithus/SellWithUss';

import Brandscreen  from './pages/Brands/Brandscreen';

import Authenticationscreen from './pages/Authentication/Authenticationscreen';

import Salescreen from './pages/Sale/Salescreen';
import MyAccount from '././pages/MyAccount/MyAccount';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function CustomDrawerContent({ navigation }) {
  return (
    <Drawer_menu/>

  );
}
export default class App extends Component {
  
constructor(props){
  super(props)
  this.state={
    isUserAuth: '',
  }
}
componentDidMount() {
  AsyncStorage.getItem('isUserAuth').then(data => this.setState({ isUserAuth: data}))
  console.log("tokens::::::::::::;");
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
{/* 
               <Drawer.Screen name='MensBelt' component={MensBelt}/>
               <Drawer.Screen name='MensWallet' component={MensWallet}/> */}
             <Drawer.Screen name='MensShoes' component={MensShoes}/>


             <Drawer.Screen name='Listshow' component={Listshow}/>
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
 Authscreen() {
  return (
   <>
    <Stack.Screen name="Handbags" component={Handbags} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Signup" component={Signup} />
    <Stack.Screen name="Offerheader" component={Offerheader} />
    <Stack.Screen name="Forgot" component={Forgot} />
   </>
  )
 }
render(){
  return (
  
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="MyDrawarFun" component={this.MyDrawarFun}/>
        {/* <Stack.Screen name="Shop" component={Shop}/> */}
        <Stack.Screen name="Handbags" component={Handbags}/>
        
     
        <Stack.Screen name="Listshow" component={Listshow}/>
        <Stack.Screen name ="MensShoes" component={MensShoes}/>
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


