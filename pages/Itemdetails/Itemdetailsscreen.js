//   Slider image code 
import React from 'react';
import { StyleSheet, View, Text, Image, Button, SafeAreaView, Linking, ScrollView, TouchableOpacity, AsyncStorage, image, } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Header from "../../Component/Header";
import Viewitems from '../Home/Viewitems';
import Listshow from '../Home/Copmonents/ListShow';
import Footer from '../../Component/Footer';
import { } from 'react-native-gesture-handler';
import Details from '../Home/Copmonents/Details';
import Description from '../Home/Copmonents/Description';
import Whatsapp from '../../Component/Whatsapp';
import Itemdata from '../Home/itemdata';
// const funccall =()=>{
// }
export default class Itemdetailsscreen extends React.Component {
  openAlert=()=>{
    alert('You already add a prouct in you cart');
  }

  constructor(props) {
    super(props)
    this.state = {
      showRealApp: false,
      checkBox1: "",
      activeBt: 'Description',
      images: [],
      currentIndex: 0,
      name: '',
      data: [],
      Add_cardata: [],
      product_data: '',
      user_token: '',
      


    }
  }

  AddCartApiCall(id) {
    console.log('items id ', this.state.user_token)
    fetch('https://litoo.herokuapp.com/carts/add_product?id=' + id,
      {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'token': this.state.user_token,


        }
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('AddCartApiCall', data);
        alert(data.messages)
        this.setState({ product_data: item.id });
      })
      .catch((error) => {
        //console.error('Error:', error);
      })
  };

  // wislist add data code

  WishCartApiCall(id) {
    console.log('items id ', this.state.user_token)
    fetch('https://litoo.herokuapp.com/wishlists/add_product?id=' + id,
      {
        method: 'post',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'token': this.state.user_token,


        }
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('WishCartApiCall', data);
        alert(data.messages)
        this.setState({ product_data:id });
      })
      .catch((error) => {
        console.error('Error:', error);
      })
  };
  // wislist add data end code


  Slideproduct() {
    // alert("heeherh jdfjd")
    console.log('new iddd data', this.props.route.params.item.product.id);
    fetch('https://litoo.herokuapp.com/products/' + this.props.route.params.item.product.id,

      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('sliderapiCall', data);
        this.setState({ product_data: data })
        this.setState({ images: data?.images, })
      })
      .catch((error) => {
        console.error('Error:', error);
        Alert.alert(err.message);

      });

  }
  getToken = async () => {
    let token = await AsyncStorage.getItem('isUserAuth')
    console.log(token)
    this.setState({ user_token: token })
    // return token
  }
  componentDidMount() {
    this.getToken()
    this.Slideproduct();
  }
  _renderItem = ({ item }) => {
    return (
      <View style={{ height: 200, width: "100%", }}>

        <Text style={styles.title}>{item.title}</Text>
        <Image style={{ justifyContent: 'center', alignSelf: 'center', width: '100%', height: '100%' }} source={{ uri: item }} />
      </View>


    );
  }

  render() {

    // console.log('cc ', slides)
    return (
      <SafeAreaView style={{ backgroundColor: 'white' }}>
        <ScrollView>
          <Header onPress={() => this.props.navigation.openDrawer()} />
          <View style={{ marginTop: 30, justifyContent: 'center', alignSelf: 'center' }}>
            <Text style={{ color: 'black', fontSize: 30 }}>Balmain Logo Embellished </Text>
            <Text style={{ color: 'black', fontSize: 30, alignSelf: 'center', justifyContent: 'center' }}>Sock Sneakers</Text>
          </View>
          <View style={{ width: '90%', height: 250, alignSelf: 'center', justifyContent: 'center', backgroundColor: 'white', marginTop: 10 }}>
            <AppIntroSlider renderItem={this._renderItem} data={this.state.images} title={this.state.name} onDone={this._onDone} currentImageEmitter={i => this.setState({ currentIndex: i })} />
          </View>

          {/* <Image style={{ justifyContent: 'center', alignSelf: 'center', width: '100%', height: '100%' }} source={this.state.images} /> */}

          <Text style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 10 }}>{this.state.data.name}</Text>
          <Text style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 10, fontWeight: "900" }}>{this.state.data.price}</Text>
          <Text style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 5 }}>{this.state.data.condition}</Text>
          <Text style={{ justifyContent: 'center', alignSelf: 'center', marginTop: 5 }}>{this.state.data.discount_price}</Text>

          <View style={{ width: '100%' }}>
            <TouchableOpacity onPress={() => this.AddCartApiCall(this.state.product_data?.id)} style={{ flexDirection: 'row', width: '90%', height: 50, backgroundColor: 'black', justifyContent: 'center', alignSelf: 'center', marginTop: 30, }}>
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
              // onPress={() => this.setState({ checkBox1: !this.state.checkBox1 })}
              onPress={() => {this.setState({ checkBox1: !this.state.checkBox1 }),this.WishCartApiCall(this.state.product_data?.id)}}
            >
              <Image source={require('../../Images/heart1.png')} style={{ width: 25, height: 20, justifyContent: 'center', alignSelf: 'center', tintColor: this.state.checkBox1 ? "red" : 'grey' }} />
            </TouchableOpacity>
          </View>
         
          <View style={{}}>
            <View style={{ width: '90%', height: 70, marginTop: 10, flexDirection: 'row', backgroundColor: '#E1E1E1', padding: 18, marginLeft: 20 }}>
              <Image source={require('../../Images/tt.jpg')} style={{ width: 50, height: 35, }} />
              <Text style={{ justifyContent: 'center', alignSelf: 'center', color: 'black', marginLeft: 10, }}>Guaranteed Authenticity{'\n'}100% Authentic or full refund*</Text>
            </View>
            <View style={{ width: '90%', height: 70, marginTop: 5, justifyContent: 'center', alignSelf: 'center', flexDirection: 'row', backgroundColor: '#E1E1E1' }}>
              <Image source={require('../../Images/tt1.jpg')} style={{ width: 50, height: 35, marginTop: 15 }} />
              <Text style={{ justifyContent: 'center', alignSelf: 'center', color: 'black', marginLeft: 10, }}>EMI Available{'\n'}Please choose Online Payments and then{'\n'}select EMI under payment options at{'\n'}checkout.</Text>
            </View>
            <View style={{ width: '90%', height: 70, marginTop: 6, justifyContent: 'center', alignSelf: 'center', flexDirection: 'row', backgroundColor: '#E1E1E1' }}>
              <Image source={require('../../Images/tt3.jpg')} style={{ width: 50, height: 35, marginTop: 15, marginLeft: 10 }} />
              <Text style={{ justifyContent: 'center', alignSelf: 'center', color: 'black', marginLeft: 10 }}>Free Returns{'\n'}Request a return within 24 hours of delivery {'\n'}and get a full refund. Not applicable on sale{'\n'} products.</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', marginTop: 20 }}>
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
          <Text style={{ fontSize: 20, color: 'black', justifyContent: 'center', alignSelf: 'center', marginTop: 15 }}>Related products</Text>
          <View style={{ marginTop: 20 }}>
            <Listshow data={this.state.data} onPress={(val) => this.props.navigation.navigate('Itemdata', { imteData: val })} />
          </View>
          <TouchableOpacity onPress={this.openAlert}>
          <Text>preeeSSS me</Text>

          </TouchableOpacity>
          <View>
            <Whatsapp />
          </View>
          <View>
            <Footer />
          </View>
        </ScrollView>
        <Whatsapp />
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
