import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { Text } from "react-native-elements";
import { writeInPower } from "../utils/writeInPower";
import FinalValue from "../OptimizedComponents/FinalValue";

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
      <View
        style={{
          flexDirection: "row",
          width: 273,
          height: 48,
          alignSelf: "center",
        }}
      >
        <TextInput
          style={{
            height: 48,
            width: 208,
            backgroundColor: "white",
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5,
            padding: 10,
            fontSize: 20,
          }}
          maxLength={5}
          value={lengthFt}
          onChangeText={(value) => {
            setLengthFt(value);
          }}
          keyboardType="numeric"
        />
        <Text
          style={{
            backgroundColor: "#B0C4DE",
            padding: 5,
            width: 65,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            fontSize: 24,
            textAlign: "center",
          }}
        >
          ft
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: 273,
          height: 48,
          alignSelf: "center",
          marginTop: 12,
        }}
      >
        <TextInput
          style={{
            height: 48,
            width: 208,
            backgroundColor: "white",
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5,
            padding: 10,
            fontSize: 20,
          }}
          onChangeText={(value) => {
            setLengthIn(value);
          }}
          value={lengthIn}
          maxLength={5}
          keyboardType="numeric"
        />
        <Text
          style={{
            backgroundColor: "#B0C4DE",
            padding: 5,
            width: 65,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            fontSize: 24,
            textAlign: "center",
          }}
        >
          in
        </Text>
      </View>

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
      <View
        style={{
          flexDirection: "row",
          width: 273,
          height: 48,
          alignSelf: "center",
        }}
      >
        <TextInput
          style={{
            height: 48,
            width: 208,
            backgroundColor: "white",
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5,
            padding: 10,
            fontSize: 20,
          }}
          onChangeText={(value) => {
            setBreadthFt(value);
          }}
          maxLength={5}
          value={breadthFt}
          keyboardType="numeric"
        />
        <Text
          style={{
            backgroundColor: "#B0C4DE",
            padding: 5,
            width: 65,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            fontSize: 24,
            textAlign: "center",
          }}
        >
          ft
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: 273,
          height: 48,
          alignSelf: "center",
          marginTop: 12,
        }}
      >
        <TextInput
          style={{
            height: 48,
            width: 208,
            backgroundColor: "white",
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5,
            padding: 10,
            fontSize: 20,
          }}
          onChangeText={(value) => {
            setBreadthIn(value);
          }}
          maxLength={5}
          value={breadthIn}
          keyboardType="numeric"
        />
        <Text
          style={{
            backgroundColor: "#B0C4DE",
            padding: 5,
            width: 65,
            borderTopRightRadius: 5,
            borderBottomRightRadius: 5,
            fontSize: 24,
            textAlign: "center",
          }}
        >
          in
        </Text>
      </View>

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

      <TouchableOpacity
        onPress={() => {
          setClicked(true);
          setCalculatedValue(
            (lengthFt + lengthIn / 12) * (breadthFt + breadthIn / 12)
          );
        }}
        style={{
          backgroundColor: "#B0C4DE",
          alignItems: "center",
          width: 273,
          height: 44,
          marginTop: 28,
          borderRadius: 5,
          paddingTop: 4,
          alignSelf: "center",
        }}
      >
        <Text style={{ fontSize: 24 }}>Convert</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setClicked(false);
          setLengthIn(0);
          setLengthFt(0);
          setBreadthFt(0);
          setBreadthIn(0);
        }}
        style={{
          backgroundColor: "#B0C4DE",
          alignItems: "center",
          width: 273,
          height: 44,
          marginTop: 21,
          borderRadius: 5,
          paddingTop: 4,
          alignSelf: "center",
        }}
      >
        <Text style={{ fontSize: 24 }}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default AreaInFt2;
