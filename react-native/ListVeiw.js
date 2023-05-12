import React, { Component } from "react";
import {Text, ListView} from "react-native";


export default class App extends Component{
  constructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2});
    this.state={
      dataSource: ds.cloneWithRows(["컵밥","국밥","덮밥","김밥","비빔밥","볶음밥","주먹밥","짜장밥","초밥","케밥","유부초밥"])
    };
  }
  

  render(){
    return(
      <ListView
        dataSource={this.state.dataSource}
        renderRow ={
          (rowData) => <Text style={{fontSize:20}}>{rowData}</Text>
        }
        />
    );
  }
}
