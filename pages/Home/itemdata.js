import React,{Component} from "react";
import { View,ScrollView,Text,SafeAreaView,Image,StatusBar,Dimensions } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Header from "../../Component/Header"

const { width, height } = Dimensions.get('window');

export default class Itemdata extends Component{
    constructor(props){
        super(props)
        this.state={
          
        }
    }
    render(){
        // console.log('props dtaaaa ',this.props)

        console.log('props dtaaaa ',this.props.route.params.imteData)
        return(
            
            // <View><Text>{this.props.route.params.imteData}</Text></View>
            <ScrollView>
                <Header onPress={()=> this.props.navigation.openDrawer()}/>
                <Text style={{fontSize:25,backgroundColor:'red',textAlign:"center"}}>{this.props.route.params.imteData.heading}</Text>
    {/* <FlatList
    data={[1,2,3]}
    />                 */}
            </ScrollView>
           
           
        )
    }
}