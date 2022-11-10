import React, { Component } from "react"
import {View, Text,TouchableOpacity,Image,ScrollView} from 'react-native';

export default class Footer2 extends Component{
  constructor(props){
      super(props)
      this.state={
      }
  }

  
  render(){
      return(
               <View>
                     <Text style={{color:"#000",textAlign:"center",padding:15}}>SHOP PRELOVED LUXURY PRODUCTS ONLINE NOW ONLY ON Lito</Text>
                     <Text style={{textAlign:"center",padding:15,fontSize:13}}>With endless access to the world of secondhand bags & other luxury products under one roof, now shop your favorite designer menswear, designer womenswear, handbags, watches, belts, sunglasses from leading brands like Prada, Chanel, YSL, Fendi, Versace, Bottega Veneta, Dior, Michael Kors, Kate Spade, Coach, Gucci and louis vuitton and many more. With Ziniosa, you can buy, sell & Rent from Branded Handbags for women to rent outfits. Preloved Bags, Belts, Clothes, Shoes for men & women. All of it right here, is now just one click away. </Text>
                                            {/* Footer text1 end */}

                                    {/* Footer text2 start */}
                            <Text style={{textAlign:"center",padding:15,fontSize:13,color:"#000"}}>TOP PRELOVED LUXURY BRANDS ON SALE</Text>
                            <Text style={{textAlign:"center",padding:15,marginBottom:60,fontSize:13}}>Gucci | Louis Vuitton | Prada | Chanel | Dior | Rolex | Coach | Michael Kors | Kate Spade | Bottega | Veneta | Salvatore Ferragamo |Armani | Dolce and Gabbana | YSL | Saint Laurent | Moschino | Ralph Lauren | Fendi | Hugo Boss | Versace | Hermes </Text>
                                    {/* Footer text2 end */}
             </View>       
      )
  }
}
