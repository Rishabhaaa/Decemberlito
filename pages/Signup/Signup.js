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
// ActivityIndicator,
// } from 'react-native';
// const window = Dimensions.get("window");
// const screen = Dimensions.get("screen");
// export default class Signup extends Component {
//   constructor(props){
//     super(props)
//     this.state={
//       Username:"",
//       Password:"",
//       Phone:"",
//       Email_address:"",
//       Password:"",
//       validated : false,
//       Password:"",
//       checkBox1:"",
//       checkBox2:"",
//       checkBox3:"",
//     WidthSize:screen?.width,
//       HieghtSize:screen?.height,
//       plac_holder:''
//     }
//   }
//   submitRegister() {
//     if (this.state.Phone == "") {
//       alert("Please enter your User Name")
//     }
// else if(this.state.Email_address == ""){
//       alert("please enter you  email address")
//     }
//     else if(this.state.Password == ""){
//       alert("please enter your password")
//     }
//     else{
//       alert("you have successfully  Register to the page")
//     }
//   }
// render() {
// return(
// <SafeAreaView style={{width:'100%'}}>
//   <ScrollView style={{width:'100%'}}>
//     <View style={{flexDirection:'row',justifyContent:"space-between"}}>
//     <Text style={{marginLeft:35,fontStyle:'normal',fontSize:20,marginTop:10,color:'black'}}>My Account</Text>
// {/* <TouchableOpacity>
//      <Image style={{width:30,height:15,marginTop:20}}source={require('../../Images/Cross.png')} />
// </TouchableOpacity> */}
//     </View> 
    
// <View>
// <Text style={{fontSize:20,color:'black',marginLeft:20,marginTop:18}}>Register</Text>
// </View>
// <View style={{marginTop:30}}>
//  <TextInput
//     style={{height:50,width:'90%',alignSelf:'center',paddingLeft:20,marginTop:15,marginTop:30,}}
//     placeholder="Phone *"
//     keyboardType='numeric'
//     onChangeText={(Phone) => this.setState({Phone:Phone})}
//   />
//     <View style={{borderBottomWidth:1,marginLeft:20,borderBottomColor:'#C0C0C0',width:'90%'}}></View>
//   <TextInput
//     style={{height:50,width:'90%',alignSelf:'center',paddingLeft:20,marginTop:30}}
//     placeholder="Email address *"
//     onChangeText={(Email_address) => this.setState({Email_address:Email_address})}
//   />
//   <View style={{borderBottomWidth:1,marginLeft:20,borderBottomColor:'#C0C0C0',width:'90%'}}></View>
//   <TextInput
//     style={{borderColor:'#808080',height:50,width:'90%',alignSelf:'center',marginTop:5,paddingLeft:20,marginTop:30}}
//     placeholder="Password *"
//     secureTextEntry={true}
//     onChangeText={(Password) => this.setState({Password:Password})}
//   />
//     <View style={{borderBottomWidth:1,marginLeft:20,borderBottomColor:'#C0C0C0',width:'90%'}}></View>
//  </View>
//            {/* code of checkbox */}
// <View style={{flexDirection:"row",marginLeft:10,padding:12,marginLeft:10,padding:10,marginTop:30}}>
//  <TouchableOpacity style={{width:'7%',height:20,flexDirection:'row',backgroundColor:'silver'}}
//                              onPress={()=>this.setState({checkBox2: !this.state.checkBox2})}
//                              >
//                                {
//                                  this.state.checkBox2?
//                                <Image source={require('../../Images/RightVector.png')} style={{width:"0.2%",height:5,padding:6,marginLeft:5,alignSelf:'center'}} />
//                                :null
//                                }
//                              </TouchableOpacity> 
//                              <Text style={{marginLeft:10}}>Subscribe to our newsletter</Text>
// </View>
// <View style={{marginLeft:20,marginTop:25,fontSize:15}}>
// <Text>
// Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
// </Text>
// <TouchableOpacity>
// <Text style={{color:'black',fontSize:15}}>privacy policy</Text>
// </TouchableOpacity>
// </View>
//                         {/* code of checkBox */}
//                         {/* <View style={{flexDirection:"row",marginLeft:10,padding:12,marginLeft:20,marginTop:25,padding:10,}}>
// <TouchableOpacity style={{width:'7%',height:20,flexDirection:'row',backgroundColor:'silver'}}
//                              onPress={()=>this.setState({checkBox3: !this.state.checkBox3})}
//                              >
//                                {
//                                  this.state.checkBox3?
//                                <Image source={require('../images/RightVector.png')} style={{width:"0.2%",height:5,padding:6,marginLeft:5,alignSelf:'center'}} />
//                                :null
//                                }
//                              </TouchableOpacity>
//                              <Text style={{marginLeft:10}}>I want to receive updates about products and promotions.</Text>
// </View> */}
// <TouchableOpacity onPress={() => { this.submitRegister();}} style={{borderWidth:1,alignSelf:'center',width:'80%',height:70,borderBottomRadius:15,backgroundColor:'black',marginTop:30}}>
// <Text style={{color:'white',alignSelf:'center',padding:14}}> REGISTER</Text>
// </TouchableOpacity>
// <View style={{marginTop:5,alignSelf:'center',justifyContent:'center',marginBottom:30}}>
// <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
//     <Text style={{}}>Login to the Page</Text>
//   </TouchableOpacity>
// </View>


// <View style={[styles.container, styles.horizontal]}>
//         <ActivityIndicator color= 'FF6666'/>
//         <ActivityIndicator size="large" />
//         <ActivityIndicator size="small" color="#0000ff" />
//         <ActivityIndicator size="large" color="FF4500" />
//       </View>

// </ScrollView>
// </SafeAreaView>
// )
// }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center"
//   },
//   horizontal: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//     padding: 10
//   }
// });

// import React from 'react';
// import { StyleSheet, View, Text, Image, Button, SafeAreaView, Linking, ScrollView, TouchableOpacity, image ,} from 'react-native';
// import AppIntroSlider from 'react-native-app-intro-slider';
// import Header from "../../Component/Header";
// import Viewitems from '../Home/Viewitems';
// import Listshow from '../Home/Copmonents/ListShow';
// import Footer from '../../Component/Footer';
// import { } from 'react-native-gesture-handler';
// import Details from '../Home/Copmonents/Details';
// import Description from '../Home/Copmonents/Description';
// import Whatsapp from '../../Component/Whatsapp';
// import Itemdata from '../Home/itemdata';
// const funccall =()=>{
// }

// export default class Signup extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       showRealApp: false,
//       checkBox1: "",
//       activeBt: 'Description',
//       images: [],
//       currentIndex:0,
//       name:'',
//       data:'',



//     }
//   }
// //   setCurrent() {
// //     var root = this;
// //     root.setState({
// //         images: [
// //             ...root.state.images,
            
// //         ],
// //     });
// // }

//   Slideproduct(item) {
//      console.log('itemssss data ',item);
//      fetch('https://litoo.herokuapp.com/products/3',
//        {
//          method: 'GET',
//          headers: {
//            Accept: 'application/json',
//            'Content-Type': 'application/json'
//          }
//        })
//        .then((response) => response.json())
//        .then((data) => {
//          console.log('sliderapiCall', data);
//          this.setState({images:data?.images,data:data})
         
//        })
//        .catch((error) => {
//          console.error('Error:', error);
//          Alert.alert(err.message);
 
//        });
 
//    }

//    componentDidMount(){
//     this.Slideproduct();
//   }
//   _renderItem = ({ item}) => {
//     return (
//       <View style={{ height: 200, width: "100%", }}>
        
//         <Text style={styles.title}>{item.title}</Text>
//         <Image style={{ justifyContent: 'center', alignSelf: 'center', width: '100%', height: '100%' }} source={{uri:item}} />
//         <Text>{item.name}</Text>
//       </View>
      
      
//     );
//   }
//   render() {
//     // console.log('cc ', slides)
//     return (
//       <SafeAreaView style={{ backgroundColor: 'white' }}>
//         <ScrollView>
//           <Header onPress={() => this.props.navigation.openDrawer()} />
//           <View style={{ marginTop: 30, justifyContent: 'center', alignSelf: 'center' }}>
//             <Text style={{color: 'black',fontSize:30}}>Balmain Logo Embellished </Text>
//             <Text style={{color: 'black',fontSize:30,alignSelf:'center',justifyContent:'center'}}>Sock Sneakers</Text>
//           </View>
//           <View style={{ width: '90%', height: 250, alignSelf: 'center', justifyContent: 'center', backgroundColor: 'white', marginTop: 10 }}>
//             <AppIntroSlider renderItem={this._renderItem} data={this.state.images} title={this.state.name} onDone={this._onDone} currentImageEmitter={i=>this.setState({currentIndex:i})}/>
//           </View>

//           {/* <Image style={{ justifyContent: 'center', alignSelf: 'center', width: '100%', height: '100%' }} source={this.state.images} /> */}

//           <Text style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 10 }}>{this.state.data.name}</Text>
//           <Text style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 10, fontWeight: "900" }}>{this.state.data.price}</Text>
//           <Text style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 5 }}>{this.state.data.condition}</Text>
//           <Text style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 5 }}>{this.state.data.discount_price}</Text>
         
//           <View style={{ width: '100%' }}>
//             <TouchableOpacity style={{ flexDirection: 'row', width: '90%', height: 50, backgroundColor: 'black', justifyContent: 'center', alignSelf: 'center', marginTop: 30, }}>
//               <Image source={require('../../Images/shooping_trolley.png')} style={{ width: 20, height: 20, justifyContent: 'center', alignSelf: 'center', tintColor: 'white' }} />
//               <Text style={{ justifyContent: 'center', alignSelf: 'center', color: 'white', marginLeft: 15, fontWeight: '900' }}>Add to cart </Text>
//             </TouchableOpacity>
//           </View>
//           <View style={{ width: '100%' }}>
//             <TouchableOpacity onPress={() => { Linking.openURL('https://web.whatsapp.com/') }} style={{ flexDirection: 'row', width: '90%', height: 50, backgroundColor: 'white', justifyContent: 'center', alignSelf: 'center', marginTop: 30, backgroundColor: 'silver' }}>
//               <Image source={require('../../Images/whatsapp.png')} style={{ width: 20, height: 20, justifyContent: 'center', alignSelf: 'center', }} />
//               <Text style={{ justifyContent: 'center', alignSelf: 'center', color: 'black', marginLeft: 15, fontWeight: '900' }}>Sechudule a Video Call</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={{ width: '100%', marginTop: 20, }}>
//             <TouchableOpacity style={{ flexDirection: 'row', width: '90%', height: 40, justifyContent: 'center', alignSelf: 'center', marginTop: 30, borderWidth: 2, borderColor: 'silver' }}
//               onPress={() => this.setState({ checkBox1: !this.state.checkBox1 })}
//             >
//               <Image source={require('../../Images/heart1.png')} style={{ width: 25, height: 20, justifyContent: 'center', alignSelf: 'center', tintColor: this.state.checkBox1 ? "red" : 'grey' }} />
//             </TouchableOpacity>
//           </View>
//           {/* <View style={{ width: '100%' }}>
//             <TouchableOpacity onPress={() => { Linking.openURL('https://web.whatsapp.com/') }} style={{ flexDirection: 'row', width: '90%', height: 40, backgroundColor: 'white', justifyContent: 'center', alignSelf: 'center', marginTop: 30, backgroundColor: 'silver' }}>
//               <Image source={require('../../Images/whatsapp.png')} style={{ width: 20, height: 20, justifyContent: 'center', alignSelf: 'center', }} />
//               <Text style={{ justifyContent: 'center', alignSelf: 'center', color: 'black', marginLeft: 15, fontWeight: '900' }}>Sechudule a Video Call</Text>
//             </TouchableOpacity>
//           </View> */}
//           <View style={{ }}>
//             <View style={{ width: '90%', height: 70, marginTop: 10, flexDirection: 'row', backgroundColor: '#E1E1E1',padding:18,marginLeft:20 }}>
//               <Image source={require('../../Images/tt.jpg')} style={{ width: 50, height: 35,}} />
//               <Text style={{ justifyContent: 'center', alignSelf: 'center', color: 'black', marginLeft: 10, }}>Guaranteed Authenticity{'\n'}100% Authentic or full refund*</Text>
//             </View>
//             <View style={{ width: '90%', height: 70, marginTop: 5, justifyContent: 'center', alignSelf: 'center', flexDirection: 'row', backgroundColor: '#E1E1E1' }}>
//               <Image source={require('../../Images/tt1.jpg')} style={{ width: 50, height: 35,marginTop:15}} />
//               <Text style={{ justifyContent: 'center', alignSelf: 'center', color: 'black', marginLeft: 10, }}>EMI Available{'\n'}Please choose Online Payments and then{'\n'}select EMI under payment options at{'\n'}checkout.</Text>
//             </View>
//             <View style={{ width: '90%', height: 70, marginTop: 6, justifyContent: 'center', alignSelf: 'center', flexDirection: 'row', backgroundColor: '#E1E1E1' }}>
//               <Image source={require('../../Images/tt3.jpg')} style={{ width: 50, height: 35,marginTop:15,marginLeft:10 }} />
//               <Text style={{ justifyContent: 'center', alignSelf: 'center', color: 'black', marginLeft: 10}}>Free Returns{'\n'}Request a return within 24 hours of delivery {'\n'}and get a full refund. Not applicable on sale{'\n'} products.</Text>
//             </View>
//           </View>
//           <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center',marginTop:20 }}>
//             <TouchableOpacity onPress={() => this.setState({ activeBt: 'Description' })}>
//               <Text style={{ color: 'black' }}>Description</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={() => { this.setState({ activeBt: 'Details' }) }}>
//               <Text style={{ color: 'black', marginLeft: 30 }}>Details</Text>
//             </TouchableOpacity>
//           </View>
//           {
//             this.state.activeBt == 'Description' ? <Description /> : null
//           }
//           {
//             this.state.activeBt == 'Details' ? <Details /> : null
//           }
//           <Text style={{ fontSize: 20,color:'black', justifyContent: 'center', alignSelf: 'center', marginTop: 15 }}>Related products</Text>
//           <View style={{ marginTop: 20 }}>
//             <Listshow data={this.state.data} onPress={(val) => this.props.navigation.navigate('Itemdata', { imteData: val })} />
//           </View>
//           <View>
//           <Whatsapp/>
//           </View>
//           <View>
//             <Footer />
//           </View>
//         </ScrollView>
//         <Whatsapp/>
//       </SafeAreaView>
//     )
//   }
// }
// const styles = StyleSheet.create({
//   buttonCircle: {
//     width: 10,
//     height: 10,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   //[...]
// });

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
  Alert,

} from 'react-native';
import { baseURL } from '../Constant';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: "",
      phone_number: "",
      email: "",
      password: "",
      password_confirmation: "",
      status: "",
      wholeResult: "",
      validated: false,
      checkBox1: "",
      checkBox2: "",
      checkBox3: "",
      WidthSize: screen?.width,
      HieghtSize: screen?.height,
      plac_holder: '',
      baseUrl: `${baseURL}/users`,
    };
  }
  onClickListener = (viewId) => {
    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    let passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

    if (!this.state.username) {
      Alert.alert("Please enter username");
    } else if (!this.state.email) {
      Alert.alert("Please enter email");
    } else if (!emailReg.test(this.state.email)) {
      Alert.alert("Please enter vaild email");
    } else if (!this.state.phone_number) {
      Alert.alert("Please enter Phone No.");
    } else if (!this.state.password) {
      Alert.alert("Please enter Password");
    } else if (!passwordReg.test(this.state.password)) {
      alert(`Please enter valid password like
        1) Minimum 8 charactor
        2) atleast one capital letter
        3) atleast one special charector
      `)
    } else if (this.state.password !== this.state.password_confirmation) {
      Alert.alert("Password and confirm password not match")
    } else {
      this.registerCall();
    }
  }
  registerCall() {
    const data = new FormData();
    data.append("username", this.state.username)
    data.append("phone_number", this.state.phone_number)
    data.append("email", this.state.email)
    data.append("password", this.state.password)
    data.append("password_confirmation", this.state.password_confirmation)
    console.log("data:::::::::::::::::::::::::::::::::", data)
    // let data2 = data
    // console.log('show data ', data)
    // this.props.navigation.navigate('Home', { dataa: 'Hello I am Lakhan' })
    fetch(this.state.baseUrl, {
      method: 'POST',
      body: data
    }).then((response) => response.json()).then(function (result) {

      if (result?.errors) {
        alert(result.errors[0])
        console.log('given error', result)
      }
      else {
        alert("You have successfully Login to the page")

        // this.props.navigation.navigate('Home')
        console.log("Success", this.props)
      }
      // if (result.status == "created") {
      //   Alert.alert("Registration Successful!")

      //   this.props.navigation.navigate('Home', { dataa: 'Hello I am Lakhan' })
      // } else {
      //   console.log("result------->", result.errors);
      //   Alert.alert(result.errors)
      this.props.navigation.navigate('Login')

    }).catch(function (error) {
      console.log("-------- error ------- ", error);
    });

  }
  render() {
    return (
      <SafeAreaView style={{ width: '100%' }}>
        <ScrollView style={{ width: '100%' }}>
          {/* <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
            <Text style={{ fontStyle: 'normal', fontSize: 20, marginTop: 10, color: 'black' }}>My Account</Text>
          </View> */}
          <View>
            <Text style={{ fontSize: 20, color: 'black', marginLeft: 20, marginTop: 8, fontWeight: 'bold' }}>Register</Text>
          </View>
          <View style={{ marginTop: 30 }}>
            <TextInput
              style={{ height: 50, width: '90%', alignSelf: 'center', paddingLeft: 20, }}
              placeholder="Username *"
              onChangeText={(username) => this.setState({ username: username })}
            />
            <View style={{ borderBottomWidth: 1, marginLeft: 20, borderBottomColor: '#C0C0C0', width: '90%' }}></View>
            <TextInput
              style={{ height: 50, width: '90%', alignSelf: 'center', paddingLeft: 20, marginTop: 15, marginTop: 30, }}
              placeholder="Phone*"
              keyboardType='numeric'
              maxLength={10}
              onChangeText={(phone_number) => this.setState({ phone_number: phone_number })}
            />
            <View style={{ borderBottomWidth: 1, marginLeft: 20, borderBottomColor: '#C0C0C0', width: '90%' }}></View>
            <TextInput
              style={{ height: 50, width: '90%', alignSelf: 'center', paddingLeft: 20, marginTop: 30 }}
              placeholder="email *"
              onChangeText={(email) => this.setState({ email: email })}
            />
            <View style={{ borderBottomWidth: 1, marginLeft: 20, borderBottomColor: '#C0C0C0', width: '90%' }}></View>
            <TextInput
              style={{ borderColor: '#808080', height: 50, width: '90%', alignSelf: 'center', marginTop: 5, paddingLeft: 20, marginTop: 30 }}
              placeholder="password *"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password: password })}
            />
            <View style={{ borderBottomWidth: 1, marginLeft: 20, borderBottomColor: '#C0C0C0', width: '90%' }}></View>
          </View>
          <View style={{ borderBottomWidth: 1, marginLeft: 20, borderBottomColor: '#C0C0C0', width: '90%' }}></View>
          <TextInput
            style={{ borderColor: '#808080', height: 50, width: '90%', alignSelf: 'center', marginTop: 5, paddingLeft: 20, marginTop: 30 }}
            placeholder="password_confirmation *"
            secureTextEntry={true}
            onChangeText={(password_confirmation) => this.setState({ password_confirmation: password_confirmation })}
          />
          <View style={{ borderBottomWidth: 1, marginLeft: 20, borderBottomColor: '#C0C0C0', width: '90%' }}></View>
          {/* code of checkbox */}
          <View style={{ flexDirection: "row", marginTop: 35, alignSelf: 'center' }}>
            <TouchableOpacity style={{ width: '5%', height: 20, flexDirection: 'row', backgroundColor: 'white', borderColor: 'black', borderWidth: 1 }}
              onPress={() => this.setState({ checkBox2: !this.state.checkBox2 })}
            >
              {
                this.state.checkBox2 ?
                  <Image source={require('../../Images/RightVector.png')} style={{ width: "0.2%", height: 6, padding: 6, marginLeft: 1.5, alignSelf: 'center' }} />
                  : null
              }
            </TouchableOpacity>
            <Text style={{ marginLeft: 10, }}>Subscribe to our newsletter</Text>
          </View>
          <View style={{ marginLeft: 20, marginTop: 25, fontSize: 15 }}>
            <Text>
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
            </Text>
            <TouchableOpacity>
              <Text style={{ color: 'black', fontSize: 15 }}>privacy policy</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={() => { this.onClickListener(); }} style={{ borderWidth: 1, alignSelf: 'center', width: '80%', height: 70, borderBottomRadius: 15, backgroundColor: 'black', marginTop: 30 }}>
            <Text style={{ color: 'white', alignSelf: 'center', padding: 14 }}> REGISTER</Text>
          </TouchableOpacity>
          <View style={{ marginTop: 5, alignSelf: 'center', justifyContent: 'center', marginBottom: 30 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
              <Text style={{}}>Login to the Page</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

