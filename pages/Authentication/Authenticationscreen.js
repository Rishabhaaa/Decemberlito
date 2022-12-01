import React, { Component } from 'react';
 import Header from '../../Component/Header';
 import Footer2 from '../../Component/Footer2';
 import Footer from '../../Component/Footer';
 import Whatsapp from '../../Component/Whatsapp';
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
export default class Authenticationscreen extends Component {
  constructor(props){
    super(props)
    this.state={
    WidthSize:screen?.width,
      HieghtSize:screen?.height,
    }
  }
render() {
return(
<SafeAreaView style={{width:'100%',backgroundColor:'white'}}>
<Header  onPress={()=> this.props.navigation.openDrawer()} />

  <ScrollView style={{width:'100%'}}>
  <View style={{marginTop:30}}>
 <Text style={{justifyContent:'center',alignSelf:'center',fontSize:30,fontWeight:'900',color:'black'}}>Authentication</Text>
<Text style={{fontSize:16,justifyContent:'center',alignSelf:'center',paddingTop:8}}>NEVER WORRY ABOUT FAKES!</Text>
<Text style={{fontSize:16,justifyContent:'center',alignSelf:'center',paddingTop:8}}>Lito Guarantees Authenticitiy </Text>
</View>
<View style={{marginLeft:10,marginRight:15,marginTop:20,padding:8}}>
   <Text style={{fontsize:30,padding:8}}>
   The products that we carry at Lito are meant to be enjoyed for many decades and even passed down from one generation to another. The premium price is an investment that pays itself off over the years of service it provides and we at Ziniosa deeply understand that!
At Ziniosa we make sure that guaranteeing the Authentication of very product is the core of our business so we take every step that ensures you only receive the best that is Original!
Ziniosa internally authenticates all products that come though our warehouse always and have over 300 Luxury Fashion Brands that we are able to authenticate using more than 7000 parameters. The steps taken are to ensure the following and more are always checked with the Brand Standards and made sure they match before we proceed to list any item for sale!
 </Text>
 <Text style={{marginLeft:10,marginRight:15,marginTop:20,padding:8}}>
 1. Fabric – Including all types of Leather, Canvas, Vinyl and cloth that comes to ensure the surface and the outer layer is the right material and is compliant with the same which is used by the Brand
 {'\n'}2. Lining – All types of interior fabric or material used is compiled and checked to ensure that they are matched with the ones of the same product line
 {'\n'}3. Logo/Hardware – The Brand logos and Hardware are always checked to ensure that the material, lettering, font and covering used are authentic by comparing with the Original Brand mandates at Ziniosa
 {'\n'}4. Zipper/Closure – Be it a zipper, a latch, a magnetic button or flaps we always make sure that the closure is the exact match and the zipper if available has the brand logo on the front and back with the same font and material used by the Brand {'\n'}5. Date Codes/Stamps/Bar Codes – The most successful answer to the authenticity question – we make sure that the Brand Manufacturing country and codes are matching with the product line to only give you an authentic product on every purchase you make at Ziniosa!
{'\n'}6. Brand Dust bags, product cards, etc – This also gives us at  Lito an extensive look into the authentication of a product and is able to boost our success rate into making sure the products are authentic </Text>
 </View>
 <Footer2/>
{/* <Footer/> */}

  </ScrollView>
  <Whatsapp/>
 </SafeAreaView>
 )
 }
}

 
