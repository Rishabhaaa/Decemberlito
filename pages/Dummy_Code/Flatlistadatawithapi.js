import React,{Component} from "react";
import {View,TextInput,Image,Text,SafeAreaView,FlatList,TouchableOpacity,ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
 

  
 
 
export default class Liveprojectui1 extends Component{
   constructor(props){
       super(props)
       this.state={
          flatlistdata:[],                           // firstly we defin array
         
       }
   }
   async callapi(){                             
       fetch("https://etohcoachfinal-159129-ruby.b159129.dev.eastus.az.svc.builder.cafe/profile/courses",
 
       {
       method: 'GET',
       headers:{
           Accept: 'application/json',
           token:"eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MjAsImV4cCI6MTY2NDQyOTAxOCwidG9rZW5fdHlwZSI6ImxvZ2luIn0.-BBKcGvv21VAZvnLJrWSs3fBVUdgXS4obKscQ_uP7UaYAQPl0gSGfkmpvzwXjSukbSarB1vtAwumEDFLVgHVQA",
           'Content-Type': 'application/json',
       },
      
 
   }).then(res =>(res.json()))
   .then(json =>
   {
    this.setState({flatlistdata:json.data})
     console.log('check dataa ', json) 
          
   });
 
   }
   componentDidMount(){
       this.callapi();
 
   }
  
 
   render(){
       return(
          <SafeAreaView>
            <View style={{flexDirection:"row",justifyContent:"space-between",backgroundColor:"#d12e54",height:120}}>
               <Image source={require('../Images/icon.png')} style={{width:hp('20%'),height:hp('4%'),tintColor:"#fff",margin:12,marginTop:65}}/>
                <View style={{alignSelf:"center",backgroundColor:"#b5304d",marginRight:12,borderRadius:12,marginTop:40}}>
               <Image source={require('../Images/Notification.png')} style={{width:hp('3%'),height:hp('3%'),alignSelf:"center",tintColor:"#fff",margin:12}}/>
           </View>
        
      </View>
      {/* Search bar start */}
       <View style={{flexDirection:"row",marginTop:12,alignItems:"center",marginLeft:12,marginRight:12,borderRadius:8,backgroundColor:"#e3e8ee"}}>
           <Image source={require('../Images/search.png')} style={{width:50,height:50,tintColor:"#9b9fa3"}}/>
          <TextInput
               placeholder="Search for course,theme or lesson"
               style={{fontSize:hp('2.2%')}}></TextInput>
          </View>
          {/* Search bar end */}
 
           {/* 4 button start  */}
 
          <View style={{flexDirection:"row",marginTop:12,marginLeft:7}}>
           <TouchableOpacity style={{flexDirection:"column",padding:hp('2%')}}>
               <View style={{backgroundColor:"#e3e8ee",padding:10,borderRadius:7,elevation:3}}><Image source={require('../Images/filter.png')} style={{width:hp('3%'),height:hp('3%')}}/></View>
               <Text style={{fontSize:hp('1.5%'),color:"#000",marginTop:10}}>Filters</Text>
           </TouchableOpacity>
           <TouchableOpacity style={{flexDirection:"column",padding:hp('2%')}}>
               <View style={{backgroundColor:"#fff",padding:10,borderRadius:7,elevation:3}}><Image source={require('../Images/wine_half.png')} style={{width:hp('3%'),height:hp('3%')}}/></View>
               <Text style={{fontSize:hp('1.5%'),color:"#000",marginTop:10}}> Wine</Text>
           </TouchableOpacity>
           <TouchableOpacity style={{flexDirection:"column",padding:hp('2%')}}>
               <View style={{backgroundColor:"#fff",padding:10,borderRadius:7,elevation:3}}><Image source={require('../Images/radio.png')} style={{width:hp('3%'),height:hp('3%')}}/></View>
               <Text style={{fontSize:hp('1.5%'),color:"#000",marginTop:10}}>Spirits</Text>
           </TouchableOpacity>
           <TouchableOpacity style={{flexDirection:"column",padding:hp('2%')}}>
               <View style={{backgroundColor:"#fff",padding:10,borderRadius:7,elevation:3}}><Image source={require('../Images/beer.png')} style={{width:hp('3%'),height:hp('3%')}}/></View>
               <Text style={{fontSize:hp('1.5%'),color:"#000",textAlign:"center",marginTop:10}}>   Beer</Text>
           </TouchableOpacity>
         
          </View>
         {/* 4 button end  */}
 
         {/* Flatlist Start */}
         <FlatList
        
       //    data={this.state.flatlistdata}
          data={this.state.flatlistdata}                
          renderItem={({item}) =>
           <View>
               <Image source={item.image2} style={{width:hp('48%'),height:hp('30%'),marginLeft:14,borderTopLeftRadius:12,borderTopRightRadius:12}}/>
               <View style={{flexDirection:"row",width:hp('48%'),marginLeft:14,padding:6}}>
                  <Image source={item.playicon} style={{width:hp('1.5%'),height:hp('1.8%'),tintColor:"#ff9e02",marginLeft:15,marginTop:3}}/>
                   <Text style={{fontSize:hp('2%')}}>  {item.type}</Text>
                   <Text style={{color:"#fff"}}>  {`\u2022`} </Text>
                   <Image source={item.award} style={{width:hp('2%'),height:hp('2%'),tintColor:"#fff",marginTop:2}}/>
                   <Text style={{color:"red"}}>check kere{item.attributes.course_name}</Text>
                   <Text style={{color:"#fff"}}>  {`\u2022`}</Text>
                   <Image source={item.award} style={{width:hp('2%'),height:hp('2%'),tintColor:"#fff",marginTop:2}}/>
 
                   <Text style={{color:"#fff"}}>  {item.Text9}</Text>
 
               </View>
               <View style={{flexDirection:"row",marginLeft:14,marginTop:8}}>
                   <Text style={{fontSize:hp('1.5%'),marginLeft:5}}>{item.Text2}{`\u2022`}</Text>
                   <Text style={{fontSize:hp('1.5%'),marginLeft:5}}>{item.Text3}{`\u2022`}</Text>
                   <Text style={{fontSize:hp('1.5%'),marginLeft:5}}>{item.Text4}{`\u2022`}</Text>
                   <Text style={{fontSize:hp('1.5%'),marginLeft:5}}>{item.Text5}{`\u2022`}</Text>
                   <Image source={item.image1} style={{width:hp('1.5%'),height:hp('1%'),marginTop:4,marginLeft:5}}/>
               </View>
               <Text style={{fontWeight:"bold",color:"#666363",fontSize:hp('2.2%'),marginLeft:16}}>{item.releaseYear}</Text>
               <Text style={{marginLeft:16}}>{item.Tex6}</Text>
               <View style={{flexDirection:"row",marginLeft:16,marginTop:15,marginBottom:20}}>
                   <TouchableOpacity style={{backgroundColor:"#997ffa",flexDirection:"row",width:hp('7%'),padding:hp('.4%'),borderRadius:12}}><Image source={item.award} style={{width:hp('3%'),height:hp('3%'),tintColor:"#fff"}}/>
                   <Text style={{color:"red",fontWeight:"bold",fontSize:hp('2%')}}> hyy {item.title}</Text>
                   <Text style={{color:"#fff",fontWeight:"bold"}}>25</Text></TouchableOpacity>
                   <Image source={item.hatimage} style={{width:hp('3%'),height:hp('3%'),marginLeft:12,tintColor:"#666363"}}/>
                   <Text style={{color:"#666363",fontWeight:"bold"}}> {item.Text6}</Text>
                   <Text style={{color:"#666363",fontWeight:"bold"}}> {item.theme}</Text>
                   <Image source={item.lockimg} style={{width:hp('2%'),height:hp('2%'),marginLeft:12,tintColor:"#666363"}}/>
                   <Text style={{color:"#666363",fontWeight:"bold",fontSize:hp('8%')}}> {item.json}</Text>
 
               </View>
           </View>                       
       }
         />
 
         {/* Flatlist end */}
 
 
          </SafeAreaView>
       )
   }
 
}
