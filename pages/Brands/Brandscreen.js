
import React,{Component} from "react";
import Header from "../../Component/Header";
import {Image,View,Text, SafeAreaView, ScrollView,TextInput,FlatList,TouchableOpacity} from "react-native";
import Footer2 from "../../Component/Footer2";
import Footer from "../../Component/Footer";
import Whatsapp from "../../Component/Whatsapp";
export default class Brandscreen extends Component{
  constructor(props){
    super(props)
    this.state={
      data:[]
  
    }
  }

componentDidMount(){


  fetch('https://litoo.herokuapp.com/brands',
  {
    method:'GET',
    headers:{
      Accept:'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    this.setState({data:data})
  })
  .catch((error) => {
    console.error('Error:', error);
  });

    }

  render(){
    return(
      <SafeAreaView style={{backgroundColor:'white'}}>
               <Header  onPress={()=> this.props.navigation.openDrawer()}/>
        <ScrollView>
            <View>
            <FlatList style={{}}
            data={this.state.data}
            horizontal={false}
            numColumns={2}
            renderItem={({item})=>
            <View style={{backgroundColor:'white',margin:10,width:'45%',}}>
             <TouchableOpacity style={{margin:10}}  onPress={() => this.props.navigation.navigate('')}> 
              
             {/* onPress={()=>console.log('url ',item.image)}>  url check krne k leeey*/}
            
                <Image style={{height:75,width:"80%",borderWidth:1,justifyContent:'center',alignSelf:'center',borderColor:'#d8d8d8'}} source={{uri:item.image}}/>
             </TouchableOpacity>
            </View>
            }
            />
        </View>
        <Footer2/>
        <Footer/>
        </ScrollView>
        <Whatsapp/>
      </SafeAreaView>
    );
  }
}