// // import React, { Component } from "react"
// // import {View,ScrollView} from 'react-native';
// // import Listshow from "../Home/Copmonents/ListShow";
// // import Header from "../../Component/Header";
// // import Offerheader from "../../Component/Offerheader";
// // import Footer from "../../Component/Footer";
// // import { SafeAreaView } from "react-native-safe-area-context";
// // import Whatsapp from "../../Component/Whatsapp";

 
// // export default class Girls extends Component{
// //   constructor(props){
// //       super(props)
// //       this.state={
// //         data:[]
// //       }
// //   }
// //   switchcasefun(){
// //     // console.log("rent handbag data",this.props.route.params.itemsData.id)
// //     switch(this.props.route.params.itemsData.id){
// //         case 1:
// //             this.setState({
// //                 data:[{
// //                     id:1,
// //                     image:require('../../Images/girls_night.png'),
// //                     heading:"hellow i amd done",
// //                     Size:"M",
// //                     Tags:"New With Tags",
// //                     ActuallPrice: " 12,300.00",
// //                     Price:" 12,200.00",
// //                     label:"17%",
    
// //                 },
    
// //                 {
// //                     id:2,
// //                     image:require('../../Images/p5.png'),
// //                     heading:"that is shivani bage",
// //                     Size:"M",
// //                     Tags:"New With Tags",
// //                     ActuallPrice: " 13,300.00",
// //                     Price:" 12,200.00",
// //                     label:"15%",
    
                   
// //                 }]
// //             })
// //         break;
// //         case 2:
// //             this.setState({
// //                 data:[{
// //                     id:1,
// //                     image:require('../../Images/girls_night.png'),
// //                     heading:"hellow i amd done",
// //                     Size:"M",
// //                     Tags:"New With Tags",
// //                     ActuallPrice: " 12,300.00",
// //                     Price:" 12,200.00",
// //                     label:"17%",
    
// //                 },
    
// //                 {
// //                     id:2,
// //                     image:require('../../Images/p5.png'),
// //                     heading:"that is shivani bage",
// //                     Size:"M",
// //                     Tags:"New With Tags",
// //                     ActuallPrice: " 13,300.00",
// //                     Price:" 12,200.00",
// //                     label:"15%",
    
                   
// //                 }]
// //             })
// //         break;
// //         case 3:
// //             this.setState({
// //                 data:[{
// //                     id:1,
// //                     image:require('../../Images/girls_night.png'),
// //                     heading:"hellow i amd done",
// //                     Size:"M",
// //                     Tags:"New With Tags",
// //                     ActuallPrice: " 12,300.00",
// //                     Price:" 12,200.00",
// //                     label:"17%",
    
// //                 },
    
// //                 {
// //                     id:2,
// //                     image:require('../../Images/p5.png'),
// //                     heading:"that is shivani bage",
// //                     Size:"M",
// //                     Tags:"New With Tags",
// //                     ActuallPrice: " 13,300.00",
// //                     Price:" 12,200.00",
// //                     label:"15%",
    
                   
// //                 }]
// //             })
// //         break;

// //     }
// //   }
// //   componentDidMount(){
// //     this.focusListerner = this.props.navigation.addListener('focus',() =>{
// //         this.switchcasefun()
// //     })
// //   }




// //   render(){
// //       return(
// //         //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //         //        <Text>RentHandbags screen</Text>
// //         //        <Listshow data={this.state.data}/>

// //              <SafeAreaView>
// //                   <ScrollView>
// //                  <View style={{marginBottom:60}}>
// //                     <Header  onPress={()=> this.props.navigation.openDrawer()} />
// //                     <Offerheader/>
// //                 <Listshow  data={this.state.data} onPress={(val)=>console.log('showw dataaa ',val)}  />
// //                 <Footer/>
// //             </View>
// //            </ScrollView>
// //            <Whatsapp/>
// //              </SafeAreaView>
// //         //  </View>
// //       )
// //   }
// // }





import React, { Component } from "react"
import { View, ScrollView } from 'react-native';
import Listshow from "../Home/Copmonents/ListShow";
import Header from "../../Component/Header";
import Offerheader from "../../Component/Offerheader";
import Footer from "../../Component/Footer";
import { SafeAreaView } from "react-native-safe-area-context";
import Whatsapp from "../../Component/Whatsapp";
export default class Girls extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    SubCategoryCall(){
     
        console.log('function calll',this.props.route.params.itemsData)
            fetch('https://litoo.herokuapp.com/sub_categories/'+this.props.route.params.itemsData,
            {
              method:'GET',
              headers:{
                Accept:'application/json',
                'Content-Type': 'application/json'
              }
            })
            .then((response) => response.json())
            .then((data) => {
              console.log('subcategories', data);
              this.setState({data:data})
            })
            .catch((error) => { 
              //console.error('Error:', error);
            });
          
              }
              componentDidMount(){
                this.SubCategoryCall()
                const { navigation } = this.props;
                this.focusListener = navigation.addListener("focus", () => {      
                  this.SubCategoryCall()
                // Call ur function here.. or add logic.     
                });
                
              }
            
              componentWillUnmount() {
                // Remove the event listener
                //this.focusListener.remove();
              }
    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <View style={{ marginBottom: 60 }}>
                        <Header onPress={() => this.props.navigation.openDrawer()} />
                        <Offerheader />
                        <Listshow data={this.state.data.data} onPress={(val) => console.log('showw dataaa ', val)} />
                        <Footer />
                    </View>
                </ScrollView>
                <Whatsapp />
            </SafeAreaView>
            //  </View>
        )
    }
}