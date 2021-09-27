import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FeetInchMeterCmScreen from "./screens/FeetInchMeterCmScreen";
import HomeScreen from "./screens/HomeScreen";
import KiloGramsPoundOuncesScreen from "./screens/KiloGramsPoundOuncesScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="FeetInchMeterCm"
          component={FeetInchMeterCmScreen}
          options={{ title: "Feet/Inch - Meter/Cms" }}
        />
        <Stack.Screen
          name="KiloGramsPoundOunces"
          component={KiloGramsPoundOuncesScreen}
          options={{ title: "Kilo/Grams - Pound/Ounces" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
