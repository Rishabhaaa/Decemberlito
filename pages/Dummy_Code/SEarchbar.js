import React, { Component } from "react";
import {View,Text, FlatList,SafeAreaView,TouchableOpacity,Image, TextInput,Alert} from 'react-native';



const newdata = [
    {
        id: 1,
        first_name: "Shivani",
        last_name: "Latya",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
        isSelected: false
    },
    {
        id: 2,
        first_name: "Sonam",
        last_name: "Singh",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
        isSelected: false

    },
    {
      id: 3,
      first_name: "hari",
      last_name: "hain",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
      isSelected: false
  },
  {
    id: 4,
    first_name: "govind",
    last_name: "pawan",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
    isSelected: false
},
{
  id: 5,
  first_name: "sunil",
  last_name: "soni",
  avatar: "https://reqres.in/img/faces/7-image.jpg",
  isSelected: false
},
{
  id: 6,
  first_name: "golu",
  last_name: "baba",
  avatar: "https://reqres.in/img/faces/7-image.jpg",
  isSelected: false
},

]
export default class Searchbar extends Component{
constructor(Props){
  super(Props)
  this.state={ 
    searchData:newdata,
    backupData:newdata
    
}
}
searchFilterFunction = txt => {
  let text = txt.toLowerCase()
  let tracks = this.state.backupData
  {txt.length ==0}{
    this.setState({})
  }
  
  //this.setState({searchData:this.state.backupData})
  let filterTracks = tracks.filter(item => {
  if(item.first_name.toLowerCase().match(text)) {
    return item
  }
})
console.log('checkkk filter data ',filterTracks)
this.setState({ searchData: filterTracks })

}

 
searchFilterFunctions(txt){
  let text = txt.toLowerCase()

  if(txt.length ==0){
   this.setState({searchData:this.state.backupData})
  }
  //  let filterTracks = newdata.filter(item => {
//     let filterTracks = this.state.searchData.filter(item=>{
//    if(item.first_name.toLowerCase().match(text)) 
//    {
//      return item
//    }
   
//    console.log('checkkkkk filter data ',filterTracks)
   
//  })
let filterTrack = this.state.backupData.filter(val=>val.first_name.toLowerCase().match(txt))
//  this.setState({ searchData: newdata })
console.log('check',filterTrack)
 
     this.setState({ searchData:filterTrack,backupData:filterTrack})
     
}


onDelete(id){
    Alert.alert(
        "Alert Title",
        "Are You Want to Delete this item",
        [
            {
                text: "No",
                onPress: () => this.props.navigation.navigate('Searchbar'),
                style: "Back",

            },
            
            {
                text: "Yes",
                onPress: () =>
                {        
                        const {searchData} = this.state
                        let filterarray =  searchData.filter((val,i) =>{
                            if(val.id !== id)
                            {
                                return val
                            }
                        })
                        alert("Item Deleted Successfully");
                        // console.log("filter array" ,filterarray)
                        this.setState({searchData:filterarray,backupData:filterarray})},  
            }
    ]
    )

    
}
onPressitem(id,type){
  // alert(id)
  let newArray = this.state.searchData.map((val,i)=>{
    // console.log(val)
    if(val.id == id)  
    {
      // console.log(val)
      // return{...val, isSelected: true}
      return{...val, isSelected: type}

    }else 
       {
        return val

    }

  })
  // console.log(newArray)
  this.setState({searchData:newArray,backupData:newArray})

}
Removealldata(){

 let ndata= this.state.searchData.filter((val,i)=>{
  if(!val.isSelected)
  {
    return val
  }

 })
  // console.log(newArray)
  this.setState({searchData:ndata,backupData:ndata})

}

render(){
  return(
   <SafeAreaView >
     <View>
       <TextInput
       onChangeText={text => this.searchFilterFunction(text)}
       placeholder="Search......"
       style={{borderWidth:1,paddingTop:10,marginTop:12,width:"95%",alignSelf:"center",borderRadius:8}}></TextInput>
     </View>

     <TouchableOpacity
            onPress={()=> this.Removealldata()}
        ><Text style={{color:"#fff",backgroundColor:"red",padding:12}}>Delete All</Text></TouchableOpacity> 
    <FlatList
      data={this.state.searchData}
      renderItem={ ({item})=>
       <TouchableOpacity 
          onPress={()=>this.onPressitem(item.id, !item.isSelected)}
          onLongPress={()=> this.onDelete(item.id)}
        style={
          { 
          backgroundColor:item.isSelected ? "grey" : "#fff",
          bolatyarderWidth:item.isSelected ? 2 : 0
          ,width:'100%',height:90,borderBottomWidth:1,borderBottomColor:"grey",flexDirection:"row",marginTop:15,justifyContent:"space-between"}}>
          <View style={{flexDirection:"row",justifyContent:"space-evenly"}}>
         {/* <Text>{`${item.isSelected}`}</Text> */}
                  
           <Image style={{width:50,height:50,borderRadius:20,backgroundColor:"#fff"}}source={{uri:item.avatar}}/>
           <View style={{flexDirection:"row"}}>
           <Text style={{fontSize:16,marginLeft:12}}>{item.first_name}{'\n'}</Text>
           <Text style={{fontSize:16}}>{item.last_name}</Text>
           </View>
           <Image source={require('../Images/RightVector.png')} style={{width:20,height:20,tintColor:item.isSelected ? "red" : "white",borderWidth:2}}/>
        </View>
      </TouchableOpacity>
      }
        keyExtractor={(item)=>item.id}
      />
  </SafeAreaView>
  );
}
}
