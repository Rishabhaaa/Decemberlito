import React from 'react';
import { StyleSheet, View, Text, Image, Button, SafeAreaView, Linking, ScrollView, TouchableOpacity, image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Header from "../../Component/Header";
import Viewitems from '../Home/Viewitems';
import Listshow from '../Home/Copmonents/ListShow';
import Footer from '../../Component/Footer';
import { } from 'react-native-gesture-handler';
import Details from '../Home/Copmonents/Details';
import Description from '../Home/Copmonents/Description';
import Whatsapp from '../../Component/Whatsapp';

// const funccall =()=>{

// }
const slides = [
  {
    key: 1,
    // text: 'Description.\nSay something cool',
    image: require('../../Images/p10.png'),
    // backgroundColor: '#59B2AB',
    resizeMode: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    aligself: 'center',
  },
  {
    key: 2,
    // text: 'Other cool stuff',
    image: require('../../Images/p10.png'),
    // backgroundColor: '#FEBE29',
    resizeMode: 'cover',
  },
  {
    key: 2,
    // text: 'Other cool stuff',
    image: require('../../Images/p10.png'),
    // backgroundColor: '',
    resizeMode: 'cover',
  },

];
export default class Itemdetailsscreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showRealApp: false,
      checkBox1: "",
      activeBt: 'Description',
      data: [
        {
          id: 1,
          image: require('../../Images/girls_night.png'),
          heading: "Calvin Klein Metal Beg",
          Size: "M",
          Tags: "Like New",
          ActuallPrice: " 12,300.00",
          Price: " 12,200.00",
          labeel: "17%",
        },
        {
          id: 2,
          image: require('../../Images/p5.png'),
          heading: "Kate Spade Sling Bag",
          Size: "M",
          Tags: "Like New",
          ActuallPrice: " 13,300.00",
          Price: " 12,200.00",
          label: "15%",


        },
        {
          id: 3,
          image: require('../../Images/yellow_bag.png'),
          heading: "Kate Spade Black Clutch",
          Size: "M",
          Tags: "Like New",
          ActuallPrice: " 199,300.00",
          Price: " 12,200.00",
          label: "8%",


        },
        {
          id: 4,
          image: require('../../Images/p9.png'),
          heading: "Like New",
          Size: "M",
          Tags: "Like New",
          ActuallPrice: " 92,300.00",
          Price: " 12,200.00",
          label: "1%",


        },
        {
          id: 5,
          image: require('../../Images/p9.png'),
          heading: "French Connection Sling",
          Size: "M",
          Tags: "Like New",
          ActuallPrice: " 92,300.00",
          Price: " 12,200.00",
          label: "1%",


        },
        {
          id: 6,
          image: require('../../Images/girls_night.png'),
          heading: "hellow i amd done",
          Size: "M",
          Tags: "Like New",
          ActuallPrice: " 12,300.00",
          Price: " 12,200.00",
          labeel: "17%",
        },
        {
          id: 7,
          image: require('../../Images/p5.png'),
          heading: "that is shivani bage",
          Size: "M",
          Tags: "Like New",
          ActuallPrice: " 13,300.00",
          Price: " 12,200.00",
          label: "15%",


        },
        {
          id: 8,
          image: require('../../Images/yellow_bag.png'),
          heading: "that is Rishabh bage",
          Size: "M",
          Tags: "Like New",
          ActuallPrice: " 199,300.00",
          Price: " 12,200.00",
          label: "8%",


        },
        {
          id: 9,
          image: require('../../Images/p9.png'),
          heading: "that is deeraj Bage",
          Size: "M",
          Tags: "Like New",
          ActuallPrice: " 92,300.00",
          Price: " 12,200.00",
          label: "1%",


        },
      ]
    }
  }
  _renderItem = ({ item }) => {
    return (

      <View style={{ height: 200, width: "100%", }}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={{ justifyContent: 'center', alignSelf: 'center', width: '100%', height: '100%' }} source={item.image} />
      </View>


    );
  }
  render() {
    console.log('cc ', slides)
    return (
      <SafeAreaView style={{ backgroundColor: 'white' }}>
        <ScrollView>
          <Header onPress={() => this.props.navigation.openDrawer()} />
          <View style={{ marginTop: 30, justifyContent: 'center', alignSelf: 'center' }}>
            <Text style={{color: 'black',fontSize:30}}>Balmain Logo Embellished </Text>
            <Text style={{color: 'black',fontSize:30,alignSelf:'center',justifyContent:'center'}}>Sock Sneakers</Text>
          </View>
          <View style={{ width: '90%', height: 250, alignSelf: 'center', justifyContent: 'center', backgroundColor: 'white', marginTop: 10 }}>
            <AppIntroSlider renderItem={this._renderItem} data={slides} onDone={this._onDone} />
          </View>

          <Text style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 10 }}> size:37</Text>
          <Text style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 10, fontWeight: "900" }}>₹42,900.00</Text>
          <Text style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 5 }}>Condition : Excellent Condition</Text>
          <Text style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 5 }}>Est. Price: ₹88000</Text>
          <View style={{ width: '100%' }}>
            <TouchableOpacity style={{ flexDirection: 'row', width: '90%', height: 50, backgroundColor: 'black', justifyContent: 'center', alignSelf: 'center', marginTop: 30, }}>
              <Image source={require('../../Images/shooping_trolley.png')} style={{ width: 20, height: 20, justifyContent: 'center', alignSelf: 'center', tintColor: 'white' }} />
              <Text style={{ justifyContent: 'center', alignSelf: 'center', color: 'white', marginLeft: 15, fontWeight: '900' }}>Add to cart </Text>
            </TouchableOpacity>
          </View>


          <View style={{ width: '100%' }}>
            <TouchableOpacity onPress={() => { Linking.openURL('https://web.whatsapp.com/') }} style={{ flexDirection: 'row', width: '90%', height: 50, backgroundColor: 'white', justifyContent: 'center', alignSelf: 'center', marginTop: 30, backgroundColor: 'silver' }}>
              <Image source={require('../../Images/whatsapp.png')} style={{ width: 20, height: 20, justifyContent: 'center', alignSelf: 'center', }} />
              <Text style={{ justifyContent: 'center', alignSelf: 'center', color: 'black', marginLeft: 15, fontWeight: '900' }}>Sechudule a Video Call</Text>
            </TouchableOpacity>
          </View>

          <View style={{ width: '100%', marginTop: 20, }}>
            <TouchableOpacity style={{ flexDirection: 'row', width: '90%', height: 40, justifyContent: 'center', alignSelf: 'center', marginTop: 30, borderWidth: 2, borderColor: 'silver' }}

              onPress={() => this.setState({ checkBox1: !this.state.checkBox1 })}

            >
              <Image source={require('../../Images/heart1.png')} style={{ width: 25, height: 20, justifyContent: 'center', alignSelf: 'center', tintColor: this.state.checkBox1 ? "red" : 'grey' }} />


            </TouchableOpacity>
          </View>


          {/* <View style={{ width: '100%' }}>
            <TouchableOpacity onPress={() => { Linking.openURL('https://web.whatsapp.com/') }} style={{ flexDirection: 'row', width: '90%', height: 40, backgroundColor: 'white', justifyContent: 'center', alignSelf: 'center', marginTop: 30, backgroundColor: 'silver' }}>
              <Image source={require('../../Images/whatsapp.png')} style={{ width: 20, height: 20, justifyContent: 'center', alignSelf: 'center', }} />
              <Text style={{ justifyContent: 'center', alignSelf: 'center', color: 'black', marginLeft: 15, fontWeight: '900' }}>Sechudule a Video Call</Text>
            </TouchableOpacity>
          </View> */}

          <View style={{ }}>
           
            <View style={{ width: '90%', height: 70, marginTop: 10, flexDirection: 'row', backgroundColor: '#E1E1E1',padding:18,marginLeft:20 }}>
              <Image source={require('../../Images/tt.jpg')} style={{ width: 50, height: 35,}} />
              <Text style={{ justifyContent: 'center', alignSelf: 'center', color: 'black', marginLeft: 10, }}>Guaranteed Authenticity{'\n'}100% Authentic or full refund*</Text>
            </View>

            <View style={{ width: '90%', height: 70, marginTop: 5, justifyContent: 'center', alignSelf: 'center', flexDirection: 'row', backgroundColor: '#E1E1E1' }}>
              <Image source={require('../../Images/tt1.jpg')} style={{ width: 50, height: 35,marginTop:15}} />
              <Text style={{ justifyContent: 'center', alignSelf: 'center', color: 'black', marginLeft: 10, }}>EMI Available{'\n'}Please choose Online Payments and then{'\n'}select EMI under payment options at{'\n'}checkout.</Text>
            </View>



            <View style={{ width: '90%', height: 70, marginTop: 6, justifyContent: 'center', alignSelf: 'center', flexDirection: 'row', backgroundColor: '#E1E1E1' }}>
              <Image source={require('../../Images/tt3.jpg')} style={{ width: 50, height: 35,marginTop:15,marginLeft:10 }} />
              <Text style={{ justifyContent: 'center', alignSelf: 'center', color: 'black', marginLeft: 10}}>Free Returns{'\n'}Request a return within 24 hours of delivery {'\n'}and get a full refund. Not applicable on sale{'\n'} products.</Text>
            </View>

          </View>

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center',marginTop:20 }}>

            <TouchableOpacity onPress={() => this.setState({ activeBt: 'Description' })}>

              <Text style={{ color: 'black' }}>Description</Text>

            </TouchableOpacity>

            <TouchableOpacity onPress={() => { this.setState({ activeBt: 'Details' }) }}>

              <Text style={{ color: 'black', marginLeft: 30 }}>Details</Text>
            </TouchableOpacity>
          </View>
          {
            this.state.activeBt == 'Description' ? <Description /> : null
          }
          {
            this.state.activeBt == 'Details' ? <Details /> : null
          }


          {/* <View>
    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
    <Text style={{marginRight:70}}>Brand: </Text>
    <Text>Michael Kors</Text>
    </View>

   


    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
    <Text style={{marginRight:40}}>Color: </Text>
    <Text style={{marginRight:40}}>Brown</Text>
    </View>


    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
    <Text style={{}}>Size: </Text>
    <Text style={{marginRight:50}}>L</Text>
    </View>


    <View style={{flexDirection:'row',justifyContent:'space-around'}}>
    <Text style={{marginRight:30}}>Types of Handbags: </Text>
    <Text style={{marginRight:70}}>Tote</Text>
    </View>


   </View> */}

          <Text style={{ fontSize: 20,color:'black', justifyContent: 'center', alignSelf: 'center', marginTop: 15 }}>Related products</Text>
          {/* <Text style={{justifyContent:'center',alignSelf:'center',padding:16}}>
   Description: These Balmain Logo Embellished Sock Sneakers are in excellent condition with only signs of use on the soles. Otherwise in pristine condition. Showcasing Balmain’s eye for logomania, these sneakers are offered in a sleek colorway. The pair is finished with contrasting gold-tone logo hardware to the side that stands out atop the black hue for a metallic look.
   </Text> */}
          <View style={{ marginTop: 20 }}>
            <Listshow data={this.state.data} onPress={(val) => this.props.navigation.navigate('Itemdata', { imteData: val })} />

          </View>

          <View>
          <Whatsapp/>

          </View>

          <View>
            <Footer />
          </View>

        </ScrollView>
        <Whatsapp/>
      </SafeAreaView>
    )

  }
}




const styles = StyleSheet.create({
  buttonCircle: {
    width: 10,
    height: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  //[...]
});






