// import React, { Component } from 'react';
// import { StyleSheet
// , Text
// , View
// , TextInput
// , TouchableOpacity
// , Image,
// SafeAreaView,
// ScrollView,
// Dimensions,
// borderBottom} from 'react-native';
// const window = Dimensions.get("window");
// const screen = Dimensions.get("screen");
// export default class Forgot extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//      Username :"",
//      Email :"",
//     WidthSize:screen?.width,
//       HieghtSize:screen?.height,
//       plac_holder:''
//     }
//   }
//   submitLogin() {
//     if (this.state.Username == "") {
//       alert("Please enter your User Name or email")
//     }
// else if(this.state.email == ""){
//       alert("please enter your user name or email")
//     }
//     else{
//       alert("LINK have successfully sent to the your email address")
//       this.props.navigation.navigate("Login")
//     }
//   }
// render() {
// return(
// <SafeAreaView style={{width:'100%'}}>
//   <ScrollView style={{width:'100%'}}>

//     <Text style={{marginTop:20,alignSelf:'center',color:'black',fontWeight:'900',fontSize:20}}>Forget password</Text>
    
//   <View style={{marginTop:35,marginLeft:10,}}>
//   <Text style={{fontSize:12,}}>
//   Forgot your password? Please enter your username or email address. You will receive a link to create a new password via email.
//   </Text>
//   </View>
// <View style={{marginTop:35}}>
// <TextInput
//     style={{marginLeft:20,}}
//     placeholder= "Username or email address "
//     placeholderTextColor="#808080"
//     onChangeText={(Username) => this.setState({Username:Username})}
//   />
//   <View style={{borderBottomWidth:1,marginLeft:20,borderBottomColor:'#C0C0C0',width:'90%'}}>
//   </View>
// <View style ={{borderWidth:1,alignSelf:'center',width:'80%',height:70,borderBottomRadius:15,borderBottomRadius:15,marginLeft:30,backgroundColor:'black',marginTop:30}}>
//     <TouchableOpacity onPress={() => { this.submitLogin()}}>
//     <Text style={{color:'white',alignSelf:'center',justifyContent:'center',margin:10,padding:10,}}>Reset password</Text>
//     </TouchableOpacity>
//  </View>
// </View>
// </ScrollView>
// </SafeAreaView>
// )
// }
// }

import React, { Component } from 'react';
import {
  StyleSheet
  , Text
  , View
  , TextInput
  , TouchableOpacity
  , Image,
  SafeAreaView,
  ScrollView,
  Dimensions,
  borderBottom,
} from 'react-native';
import { baseURL } from '../Constant';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default class Forgot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      WidthSize: screen?.width,
      HieghtSize: screen?.height,
      plac_holder: '',
      auth_token: '',
    }
  }

  validation = () => {
    let isError = false
    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!this.state.email) {
      isError = true
      alert('Please enter your email ')
    } else if (!emailReg.test(this.state.email)) {
      isError = true
      alert("Email is Not Correct")
    }
    return isError
  }
  Resetpassword = async () => {
    const hasError = this.validation()
    if (hasError) {
      return
    }
    console.log('check', this.state.email)
    fetch(`${baseURL}/password_resets`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": this.state.email,
      })
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong');
        }
      })
      .then(result => {
        console.log('resutl--->', result)
        // saveToken('secure_access_token', `${result.access_token}`)
        this.props.navigation.navigate('Login')
      }).catch((error) => {
        console.log(error);
      });
  }


  // submitLogin() {
  //   if (this.state.Username == "") {
  //     alert("Please enter your User Name or email")
  //   }
  //   else if (this.state.email == "") {
  //     alert("please enter your user name or email")
  //   }
  //   else {
  //     alert("LINK have successfully sent to the your email address")
  //     this.props.navigation.navigate("Login")
  //   }
  // }
  render() {
    return (
      <SafeAreaView style={{ width: '100%' }}>
        <ScrollView style={{ width: '100%' }}>

          <Text style={{ marginTop: 20, alignSelf: 'center', color: 'black', fontWeight: '900', fontSize: 20 }}>Forget password</Text>

          <View style={{ marginTop: 35, marginLeft: 10, }}>
            <Text style={{ fontSize: 12, }}>
              Forgot your password? Please enter your username or email address. You will receive a link to create a new password via email.
            </Text>
          </View>
          <View style={{ marginTop: 35 }}>
            <TextInput
              style={{ marginLeft: 20, }}
              placeholder="Enter your email address "
              placeholderTextColor="#808080"
              onChangeText={(email) => this.setState({ email: email })}
            />
            <View style={{ borderBottomWidth: 1, marginLeft: 20, borderBottomColor: '#C0C0C0', width: '90%' }}>
            </View>
            <View style={{ borderWidth: 1, alignSelf: 'center', width: '80%', height: 70, borderBottomRadius: 15, borderBottomRadius: 15, marginLeft: 30, backgroundColor: 'black', marginTop: 30 }}>
              <TouchableOpacity onPress={() => { this.Resetpassword() }}>
                <Text style={{ color: 'white', alignSelf: 'center', justifyContent: 'center', margin: 10, padding: 10, }}>Reset password</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}