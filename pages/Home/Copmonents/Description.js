import React,{Component} from "react";
import { View,FlatList,Text,TouchableOpacity,Image } from "react-native";
export default class Description extends Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    render(){
        //console.log('show data ',this.props.data)
        return(
            <View>
<Text style={{justifyContent:'center',alignSelf:'center',padding:16}}>
   Description: These Balmain Logo Embellished Sock Sneakers are in excellent condition with only signs of use on the soles. Otherwise in pristine condition. Showcasing Balmain’s eye for logomania, these sneakers are offered in a sleek colorway. The pair is finished with contrasting gold-tone logo hardware to the side that stands out atop the black hue for a metallic look.
   </Text>
               </View>
        )
    }
}