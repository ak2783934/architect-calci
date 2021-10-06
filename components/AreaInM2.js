import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { writeInPower } from "../utils/writeInPower";
import FinalValue from "../OptimizedComponents/FinalValue";
import MyInput from "../OptimizedComponents/MyInput";
import MyButton from "../OptimizedComponents/MyButton";

const AreaInM2 = () => {
  const [length, setLength] = useState(0);
  const [breadth, setBreadth] = useState(0);
  const [clicked, setClicked] = useState(false);
  const [calculatedValue, setCalculatedValue] = useState(0);

  return (
    <View style={{ marginTop: 37 }}>
      <Text
        style={{
          fontSize: 24,
          marginBottom: 4,
          marginLeft: 78,
        }}
      >
        Length
      </Text>

      <MyInput
        onChangeText={(value) => {
          setLength(value);
        }}
        value={length}
        tagValue="m"
      />

      <Text
        style={{
          fontSize: 24,
          marginBottom: 4,
          marginLeft: 78,
          marginTop: 18,
        }}
      >
        Breadth
      </Text>

      <MyInput
        onChangeText={(value) => {
          setBreadth(value);
        }}
        value={breadth}
        tagValue="m"
      />

      <Text
        style={{
          fontSize: 24,
          marginBottom: 4,
          marginLeft: 78,
          marginTop: 18,
        }}
      >
        Area
      </Text>

      <FinalValue
        isPressed={clicked}
        convertedValue={calculatedValue}
        tagValue={writeInPower("m", "2")}
      />

      <MyButton
        onPress={() => {
          setClicked(true);
          setCalculatedValue(length * breadth);
        }}
        title="Convert"
      />

      <MyButton
        onPress={() => {
          setClicked(false);
          setLength(0);
          setBreadth(0);
        }}
        title="Reset"
      />
    </View>
  );
};

export default AreaInM2;
