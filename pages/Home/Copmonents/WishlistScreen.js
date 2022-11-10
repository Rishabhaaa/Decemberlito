import React,{Component} from "react";
import {Image,View,Text, SafeAreaView, ScrollView,TextInput,FlatList,TouchableOpacity} from "react-native";
export default class WishlistScreen extends Component{
  constructor(props){
    super(props)
    this.state={
      data :[
        {
          id :1,
          imagecross:require('../../../Images/Cross.png'),
          image:require('../../../Images/p7.png'),
          Heading:"Balmain Logo Embellished ",
          Price:"₹42,900.00",
          status:"out of stock",
          cart:"ADD TO CART"
         },
         {
          id :2,
          imagecross:require('../../../Images/Cross.png'),
         image:require('../../../Images/p10.png'),
         Heading:"Coach Kelsey Satchel",
          Price:"₹8,000.00",
          status:"In stock",
          cart:"ADD TO CART"
         },
         {
          id :3,
          imagecross:require('../../../Images/Cross.png'),
          image:require('../../../Images/MW3.jpg'),
          Heading:"Spiffy",
          Price:"₹1300.00",
          status:"Out of stock",
          cart:"ADD TO CART"
         },
         {
          id :4,
          imagecross:require('../../../Images/Cross.png'),
         image:require('../../../Images/MB1.jpg'),
         Heading:"CLUB SPUNKY",
          Price:"₹1000.00",
          status:"In stock",
          cart:"ADD TO CART"
         },
        ]
    }
  }
deleteItem = (id) => {
  this.setState({
   data: this.state.data.filter(item => item.id !== id)
  })
}
handleOnScroll(event){
  this.setState({indexValue:parseInt(event.nativeEvent.contentOffset.x/Dimensions.get('window').width)})
  console.log('currentScreenIndex', parseInt(event.nativeEvent.contentOffset.x/Dimensions.get('window').width));
}
UpdateIndex(){
console.log('index value ',this.state.indexValue)
this.setState({indexValue:this.state.indexValue + 1},()=>this.scrollRef.scrollTo({x: width *this.state.indexValue, y: 0, animated: true}))
}
  render(){
    return(
      <SafeAreaView style={{backgroundColor:'white'}}>
        <ScrollView>
            <View style={{marginTop:30}}>
            <Text style={{marginLeft:30,color:'black',}}> PRODUCT</Text>
            </View>
            <View>
            <FlatList style={{}}
            data={this.state.data}
            renderItem={({item})=>
            <View style={{backgroundColor:'white',margin:10,width:'90%',flexDirection:'row',borderWidth:1,marginLeft:10,marginRight:10,height:100,borderColor:'#D8D8D8',marginTop:20}}>
             {/* <TouchableOpacity style={{margin:10}}>
                <Image style={{height:75,width:"80%",borderWidth:1,justifyContent:'center',alignSelf:'center',borderColor:'#D8D8D8'}} source={item.image}/>
                <Text>{item.id}</Text>
                <Text>{item.Heading}</Text>
             </TouchableOpacity> */}
             {/* onPress={()=> this.deleteItem(item.id)} */}
             <TouchableOpacity onPress={()=> this.deleteItem(item.id)}>
             <Image   style={{height:20,width:"55%",justifyContent:'center',alignSelf:'center',marginLeft:20,marginTop:40}} source={item.imagecross}/>
             </TouchableOpacity>
                <Image style={{height:45,width:"20%",justifyContent:'center',alignSelf:'center',marginLeft:30,padding:20}} source={item.image}/>
                <View>
                <Text style={{marginLeft:10,marginTop:15}}>{item.Heading}</Text>
                <Text style={{marginLeft:10}}>{item.Price}</Text>
                <Text style={{marginLeft:10}}>{item.status}</Text>
                <TouchableOpacity>
                <Text style={{marginLeft:10,fontWeight:'900',marginTop:6,}}>{item.cart}</Text>
                </TouchableOpacity>
                </View>
              </View>
            }
            />
         </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}