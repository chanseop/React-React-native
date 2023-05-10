// State
import React, { Component } from "react";
import {Text,View} from "react-native";

export default class App extends Component{
  state={
    myState:"State 테스트용"
  }
  updateState = ()=>this.setState({myState:"myState가 바뀌었어요"})
  render(){
    return(
      <View>
        <Text 
        style=
        {{
          fontSize:30,
          textAlign:'center',
          margin:90,
          
        }} 
        onPress={this.updateState}>{this.state.myState}</Text>
      </View>
    );
  }
}
