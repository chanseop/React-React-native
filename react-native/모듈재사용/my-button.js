import React from "react";
import {Text, TouchableOpacity} from 'react-native';

const MyButton = ()=>{
  return(
    <TouchableOpacity 
    style={{
      backgroundColor:'#000000',
      padding:16,
      margin:10,
      borderRadius:8,

    }}
    onPress={()=>alert("클릭됨")}
    >
      <Text style={{fontSize:24, color:'white'}}>My Button</Text>
    </TouchableOpacity>
  ); 
};

export default MyButton;
