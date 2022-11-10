// import React, { Component} from "react";
// import Header from "../../Component/Header";
// import Footer2 from "../../Component/Footer2";
//  import Offerheader from "../../Component/Offerheader";
// import {View,Text, TextInput, StyleSheet, FlatList,Image} from 'react-native';
// import { SafeAreaView } from "react-native-safe-area-context";
// import { ScrollView } from "react-native-gesture-handler";
// export default class Brandscreen extends Component{
//   constructor(props)
//     {
//     super(props)
//       this.state = {
//     }
//   }
//   render(){
//     const names =[
//       {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b5.png')} />
//       },
//       {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b5.png')} />
//       },
//       {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b2.png')} />
//       },
//       {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b5.png')} />
//       },
//       {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b4.png')} />
//       },
//       {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b5.png')} />
//       },
//       {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b2.png')} />
//       },   {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b7.png')} />
//       },   {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b5.png')} />
//       },
//       {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b9.png')} />
//       },   {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b10.png')} />
//       },   {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b11.png')} />
//       },   {
//         name: <Image style={{width:50,height:30,justifyContent:'center',alignSelf:'center'}}source={require('../../Images/b12.png')} />
//       },
//       ]
//     return(
        
// <FlatList
// // horizontal
// showsHorizontalScrollIndicator={false}
// numColumns={2}
// // inverted
//  data={names}
//  renderItem = {({item}) =>{
//   // console.log("Element data",item)
//   // horizontal
//   return(
    
//     <SafeAreaView>
//         <ScrollView>  
                      
//         <View>
//          <Text style={styles.flatlistdata}>{item.name}</Text>
//     </View>
//         </ScrollView>
//     </SafeAreaView>
   
//   )}}
// />
// );}}
// const styles = StyleSheet.create({
//   flatlistdata:{
//     fontSize:20,
//     padding:60,
//     backgroundColor:"white",
//     borderWidth:1,
//     borderColor:'silver',
//     // width:"70%",
//     alignSelf:"center",
//     margin:12,
//     textAlign:"center",
//     color:"#fff"
//   }
// })



import React,{Component} from "react";
import Header from "../../Component/Header";
import {Image,View,Text, SafeAreaView, ScrollView,TextInput,FlatList,TouchableOpacity} from "react-native";
import Footer2 from "../../Component/Footer2";
import Footer from "../../Component/Footer";
import Whatsapp from "../../Component/Whatsapp";
export default class Brandscreen extends Component{
  constructor(props){
    super(props)
    this.state={
      data :[
        {
          image:require('../../Images/b11.png'),
         },
         {
         image:require('../../Images/b2.png'),
         },
         {
          image:require('../../Images/b12.png'),
         },
         {
         image:require('../../Images/b4.png'),
         },
         {
          image:require('../../Images/b22.png'),
         },
         {
         image:require('../../Images/b9.png'),
         },
         {
          image:require('../../Images/b5.png'),
         },
         {
          image:require('../../Images/b15.png'),
         },
         {
          image:require('../../Images/b22.png'),
         },
         {
          image:require('../../Images/b7.png'),
         },
         {
          image:require('../../Images/b21.png'),
         },
         {
          image:require('../../Images/b9.png'),
         },
         {
          image:require('../../Images/b10.png'),
         },
         {
          image:require('../../Images/b11.png'),
         },
         {
          image:require('../../Images/b12.png'),
         },
         {
          image:require('../../Images/b13.png'),
         },
         {
          image:require('../../Images/b14.png'),
         },
         {
          image:require('../../Images/b15.png'),
         },
         {
          image:require('../../Images/b16.png'),
         },
         {
          image:require('../../Images/b17.png'),
         },
           {
          image:require('../../Images/b21.png'),
         },  {
          image:require('../../Images/b19.png'),
         },
         {
          image:require('../../Images/b20.png'),
         },
          {
          image:require('../../Images/b16.png'),
         },

        ]
    }
  }
  render(){
    return(
      <SafeAreaView style={{backgroundColor:'white'}}>
               <Header  onPress={()=> this.props.navigation.openDrawer()} />
        <ScrollView>
            <View>
            <FlatList style={{}}
            data={this.state.data}
            horizontal={false}
            numColumns={2}
            renderItem={({item})=>
            <View style={{backgroundColor:'white',margin:10,width:'45%'}}>
             <TouchableOpacity style={{margin:10}}>
                <Image style={{height:75,width:"80%",borderWidth:1,justifyContent:'center',alignSelf:'center',borderColor:'#d8d8d8'}} source={item.image}/>
             </TouchableOpacity>
            </View>
            }
            />
        </View>
        <Footer2/>
        <Footer/>
        </ScrollView>
        <Whatsapp/>
      </SafeAreaView>
    );
  }
}