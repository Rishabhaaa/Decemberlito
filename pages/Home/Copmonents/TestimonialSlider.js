import React, { Component } from "react";
import { View, FlatList, Text, TouchableOpacity, Image, ScrollView, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class TestimonialSlider extends Component {

    constructor(props) {
        super(props)
        this.state = {
            indexValue: 0,
            data1: [
                {
                    heading: "No more handbag woes,Subscribe!",
                    heading2: "Rent!Falunt",
                    name: 'Utsavi Sharma',
                    tittle: 'Robes & Drobes',
                    image: require('../../../Images/Testimonial/testimonial-1.jpg'),
                },
                {
                    heading: "No more handbag woes,Subscribe!",
                    heading2: "Rent!Falunt",
                    name: 'Utsavi Sharma',
                    tittle: 'Robes & Drobes',
                    image: require('../../../Images/Testimonial/Testimonial_2.png'),
                },
                {
                    heading: "No more handbag woes,Subscribe!",
                    heading2: "Rent!Falunt",
                    name: 'Utsavi Sharma',
                    tittle: 'Robes & Drobes',
                    image: require('../../../Images/Testimonial/testimonial-3.png'),
                },

            ],
            index_count: 0,

        }
    }
    handleOnScroll(event) {
        this.setState({ indexValue: parseInt(event.nativeEvent.contentOffset.x / Dimensions.get('window').width) })
    }
    UpdateIndex() {
        this.setState({ indexValue: this.state.indexValue + 1 }, () => this.scrollRef.scrollTo({ x: width * this.state.indexValue, y: 0, animated: true }))
    }
    PreviesFun() {
        this.setState({ indexValue: this.state.indexValue - 1 }, () => this.scrollRef.scrollTo({ x: width * this.state.indexValue, y: 0, animated: true }))
    }

    render() {

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView onScroll={(e) => this.handleOnScroll(e)} //particulare index lene k liye use kiya
                    style={{ flex: 1 }}
                    horizontal={true}
                    scrollEventThrottle={16}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    ref={(ref) => (this.scrollRef = ref)}>

                    <FlatList 
                        scrollEnabled={false}
                        contentContainerStyle={{
                            alignSelf: 'center',
                        }}
                        numColumns={Math.ceil(this.state.data1.length/1)}
                        showsVerticalScrollIndicator={false}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.data1}
                        renderItem={({ item, index }) => {
                            return (
                                <View style={{marginTop: 30, marginBottom: 30,alignSelf:"center",justifyContent:"center",alignItems:"center",width:width}}>
                                    <Image source={item.image} style={{ borderRadius: 400 / 1, width: 250, height: 250, marginTop: 30 }} />
                                    <Text style={{ fontSize: 18, color: "#000", marginTop: 30 }}>No more handbag woes,Subscribe!</Text>
                                    <Text style={{ fontSize: 18, color: "#000" }}>Rent!Falunt</Text>
                                    <Text style={{ fontSize: 19, color: "#000", marginTop: 12 }}>Utsavi Sharma</Text>
                                    <Text style={{ textAlign: "center", fontSize: 15, marginLeft: 12, color: "#807b80", fontWeight: "400", lineHeight: 30 }}>Robes & Drobes</Text>
                                </View>

                            )
                        }}
                    />
                </ScrollView>
                <View style={{ width: '100%', flexDirection: 'row', alignSelf: "center", justifyContent: "center", marginTop: 20 }}>
                    <TouchableOpacity
                        style={{ borderWidth: 2, backgroundColor: "#e5e5e5" }}
                        onPress={() => this.PreviesFun()}>
                        <Image source={require('../../../Images/crop1.png')} style={{ width: 25, height: 25, alignSelf: "center", tintColor: "#000", resizeMode: "contain" }} />

                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ borderWidth: 2, backgroundColor: "#000000", marginLeft: 12 }}
                        onPress={() => this.UpdateIndex()}>
                        <Image source={require('../../../Images/crop2.png')} style={{ width: 25, height: 25, alignSelf: "center", tintColor: "#fff", resizeMode: "contain" }} />
                    </TouchableOpacity>
                </View>

            </SafeAreaView>


        )
    }
}