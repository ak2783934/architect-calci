import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native-elements";

const Title = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#4682B4",
          color: "#fff",
          height: 79,
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/applogo.png")}
          style={{
            width: 50,
            height: 50,
            marginLeft: 18,
            marginRight: 25,
          }}
        />
        <Text
          style={{
            fontSize: 36,
          }}
        >
          Architect Calci
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Title;
