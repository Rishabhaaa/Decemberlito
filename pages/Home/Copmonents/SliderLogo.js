// import React,{Component} from "react";
// import { View,FlatList,Text,TouchableOpacity,Image ,ScrollView,Dimensions} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import Itemdata from "../itemdata";

// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;

// export default class SliderLogo extends Component{
    
//     constructor(props){
//         super(props)
//         this.state={
//             indexValue: 0,
            



//               index_count: 0,
            
//         }
//     }


//     componentDidMount(){

//       fetch('https://litoo.herokuapp.com/brands',
//       {
//         method:'GET',
//         headers:{
//           Accept:'application/json',
//           'Content-Type': 'application/json'
//         }
//       })
//       .then((response) => response.json())
//       .then((data) => {
//         console.log('Success:', data);
//         this.setState({data:data})
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
    
//         }
    

//     handleOnScroll(event){
//         //calculate screenIndex by contentOffset and screen width
//         this.setState({indexValue:parseInt(event.nativeEvent.contentOffset.x/Dimensions.get('window').width)})
//         console.log('currentScreenIndex', parseInt(event.nativeEvent.contentOffset.x/Dimensions.get('window').width));
//        // this.setState({ri:parseInt(event.nativeEvent.contentOffset.x/Dimensions.get('window').width)})
//       }
//       UpdateIndex(){
//       //  console.log(this.state.ri+1)
//       console.log('index value ',this.state.indexValue)
//       this.setState({indexValue:this.state.indexValue + 1},()=>this.scrollRef.scrollTo({x: width *this.state.indexValue, y: 0, animated: true}))
//       }
//       PreviesFun(){
//         this.setState({indexValue:this.state.indexValue - 1},()=>this.scrollRef.scrollTo({x: width *this.state.indexValue, y: 0, animated: true}))
//       }
    
//     render(){
        
//         return(
//             <SafeAreaView style={{flex:1}}>
//             <ScrollView onScroll={(e) => this.handleOnScroll(e)} //particulare index lene k liye use kiya
//             style={{ flex: 1 }}
//             horizontal={true}
//             scrollEventThrottle={16}
//             pagingEnabled={true}
//             showsHorizontalScrollIndicator={false}
//             ref={(ref) => (this.scrollRef = ref)}>

//             <FlatList style={{ width: '100%' }}
//               scrollEnabled={false}
//               contentContainerStyle={{
//                 alignSelf: 'flex-start',
//               }}
//               // numColumns=2
//               showsVerticalScrollIndicator={false}
//               showsHorizontalScrollIndicator={false}
//               data={this.state.data1}
//               renderItem={({ item, index }) => {
//                 return (
//                   <View style={{ marginLeft: 20, marginTop: 30, marginBottom: 30 }}>
//                     <Text>{item.name}</Text>
//                     <TouchableOpacity style={{ borderWidth: .12, padding: 12, elevation: 1, marginRight: 30 }}><Image source={item.image} style={{ width: 120, height: 70 }} /></TouchableOpacity>
//                   </View>

//                 )
//                 //your image code
//               }}
//             />
//           </ScrollView>
//           <View style={{ width: '100%', flexDirection: 'row', alignSelf: "center", justifyContent: "center", marginTop: 20 }}>
//             <TouchableOpacity
//               style={{ borderWidth: 2, backgroundColor: "#e5e5e5" }}
//               onPress={() => this.PreviesFun()}>
//               {/* <Text>Back111</Text> */}
//               <Image source={require('../../../Images/crop1.png')} style={{ width: 25, height: 25, alignSelf: "center", tintColor: "#000", resizeMode: "contain" }} />

//             </TouchableOpacity>
//             <TouchableOpacity
//               style={{ borderWidth: 2, backgroundColor: "#000000", marginLeft: 12 }}
//               onPress={() => this.UpdateIndex()}>
//               {/* <Text>Next</Text> */}
//               <Image source={require('../../../Images/crop2.png')} style={{ width: 25, height: 25, alignSelf: "center", tintColor: "#fff", resizeMode: "contain" }} />
//             </TouchableOpacity>
//           </View>

//             </SafeAreaView>
            

//         )
//     }
// }


import React,{Component} from "react";
import { View,FlatList,Text,TouchableOpacity,Image ,ScrollView,Dimensions} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default class SliderLogo extends Component{
    constructor(props){
        super(props)
        this.state={
            indexValue: 0,
            data1: [
                {
                  name: 'Rick Sanchez',
                  status: 'Status:Alive',
                  image: require('../../../Images/logo1.png'),
                },
                {
                  name: 'Morty Smitch',
                  status: 'Status:Alive',
                  image: require('../../../Images/logo_2.png'),
                },
                {
                  name: 'Summer Smitch',
                  status: 'Status:Alive',
                  image: require('../../../Images/logo_3.png'),
                },
                {
                  name: 'Beith Smitch',
                  status: 'Status:Alive',
                  image: require('../../../Images/logo_4.png'),
                },
                {
                  name: 'Jerry Smitch',
                  status: 'Status:Alive',
                  image: require('../../../Images/logo_4.png'),
                },
                {
                  name: 'Abadango Cluster Princess',
                  status: 'Status:Alive',
                  image: require('../../../Images/logo_3.png'),
                },
                {
                  name: 'Abradolf Lincher',
                  status: 'Status:Alive',
                  image: require('../../../Images/logo_2.png'),
                },
                {
                  name: 'Adjucticator Rick',
                  status: 'Status:Alive',
                  image: require('../../../Images/logo1.png'),
                },
                {
                  name: 'Adjucticator Rick',
                  status: 'Status:Alive',
                  image: require('../../../Images/logo1.png'),
                },
                {
                  name: 'Adjucticator Rick',
                  status: 'Status:Alive',
                  image: require('../../../Images/logo1.png'),
                },
                {
                  name: 'Adjucticator Rick',
                  status: 'Status:Alive',
                  image: require('../../../Images/logo1.png'),
                },
              ],
              index_count: 0,
        }
    }
    handleOnScroll(event){
        //calculate screenIndex by contentOffset and screen width
        this.setState({indexValue:parseInt(event.nativeEvent.contentOffset.x/Dimensions.get('window').width)})
        console.log('currentScreenIndex', parseInt(event.nativeEvent.contentOffset.x/Dimensions.get('window').width));
       // this.setState({ri:parseInt(event.nativeEvent.contentOffset.x/Dimensions.get('window').width)})
      }
      UpdateIndex(){
      //  console.log(this.state.ri+1)
      console.log('index value ',this.state.indexValue)
      this.setState({indexValue:this.state.indexValue + 1},()=>this.scrollRef.scrollTo({x: width *this.state.indexValue, y: 0, animated: true}))
      }
      PreviesFun(){
        this.setState({indexValue:this.state.indexValue - 1},()=>this.scrollRef.scrollTo({x: width *this.state.indexValue, y: 0, animated: true}))
      }
    render(){
        return(
            <SafeAreaView style={{flex:1}}>
            <ScrollView onScroll={(e) => this.handleOnScroll(e)} //particulare index lene k liye use kiya
            style={{ flex: 1 }}
            horizontal={true}
            scrollEventThrottle={16}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            ref={(ref) => (this.scrollRef = ref)}>
            <FlatList style={{ width: '100%' }}
              scrollEnabled={false}
              contentContainerStyle={{
                alignSelf: 'flex-start',
              }}
              numColumns={Math.ceil(this.state.data1.length / 2)}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              data={this.state.data1}
              renderItem={({ item, index }) => {
                return (
                  <View style={{ marginLeft: 20, marginTop: 30, marginBottom: 30 }}>
                    <TouchableOpacity style={{ borderWidth: .12, padding: 12, elevation: 1, marginRight: 30 }}><Image source={item.image} style={{ width: 120, height: 70 }} /></TouchableOpacity>
                  </View>
                )
                //your image code
              }}
            />
          </ScrollView>
          <View style={{ width: '100%', flexDirection: 'row', alignSelf: "center", justifyContent: "center", marginTop: 20 }}>
            <TouchableOpacity
              style={{ borderWidth: 2, backgroundColor: "#E5E5E5" }}
              onPress={() => this.PreviesFun()}>
              {/* <Text>Back111</Text> */}
              <Image source={require('../../../Images/crop1.png')} style={{ width: 25, height: 25, alignSelf: "center", tintColor: "#000", resizeMode: "contain" }} />
            </TouchableOpacity>
            <TouchableOpacity
              style={{ borderWidth: 2, backgroundColor: "#000000", marginLeft: 12 }}
              onPress={() => this.UpdateIndex()}>
              {/* <Text>Next</Text> */}
              <Image source={require('../../../Images/crop2.png')} style={{ width: 25, height: 25, alignSelf: "center", tintColor: "#fff", resizeMode: "contain" }} />
            </TouchableOpacity>
          </View>
            </SafeAreaView>
        )
    }
}