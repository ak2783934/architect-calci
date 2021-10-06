import React from "react";
import { View, TextInput } from "react-native";
import { Text } from "react-native-elements";

const MyInputWithMarginTop = ({ onChangeText, value, tagValue }) => {
  return (
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
        onChangeText={onChangeText}
        maxLength={10}
        value={value}
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
        {tagValue}
      </Text>
    </View>
  );
};

export default MyInputWithMarginTop;
