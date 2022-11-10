import React,{Component} from "react";
import {View,Text} from 'react-native'
import Listshow from "./Copmonents/ListShow";

export default class Shoulderbag extends Component{
    constructor(props){
        super(props)
        this.state={
            data:[
                {
                    id:1,
                    image:require('../../Images/girls_night.png'),
                    heading:"hellow this is sholder bags ",
                    Size:"M",
                    Tags:"New With Tags",
                    ActuallPrice: " 12,300.00",
                    Price:" 12,200.00",
                    label:"17%",
    
                },
    
                {
                    id:2,
                    image:require('../../Images/p5.png'),
                    heading:"that is shivani bage",
                    Size:"M",
                    Tags:"New With Tags",
                    ActuallPrice: " 13,300.00",
                    Price:" 12,200.00",
                    label:"15%",
    
                   
                },
                {
                    id:3,
                    image:require('../../Images/yellow_bag.png'),
                    heading:"that is Rishabh bage",
                    Size:"M",
                    Tags:"Good Condition",
                    ActuallPrice: " 199,300.00",
                    Price:" 12,200.00",
                    label:"8%",
    
                   
                },
                {
                    id:4,
                    image:require('../../Images/p9.png'),
                    heading:"that is deeraj Bage",
                    Size:"M",
                    Tags:"Excellent Condition",
                    ActuallPrice: " 92,300.00",
                    Price:" 12,200.00",
                    label:"1%",
    
    
                },
    
                {
                    id:5,
                    image:require('../../Images/p10.png'),
                    heading:"Tory Burch Reversible Logo Waist Belt",
                    Size:"M",
                    Tags:"New With Tags",
                    ActuallPrice: " 72,300.00",
                    Price:" 156,200.00",
                    label:"18%",
    
                },
                {
                    id:6,
                    image:require('../../Images/p13.png'),
                    image1:require('../../Images/p4.png'),
                    heading:"Tory Burch Reversible Logo Waist Belt",
                    Size:"M",
                    Tags:"New With Tags",
                    ActuallPrice: " 22,300.00",
                    Price:" 14,200.00",
                    label:"19%",
    
                   
                },
                {
                    id:7,
                    image:require('../../Images/women_bag1.png'),
                    heading:"Tory Burch Reversible Logo Waist Belt",
                    Size:"M",
                    Tags:"New With Tags",
                    ActuallPrice: " 67,300.00",
                    Price:" 1,200.00",
                    label:"45%",
    
                   
                },
                {
                    id:8,
                    image:require('../../Images/p5.png'),
                    image1:require('../../Images/p4.png'),
                    heading:"Tory Burch Reversible Logo Waist Belt",
                    Size:"M",
                    Tags:"New With Tags",
                    ActuallPrice: " 16,800.00",
                    Price:" 32,200.00",
                    label:"6%",
    
                   
                },
                {
                    id:9,
                    image:require('../../Images/p4.png'),
                    heading:"Tory Burch Reversible Logo Waist Belt",
                    Size:"M",
                    Tags:"New With Tags",
                    ActuallPrice: " 62,300.00",
                    Price:" 12,200.00",
                    label:"45%",
    
                   
                },
                {
                    id:10,
                    image:require('../../Images/p10.png'),
                    heading:"Tory Burch Reversible Logo Waist Belt",
                    Size:"M",
                    Tags:"New With Tags",
                    ActuallPrice: " 52,400.00",
                    Price:" 62,230.00",
                    label:"4%",
    
                   
                },
                {
                    id:11,
                    image:require('../../Images/p7.png'),
                    heading:"Tory Burch Reversible Logo Waist Belt",
                    Size:"M",
                    Tags:"New With Tags",
                    ActuallPrice: " 112,300.00",
                    Price:" 10,280.00",
                    label:"19%",
    
                   
                },
                {
                    id:12,
                    image:require('../../Images/p13.png'),
                    image1:require('../../Images/p4.png'),
                    heading:"Tory Burch Reversible Logo Waist Belt",
                    Size:"M",
                    Tags:"New With Tags",
                    ActuallPrice: " 10,590.00",
                    Price:" 12,290.00",
                    label:"60%",
    
                   
                },
             
            ]
        }
    }
    render(){
        return(
            <View>
                <Text>Showlder</Text>
                <Listshow  data={this.state.data} onPress={(val)=>console.log('Shoulderbag ',val)}  />
            </View>
        )
    }
}
