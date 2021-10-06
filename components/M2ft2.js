import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { Image } from "react-native-elements";
import { writeInPower } from "../utils/writeInPower";
import FinalValue from "../OptimizedComponents/FinalValue";
import MyInput from "../OptimizedComponents/MyInput";
import MyButton from "../OptimizedComponents/MyButton";

const M2ft2 = () => {
  const [area, setArea] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const [m2, setM2] = useState(true);

  const [arr, setArr] = useState([
    { base: "m", exponent: "2" },
    { base: "ft", exponent: "2" },
  ]);
  const [convertedValue, setConvertedValue] = useState(0);

  return (
    <View style={{ marginTop: 71 }}>
      <MyInput
        onChangeText={(value) => {
          setArea(value);
        }}
        value={area}
        tagValue={writeInPower(arr[0].base, arr[0].exponent)}
      />

      <TouchableOpacity
        onPress={() => {
          setM2(!m2);
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
        tagValue={writeInPower(arr[1].base, arr[1].exponent)}
      />

      <MyButton
        onPress={() => {
          setIsPressed(true);
          setConvertedValue(m2 ? area * 10.7639 : area / 10.7639);
        }}
        title="Convert"
      />

      <MyButton
        onPress={() => {
          setIsPressed(false);
          setArea(0);
          setM2(true);
          setArr([
            { base: "m", exponent: "2" },
            { base: "ft", exponent: "2" },
          ]);
        }}
        title="Reset"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default M2ft2;
