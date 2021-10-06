import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Image } from "react-native-elements";
import FinalValue from "../OptimizedComponents/FinalValue";
import MyInput from "../OptimizedComponents/MyInput";
import MyButton from "../OptimizedComponents/MyButton";

const FeetInch = () => {
  const [num, setNum] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const [feetInch, setFeetInch] = useState(true);
  const [arr, setArr] = useState(["ft", "inch"]);
  const [convertedValue, setConvertedValue] = useState(0);

  return (
    <View style={{ marginTop: 71 }}>
      <MyInput
        onChangeText={(value) => {
          setNum(value);
        }}
        value={num}
        tagValue={arr[0]}
      />

      <TouchableOpacity
        onPress={() => {
          setFeetInch(!feetInch);
          setArr(arr.reverse());
        }}
        style={{ alignItems: "center", marginTop: 26 }}
      >
        <Image
          source={require("../assets/refreshIcon.png")}
          style={{ width: 40, height: 40 }}
        />
      </TouchableOpacity>

      <FinalValue
        isPressed={isPressed}
        convertedValue={convertedValue}
        tagValue={arr[1]}
      />
      <MyButton
        onPress={() => {
          setIsPressed(true);
          setConvertedValue(feetInch ? num * 12 : num / 12);
        }}
        title="Convert"
      />

      <MyButton
        onPress={() => {
          setIsPressed(false);
          setNum(0);
          setFeetInch(true);
          setArr(["ft", "inch"]);
        }}
        title="Reset"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default FeetInch;
