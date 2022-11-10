import React, { Component } from "react"
import {View, Text,TouchableOpacity,Image,ScrollView} from 'react-native';

export default class Header extends Component{
  constructor(props){
      super(props)
      this.state={
      }
  }

  
  render(){
      return(
                <ScrollView style={{backgroundColor:"#fff"}}>
                                   {/* header code */}
                <View style={{flexDirection:"row",width:'100%',justifyContent:'space-between',marginTop:23,marginLeft:10}}>
                        <TouchableOpacity onPress={() =>this.props.onPress()}>
                        {/* <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}> */}
                           <Image source={require('../Images/3.png')} style={{width:20,height:34}}/> 
                       </TouchableOpacity>
                        <Image source={require('../Images/LITO_logo.png')} style={{width:78,height:34}}/>  
                        <TouchableOpacity 
                        //  onPress={()=>this.props.navigation.navigate("Shopingcartscreen")}
                        style={{flexDirection:"row",justifyContent:"space-evenly",marginRight:20}}>
                            <Image source={require('../Images/trolley.png')} style={{width:20,height:20,resizeMode:"contain",marginTop:10}}/>
                            <Text style={{borderRadius:20,borderWidth:1,backgroundColor:"#000",color:"#fff",alignContent:"center",marginBottom:30,width:22,textAlign:"center"}}>0</Text>
                            </TouchableOpacity>
                        
               </View>
                                             {/* header code end */}

                </ScrollView>
            
      )
  }
}
