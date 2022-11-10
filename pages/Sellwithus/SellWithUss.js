import React, { Component } from 'react';
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Footer2 from '../../Component/Footer2';
import Whatsapp from "../../Component/Whatsapp";
import { StyleSheet
, Text
, View
, TextInput
, TouchableOpacity
, Image,
SafeAreaView,
ScrollView,
Dimensions,
borderBottom} from 'react-native';
import { color } from 'react-native-reanimated';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
export default class SellWithUss extends Component {
  constructor(props){
    super(props)
    this.state={
    WidthSize:screen?.width,
      HieghtSize:screen?.height,
    }
  }
render() {
return(
<SafeAreaView style={{width:'100%'}}>
<Header  onPress={()=> this.props.navigation.openDrawer()} />

  <ScrollView style={{width:'100%'}}>
   <Text style={{fontSize:35,justifyContent:'center',alignSelf:'center',marginTop:40,color:'black'}}> Turn Your Closet Into </Text>
   <Text style={{fontSize:35,alignSelf:'center',justifyContent:'center',color:'black'}}> Cash </Text>
   <Text  style={{fontSize:16,marginLeft:15}}>Lito is India`s most trusted service to sell your </Text>
   <Text style={{fontSize:15,marginLeft:18}}>
   secondhand and preloved luxury clothes, bags,
   </Text>
   <Text style={{fontSize:16,justifyContent:'center',alignSelf:'center'}}>watches, shoes, belt & sunglasses.
   </Text>
   <View style={{width:'30%',height:40,justifyContent:'center',alignSelf:'center',borderWidth:1,borderRadius:10,marginTop:20}}>
   <TouchableOpacity>
   <Text style={{alignItems:'center',alignSelf:'center',}}>Start Selling</Text>
   </TouchableOpacity>
   </View>
   <View style={{marginTop:40}}>
   {/* <Image style={{width:'90%',height:'30%',marginTop:20,justifyContent:'center',alignSelf:'center',}}source={require('../../Images/sellwith.jpg')} /> */}
   </View>
   <Text style={{fontSize:30,color:'black',marginLeft:20}}>Here’s how it works</Text>
  <Text style={{fontSize:16,color:'black',marginTop:25,marginLeft:90,marginLeft:50,fontWeight:'900'}}> 1. GET YOUR ESTIMATES
</Text>
<Text style={{fontSize:15,marginTop:10,flex:1,paddding:12, marginLeft:70}}>
Send us photos of the product you {'\n'}
want to sell on Whatsapp , and we’ll  {'\n'}
tell you how much you could earn {'\n'}
 within two working days.
</Text>
<Text style={{fontSize:16,color:'black',marginTop:15,marginLeft:90,marginLeft:50,fontWeight:'900'}}>  2. ARRANGE A FREE COLLECTION
</Text>
<Text style={{fontSize:15,marginTop:10,flex:1,paddding:12, marginLeft:70}}>Schedule a pick-up time that suits{'\n'} you and we’ll take care of the rest.
</Text>
<Text style={{fontSize:16,color:'black',marginTop:15,marginLeft:90,marginLeft:50,fontWeight:'900'}}> 3. QUICK AND EASY PAYOUT</Text>
<Text style={{fontSize:15,marginTop:10,flex:1,paddding:12, marginLeft:70}}> Once our team has authenticated {'\n'}  and sold your product, you payout {'\n'}  will be processed within 5 business {'\n'}  days.
</Text>
 <View>
 <Text style={{fontSize:30,alignSelf:'center',justifyContent:'center',fontWeight:'900',color:'black',marginTop:50}}>Why sell with us?</Text>
 <Text style={{fontSize:15,justifyContent:'center',alignSelf:'center',marginTop:25}}>FAST PAYMENTS
</Text>
 <Text style={{fontSize:16,marginLeft:10,marginTop:30}}>We process your payments as soon as your {'\n'} product is sold and delivered to the Customer.
</Text>
 <Text style={{fontSize:16,justifyContent:'center',alignSelf:'center',marginTop:30}}>BEST PRICE
</Text>
 <Text style={{fontSize:16,marginLeft:10,marginTop:30}}>Our Goal is to make sure your Product is not just  {'\n'} listed but also sold.
   our Team goes out their way to do research on the best available price .
</Text>
 <Text style={{fontSize:16,marginLeft:25,alignSelf:'center',justifyContent:'center',marginTop:30}}>CONTINUED SUPPORT
</Text>
 <Text style={{fontSize:16,marginLeft:10,marginTop:30}}>Our Team will be available to help you through {'\n'} the process till after your product is sold
</Text>
<Text style={{fontSize:16,marginLeft:25,alignSelf:'center',justifyContent:'center',marginTop:30}}>SUSTAINABLE THINKING
</Text>
<Text style={{fontSize:16,marginLeft:10,marginTop:30}}>By selling your pre-loved products, you’re {'\n'} extending its life and helping the environment.
</Text>
<Text style={{fontSize:26,color:'black',marginTop:40,justifyContent:'center',alignSelf:'center'}}>          Looking to sell your  {'\n'}   Secondhand Luxury Bags, {'\n'}Clothes, Watches, Sneakers?
{'\n'}           Look No Further!</Text>
<Text style={{fontSize:16,alignItems:'center',justifyContent:'center',justifyContent:'center',alignSelf:'center',marginTop:20}}>WHAT ITEM(S) CAN I SELL?
</Text>
<Text style={{fontSize:16,justifyContent:'center',alignSelf:'center'}}>
– Luxury Bags {'\n'}
– Luxury Shoes {'\n'}
– Luxury Belts {'\n'}
– Luxury Watches {'\n'}
– Designer Clothes {'\n'}
</Text>
<Text style={{fontSize:16,marginLeft:10,justifyContent:'center',alignSelf:'center'}}>
I’VE SUBMITTED MY PRODUCT(S). WHEN WILL  {'\n'}                        I RECEIVE MY QUOTE?
</Text>
<Text style={{fontSize:16,marginLeft:10,marginTop:20,justifyContent:'center',alignSelf:'center'}}>We’ll send your quote within two working  {'\n'}                           days.
</Text>
<Text style={{fontSize:16,marginLeft:10,marginTop:20,justifyContent:'center',alignSelf:'center'}}>
WHEN WILL I RECEIVE MY PAYOUT?
</Text>
<Text style={{fontSize:16,justifyContent:'center',alignSelf:'center',marginTop:20}}>
Once your product(s) have been  {'\n'}authenticated and sold , you should  {'\n'}  receive your payout credit within 7  {'\n'}            working days, providing
</Text>
<Text style={{fontSize:16,justifyContent:'center',alignSelf:'center',marginTop:20}}>
ARE MY PRODUCTS SAFE WITH LITO?
</Text>
<Text style={{fontSize:16,justifyContent:'center',alignSelf:'center',marginTop:20}}>
Your products will be safely stores in our temperature and weather humidity proof warehouse. We keep each product safe and protected.
</Text>
<Text style={{fontSize:16,justifyContent:'center',alignSelf:'center',marginTop:20}}>
WHO WILL PICKUP MY PRODUCTS?
</Text>
<Text style={{fontSize:16,justifyContent:'center',alignSelf:'center',marginTop:20}}>
LITO will arrange for a free pickup of your products.
</Text>
<Text style={{fontSize:30,color:'black',justifyContent:'center',alignSelf:'center',marginTop:20}}>
What our customers say about Selling with Ziniosa
</Text>
<Text style={{fontSize:16,marginTop:20,justifyContent:'center',alignSelf:'center'}}>
‘Selling with Ziniosa was absolutely delightful.{'\n'} The payment was made on time. ‘
{'\n'}                                  -Minal S.
</Text>
<Text style={{fontSize:16,justifyContent:'center',alignSelf:'center',marginTop:20}}>
”I was amazed to see how nice the team was in {'\n'} assisting a first time seller like me.’
{'\n'}                                 -Sonakshi P.
</Text>
<Text style={{fontSize:16,justifyContent:'center',alignSelf:'center',marginTop:20,marginLeft:10}}>
  ‘I’ve listed more than 5 products with Lito   {'\n'}and I prefer selling with them because they are {'\n'}very responsive on Whatsapp and they try their{'\n'}                     best to sell my items.’
–  {'\n'}                                     -Tara R.
</Text>
<Text style={{fontSize:16,justifyContent:'center',alignSelf:'center',marginTop:20}}>
  learn more about FAQS Page
</Text>
<Text style={{fontSize:16,justifyContent:'center',alignSelf:'center',marginTop:20}}>
</Text>
<Text style={{fontSize:16,justifyContent:'center',alignSelf:'center',marginTop:20,color:'black'}}>
SELL YOUR  SECONDHAND  LUXURY PRODUCTS  {'\n'}
ONLINE IN INDIA
</Text>
<Text style={{fontSize:12,justifyContent:'center',alignSelf:'center',marginTop:20,}}>
Now you can sell used clothes, sell used watches, {'\n'}
   preloved designer bags all on Ziniosa. Turn your
   {'\n'} Luxury closet into cash with our Luxury Consignment
   {'\n'}                                         process.
</Text>
<Text style={{fontSize:16,justifyContent:'center',alignSelf:'center',marginTop:20,color:'black'}}>
WIDE RANGE OF CATEGORIES YOU CAN SELL
</Text>
<Text style={{fontSize:12,justifyContent:'center',alignSelf:'center',marginTop:20,}}>
Sell your secondhand Shoulder Bags, Tote Bags,{'\n'}
 Slings, Watches, Heels, Flats, Sunglasses, women {'\n'}
 and mens designers wear from Gucci, Louis Vuitton (LV),{'\n'}
  Prada, Michael Kors, Loubotin, Bottega Veneta, {'\n'}
  Versace, Hugo Boss, Fendi, Coach, Rolex, Bvlgari and
  {'\n'}                                         more.
</Text>
<Text style={{fontSize:16,justifyContent:'center',alignSelf:'center',marginTop:20,color:'black'}}>
TOP BRANDS OF PRELOVED LUXURY YOU CAN
{'\n'}    SELL WITH US (LUXURY CONSIGNMENT)
</Text>
<Text style={{fontSize:12,justifyContent:'center',alignSelf:'center',marginTop:20,marginLeft:20}}>
Gucci | Louis Vuitton | Prada | Chanel | Dior | Rolex {'\n'}
| Coach | Michael Kors | Kate Spade | Bottega | Veneta | Salvatore {'\n'}
Ferragamo | Armani | Dolce and Gabbana YSL | Saint Laurent
 Moschino | Ralph Lauren | Fendi |
{'\n'}Hugo Boss | Versace | Hermes
</Text>
</View>
<Footer2 style={{backgroundColor:"red"}}/>
{/* <Footer/> */}
</ScrollView>
<Whatsapp/>
</SafeAreaView>
)
}
}



// import React, { Component} from "react";
// import Header from "../../Component/Header";
// import Footer2 from "../../Component/Footer2";
// import Whatsapp from "../../Component/Whatsapp";
// import Offerheader from "../../Component/Offerheader";
// import {View,Text, TextInput, StyleSheet, FlatList,Image} from 'react-native';
// export default class SellWithUss extends Component{
//   constructor(props)
//     {
//     super(props)
//       this.state = {
//     }
//   }
//   render(){
//     const names =[
//       {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b5.png')} />

//       },
//       {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b5.png')} />

//       },
//       {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b2.png')} />

//       },
//       {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b5.png')} />

//       },
//       {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b4.png')} />

//       },
//       {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b5.png')} />

//       },
//       {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b2.png')} />

//       },   {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b7.png')} />

//       },   {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b5.png')} />

//       },
//       {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b9.png')} />

//       },   {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b10.png')} />

//       },   {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b11.png')} />

//       },   {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b12.png')} />

//       },

//       ]
//     return(

      
// <FlatList
// // horizontal
// showsHorizontalScrollIndicator={false}
// numColumns={2}
// // inverted
//  data={names}
//  renderItem = {({item}) =>{
//   // console.log("Element data",item)
//   // horizontal
//   return(

  


//     <View>
//          <Text style={styles.flatlistdata}>{item.name}</Text>
//     </View>
    
//   )}}
// />
// );}}
// const styles = StyleSheet.create({
//   flatlistdata:{
//     fontSize:20,
//     padding:60,
//     backgroundColor:"white",
//     borderWidth:1,
//     borderColor:'silver',
//     // width:"70%",
//     alignSelf:"center",
//     margin:12,
//     textAlign:"center",
//     color:"#fff"
//   }
// })


