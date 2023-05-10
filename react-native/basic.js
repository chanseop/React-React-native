import React,{Component} from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const instructions=Platform.select({
  ios:'ios용 메세지',
  android:'android용 메세지',
});

type Props = {};
export default class App extends Component<Props>{
  render(){
    return (
      <View style ={styles.container}>
        <Text style ={styles.welcome}>어서와 힘들어도 사람 사는 곳이야</Text>
        <Text style ={styles.instructions}>시작하려면 App.js를 고치자</Text>
        <Text style ={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create(
  {
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#F5FCFF',
  },
  welcome:{
    fontSize:20,
    textAlign:'center',
    margin:10,

  },
  instructions:{
    textAlign:'center',
    color:'#333333',
    marginBottom:5,
  },
}
);
