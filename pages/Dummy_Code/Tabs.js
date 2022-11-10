import React, { Component } from "react";
import { View,Text,Image, TouchableOpacity,FlatList} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { SafeAreaView } from "react-native-safe-area-context";


export default class Tabs extends Component{
    constructor(props){
        super(props)
        this.state={    
            modalVisible: false,
            WeeklyData :[
              {
                id:1,
                name:'Rick Sanchez',
                number:1600,
                image:require('../Images/award.png')
                
              },
              {
                id:2,
                name:'Morty Smitch',
                number:1600,
                image:require('../Images/award.png')
                
              },
              {
                id:3,
                name:'Summer Smitch',
                number:1200,
                image:require('../Images/award.png')
               
              },
              {
                id:4,
                name:'Beith Smitch',
                number:1300,
                image:require('../Images/award.png')
                
              },
              {
                id:5,
                name:'Jerry Smitch',
                number:1600,
                image:require('../Images/award.png')
                
              },
              {
                id:6,
                name:'Abadango Cluster Princess',
                number:4300,
                image:require('../Images/award.png')
                
              },
             
              {
                id:7,
                name:'Alain Rails',
                number:1600,
                image:require('../Images/award.png')
                
              },
              {
                id:8,
                name:'Rick Sanchez',
                
              },
              {
                id:9,
                name:'Morty Smitch',
               
              },
             
            ],
            DaliData :[
              {
                id:1,
                name:'Rick Sanchez',
                number:1600,
                image:require('../Images/award.png')
                
              },
              {
                id:2,
                name:'Morty Smitch',
                number:1600,
                image:require('../Images/award.png')
                
              },
              {
                id:3,
                name:'Summer Smitch',
                number:1200,
                image:require('../Images/award.png')
               
              },
            ],
            AllData :[
              {
                id:1,
                name:'Rick Sanchez',
                number:1600,
                image:require('../Images/award.png')
                
              },
              {
                id:2,
                name:'Morty Smitch',
                number:1600,
                image:require('../Images/award.png')
                
              },
              {
                id:3,
                name:'Summer Smitch',
                number:1200,
                image:require('../Images/award.png')
               
              },
              {
                id:4,
                name:'Beith Smitch',
                number:1300,
                image:require('../Images/award.png')
                
              },
              
            ],
         data:[]
         
          
        }

    }
     datatwo(item) {
      // console.log("called function",this.state.borderLine);
      if(item =='Weekly'){
        this.setState({data:this.state.WeeklyData})
      }
      else if(item =='Daily'){
        this.setState({data:this.state.DaliData})
      }
      else if(item =='All time'){
        this.setState({data:this.state.AllData})
      }
       
      
    }
    render(){
      console.log('valuesss ',this.state.borderLine)
        return(


            <SafeAreaView style={{backgroundColor:"#fff",marginTop:12}}>
              <ScrollView>
              <Image source={require('../Images/phone.png')} style={{width:hp('51%'),height:hp('89%')}}/>
              <TouchableOpacity style={{backgroundColor:"#937fed",flexDirection:"row",alignItems:"center",alignContent:"center",justifyContent:"center",width:'30%',alignSelf:"center",borderRadius:12}}><Text style={{fontSize:hp('4%'),fontWeight:"bold",color:"#fff"}}>+ 25</Text><Image source={require('../Images/award.png')} style={{width:hp('4%'),height:hp('4%'),tintColor:"#fff"}}/></TouchableOpacity>
              <Text style={{fontSize:hp('3.5%'),fontWeight:"bold",textAlign:"center",color:"#402a33"}}>This Your EtOH Coach Score</Text>
              <Text style={{fontSize:hp('2%'),textAlign:"center"}}>Check the Leaderboard to Know your ranking!</Text>

                <TouchableOpacity 
                  onPress={()=>this.props.navigation.navigate('Task3')}
                 style={{backgroundColor:"#be3f51",padding:hp('2%'),width:"90%",borderRadius:12,alignSelf:"center",marginTop:20,marginBottom:20}}><Text style={{color:"#fff",fontSize:hp('2.5%'),fontWeight:"bold",textAlign:"center"}}>VIEW LEADERBOARD</Text></TouchableOpacity>
              </ScrollView>
               
            </SafeAreaView>
            
        )
    }
}


