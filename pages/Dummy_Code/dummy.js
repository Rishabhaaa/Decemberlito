import React, { Component } from "react";
import { View,Text, TouchableOpacity,Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Likebtn extends Component{
    constructor(props){
        super(props)
        this.state={    
            selectedButton: '',
            imgbtn:'',
            imgbtn2:require('../Images/d.png'),
    }
}
    render(){

       return( <View>
        <TouchableOpacity
            style={{ backgroundColor: this.state.selectedButton === 'button1' ? 'red' : '#fff', padding: 15}}
            onPress={() => this.setState({ selectedButton: 'button1' })}
        >
          <Text>1 Button</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={{ backgroundColor: this.state.selectedButton === 'button2' ? 'red' : 'yellow', padding: 15}}
            onPress={() => this.setState({ selectedButton: 'button2' })}
        >
          <Text >2 button!</Text>
        </TouchableOpacity>

        <TouchableOpacity 
            onPress={() =>this.setState({imgbtn : 'imgbtn'})}>
        <Image source={require('../Images/heart1.png')} style={{width:hp('6%'),height:hp('6%'),margin:12,marginTop:65,tintColor: this.state.imgbtn == 'imgbtn' ? 'red' : 'white',borderColor:"red"}}/>
        </TouchableOpacity>

       

    </View>
)
            
    }
    }



