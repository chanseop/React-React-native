import React, { Component } from "react";
import {Image,ImageBackground,View,Text,TextInput ,StyleSheet} from "react-native";


export default class App extends Component{

  render(){
    return(
      <ImageBackground source={require('./pic1.png')} 
      style={{width:"100%",height:"100%"}}>
        <Text style={{fontSize:20,color:"#FFFFFF"}}>zzzzz</Text>
        <Text style={{fontSize:20,color:"#FFFFFF"}}>zzzzz</Text>
        <Text style={{fontSize:20,color:"#FFFFFF"}}>zzzzz</Text>
        <Text style={{fontSize:20,color:"#FFFFFF"}}>zzzzz</Text>
        <Text style={{fontSize:20,color:"#FFFFFF"}}>zzzzz</Text>
        <Text style={{fontSize:20,color:"#FFFFFF"}}>zzzzz</Text>
        <Text style={{fontSize:20,color:"#FFFFFF"}}>zzzzz</Text>
        <Image style={{width:100, height:100}} source={{uri:'https://ichef.bbci.co.uk/news/640/cpsprodpb/E172/production/_126241775_getty_cats.png'}}/>
      </ImageBackground>
    )
  } 
}
