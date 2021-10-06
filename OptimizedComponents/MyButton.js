import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";

const MyButton = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
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
      <Text style={{ fontSize: 24 }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;
