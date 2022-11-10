import React, { Component } from "react"
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    render() {
        return (
            <ScrollView>
                {/* Footer code */}
                <Text style={{ color: "#000", fontWeight: "bold", textAlign: "center",marginTop:40}}>Copyright {'\u00A9'} 2022 </Text>
    
                <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', }}>
                    <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center', }}>
                        <TouchableOpacity><Text>Privacy Policy</Text></TouchableOpacity>
                        <TouchableOpacity><Text style={{ marginLeft: 20 }}>Refund</Text></TouchableOpacity>
                        <TouchableOpacity><Text>Authentication</Text></TouchableOpacity>
                        <TouchableOpacity><Text>About us</Text></TouchableOpacity>
                    </View>
                    <View style={{ width: '50%', alignItems: 'center', justifyContent: 'center', }}>
                        <TouchableOpacity><Text>Terms & Conditions</Text></TouchableOpacity>
                        <TouchableOpacity><Text>General Terms and Conditions</Text></TouchableOpacity>
                        <TouchableOpacity><Text>Blog</Text></TouchableOpacity>
                        <TouchableOpacity><Text>Contact us</Text></TouchableOpacity>

                    </View>
                </View>




                <View style={{ flexDirection: "row", marginTop: 20, justifyContent: "space-around", margin: 6 }}>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={{ padding: 12, alignItems: "center", margin: 6 }}><Image source={require('../Images/facebook.png')} style={{ width: 15, height: 15, alignSelf: "center", tintColor: "#918e97", resizeMode: "contain" }} /></TouchableOpacity>
                        <TouchableOpacity style={{ padding: 12, elevation: 3, alignItems: "center", margin: 6 }}><Image source={require('../Images/instagram.png')} style={{ width: 15, height: 15, alignSelf: "center", tintColor: "#918e97", resizeMode: "contain" }} /></TouchableOpacity>
                    </View>
                </View>
                {/* Footer code end */}

            </ScrollView>

        )
    }
}
