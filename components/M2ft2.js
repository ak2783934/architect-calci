import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput } from "react-native";
import { Text, Image } from "react-native-elements";

const M2ft2 = () => {
  const [area, setArea] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const [m2, setM2] = useState(true);
  const [arr, setArr] = useState(["m^2", "ft^2"]);
  const [convertedValue, setConvertedValue] = useState(0);

  return (
    <View style={{ marginTop: 71 }}>
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
            setArea(value);
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
          {arr[0]}
        </Text>
      </View>

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
      <View
        style={{
          flexDirection: "row",
          marginTop: 21,
          width: 273,
          height: 48,
          alignSelf: "center",
        }}
      >
        <View
          style={{
            alignItems: "center",
            backgroundColor: "#CACACA",
            height: 48,
            width: 208,
            borderBottomLeftRadius: 5,
            borderTopLeftRadius: 5,
            paddingTop: 5,
          }}
        >
          {isPressed && <Text style={{ fontSize: 24 }}>{convertedValue}</Text>}
        </View>
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
          {arr[1]}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setIsPressed(true);
          setConvertedValue(m2 ? area * 10.7639 : area / 10.7639);
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
          setIsPressed(false);
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

export default M2ft2;
