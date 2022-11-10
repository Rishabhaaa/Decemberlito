import React,{Component} from "react";
import { View,FlatList,Text,TouchableOpacity,Image } from "react-native";
export default class Details extends Component{
    constructor(props){
        super(props)
        this.state={
        }
    }
    render(){
        //console.log('show data ',this.props.data)
        return(
               <View style={{marginTop:30,padding:12,marginLeft:15,marginRight:15,marginTop:5}}>
    <View style={{flexDirection:'row',justifyContent:'space-around',padding:12,marginLeft:10,marginRight:10,marginTop:5}}>
    <Text style={{marginRight:90,color:'black'}}>Brand: </Text>
    <Text>Michael Kors</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-around',padding:12,backgroundColor:'#E8E5DE',marginLeft:10,marginRight:10,marginTop:5}}>
    <Text style={{marginRight:100,color:'black'}}>Color: </Text>
    <Text style={{marginRight:40}}>Brown</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-around',padding:12,marginLeft:10,marginRight:10,marginTop:5}}>
    <Text style={{color:'black',marginRight:100}}>Size: </Text>
    <Text style={{marginRight:50}}>L</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#E8E5DE',padding:12,marginLeft:5,marginRight:5,marginTop:5}}>
    <Text style={{marginRight:100,color:'black'}}>Types of Handbags: </Text>
    <Text style={{marginRight:70}}>Tote</Text>
    </View>
            </View>
        )
    }
}














