import React, { Component } from "react";
import { View, Image, Text, FlatList, styleSheet,Button,Dimensions, TouchableOpacity } from "react-native";
const hight = Dimensions.get('screen').height;
export default class Offerheader extends Component {
  constructor(Props) {
    super(Props);
    this.state = {
      data: [
        {
            id:1,
          title: "Bags",
          image:require('../Images/OfferImages/bag.jpg')
        },
        {
            id:2,
          title: "Accessories",
          image:require('../Images/OfferImages/b2.jpeg')
        },
        {
            id:3,
          title: "Shoes",
          image:require('../Images/OfferImages/s2.jpg')
        },
        {
            id:4,
          title: "Jewellery",
          image:require('../Images/OfferImages/JJJ.jpg')
        },
        {
            id:5,
          title: "Cloth",
          image:require('../Images/OfferImages/g1.jpeg')
        },
        {
            id:6,
          title: "Mens's",
          image:require('../Images/OfferImages/m1.jpeg')
        },
        {
            id:7,
          title: "Kids",
          image:require('../Images/OfferImages/kids.jpg')
        },
      ]
    };
  }
  render() {
    var matcher = /^(?:\w+:)?\/\/([^\s\.]+\.\S{2}|localhost[\:?\d]*)\S*$/;
    return (
      <View>
      <Image style={{height:hight/7,width:'100%'}} resizeMode='stretch' source={require('../Images/OfferImages/diwali11.jpg')} />
       <View>
        <View style={{flexDirection:'row',backgroundColor:'yellow',justifyContent:'center',height:30}} >
          <Text style={{color:'black',justifyContent:'center',fontSize:12,alignSelf:'center'}}>  Get 500 on your first order.use</Text>
          <Text style={{color:'black',justifyContent:'center',alignSelf:'center',fontWeight:'900'}}> FIRSTORDER</Text>
        </View>
        <View style={{backgroundColor:'black'}}>
        <FlatList
        style={{width:'100%'}}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={this.state.data}
          renderItem={({ item }) =>
          <TouchableOpacity>
              <View style={{alignItems:'center',padding:5,backgroundColor:'black',}}>
            <Image style={{width:70,height:70,borderRadius:80,alignItems:'center',justifyContent:'center',alignSelf:'center',resizeMode:'contain'}} source={matcher.test(item.image)?{ uri: item.image }:item.image}/>
             <Text style={{color:'white',marginleft:20}}>{item.title}</Text>
          </View>
          </TouchableOpacity>
        }
          keyExtractor={(index) => {
            //  return index;
          }}
        />
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',color:'black' ,marginTop:10,}}>
         <Image style={{width:30,height:30,marginLeft:20}}source={require('../Images/OfferImages/cod.png')} />
                 <Image style={{width:30,height:30,marginRight:20}}source={require('../Images/OfferImages/guarantee.png')} />
       <Image style={{width:30,height:30,marginRight:20}}source={require('../Images/OfferImages/easy.png')} />
         <Image style={{width:30,height:30,marginRight:25}}source={require('../Images/OfferImages/EMI.png')} />
         </View>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
             <Text style={{marginLeft:25,fontSize:10}}>COD</Text>
             <Text style={{fontSize:10}}>100% AUTHENTIC</Text>
             <Text style={{fontSize:10}}>EASY RETURNS </Text>
             <Text style={{fontSize:10}}>EMI AVAILABLE </Text>
         </View>
       <View style={{flexDirection:'row',marginTop:30,justifyContent:'space-between'}}>
         <TouchableOpacity>
          <Text style={{fontSize:13,marginLeft:5,fontWeight:"bold"}}>Sort by price</Text>
          </TouchableOpacity>
         <TouchableOpacity>
         <Image style={{width:3,height:3,padding:5,marginRight:'40%',tintColor:'#000',marginTop:4.5}}source={require('../Images/OfferImages/icon.png')} />
         </TouchableOpacity>
         <TouchableOpacity>
         <Image style={{width:10,height:4,padding:10,marginLeft:50,}}source={require('../Images/OfferImages/fff.png')} />
         </TouchableOpacity>
         <TouchableOpacity>
         <Text style={{fontSize:16,marginRight:10,fontWeight:"bold"}}>Filter</Text>
         </TouchableOpacity>
     </View>
        </View>
        </View>
    );
        }
      }







