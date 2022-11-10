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


export default class Login extends Component {
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
  submitLogin() {
    if (this.state.Username == "") {
      alert("Please enter your User Name")
    }
else if(this.state.Password == ""){
      alert("please enter your password")
    }
    else{
      alert("you have successfully  Login to the page")
    }
  }
render() {
return(
<SafeAreaView style={{width:'100%'}}>
  <ScrollView style={{width:'100%'}}>

  {/* <View style={{flexDirection:'row',justifyContent:"space-between"}}>
    {/* <Text style={{marginLeft:35,fontStyle:'normal',fontSize:20,marginTop:10,color:'black'}}>My Account</Text> */}
{/* <TouchableOpacity>
     <Image style={{width:30,height:15,marginTop:20,}}source={require('../../Images/Cross.png')} />
</TouchableOpacity>
    </View> */}
  <View style={{marginTop:35,marginLeft:10,justifyContent:'space-between',flexDirection:'row'}}>
  <Text style={{color:'black',fontSize:20,}}>Login </Text>
  {/* <TouchableOpacity>
  <Image style={{width:30,height:15,marginRight:15}}source={require('../../Images/Cross.png')} />
  </TouchableOpacity> */}

  </View>




  
<View style={{marginTop:35}}>
<TextInput
    style={{marginLeft:20,}}
    placeholder= "Username or email address *"
    placeholderTextColor="#808080"
    onChangeText={(Username) => this.setState({Username:Username})}
  />
  <View style={{borderBottomWidth:1,marginLeft:20,borderBottomColor:'#C0C0C0',width:'90%'}}></View>
</View>
 <View>
  <TextInput
    style={{marginLeft:20,marginTop:30}}
    placeholder="Password *"
    secureTextEntry={true}
    placeholderTextColor="#808080"
    onChangeText={(Password) => this.setState({Password:Password})}
  />
  <View style={{borderBottomWidth:1,marginLeft:20,borderBottomColor:'#C0C0C0',flexDirection:'row',width:'90%'}}></View>
</View>
   {/* code of checkbox */}
<View style={{flexDirection:"row",marginLeft:10,padding:10,marginLeft:"5%",marginTop:30}}>
<TouchableOpacity style={{width:'7%',height:20,flexDirection:'row',backgroundColor:'silver'}}
                             onPress={()=>this.setState({checkBox1: !this.state.checkBox1})}
                             >
                               {
                                 this.state.checkBox1?
                                <Image source={require('../../Images/RightVector.png')} style={{width:"0.2%",height:5,padding:6,marginLeft:5,alignSelf:'center'}} />
                               :null
                               }
                             </TouchableOpacity> 
                             <Text style={{marginLeft:10}}>Remember me</Text>
</View>
<TouchableOpacity  onPress={() => { this.submitLogin();}}style={{flexDirection:'row',flex:1}}>
<View style ={{borderWidth:1,alignSelf:'center',width:'80%',height:70,borderBottomRadius:15,borderBottomRadius:15,marginLeft:30,backgroundColor:'black',}}>
<Text style={{color:'white',alignSelf:'center',justifyContent:'center',margin:10,padding:10,}}> LOG IN</Text>
</View>
</TouchableOpacity>
<TouchableOpacity onPress={()=>this.props.navigation.navigate('Forgot')}>
<Text style={{justifyContent:'center',alignSelf:'center',fontSize:14,color:'black',marginTop:15}}>FORGOT YOUR PASSWORD?</Text>
<View style={{borderBottomWidth:1,borderBottomColor:'black',width:"45%",alignSelf:'center'}}></View>
</TouchableOpacity>
<View style={{justifyContent:'center',alignSelf:'center',fontSize:30,marginTop:10}}>
<TouchableOpacity
  onPress={() => this.props.navigation.navigate("Signup")}>
    <Text>Create an Account</Text>
  </TouchableOpacity>
</View>
</ScrollView>
</SafeAreaView>
)
}
}








