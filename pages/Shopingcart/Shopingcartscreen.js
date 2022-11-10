import React, { Component } from "react";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import OrderTracking from "../Home/Copmonents/OrderTracking";
import WishlistScreen from "../Home/Copmonents/WishlistScreen";
import Cartshoping from "../Home/Copmonents/Cartshoping";
import { View, FlatList, Text, TouchableOpacity, Image, SafeAreaView, ScrollView, } from "react-native";
import Whatsapp from "../../Component/Whatsapp";

export default class Shopingcartscreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeBt: "OrderTracking",
        }
    }
    render() {
        //console.log('show data ',this.props.data)
        return (
            <SafeAreaView style={{ backgroundColor: 'white' }}>
                <ScrollView>
                    <Header onPress={() => this.props.navigation.openDrawer()} />
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', height: 50, backgroundColor: '#D8D8D8', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => this.setState({ activeBt: 'Cartshoping' })} style={{ marginLeft: 40 }}>
                            <Text>Shopping Cart1</Text>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.setState({ activeBt: 'WishlistScreen' })}>
                            <Text>Wishlist1</Text>

                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.setState({ activeBt: 'OrderTracking' })}>
                            <Text>Order Tracking</Text>

                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')} style={{ marginRight: 40 }}>
                            <Text>Login</Text>

                        </TouchableOpacity>
                    </View>


                    {
                        this.state.activeBt == 'Cartshoping' ? <Cartshoping /> : null

                    }

                    {
                        this.state.activeBt == 'WishlistScreen' ? <WishlistScreen /> : null

                    }
                    {
                        this.state.activeBt == 'OrderTracking' ? <OrderTracking /> : null

                    }

                    <Footer />
                </ScrollView>
                <Whatsapp/>
            </SafeAreaView>
        )
    }
}