import React, { Component } from 'react';
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
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
export default class Cartshoping extends Component {
  constructor(props){
    super(props)
    this.state={
    }
  }

  Cartlist() {

    fetch('https://litoo.herokuapp.com/carts',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Cartlist', data);
        this.setState({ data: data })
      })
      .catch((error) => {
        //console.error('Error:', error);
      });

  }

render() {
return(
<SafeAreaView style={{width:'100%',backgroundColor:'white'}}>
  <ScrollView style={{width:'100%',backgroundColor:'white'}}>
  <View style={{flexDirection:'row',width:'90%',height:40,justifyContent:'center',alignSelf:'center',marginTop:30,backgroundColor:'#D8D8D8'}}>
          <Text style={{justifyContent:'center',alignSelf:'center',color:'black',marginLeft:15,fontWeight:'900'}}>Your cart is currently empty.</Text>
    </View>
    <View style={{width:'100%'}}>
        <TouchableOpacity style={{flexDirection:'row',width:'90%',height:40,backgroundColor:'black',justifyContent:'center',alignSelf:'center',marginTop:30,}}>
         <Text style={{justifyContent:'center',alignSelf:'center',color:'white',marginLeft:15,fontWeight:'900'}}>Continue Shoping </Text>
        </TouchableOpacity>
    </View>
</ScrollView>
</SafeAreaView>
)
}
}









