import React, { Component } from "react"
import {View,Text, TouchableOpacity} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Listshow from "../Home/Copmonents/ListShow";
import Header from "../../Component/Header";
import Whatsapp from "../../Component/Whatsapp";
import Footer from '../../Component/Footer';
import Footer2 from "../../Component/Footer2";
 
export default class Salescreen extends Component{
  constructor(props){
      super(props)
      this.state={
        data:[]
      }
  }

  switchcasefun(){
   // console.log("sale screen data data",this.props.route.params.itemsData.id)
    switch(1){
        case 1:
            this.setState({
                data:[{
                    id:1,
                    image:require('../../Images/girls_night.png'),
                    heading:"hellow i amd done",
                    Size:"M",
                    Tags:"New With Tags",
                    ActuallPrice: " 12,300.00",
                    Price:" 12,200.00",
                    label:"17%",
    
                },
    
                {
                    id:2,
                    image:require('../../Images/p5.png'),
                    heading:"that is shivani bage",
                    Size:"M",
                    Tags:"New With Tags",
                    ActuallPrice: " 13,300.00",
                    Price:" 12,200.00",
                    label:"15%",
    
                   
                }]
            })
        break;
        case 2:
            this.setState({
                data:[{
                    id:1,
                    image:require('../../Images/girls_night.png'),
                    heading:"hellow i amd done",
                    Size:"M",
                    Tags:"New With Tags",
                    ActuallPrice: " 12,300.00",
                    Price:" 12,200.00",
                    label:"17%",
    
                },
    
                {
                    id:2,
                    image:require('../../Images/p5.png'),
                    heading:"that is shivani bage",
                    Size:"M",
                    Tags:"New With Tags",
                    ActuallPrice: " 13,300.00",
                    Price:" 12,200.00",
                    label:"15%",
    
                   
                }]
            })
        break;
        case 3:
            this.setState({
                data:[{
                    id:1,
                    image:require('../../Images/girls_night.png'),
                    heading:"hellow i amd done",
                    Size:"M",
                    Tags:"New With Tags",
                    ActuallPrice: " 12,300.00",
                    Price:" 12,200.00",
                    label:"17%",
    
                },
    
                {
                    id:2,
                    image:require('../../Images/p5.png'),
                    heading:"that is shivani bage",
                    Size:"M",
                    Tags:"New With Tags",
                    ActuallPrice: " 13,300.00",
                    Price:" 12,200.00",
                    label:"15%",
    
                   
                }]
            })
        break;

    }
  }
  componentDidMount(){
    this.focusListerner = this.props.navigation.addListener('focus',() =>{
        this.switchcasefun()
    })
  }
  
  render(){
      return(
        <SafeAreaView>
             {/* <ScrollView style={{borderWidth:1,borderColor:'red',flex:1}}> */}
                     <Header onPress={()=> this.props.navigation.openDrawer()}/>
                     <Listshow  data={this.state.data} onPress={(val)=>console.log('showw dataaa ',val)}  />
                     <Footer style={{marginTop:20}}/>
                     <Footer2/>
                     <Whatsapp/>
             {/* </ScrollView> */}
        </SafeAreaView>
      )
  }
}
