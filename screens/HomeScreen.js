import React from "react";
import { View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Feet/Inch-Meter/Cms convertor"
        onPress={() => navigation.navigate("FeetInchMeterCm")}
      />
      <Button
        title="Kilo/Grams-Pound/Ounces convertor"
        onPress={() => navigation.navigate("KiloGramsPoundOunces")}
      />
    </View>
  );
};

export default HomeScreen;
