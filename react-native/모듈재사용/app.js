import React from "react";
import {Text,View} from "react-native";
import MyButton from "./components/my-button.js";

const App=()=>{
  return(
    <View>
      <Text>아래와 같이 컴포넌트를 재사용 가능함</Text>
      <MyButton/>
      <MyButton/>
      <MyButton/>
      <MyButton/>
    </View>
  );
};

export default App;
