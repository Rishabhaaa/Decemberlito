import React, { Component, useState } from 'react';
import { TouchableOpacity, Text, View, Image, TextInput, SafeAreaView, FlatList, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Drawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      womensData: [],
      MENSData: [],
      Rentdata: [],
      Kidsdata: [],
      filter: false,
    }
  }

  openMENSData() {
    this.setState({
      MENSData: [
        {
          mensScrren1: 'mens shoes',
          id: 0,
          // data: [{ title: 'mens shoes', id: 2 },{ title: 'mens Belts', id: 2 }, { title: 'Mens Wallets', id: 3 },]

        },
        {
          mensScrren1: 'mens Belts',
          id: 1,
          //data: [{ title: 'mens shoes', id: 2 },{ title: 'mens Belts', id: 2 }, { title: 'Mens Wallets', id: 3 },]

        },
        {
          mensScrren1: 'Mens Wallets',
          id: 2,
          // data: [{ title: 'mens shoes', id: 2 },{ title: 'mens Belts', id: 2 }, { title: 'Mens Wallets', id: 3 },]
        }

      ]
    })
  }

  openKidsdata() {

    this.setState({
      Kidsdata: [
        {
          kidsScreen: 'Girls cloth',
          id: 1,
          // data: [{ title: 'Girls cloth', id: 1 }, { title: 'Boys cloth', id: 2 },]

        },
        {
          kidsScreen: 'Boys cloth',
          id: 2,
          // data: [{ title: 'Girls cloth', id: 1 }, { title: 'Boys cloth', id: 2 },]

        },
      ]
    }
    )
  }


  OpenRentdata() {
    this.setState({
      Rentdata: [
        {
          rentscreen1: 'Rent Handbags',
          id: 0,
          data: [{ title: 'View All', id: 1 }, { title: 'Cluthes & Wallets', id: 2 }, { title: 'Backpacks', id: 3 }, { title: 'Belt Bags', id: 4 }, { title: 'Bucket Bag', id: 5 }]
        },
        {
          rentscreen1: 'Rent Jewellery',
          id: 1,
          data: [{ title: 'View All', id: 1 }, { title: 'Bracelet', id: 2 }, { title: 'Earings', id: 3 }, { title: 'Maang Tikka', id: 4 }, { title: 'Jwellery Sets', id: 5 }]

        },
        {
          rentscreen1: 'Rent Accessories', id: 2,
          data: [{ title: 'View All', id: 1 }, { title: 'Belts', id: 2 }, { title: 'Scarves/Stoles', id: 3 }, { title: 'Shoes', id: 4 }]

        },
        {
          rentscreen1: 'Rent Clothes',
          id: 3,
          data: [{ title: 'View All', id: 1 }, { title: 'Bottoms', id: 2 }, { title: 'Dresses', id: 3 }, { title: 'Indian Wear', id: 4 }, { title: 'Jackets/Outerwear', id: 5 }, { title: 'Rent Tops', id: 6 }]

        }
      ]
    })
  }

  OpenWomensData() {

    this.setState({
      womensData: [
        {
          scrName: 'Bags',
          id: 0,
          data: [{ title: 'View All', id: 1 }, { title: 'Shoulder Bags', id: 2 }, { title: 'Slings', id: 3 }, { title: 'Totes', id: 4 }, { title: 'Clutches & Wallets', id: 5 }, { title: 'Backpacks', id: 6 }, { title: 'Belt Bags', id: 7 }, { title: 'Bucket Bag', id: 8 }]
        },
        {
          scrName: 'Accessories',
          id: 1,
          data: [{ title: 'View All', id: 1 }, { title: 'Belts', id: 2 }, { title: 'Scarves/Stoles', id: 3 }, { title: 'Sunglasses', id: 4 }, { title: 'Watches', id: 5 }, { title: 'Bag Charms', id: 6 }]
          // data:['View All','Belts','Scarves/Stoles','Sunglasses','Watches','Bag Charms']
        },
        {
          scrName: 'Shoes',
          id: 2,
          data: [{ title: 'View All', id: 1 }, { title: 'Heels', id: 2 }, { title: 'Flats', id: 3 }, { title: 'Sneakers', id: 4 }]
        },
        {
          scrName: 'Clothes',
          id: 3,
          data: [{ title: 'View All', id: 1 }, { title: 'Indian Wear', id: 2 }, { title: ' Tops', id: 3 }, { title: 'Dresses', id: 4 }, { title: 'Bottoms', id: 5 }, { title: 'Jackets/outwear', id: 5 }]
        },
        {
          scrName: 'Jewellery',
          id: 4,
          data: [{ title: 'View All', id: 1 }, { title: 'Bracelet', id: 2 }, { title: 'Necklace', id: 3 }]
        },


      ]
    })
  }
  ShowChildData(item) {
    console.log('show item ', item)
    this.setState({ chileditem: item.scrName })
  }

  hidedata(Value) {
    console.log(Value)

    switch (Value) {
      case 'Womens':
        this.OpenWomensData();
        this.setState({ Rentdata: [] })
        this.setState({ MENSData: [] })
        this.setState({ Kidsdata: [] })
        break;

      case 'Rent':
        this.OpenRentdata();
        this.setState({ womensData: [] })
        this.setState({ MENSData: [] })
        this.setState({ Kidsdata: [] })
        break;

      case 'Men':
        this.openMENSData();
        this.setState({ womensData: [] })
        this.setState({ Rentdata: [] })
        this.setState({ Kidsdata: [] })
        break;

      case 'Kids':
        this.openKidsdata();
        this.setState({ womensData: [] })
        this.setState({ Rentdata: [] })
        this.setState({ MENSData: [] })
        break;

      default:
        Alert.alert("DATA NOT FOUND");
    }
  }

  menfunc(id) {
    this.props.navigation.navigate("MensShoes", { itemsData: id })
    // alert("shoes call"); 
  }
  rentfun(id) {
    // alert("i am call")
    this.props.navigation.navigate("Boys", { itemsData: id })

  }
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={{ marginLeft: 12 }}>
            {/* search Text Start code */}
            <View style={{ flexDirection: "row", marginTop: 12, justifyContent: "space-between", marginTop: 20 }}>
              <TextInput placeholder='Search' style={{ width: "70%", fontSize: 16 }}></TextInput>
              <Image source={require('../Images/search.png')} style={{ width: "18%", height: 20, alignSelf: "center" }} />
            </View>
            {/* search Text Start code end */}


            {/* Border Start code start */}
            <View style={{ borderBottomWidth: .24, borderBottomColor: "grey", width: "95%", alignSelf: "center" }}></View>
            {/* Border Start code end */}

            {/*   Drawer Start code */}

            <View style={{ padding: 15, marginTop: 20, marginBottom: 12 }}>
              {/* Home start code */}
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Home')}
                style={{ fontWeight: "bold", fontSize: 17, color: "#000" }}>
                <Text style={{ fontWeight: "bold", fontSize: 17, color: "#000" }}>HOME</Text>
              </TouchableOpacity>
              {/* Home end code */}

              {/* WOMEN start code */}
              <TouchableOpacity onPress={() => { this.hidedata("Womens") }} style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontWeight: "bold", fontSize: 17, color: "#000", marginTop: 18 }}>WOMEN</Text>
                <TouchableOpacity
                  onPress={() => { this.hidedata("Womens") }}
                  style={{ justifyContent: "center" }}>
                  <Image source={require('../Images/play.png')} style={{ width: "64%", height: 10, marginRight: 12, tintColor: "#918e97", marginTop: 12 }} />
                </TouchableOpacity>
              </TouchableOpacity>


              <FlatList
                data={this.state.womensData}
                renderItem={({ item }) =>
                  <View>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}
                      onPress={() => this.ShowChildData(item)} >
                      <Text style={{ fontWeight: "bold", color: "#000", marginLeft: 15, padding: 4, marginTop: 5 }}>{item.scrName}</Text>
                      <Image source={require('../Images/play.png')} style={{ width: "5%", height: 10, marginRight: 12, tintColor: "#918e97", alignSelf: "center" }} />
                    </TouchableOpacity>
                    {this.state.chileditem === item.scrName ?
                      <FlatList style={{ marginLeft: 20 }}
                        data={item?.data}
                        renderItem={({ item }) =>
                          <View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Viewitems', { itemsData: item }) }}>
                              <Text style={{ marginLeft: 12, padding: 5 }}>{item.title}</Text>
                            </TouchableOpacity>
                          </View>

                        }
                      />
                      : null}
                  </View>
                }
              />

              {/* WOMEN End code */}

              {/* Rent start code */}
              <TouchableOpacity
                onPress={() => this.hidedata("Rent")}
                style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontWeight: "bold", fontSize: 17, color: "#000", marginTop: 18 }}>Rent</Text>
                <Image
                  onPress={() => this.hidedata("Rent")}
                  source={require('../Images/play.png')} style={{ width: "4%", height: 10, tintColor: "#918e97", marginRight: 3, marginTop: 18 }} />
              </TouchableOpacity>

              <FlatList
                data={this.state.Rentdata}
                renderItem={({ item }) =>
                  <View>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}
                      onPress={() => this.setState({ chileditem: item.rentscreen1 })} >
                      <Text style={{ fontWeight: "bold", color: "#000", marginLeft: 15, padding: 4, marginTop: 5 }}>{item.rentscreen1}</Text>

                      <Image source={require('../Images/play.png')} style={{ width: "4%", height: 10, tintColor: "#918e97", marginRight: 3 }} />

                    </TouchableOpacity>
                    {
                      this.state.chileditem == item.rentscreen1 ?
                        <FlatList
                          data={item.data}
                          renderItem={({ item }) =>

                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('RentHandbags', { itemsData: item }) }}><Text style={{ marginLeft: 16, padding: 7 }}>{item.title}</Text></TouchableOpacity>

                          }
                        />
                        : null
                    }
                  </View>

                }
              />
              {/* Rent End code */}

              {/* mens codee */}

              <TouchableOpacity
                onPress={() => this.hidedata("Men")}
                style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontWeight: "bold", fontSize: 17, color: "#000", marginTop: 18 }}>MEN'S</Text>
                <TouchableOpacity onPress={() => this.hidedata("Men")} style={{ justifyContent: "center" }}>
                  <Image source={require('../Images/play.png')} style={{ width: "64%", height: 10, marginRight: 12, tintColor: "#918e97" }} /></TouchableOpacity>
              </TouchableOpacity>


              {/* <TouchableOpacity
                onPress={() => this.openMENSData()}
                style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontWeight: "bold", fontSize: 17, color: "#000", marginTop: 18 }}>Men's</Text>
                <Image source={require('../Images/play.png')} style={{ width: "4%", height: 10, tintColor: "#918e97", marginTop: 18, marginRight: 3 }} />
              </TouchableOpacity> */}

              <FlatList
                data={this.state.MENSData}
                renderItem={({ item }) =>
                  <View>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}
                      onPress={() => this.menfunc(item.id)}
                    >
                      <Text style={{ color: "#000", marginLeft: 15, padding: 4, marginTop: 5 }}>{item.mensScrren1}</Text>
                    </TouchableOpacity>
                  </View>
                }
              />
              {/* mens code end */}





              {/* kids code */}

              <TouchableOpacity
                onPress={() => this.hidedata("Kids")}
                style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontWeight: "bold", fontSize: 17, color: "#000", marginTop: 18 }}>KIDS</Text>
                <Image onPress={() => this.hidedata("Kids")} source={require('../Images/play.png')} style={{ width: "4%", height: 10, tintColor: "#918e97", marginTop: 18, marginRight: 3 }} />
              </TouchableOpacity>

              <FlatList
                data={this.state.Kidsdata}
                renderItem={({ item }) =>
                  <View>
                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: "space-between" }}
                      onPress={() => { this.rentfun(item.id) }} >
                      <Text style={{ color: "#000", marginLeft: 15, padding: 4, marginTop: 5 }}>{item.kidsScreen}</Text>
                    </TouchableOpacity>
                    {/* {
                         this.state.chileditem == item.screen1 ?
                         <FlatList
                          data={item.data}
                          renderItem={({ item }) =>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Boys', { itemsData: item }) }}><Text style={{ marginLeft: 16, padding: 7 }}>{item.title}</Text></TouchableOpacity>
                          }
                        />
                        : null } */}
                  </View>

                }
              />

              <TouchableOpacity onPress={() => this.props.navigation.navigate('Salescreen')} style={{ fontWeight: "bold", fontSize: 17, color: "#000" }}><Text style={{ fontWeight: "bold", fontSize: 17, color: "#000", marginTop: 18 }}>SALE</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('SellWithUss')}
                style={{ fontWeight: "bold", fontSize: 17, color: "#000" }}><Text style={{ fontWeight: "bold", fontSize: 17, color: "#000", marginTop: 18 }}>SELL WITH US</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Brandscreen')} style={{ fontWeight: "bold", fontSize: 17, color: "#000" }}><Text style={{ fontWeight: "bold", fontSize: 17, color: "#000", marginTop: 18 }}>BRANDS</Text></TouchableOpacity>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Authenticationscreen')} style={{ fontWeight: "bold", fontSize: 17, color: "#000" }}><Text style={{ fontWeight: "bold", fontSize: 17, color: "#000", marginTop: 18 }}>AUTHENTICATION</Text></TouchableOpacity>
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
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Text style={{ fontWeight: "bold", fontSize: 17, color: "#000", marginLeft: 12 }}>LOGIN</Text>
              </TouchableOpacity>
            </View>



          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}