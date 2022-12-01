

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
    //   sub_catData: [],
    //   cat_item_id: '',
    //   cat_data: [],
    //   cat_id: '',
    //   sub_cat_id:''



    }
  }

  Add() {

    fetch('https://litoo.herokuapp.com/wishlists/add_product?id=3',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('AddCall', data);
        this.setState({ data: data })
      })
      .catch((error) => {
        //console.error('Error:', error);
      });

  }

 
  
  Wishlist() {

    fetch('https://litoo.herokuapp.com/wishlists',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('WishlistCall', data);
        this.setState({ data: data })
      })
      .catch((error) => {
        //console.error('Error:', error);
      });

  }

  Addrentproduct() {

    fetch('https://litoo.herokuapp.com/wishlists/add_rent_product?id=1',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Addrentproduct', data);
        this.setState({ data: data })
      })
      .catch((error) => {
        //console.error('Error:', error);
      });

  }
removerentproduct() {

    fetch('https://litoo.herokuapp.com/wishlists/remove_rent_product?id=1',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('removerentproductCall', data);
        this.setState({ data: data })
      })
      .catch((error) => {
        //console.error('Error:', error);
      });

  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>

       <View>
        <Text></Text>
       </View>

        </ScrollView>
      </SafeAreaView>
    )
  }
}
