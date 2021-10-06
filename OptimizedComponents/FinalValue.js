import React from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";

const FinalValue = ({ isPressed, convertedValue, tagValue }) => {
  return (
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
        {isPressed && (
          <Text style={{ fontSize: 24 }}>{convertedValue.toFixed(2)}</Text>
        )}
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
        {tagValue}
      </Text>
    </View>
  );
};

export default FinalValue;
