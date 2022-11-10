import React, { Component } from "react"
import {View,Button} from 'react-native';
 
export default class Handbags extends Component{
  constructor(props){
      super(props)
      this.state={
      }
  }
  render(){
      return(
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Button
      onPress={() => this.props.navigation.navigate('Mens_shoes')}
      title="Go to Mens_shoes Screen"
    />
  </View>
      )
  }
}
