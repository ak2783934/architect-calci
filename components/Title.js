import React from "react";
import { StyleSheet, View, Text } from "react-native";
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
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../assets/applogo.png")}
          style={{ width: 50, height: 50, marginRight: 10 }}
        />
        <Text
          style={{
            fontSize: 36,
            textAlign: "center",
          }}
        >
          Architect Calci
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    backgroundColor: "#4682B4",
    color: "#fff",
    height: 79,
    fontSize: 36,
    textAlign: "center",
    paddingTop: 10,
  },
});

export default Title;
