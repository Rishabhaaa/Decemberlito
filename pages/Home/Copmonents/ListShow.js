
import React,{Component} from "react";
import { View,FlatList,Text,TouchableOpacity,Image } from "react-native";
import { ScrollView, } from "react-native-gesture-handler";
export default class Listshow extends Component{
    constructor(props){
        super(props)
        this.state={
            index_count:3,
            highLight:'',
            refreshing: false,
        }
    }

//     .catch(error => {
//         this.setState({error,refreshing:false});

//     });
// };
    // handleRefresh = () => {

    //     this.setState({
    //         page:1,
    //         refreshing: true,
    //         seed: this.state.seed+1,
    //     },() => {
    //         this.makeRemoteRequest();
    //     })
    // };
    render(){
        console.log('show data ',this.props.data)
        return(

            <View>
                <FlatList
                            style={{margin:5}}
                            numColumns={2}
                            horizontal={false}
                            data={this.props.data}
                            columnWrapperStyle={{justifyContent: 'space-between'}}
                            renderItem={({item,index})=>
                            // console.log('itemes data ',item?.product?.name)
                
                 <View style={{width:"50%",margin:3}}>

                 
                           {/* <Text>{index}</Text> */}
                            {index <=this.state.index_count?
                <TouchableOpacity style={{flex:1,borderWidth:1,height:270,marginTop:8,backgroundColor:this.state.highLight == item.id?'rgba(0,0,0,0.1)':'white'}} onPress={()=>{
                          this.setState({highLight:item.id})
                            this.props.onPress(item)}}>    

                                <TouchableOpacity onPress={() => {
                                    this.props.onPress(item)
                                    }}>
                                <Text style={{backgroundColor:"#00EC99",color:"#fff",width:"23%",marginTop:12,marginLeft:12,textAlign:"center",fontSize:12}}>{item?.product?.label}</Text>
                                <Image style={{height:75,width:"80%",borderWidth:1,justifyContent:'center',alignSelf:'center',borderColor:'#D8D8D8'}} source={{uri:item.images}}/>

                                </TouchableOpacity>
                            {
                                    this.state.highLight == item.id?
                                   <Text>{item.id}</Text>
                                    :null
                                 }
                                 <Text style={{fontSize:14,color:"black",width:"90%"}}>{item?.product?.name}</Text>
                                 <Text>{item?.product?.condition}</Text>
                                 <View style={{flexDirection:"row"}}>
                               <Text style={{fontWeight:"bold",color:"#000",fontSize:13}}>{item?.product?.price}</Text>
                                
                               <Text style={{textDecorationLine: 'line-through'}}>{item?.product?.discount_price}</Text>
                               </View>
                                 <Text style={{fontSize:13}}>{item?.product?.size}</Text>
                                    
               </TouchableOpacity>
                         :null}
          </View>
        
                 }
                  KeyExtractor={(item) => item.id}

                 />
                 {/* refreshing={this.state.refreshing}
                 onRefresh={this.handleRefresh} */}
                 <TouchableOpacity
                 onPress={()=>{this.setState({index_count:3+this.state.index_count})}}
                 style={{backgroundColor:"#000",padding:20,width:"98%",alignSelf:"center"}}><Text style={{color:"#fff",fontWeight:"bold",textAlign:"center"}}>Load More</Text></TouchableOpacity>
                 
            </View>
            
        
            
        )
        
        
    } 
    
}