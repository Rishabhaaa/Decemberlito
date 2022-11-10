import React, { Component } from "react"
import {View,Text, TouchableOpacity} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
// import Listshow from "../Home/Copmonents/ListShow";
import Header from "../../Component/Header";
import Whatsapp from "../../Component/Whatsapp";
import Footer from '../../Component/Footer';
 
export default class Bidtowin extends Component{
  constructor(props){
      super(props)
      this.state={
        
      }
  }
  
  render(){
      return(
        <SafeAreaView>
             {/* <ScrollView style={{borderWidth:1,borderColor:'red',flex:1}}> */}
                     <Header onPress={()=> this.props.navigation.openDrawer()}/>
                     <Footer style={{marginTop:20}}/>
                     {/* <Dummycomponent textdata="data pass by methods 1"/>
                     <Dummycomponent textdata="data pass by methods 2"/> */}

                     <Whatsapp/>
             {/* </ScrollView> */}
        </SafeAreaView>
      )
  }
}
