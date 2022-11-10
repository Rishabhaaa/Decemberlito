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
export default class OrderTracking extends Component {
  constructor(props){
    super(props)
    this.state={
      orderid:"",
      Email:"",
    }
  }
submitTrack(){
  if(this.state.orderid == "")
  {
    alert("Please enter Order id")
  }
  else if(this.state.Email == ""){
    alert("Please Enter Your Email id")
  }
  else{
    alert("Your order is tracked")
  }
}
render() {
return(
<SafeAreaView style={{width:'100%',backgroundColor:'white'}}>
  <ScrollView style={{width:'100%',backgroundColor:'white'}}>
 <View style={{marginTop:20,backgroundColor:'white'}}>
    <Text style={{padding:8}}>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</Text>
    <View style={{marginTop:20,width:'90%',borderWidth:1,marginLeft:20,padding:20,borderColor:'#D8D8D8'}}>
    <Text style={{marginTop:10,fontWeight:'900',marginLeft:20,}}>Order ID</Text>
    <TextInput
    onChangeText={(Text)=>this.setState({orderid:Text})}
    style={{marginLeft:20,}}
    placeholder= "Found your email in confirmation email"
    placeholderTextColor="#808080"
  />
  <View style={{borderWidth:1,borderColor:'#D8D8D8',width:'90%',marginLeft:20}}></View>
    <Text style={{fontWeight:'900',marginLeft:20,marginTop:10}}>Billing Email</Text>
    <TextInput
    onChangeText={(Text)=>this.setState({Email:Text})}
    style={{marginLeft:20,}}
    placeholder= "Email you used during checkout"
    placeholderTextColor="#808080"
  />
    <View style={{borderWidth:1,borderColor:'#D8D8D8',width:'90%',marginLeft:20}}></View>
    <View style={{flexDirection:'row',width:'90%',height:40,justifyContent:'center',alignSelf:'center',marginTop:30,backgroundColor:'black'}}>
      <TouchableOpacity onPress={() => { this.submitTrack()}}>
      <Text style={{justifyContent:'center',alignSelf:'center',color:'white',marginLeft:15,fontWeight:'900',padding:8}}>Track</Text>
      </TouchableOpacity>
    </View>
    </View>
    </View>
    <View style={{borderWidth:1,borderColor:'#D8D8D8',width:'90%',marginLeft:20,marginTop:10}}></View>
    <View style={{backgroundColor:'white'}}></View>
</ScrollView>
</SafeAreaView>
)
}
}














