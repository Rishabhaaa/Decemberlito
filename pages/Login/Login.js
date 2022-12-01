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
  Alert,
} from 'react-native';
import { AsyncStorage } from 'react-native';
import { baseURL } from '../Constant';
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      password: "",
      email_or_username: "",
      validated: false,
      checkBox1: "",
      checkBox2: "",
      checkBox3: "",
      WidthSize: screen?.width,
      HieghtSize: screen?.height,
      plac_holder: '',
      auth_token: '',
      password: '',
      // Alert: '',

    }
  }

  checkValidation = () => {
    let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    let passwordReg = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
    let isError = false
    if (!this.state.email_or_username) {
      isError = true
      Alert.alert("Please enter emal or username")
    } else if (this.state.email_or_username.includes("@gmail.com")) {
      if (!emailReg.test(this.state.email_or_username)) {
        isError = true
        Alert.alert("Please enter valid email")
      }
    } else if (!this.state.password) {
      isError = true
      alert('Please enter password')
    } else if (!passwordReg.test(this.state.password)) {
      isError = true
      alert(`Please enter valid password like
        1) Minimum 8 charactor
        2) atleast one capital letter
        3) atleast one special charector

      `)
    }
    return isError;
  }
  handleLogin = async () => {
    const hasError = this.checkValidation();
    if (hasError) {
      return ''
    }
    const data = new FormData()
    data.append("email_or_username", this.state.email_or_username);
    data.append("password", this.state.password);

    await fetch(`${baseURL}/auth/login`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      // body: data
      body: JSON.stringify({
        "email_or_username": this.state.email_or_username,
        "password": this.state.password
      })

    }).then(async (res) => {
      console.log('responcessss---> ', res)
      if (res.status == 200) {
        res.json()
          .then(async (data) => {
            console.log("data ***", data)
            await AsyncStorage.setItem('isUserAuth', data.token);

            Alert.alert("You have succesfuuly login : ");
            this.props.navigation.navigate('Home')
          });
      }
    }).catch((error) => {
      AsyncStorage.setItem('isUserAuth', JSON.stringify({}));

      console.log(error);
    });
  }

  Login1 = async () => {
    await AsyncStorage.setItem("auth_token", JSON.stringify("Abhishek"));
    // important : pass string when item is set

    // get Asyncstorage
    AsyncStorage.getItem('auth_token').then(data => this.setState({ auth_token: data }))
    // console.log(AsyncStorage.getItem("auth_token"))
  }


  render() {
    if (this.state.auth_token == '') {

    }
    console.log("this.state.auth_token :", this.state.auth_token)
    return (
      <SafeAreaView style={{ width: '100%' }}>
        <ScrollView style={{ width: '100%' }}>
          <View style={{ marginTop: 35, marginLeft: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>Login </Text>
          </View>

          <View>
            <TextInput
              style={{ height: 50, width: '90%', paddingLeft: 20, marginTop: 30 }}
              placeholder="email_or_username *"
              onChangeText={(email_or_username) => this.setState({ email_or_username: email_or_username })}
            />
            <View style={{ borderBottomWidth: 1, marginLeft: 20, borderBottomColor: '#C0C0C0', flexDirection: 'row', width: '90%' }}></View>
          </View>
          <View>
            <TextInput
              style={{ marginLeft: 20, marginTop: 30 }}
              placeholder="password *"
              secureTextEntry={true}
              placeholderTextColor="#808080"
              onChangeText={(password) => this.setState({ password: password })}
            />
            <View style={{ borderBottomWidth: 1, marginLeft: 20, borderBottomColor: '#C0C0C0', flexDirection: 'row', width: '90%' }}></View>
          </View>
          {/* code of checkbox */}
          <View style={{ flexDirection: "row", marginLeft: 10, padding: 10, marginLeft: "5%", marginTop: 30 }}>
            <TouchableOpacity style={{ width: '7%', height: 20, flexDirection: 'row', backgroundColor: 'silver' }}
              onPress={() => this.setState({ checkBox1: !this.state.checkBox1 })}
            >
              {
                this.state.checkBox1 ?
                  <Image source={require('../../Images/RightVector.png')} style={{ width: "0.2%", height: 5, padding: 6, marginLeft: 5, alignSelf: 'center' }} />
                  : null
              }
            </TouchableOpacity>
            <Text style={{ marginLeft: 10 }}>Remember me</Text>
          </View>
          <TouchableOpacity onPress={this.handleLogin} style={{ flexDirection: 'row', flex: 1 }}>
            <View style={{ borderWidth: 1, alignSelf: 'center', width: '80%', height: 70, borderBottomRadius: 15, borderBottomRadius: 15, marginLeft: 30, backgroundColor: 'black', }}>
              <Text style={{ color: 'white', alignSelf: 'center', justifyContent: 'center', margin: 10, padding: 10, }}> Login</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Forgot')}>
            <Text style={{ justifyContent: 'center', alignSelf: 'center', fontSize: 14, color: 'black', marginTop: 15 }}>FORGOT YOUR PASSWORD?</Text>
            <View style={{ borderBottomWidth: 1, borderBottomColor: 'black', width: "45%", alignSelf: 'center' }}></View>
          </TouchableOpacity>
          <View style={{ justifyContent: 'center', alignSelf: 'center', fontSize: 30, marginTop: 10 }}>
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




