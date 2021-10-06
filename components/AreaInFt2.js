import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { writeInPower } from "../utils/writeInPower";
import FinalValue from "../OptimizedComponents/FinalValue";
import MyInput from "../OptimizedComponents/MyInput";
import MyInputWithMarginTop from "../OptimizedComponents/MyInputWithMarginTop";
import MyButton from "../OptimizedComponents/MyButton";

const AreaInFt2 = () => {
  const [lengthIn, setLengthIn] = useState(0);
  const [lengthFt, setLengthFt] = useState(0);
  const [breadthIn, setBreadthIn] = useState(0);
  const [breadthFt, setBreadthFt] = useState(0);
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
          setLengthFt(value);
        }}
        value={lengthFt}
        tagValue="ft"
      />
      <MyInputWithMarginTop
        onChangeText={(value) => {
          setLengthIn(value);
        }}
        value={lengthIn}
        tagValue="in"
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
          setBreadthFt(value);
        }}
        value={breadthFt}
        tagValue="ft"
      />
      <MyInputWithMarginTop
        onChangeText={(value) => {
          setBreadthIn(value);
        }}
        value={breadthIn}
        tagValue="in"
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
        tagValue={writeInPower("ft", "2")}
      />

      <MyButton
        onPress={() => {
          setClicked(true);
          setCalculatedValue(
            (lengthFt + lengthIn / 12) * (breadthFt + breadthIn / 12)
          );
        }}
        title="Convert"
      />

      <MyButton
        onPress={() => {
          setClicked(false);
          setLengthIn(0);
          setLengthFt(0);
          setBreadthFt(0);
          setBreadthIn(0);
        }}
        title="Reset"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AreaInFt2;
