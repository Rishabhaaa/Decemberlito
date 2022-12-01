import React, { Component, useState } from 'react';
import { TouchableOpacity, Text, View, Image, TextInput, SafeAreaView, FlatList, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Forgot from '../pages/Forgot/Forgot';
import Listshow from '../pages/Home/Copmonents/ListShow';
import MensShoes from '../pages/MENS/MensShoes';

export default class Drawer extends Component {
  focusListerner
  constructor(props) {
    super(props)
    this.state = {

      filter: false,
      data: [],
      sub_catData: [],
      cat_item_id: '',
      cat_data: [],
      cat_id: '',
      sub_cat_id:''


    }
  }

  CategoryCall() {

    fetch('https://litoo.herokuapp.com/categories',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('CategoryCall', data);
        this.setState({ data: data })
      })
      .catch((error) => {
        //console.error('Error:', error);
      });

  }


  SubCategoryApiCall(item) {
    console.log('items id ', item)
    fetch('https://litoo.herokuapp.com/categories/' + item.id,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('SubCategoryApiCall', data);
        this.setState({ sub_catData: data, cat_item_id: item.id })
      })
      .catch((error) => {
        //console.error('Error:', error);
      });

  }


  InsideSubCategoryApiCall(item) {
    console.log("this.state.cat_item_id ::::::::::::::::::::::::::::", this.state.cat_item_id, item)
    const url = 'https://litoo.herokuapp.com/categories/' + this.state.cat_item_id + '/sub_categories/' + item.id
    // yha s categies call ho g then uske baad uski sub categores then  sub categires ka andar list 
    // like women/accessories/women beg,view all
    console.log("url :::::::::::::", url) 
    this.setState({sub_cat_id:item.id})
    fetch(url,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('insidesub category ******************************', data);
        this.setState({ cat_data: data.data })
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  }
  // ProductsubcategoriesApiCall(item) {
  //   console.log('state id ', this.state.id, "item id ", item.id)

  //   fetch('https://litoo.herokuapp.com/categories/' + this.state.cat_item_id + '/sub_categories/' + item.id,
  //     {
  //       method: 'GET',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log('ProductsubcategoriesApiCall', data);
  //       this.setState({ all_product_id: data, all_product_id: item.id })
  //     })
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });

  // }





  componentDidMount() {
    this.CategoryCall()
    const { navigation } = this.props;
    this.focusListener = navigation.addListener("focus", () => {
      this.CategoryCall()
      // Call ur function here.. or add logic.     
    });

  }

  componentWillUnmount() {
    // Remove the event listener;
    // this.focusListener.remove();
  }


  // menfunc(id) {
  //   this.props.navigation.navigate("MensShoes", { itemsData: id })
  //   // alert("shoes call"); 
  //   // console.log("data id :::", data.id)
  //   // if (data.id == 1) {
  //   //   this.props.navigation.navigate("MensShoes", { itemsData: data.id })
  //   // }else if(data.id == 2){
  //   //   this.props.navigation.navigate("MensBelt", { itemsData: data.id })
  //   // }else {
  //   //   this.props.navigation.navigate("MensWallet", { itemsData: data.id })
  //   // }
  //   // this.props.navigation.navigate("MensShoes",)
  //   }


  rentGirlFun(id) {
    console.log('shooow id dddddd ', id)
    this.props.navigation.navigate("Girls", { itemsData: id })

    // alert("i am call")
    // console.log('data', data)
    // } else {
    //   this.props.navigation.navigate("Boys", { itemsData: data.id })
    // }
    // return
    // this.props.navigation.navigate("Girls", { itemsData: id })
  }


  // rentfun(id) {
  //   // alert("i am call")
  //   this.props.navigation.navigate("Boys", { itemsData: id })

  // }



  ShowProductCall(item) {
   console.log('itemssss data ',item)
    fetch('https://litoo.herokuapp.com/products/product_type?product_type='+item?.product_type,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('ShowProductCall', data);
        this.props.navigation.navigate('MensShoes',{data:data})
      })
      .catch((error) => {
        console.error('Error:', error);
        Alert.alert(err.message);

      });

  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>

          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: "row", marginTop: 12, justifyContent: "space-between", marginTop: 20 }}>
              <TextInput placeholder='Search' style={{ width: "70%", fontSize: 16 }}></TextInput>
              <Image source={require('../Images/search.png')} style={{ width: "18%", height: 20, alignSelf: "center" }} />
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Home')}
              style={{ fontWeight: "bold", fontSize: 17, color: "#000" }}>
              <Text style={{ fontWeight: "bold", fontSize: 17, color: "#000",marginLeft:8 }}>HOME</Text>
            </TouchableOpacity>
            <FlatList
              data={this.state.data}
              renderItem={({ item }) =>
                <View>
                  <TouchableOpacity
                    onPress={() => { this.SubCategoryApiCall(item) }}
                    style={{ fontWeight: "bold", fontSize: 17, color: "#000" }}>
                    <Text style={{ fontWeight: "bold", fontSize: 17, color: "#000", paddingTop: 5, marginTop: 10,marginLeft:8 }}>{item?.name}</Text>
                  </TouchableOpacity>

                     
                  {this.state.cat_item_id == item.id ?
                    <FlatList
                      data={this.state.sub_catData}
                      renderItem={({ item }) =>
                        <View>
                          <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}
                            onPress={() => { this.InsideSubCategoryApiCall(item) }}>
                            <Text style={{ fontWeight: "bold", color: "#000", marginLeft: 15, padding: 4, }}>{item.name}</Text>
                            <Image source={require('../Images/play.png')} style={{ width: "5%", height: 10, marginRight: 12, tintColor: "#918E97", alignSelf: "center" }} />
                          </TouchableOpacity>

    {this.state.sub_cat_id == item.id ? 
    <FlatList
    data={this.state.cat_data}
    renderItem={({ item }) =>
      <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}
        onPress={() => { this.ShowProductCall(item)}}>
        <Text style={{ marginLeft: 15, padding: 4, }}>{item.product_type}</Text>
      </TouchableOpacity>
    }
  />
    :null}           
                        </View>

                      }
                    />
                    : null}

                </View>
              }
            />











            <View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Salescreen')} style={{ fontWeight: "bold", fontSize: 17, color: "#000" }}><Text style={{ fontWeight: "bold", fontSize: 17, color: "#000", marginTop: 18,marginLeft:8 }}>SALE</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('SellWithUss')}
                style={{ fontWeight: "bold", fontSize: 17, color: "#000" }}><Text style={{ fontWeight: "bold", fontSize: 17, color: "#000", marginTop: 18,marginLeft:8}}>SELL WITH US</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Brandscreen')} style={{ fontWeight: "bold", fontSize: 17, color: "#000" }}><Text style={{ fontWeight: "bold", fontSize: 17, color: "#000", marginTop: 18, padding: 4,marginLeft:8}}>BRANDS</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Authenticationscreen')} style={{ fontWeight: "bold", fontSize: 17, color: "#000" }}><Text style={{ fontWeight: "bold", fontSize: 17, color: "#000", marginTop: 18,marginLeft:8}}>AUTHENTICATION</Text></TouchableOpacity>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 90, marginRight: 18 }}>
              <View style={{ flexDirection: "row" }}>
                <Image source={require('../Images/trolley.png')} style={{ width: 20, height: 20, resizeMode: "contain" }} />
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Shopingcartscreen")}><Text style={{ fontWeight: "bold", fontSize: 17, color: "#000", marginLeft: 12 }}>SHOPPING CART</Text>
                </TouchableOpacity>
              </View>
              <Text style={{ borderRadius: 20, borderWidth: 1, backgroundColor: "#000", color: "#fff", alignContent: "center", marginBottom: 30, width: 22, textAlign: "center" }}>0</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Image source={require('../Images/user.png')} style={{ width: 20, height: 20, resizeMode: "contain" }} />
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Signup')}><Text style={{ fontWeight: "bold", fontSize: 17, color: "#000", marginLeft: 12 }}>LOGIN</Text>
              </TouchableOpacity>
            </View>

          </View>


        </ScrollView>
      </SafeAreaView>
    )
  }
}
