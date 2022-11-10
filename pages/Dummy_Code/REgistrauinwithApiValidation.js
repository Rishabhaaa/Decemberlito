import React,{Component} from "react";
import {View,Text,TextInput,TouchableOpacity,Alert} from 'react-native'
import apiurl from '../pages/apiurl';

export default class PracticeApi1 extends Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            email: '',
            password: '',
            cpassword:'',
        }
    }
    submitbtn(){
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/

        if(this.state.name == "")
        {
            alert("please Enter Your name")
        }
        else if(this.state.email == "" || reg.test(this.state.email) == false)
        {
            alert("Please Enter Your Email Id in this formate example@gmail.com")
        }
        else if(this.state.password == "")
        {
            alert("Please Enter Your minimum 8 Character password")
        }
        else if(this.state.cpassword == "")
        {
            alert("Please Enter Your minimum 8 Character password")
        }

        else if(this.state.password !== this.state.cpassword)
        {
                alert("Password didn't matched");
        }
        
        else{
            this.callapi();
            // this.props.navigation.navigate('PracticeApi2');

        }

        
    }




   async callapi(){
        fetch(apiurl + "authaccount/registration", 

        {
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
         body: JSON.stringify({
            "name": this.state.name,
            "password": this.state.password,
            "email":this.state.email,
            

         })

    }).then(res =>(res.json()))
    .then(value =>
    { 
        if(value.code == 0){
            // Alert.alert("Registration successfully");
            // console.log(value)
            Alert.alert(
                "Alert Title",
                "Registration successfully",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { 
                    text: "OK", onPress: () => this.props.navigation.navigate('PracticeApi2') 
                }
                ]
              );

        }
       else{
        Alert.alert(
            "Alert Title",
            "User Already Registerd",
            [
                {
                    text:"Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Ok",
                    onPress: () => this.props.navigation.navigate('PracticeApi1')
                }
            ]
    )

        // alert("already registerd ");
       }
            console.log(value.code);


        // console.log('response data ',value.Message)
    });

    }

    render(){
        return(
            <View style={{marginTop:20}}>
                <Text style={{fontSize:30,fontWeight:"bold",padding:12}}>Registration Page</Text>
                    <TextInput 
                     onChangeText={(text) => this.setState({name:text})}
                    style={{borderWidth:1,padding:12,width:"90%",borderRadius:12,backgroundColor:"#e5e5e5",alignSelf:"center",}}
                    placeholder="Enter Your name"></TextInput>
                    <TextInput 
                    onChangeText={(text) => this.setState({email:text})}

                    style={{borderWidth:1,padding:12,width:"90%",borderRadius:12,backgroundColor:"#e5e5e5",alignSelf:"center",marginTop:12}}
                    placeholder="Enter Your Email"></TextInput>
                    <TextInput 
                      onChangeText={(text) => this.setState({password:text})}
                    secureTextEntry={true}
                    style={{borderWidth:1,padding:12,width:"90%",borderRadius:12,backgroundColor:"#e5e5e5",alignSelf:"center",marginTop:12}}
                    placeholder="Enter Your Password"></TextInput>
                     <TextInput 
                      onChangeText={(text) => this.setState({cpassword:text})}
                    secureTextEntry={true}
                    style={{borderWidth:1,padding:12,width:"90%",borderRadius:12,backgroundColor:"#e5e5e5",alignSelf:"center",marginTop:12}}
                    placeholder="Enter Your confirm Password"></TextInput>
                    <TouchableOpacity 
                    onPress={()=> this.submitbtn()}
                    style={{alignItems:"center",backgroundColor:"blue",padding:12,width:"70%",alignSelf:"center",marginTop:12,borderRadius:12}}><Text style={{color:"#fff"}}>Sign Up</Text></TouchableOpacity>
                    
            </View>
        )
    }

}