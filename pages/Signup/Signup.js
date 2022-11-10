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
} from 'react-native';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
export default class Signup extends Component {
  constructor(props){
    super(props)
    this.state={
      Username:"",
      Password:"",
      Phone:"",
      Email_address:"",
      Password:"",
      validated : false,
      Password:"",
      checkBox1:"",
      checkBox2:"",
      checkBox3:"",
    WidthSize:screen?.width,
      HieghtSize:screen?.height,
      plac_holder:''
    }
  }
  submitRegister() {
    if (this.state.Phone == "") {
      alert("Please enter your User Name")
    }
else if(this.state.Email_address == ""){
      alert("please enter you  email address")
    }
    else if(this.state.Password == ""){
      alert("please enter your password")
    }
    else{
      alert("you have successfully  Register to the page")
    }
  }
render() {
return(
<SafeAreaView style={{width:'100%'}}>
  <ScrollView style={{width:'100%'}}>
    <View style={{flexDirection:'row',justifyContent:"space-between"}}>
    <Text style={{marginLeft:35,fontStyle:'normal',fontSize:20,marginTop:10,color:'black'}}>My Account</Text>
{/* <TouchableOpacity>
     <Image style={{width:30,height:15,marginTop:20}}source={require('../../Images/Cross.png')} />
</TouchableOpacity> */}
    </View> 
    
<View>
<Text style={{fontSize:20,color:'black',marginLeft:20,marginTop:18}}>Register</Text>
</View>
<View style={{marginTop:30}}>
 <TextInput
    style={{height:50,width:'90%',alignSelf:'center',paddingLeft:20,marginTop:15,marginTop:30,}}
    placeholder="Phone *"
    keyboardType='numeric'
    onChangeText={(Phone) => this.setState({Phone:Phone})}
  />
    <View style={{borderBottomWidth:1,marginLeft:20,borderBottomColor:'#C0C0C0',width:'90%'}}></View>
  <TextInput
    style={{height:50,width:'90%',alignSelf:'center',paddingLeft:20,marginTop:30}}
    placeholder="Email address *"
    onChangeText={(Email_address) => this.setState({Email_address:Email_address})}
  />
  <View style={{borderBottomWidth:1,marginLeft:20,borderBottomColor:'#C0C0C0',width:'90%'}}></View>
  <TextInput
    style={{borderColor:'#808080',height:50,width:'90%',alignSelf:'center',marginTop:5,paddingLeft:20,marginTop:30}}
    placeholder="Password *"
    secureTextEntry={true}
    onChangeText={(Password) => this.setState({Password:Password})}
  />
    <View style={{borderBottomWidth:1,marginLeft:20,borderBottomColor:'#C0C0C0',width:'90%'}}></View>
 </View>
           {/* code of checkbox */}
<View style={{flexDirection:"row",marginLeft:10,padding:12,marginLeft:10,padding:10,marginTop:30}}>
 <TouchableOpacity style={{width:'7%',height:20,flexDirection:'row',backgroundColor:'silver'}}
                             onPress={()=>this.setState({checkBox2: !this.state.checkBox2})}
                             >
                               {
                                 this.state.checkBox2?
                               <Image source={require('../../Images/RightVector.png')} style={{width:"0.2%",height:5,padding:6,marginLeft:5,alignSelf:'center'}} />
                               :null
                               }
                             </TouchableOpacity> 
                             <Text style={{marginLeft:10}}>Subscribe to our newsletter</Text>
</View>
<View style={{marginLeft:20,marginTop:25,fontSize:15}}>
<Text>
Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
</Text>
<TouchableOpacity>
<Text style={{color:'black',fontSize:15}}>privacy policy</Text>
</TouchableOpacity>
</View>
                        {/* code of checkBox */}
                        {/* <View style={{flexDirection:"row",marginLeft:10,padding:12,marginLeft:20,marginTop:25,padding:10,}}>
<TouchableOpacity style={{width:'7%',height:20,flexDirection:'row',backgroundColor:'silver'}}
                             onPress={()=>this.setState({checkBox3: !this.state.checkBox3})}
                             >
                               {
                                 this.state.checkBox3?
                               <Image source={require('../images/RightVector.png')} style={{width:"0.2%",height:5,padding:6,marginLeft:5,alignSelf:'center'}} />
                               :null
                               }
                             </TouchableOpacity>
                             <Text style={{marginLeft:10}}>I want to receive updates about products and promotions.</Text>
</View> */}
<TouchableOpacity onPress={() => { this.submitRegister();}} style={{flexDirection:'row',flex:1}}>
<View style ={{borderWidth:1,alignSelf:'center',width:'80%',height:70,borderBottomRadius:15,borderBottomRadius:15,margin:30,backgroundColor:'black',}}>
<Text style={{color:'white',alignSelf:'center',justifyContent:'center',margin:10,padding:10}}> REGISTER</Text>
</View>
</TouchableOpacity>
<View style={{marginTop:5,alignSelf:'center',justifyContent:'center',marginBottom:30}}>
<TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
    <Text style={{}}>Login to the Page</Text>
  </TouchableOpacity>
</View>
</ScrollView>
</SafeAreaView>
)
}
}