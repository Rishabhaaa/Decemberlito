import React,{Component} from "react";
import { View,FlatList,TouchableOpacity,Image } from "react-native";

export default class TopBrands extends Component{
    constructor(props){
        super(props)
        this.state={
            index_count:3,
            highLight:''
        }
    }
    render(){
            // console.log('show props data ',this.props)
            // console.log('show data ',this.props.topData[0].imagesrc)

        return(
            <View>
                <FlatList
                 data={this.props.topData}
                 renderItem={({item})=>
                 <>
                        <View style={{flexDirection:"row",marginTop:20,justifyContent:"space-around"}}>
                        <View style={{flexDirection:"row"}}>
                                <TouchableOpacity style={{borderWidth:.12,padding:12,elevation:1,marginRight:30}}><Image source={item.imagesrc} style={{width:120,height:70}}/></TouchableOpacity>
                                <TouchableOpacity style={{borderWidth:.12,padding:12,elevation:1}}><Image source={item.imagesrc1} style={{width:120,height:70}}/></TouchableOpacity>
                            </View>
                        </View>  
                        <View style={{flexDirection:"row",marginTop:20,justifyContent:"space-around"}}>
                        <View style={{flexDirection:"row"}}>
                                <TouchableOpacity style={{borderWidth:.12,padding:12,elevation:1,marginRight:30}}><Image source={item.imagesrc3} style={{width:120,height:70}}/></TouchableOpacity>
                                <TouchableOpacity style={{borderWidth:.12,padding:12,elevation:1}}><Image source={item.imagesrc4} style={{width:120,height:70}}/></TouchableOpacity>
                            </View>
                        </View> 

                 </>

                 }
                 />

              <View style={{flexDirection:"row",marginTop:30,justifyContent:"space-around",margin:6}}>
                 <View style={{flexDirection:"row"}}>
                        <TouchableOpacity style={{borderWidth:.12,padding:12,elevation:3,alignItems:"center",backgroundColor:"#959595",margin:6}}><Image source={require('../../../Images/crop1.png')} style={{width:15,height:15,alignSelf:"center",tintColor:"#fff",resizeMode:"contain"}}/></TouchableOpacity>
                        <TouchableOpacity style={{borderWidth:.12,padding:12,elevation:3,alignItems:"center",backgroundColor:"#000",margin:6}}><Image source={require('../../../Images/crop2.png')} style={{width:15,height:15,alignSelf:"center",tintColor:"#fff",resizeMode:"contain"}}/></TouchableOpacity>
                    </View>
                 </View>
                
                 </View>




        )
    }
}