import React,{Component} from "react";
import { View,FlatList,Text,TouchableOpacity,Image } from "react-native";

export default class Listshow extends Component{
    constructor(props){
        super(props)
        this.state={
            index_count:3,
            highLight:''
        }
    }
    
    render(){
        //console.log('show data ',this.props.data)
        
        return(
            
            <View>
                <FlatList
                            style={{margin:5}}
                            numColumns={2}
                            horizontal={false}
                            data={this.props.data}
                            columnWrapperStyle={{justifyContent: 'space-between'}}
                            renderItem={({item,index})=>
                <View style={{width:"50%",margin:3}}>
                            {/* <Text>{index}</Text> */}
                             {index <=this.state.index_count?
                <TouchableOpacity style={{flex:1,height:270,marginTop:8,backgroundColor:this.state.highLight == item.id?'rgba(0,0,0,0.1)':'white'}} onPress={()=>{
                            this.setState({highLight:item.id}) 
                            this.props.onPress(item)}}>
                                <TouchableOpacity>
                                <Text style={{backgroundColor:"#00ec99",color:"#fff",width:"23%",marginTop:12,marginLeft:12,textAlign:"center",fontSize:12}}>{item.label}</Text>
                                </TouchableOpacity>
                                <Image source={item.image} style={{width:100,height:130,alignSelf:"center"}} resizeMode='contain'/>
                                {
                                    this.state.highLight == item.id?
                                   <Text>SOLD OUT</Text>
                                    :null
                                }
                                <Text style={{fontSize:14,color:"#000",width:"90%"}}>{item.heading}</Text>
                                <Text>{item.Condition}</Text>
                               
                                <Text>{item.Tags}</Text>
                                <View style={{flexDirection:"row"}}>
                                <Text style={{fontWeight:"bold",color:"#000",fontSize:13}}>Rent Price:{item.ActuallPrice}</Text>
                                <View>
                                </View>
                                {/* <Text style={{textDecorationLine: 'line-through'}}>{item.Price}</Text> */}
                                </View>
                                <Text style={{fontSize:13}}>{item.days}</Text>

               </TouchableOpacity>
                        :null}
                   
          </View>
            
                 }
                  KeyExtractor={(item) => item.id}
                 />
                 <TouchableOpacity 
                 onPress={()=>{this.setState({index_count:3+this.state.index_count})}}
                 style={{backgroundColor:"#000",padding:20,width:"98%",alignSelf:"center"}}><Text style={{color:"#fff",fontWeight:"bold",textAlign:"center"}}>Load More</Text></TouchableOpacity>

            </View>
        )
    }
}