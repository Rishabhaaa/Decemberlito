// import React, { Component } from "react"
// import {View,ScrollView,Text} from 'react-native';
// import Listshow from "../Home/Copmonents/ListShow";
// import Header from "../../Component/Header";
// import Offerheader from "../../Component/Offerheader";
// import Footer from "../../Component/Footer";
// import { SafeAreaView, } from "react-native-safe-area-context";
// import Whatsapp from "../../Component/Whatsapp";

 
// export default class MensShoes extends Component{
  
//   constructor(props){
//       super(props)
//       this.state={
//         data:[]
//       }
      
//   }

// SubCategoryCall(){

// console.log('function calll',this.props.route.params.itemsData)
//     fetch('https://litoo.herokuapp.com/sub_categories/'+this.props.route.params.itemsData,
//     {
//       method:'GET',
//       headers:{
//         Accept:'application/json',
//         'Content-Type': 'application/json'
//       }
//     })
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('subcategories', data);
//       this.setState({data:data})
//     })
//     .catch((error) => { 
//       //console.error('Error:', error);
//     });
  
//       }
      

//   componentDidMount(){
//     this.SubCategoryCall()
//     const { navigation } = this.props;
//     this.focusListener = navigation.addListener("focus", () => {      
//       this.SubCategoryCall()
//     // Call ur function here.. or add logic.     
//     });
    
//   }

//   componentWillUnmount() {
//     // Remove the event listener
//     //this.focusListener.remove();
//   }
//   render(){
//       return(
      

//              <SafeAreaView>
//                   <ScrollView>
//                  {/* <View style={{marginBottom:60,borderWidth:1}} >
//                     <Header  onPress={()=> this.props.navigation.openDrawer()} />
//                     <Offerheader/>
//                 <Listshow  data={this.state.data.data} onPress={(val)=>console.log('showw dataaa ',val)}  />
//                 <Footer/>
//             </View> */}


//             <View>
//               <Text>
//                 hello world
//               </Text>
//             </View>
//            </ScrollView>
//            <Whatsapp/>
//              </SafeAreaView>
//         //  </View>
//       )
//   }
// }
// ..................................................................................................................................
import React, { Component } from "react"
import {View,ScrollView,Text} from 'react-native';
import Listshow from "../Home/Copmonents/ListShow";
import Header from "../../Component/Header";
import Offerheader from "../../Component/Offerheader";
import Footer from "../../Component/Footer";
import { SafeAreaView, } from "react-native-safe-area-context";
import Whatsapp from "../../Component/Whatsapp";

 
export default class MensShoes extends Component{
  
  constructor(props){
      super(props)
      this.state={
        data:[]
      }

      
  }

  
  render(){
    console.log('props dataa:::',this.props.route.params.data.data)
      return(
      

             <SafeAreaView>
                  <ScrollView>
                    
                 <View style={{marginBottom:60,borderWidth:1}} >
                    <Header  onPress={()=> this.props.navigation.openDrawer()} />
                    <Offerheader/>
                    
                    {/* <Text style={{textAlign: 'center',fontSize:15, fontWeight:'bold',padding:30}}> No Data Available...</Text> */}
{/* 
                    renderItem={({ item, index })=>{
    if(index = 0){
        alert("No Data is available")
    }
    else {
      
    }
}} */}

                <Listshow  data={this.props?.route?.params?.data?.data} onPress={(val) =>  
                {console.log('val:::::::::::;;'.val);
                  {this.props.navigation.navigate('Itemdetailsscreen',{item:val})}}}/>
                
                <Footer/>
            </View>

            <View>
            
            </View>
           </ScrollView>
           <Whatsapp/>
             </SafeAreaView>
        //  </View>
      )
  }
}
