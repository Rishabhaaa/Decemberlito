import React, { Component } from "react"
import {View,ScrollView} from 'react-native';
import Listshow from "../Home/Copmonents/ListShow";
import Header from "../../Component/Header";
import Offerheader from "../../Component/Offerheader";
import Footer from "../../Component/Footer";
import { SafeAreaView } from "react-native-safe-area-context";
import Whatsapp from "../../Component/Whatsapp";

export default class MensWallet extends Component{
  constructor(props){
      super(props)
      this.state={
        data:[]
      }
  }
  switchcasefun(){
    // console.log("rent handbag data",this.props.route.params.itemsData.id)
    switch(this.props.route.params.itemsData.id){
        case 1:
            this.setState({
                data:[{
                    id:1,
                    image:require('../../Images/MW1.jpg'),
                    heading:"hellow i amd done",
                    Size:"M",
                    Tags:"New With Tags",
                    ActuallPrice: " 12,300.00",
                    Price:" 12,200.00",
                    label:"17%",
    
                },
    
                {
                    id:2,
                    image:require('../../Images/MW2.jpg'),
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
                    image:require('../../Images/MW3.jpg'),
                    heading:"hellow i amd done",
                    Size:"M",
                    Tags:"New With Tags",
                    ActuallPrice: " 12,300.00",
                    Price:" 12,200.00",
                    label:"17%",
    
                },
    
                {
                    id:2,
                    image:require('../../Images/MW4.jpg'),
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
                    image:require('../../Images/MW1.jpg'),
                    heading:"hellow i amd done",
                    Size:"M",
                    Tags:"New With Tags",
                    ActuallPrice: " 12,300.00",
                    Price:" 12,200.00",
                    label:"17%",
    
                },
    
                {
                    id:2,
                    image:require('../../Images/MW1.jpg'),
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
        //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        //        <Text>RentHandbags screen</Text>
        //        <Listshow data={this.state.data}/>

             <SafeAreaView>
                  <ScrollView>
                 <View style={{marginBottom:60}}>
                    <Header  onPress={()=> this.props.navigation.openDrawer()} />
                    <Offerheader/>
                <Listshow  data={this.state.data} onPress={(val)=>console.log('showw dataaa ',val)}  />
                <Footer/>
            </View>
           </ScrollView>
           <Whatsapp/>
             </SafeAreaView>
        //  </View>
      )
  }
}
