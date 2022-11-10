import React,{Component} from "react";
import {View,Text,Alert,ScrollView} from 'react-native'
import Listshow from "./Copmonents/ListShow";
import Header from "../../Component/Header";
import Offerheader from "../../Component/Offerheader";
import Footer from "../../Component/Footer";
import Whatsapp from "../../Component/Whatsapp";
import { SafeAreaView } from "react-native-safe-area-context";


export default class Viewitems extends Component{
    focusListener
    constructor(props){
        super(props)
        this.state={
            data:[]
        }
    }
    SwitchCashFun(){
        // console.log('show props data ',this.props.route.params.itemsData.id)
        switch(this.props.route.params.itemsData.id) {
            case 1:
                this.setState({
                    data:[{
                        id:1,
                        image:require('../../Images/girls_night.png'),
                        heading:"hellow i amd done",
                        Condition:"With Dust bag ",
                        Tags:"Good Condition",
                        ActuallPrice: " 12,300.00",
                        Price:" 12,200.00",
                        label:"17%",
                        days:"2 Days",
        
                    },
        
                    {
                        id:2,
                        image:require('../../Images/p5.png'),
                        heading:"that is shivani bage",
                        Condition:"M",
                        Tags:"New With Tags",
                        ActuallPrice: " 13,300.00",
                        Price:" 12,200.00",
                        label:"15%",
                        days:"2 Days",

        
                       
                    },
                    {
                        id:3,
                        image:require('../../Images/yellow_bag.png'),
                        heading:"that is Rishabh bage",
                        Condition:"M",
                        Tags:"Good Condition",
                        ActuallPrice: " 199,300.00",
                        Price:" 12,200.00",
                        label:"8%",
                        days:"2 Days",

        
                       
                    },
                    {
                        id:4,
                        image:require('../../Images/p9.png'),
                        heading:"that is deeraj Bage",
                        Condition:"M",
                        Tags:"Excellent Condition",
                        ActuallPrice: " 92,300.00",
                        Price:" 12,200.00",
                        label:"1%",
                        days:"2 Days",

        
        
                    }]
                })
              break;
            case 2:
                this.setState({
                    data:[{
                        id:1,
                        image:require('../../Images/girls_night.png'),
                        heading:"Dharaj kaa bag",
                        Condition:"M",
                        Tags:"New With Tags",
                        ActuallPrice: " 12,300.00",
                        Price:" 12,200.00",
                        label:"17%",
                        days:"2 Days",

        
                    },
        
                    {
                        id:2,
                        image:require('../../Images/p5.png'),
                        heading:"deeraj ka parfume",
                        Condition:"M",
                        Tags:"New With Tags",
                        ActuallPrice: " 13,300.00",
                        Price:" 12,200.00",
                        label:"15%",
                        days:"2 Days",

        
                       
                    },
                    {
                        id:3,
                        image:require('../../Images/yellow_bag.png'),
                        heading:"deeraj ka cendele",
                        Condition:"M",
                        Tags:"Good Condition",
                        ActuallPrice: " 199,300.00",
                        Price:" 12,200.00",
                        label:"8%",
                        days:"2 Days",

        
                       
                    },
                    {
                        id:4,
                        image:require('../../Images/p9.png'),
                        heading:"that is deeraj Bage",
                        Condition:"M",
                        Tags:"Excellent Condition",
                        ActuallPrice: " 92,300.00",
                        Price:" 12,200.00",
                        label:"1%",
                        days:"2 Days",

        
        
                    }]
                })
              break;
            case 3:
                this.setState({
                    data:[{
                        id:1,
                        image:require('../../Images/girls_night.png'),
                        heading:"Dheeraj kaa ghar",
                        Condition:"M",
                        Tags:"New With Tags",
                        ActuallPrice: " 12,300.00",
                        Price:" 12,200.00",
                        label:"17%",
                        days:"2 Days",

        
                    },
        
                    {
                        id:2,
                        image:require('../../Images/p5.png'),
                        heading:"rishab ka ghar",
                        Condition:"M",
                        Tags:"New With Tags",
                        ActuallPrice: " 13,300.00",
                        Price:" 12,200.00",
                        label:"15%",
                        days:"2 Days",

        
                       
                    },
                    {
                        id:3,
                        image:require('../../Images/yellow_bag.png'),
                        heading:"that is Rishabh bage",
                        Condition:"M",
                        Tags:"rishab ka parfume",
                        ActuallPrice: " 199,300.00",
                        Price:" 12,200.00",
                        label:"8%",
                        days:"2 Days",

        
                       
                    },
                    {
                        id:4,
                        image:require('../../Images/p9.png'),
                        heading:"that is deeraj Bage",
                        Condition:"M",
                        Tags:"Excellent Condition",
                        ActuallPrice: " 92,300.00",
                        Price:" 12,200.00",
                        label:"1%",
                        days:"2 Days",

        
        
                    }]
                })
              break;
            case 4:
                this.setState({
                    data:[{
                        id:1,
                        image:require('../../Images/girls_night.png'),
                        heading:"hellow i amd done",
                        Condition:"M",
                        Tags:"New With Tags",
                        ActuallPrice: " 12,300.00",
                        Price:" 12,200.00",
                        label:"17%",
                        days:"2 Days",

        
                    },
        
                    {
                        id:2,
                        image:require('../../Images/p5.png'),
                        heading:"that is shivani bage",
                        Condition:"M",
                        Tags:"New With Tags",
                        ActuallPrice: " 13,300.00",
                        Price:" 12,200.00",
                        label:"15%",
                        days:"2 Days",

        
                       
                    },
                    {
                        id:3,
                        image:require('../../Images/yellow_bag.png'),
                        heading:"that is Rishabh bage",
                        Condition:"M",
                        Tags:"Good Condition",
                        ActuallPrice: " 199,300.00",
                        Price:" 12,200.00",
                        label:"8%",
                        days:"2 Days",

        
                       
                    },
                    {
                        id:4,
                        image:require('../../Images/p9.png'),
                        heading:"that is deeraj Bage",
                        Condition:"M",
                        Tags:"Excellent Condition",
                        ActuallPrice: " 92,300.00",
                        Price:" 12,200.00",
                        label:"1%",
                        days:"2 Days",

        
        
                    }]
                })
              break;
            case 5:
                this.setState({
                    data:[{
                        id:1,
                        image:require('../../Images/girls_night.png'),
                        heading:"hellow i amd done",
                        Condition:"M",
                        Tags:"New With Tags",
                        ActuallPrice: " 12,300.00",
                        Price:" 12,200.00",
                        label:"17%",
                        days:"2 Days",

        
                    },
        
                    {
                        id:2,
                        image:require('../../Images/p5.png'),
                        heading:"that is shivani bage",
                        Condition:"M",
                        Tags:"New With Tags",
                        ActuallPrice: " 13,300.00",
                        Price:" 12,200.00",
                        label:"15%",
                        days:"2 Days",

        
                       
                    },
                    {
                        id:3,
                        image:require('../../Images/yellow_bag.png'),
                        heading:"that is Rishabh bage",
                        Condition:"M",
                        Tags:"Good Condition",
                        ActuallPrice: " 199,300.00",
                        Price:" 12,200.00",
                        label:"8%",
                        days:"2 Days",

        
                       
                    },
                    {
                        id:4,
                        image:require('../../Images/p9.png'),
                        heading:"that is deeraj Bage",
                        Condition:"M",
                        Tags:"Excellent Condition",
                        ActuallPrice: " 92,300.00",
                        Price:" 12,200.00",
                        label:"1%",
                        days:"2 Days",

        
        
                    }]

                })
               
              break;
            default:
              Alert.alert("NUMBER NOT FOUND");
            }


    }
    componentDidMount(){
        this.focusListener = this.props.navigation.addListener('focus', () => {
            this.SwitchCashFun()
            // your logic will go here
          });
        
    }
    componentWillUnmount() {
        // Remove the event listener
        this.focusListener.remove();
      }
    render(){
        
        return(
            <SafeAreaView>
                 <ScrollView>
             <View style={{marginBottom:120}}>
                 <Header  onPress={()=> this.props.navigation.openDrawer()} />
                 <Offerheader/>
                <Listshow  data={this.state.data} onPress={(val)=>console.log('showw dataaa ',val)}  />
                <Footer/>
            </View>
           </ScrollView>
           <Whatsapp/>
            </SafeAreaView>
          
        )
    }
}
