import React, { Component } from "react"
import {View, Text,TouchableOpacity,Image,Linking,Dimensions,StyleSheet,Modal} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default class Whatsapp extends Component{
  constructor(props){
      super(props)
      this.state={
        visible:true,
        popupVisible:false,
      }
  }


//   createThreeButtonAlert = () =>
//     Alert.alert(
//       "Alert Title",
//       "My Alert Msg",
//       [
//         {
//           text: "Ask me later",
//         }
      
  
  render(){
      return(
                     <View style={{marginTop:windowHeight-120,position:'absolute',alignSelf:'flex-end'}}>
                         <TouchableOpacity onPress= {()=>this.setState({popupVisible:true})}>
                         {/* <TouchableOpacity onPress= {()=>this.props.navigation.navigate('Shop')}> */}

                        <Image source={require('../Images/whatsapp.png')} style={{width:60,height:60}}/></TouchableOpacity>
                   
                        <Modal visible={this.state.popupVisible}
                                        animationType="slide"
                                        transparent={true}
                                    >
<View style={styles.centeredView}>
    <View style={styles.modalView}>
<View style={{paddingBottom:10}}>


<TouchableOpacity onPress={()=> this.setState({popupVisible:false})}>
<Image  style={{width:30,height:15,marginLeft:'95%'}}source={require('../Images/Cross.png')} />
</TouchableOpacity>

</View>
    <Text style={{fontWeight:'bold',justifyContent:'flex-start',fontSize:35,color:'black'}}>Welcome to Lito!</Text>
    <Text style={{}}> How can i help you today ?</Text>    
    <View style={{width:'100%'}}>
        <TouchableOpacity onPress={ ()=>{ Linking.openURL('https://web.whatsapp.com/')}} style={{flexDirection:'row',width:'65%',height:40,borderRadius:15,backgroundColor:'#25D366',justifyContent:'center',alignSelf:'center',marginTop:30,}}>
        <Image source={require('../Images/whatsapp.png')} style={{width:20,height:20,justifyContent:'center',alignSelf:'center'}} />
         <Text style={{justifyContent:'center',alignSelf:'center',color:'white',marginLeft:15,fontWeight:'900'}}>START CHAT</Text>
        </TouchableOpacity>
    </View>
 <Text style={{marginTop:10,color:'black'}}>Powered by interakt.shop</Text>

            </View>

          </View>
        </Modal>
                    </View>
                             
            
      )
  }
}


const styles = StyleSheet.create({
  mainView:({backgroundColor:"#f5e1d1",height:560}),
  mainViewText:({fontWeight:"900",color:"#000",fontSize:45,textAlign:"center"}),
  mainViewbtn:({backgroundColor:"#000",padding:7,width:"40%",alignSelf:"center",marginTop:30}),
  mainViewimg:({marginTop:30,width:"75%",height:300}),
  secondview:({alignItems:"center",marginTop:20}),
  secondviewtxt:({fontSize:25,color:"#000"}),
  secondviewtxt1:({textAlign:"center",fontSize:15,marginLeft:12,color:"#292929",fontWeight:"400",lineHeight: 30}),
  centeredView: {
      flex: 1,
      justifyContent: "center",
      marginTop: 22,
      color:'red',
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },



})

