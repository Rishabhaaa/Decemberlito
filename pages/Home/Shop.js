import React, { Component } from "react"
import {View, Text,TouchableOpacity,Image,TextInput,ScrollView,SafeAreaView,Dimensions} from 'react-native';
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Footer2 from "../../Component/Footer2";
import Listshow from '../../pages/Home/Copmonents/ListShow';
import Whatsapp from "../../Component/Whatsapp";

import Offerheader from "../../Component/Offerheader";
// import YoutubePlayer from 'react-native-youtube-iframe';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
 
export default class Shop extends Component{
  constructor(props){
      super(props)
      this.state={
        index_count:3,
        data:[
          {
            id:1,
            image:require('../../Images/girls_night.png'),
            heading:"hellow i amd done",
            Size:"M",
            Tags:"New With Tags",
            ActuallPrice: " 12,300.00",
            Price:" 12,200.00",
            labeel:"17%",
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

           
        },
        {
            id:3,
            image:require('../../Images/yellow_bag.png'),
            heading:"that is Rishabh bage",
            Size:"M",
            Tags:"Good Condition",
            ActuallPrice: " 199,300.00",
            Price:" 12,200.00",
            label:"8%",

           
        },
        {
            id:4,
            image:require('../../Images/p9.png'),
            heading:"that is deeraj Bage",
            Size:"M",
            Tags:"Excellent Condition",
            ActuallPrice: " 92,300.00",
            Price:" 12,200.00",
            label:"1%",


        },
        {
          id:5,
          image:require('../../Images/p9.png'),
          heading:"that is deeraj Bage",
          Size:"M",
          Tags:"Excellent Condition",
          ActuallPrice: " 92,300.00",
          Price:" 12,200.00",
          label:"1%",


      },
      {
        id:6,
        image:require('../../Images/girls_night.png'),
        heading:"hellow i amd done",
        Size:"M",
        Tags:"New With Tags",
        ActuallPrice: " 12,300.00",
        Price:" 12,200.00",
        labeel:"17%",
      },
      {
        id:7,
        image:require('../../Images/p5.png'),
        heading:"that is shivani bage",
        Size:"M",
        Tags:"New With Tags",
        ActuallPrice: " 13,300.00",
        Price:" 12,200.00",
        label:"15%",

       
    },
    {
        id:8,
        image:require('../../Images/yellow_bag.png'),
        heading:"that is Rishabh bage",
        Size:"M",
        Tags:"Good Condition",
        ActuallPrice: " 199,300.00",
        Price:" 12,200.00",
        label:"8%",

       
    },
    {
        id:9,
        image:require('../../Images/p9.png'),
        heading:"that is deeraj Bage",
        Size:"M",
        Tags:"Excellent Condition",
        ActuallPrice: " 92,300.00",
        Price:" 12,200.00",
        label:"1%",


    },
        ] 
  }  
  }
  render(){
      return(
        <SafeAreaView>
        <ScrollView>
                  <Header  onPress={()=> this.props.navigation.openDrawer()} />
            {/* <View style={{flexDirection:"row",padding:20}}>
                <TouchableOpacity disabled={true}><Text>Home > </Text></TouchableOpacity>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}><Text style={{color:"#000",fontWeight:"bold"}}>Shop</Text></TouchableOpacity>
                </View> */}
                <Offerheader/>
                <Image source={require('../../Images/dubaifamily.png')} style={{width:windowWidth,height:windowHeight -910}}/>
                <Listshow data={this.state.data} onPress={(val)=>this.props.navigation.navigate('Itemdata',{imteData:val})}/>
                <View style={{marginTop:40}}>
                  <Footer2 />    
                 </View>      
        </ScrollView>
                <Whatsapp/>
        </SafeAreaView>

            
      )
  }
}

