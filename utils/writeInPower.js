import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";

export const writeInPower = (base, exponent) => (
  <View style={{ flexDirection: "row" }}>
    <Text style={{ fontSize: 24, textAlign: "center" }}>{base}</Text>
    <Text style={{ fontSize: 16, textAlign: "center" }}>{exponent}</Text>
  </View>
);

export const writeInPowerInDropDown = (base, exponent) => (
  <View style={{ flexDirection: "row" }}>
    <Text style={{ fontSize: 20, textAlign: "center" }}>{base}</Text>
    <Text style={{ fontSize: 14, textAlign: "center" }}>{exponent}</Text>
  </View>
);
