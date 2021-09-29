import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SelectDropdown from "react-native-select-dropdown";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { Text } from "react-native-elements";
import { View } from "react-native";

import Title from "./components/Title";
import FeetInch from "./components/FeetInch";
import AreaInFt2 from "./components/AreaInFt2";
import M2ft2 from "./components/M2ft2";
import AreaInM2 from "./components/AreaInM2";

import { writeInPowerInDropDown } from "./utils/writeInPower";

export default function App() {
  const types = ["Feet - Inch", "m^2 - ft^2", "Area in ft^2", "Area in m^2"];
  const [type, setType] = useState("Feet - Inch");

  const renderAccordingToType = () => {
    switch (type) {
      case "Feet - Inch":
        return <FeetInch />;
      case "m^2 - ft^2":
        return <M2ft2 />;
      case "Area in ft^2":
        return <AreaInFt2 />;
      case "Area in m^2":
        return <AreaInM2 />;
    }
  };

  const renderIcon = () => {
    return <Icon name="arrow-drop-down" type="MaterialIcons" size={30} />;
  };

  return (
    <SafeAreaProvider style={{ backgroundColor: "#778899" }}>
      <KeyboardAwareScrollView>
        <Title />
        <SelectDropdown
          buttonStyle={{
            backgroundColor: "#B0C4DE",
            borderRadius: 5,
            width: 241,
            marginTop: 28,
            height: 46,
            alignSelf: "center",
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 1,
            shadowRadius: 5,
            elevation: 10,
          }}
          buttonTextStyle={{
            fontSize: 24,
          }}
          renderCustomizedButtonChild={(selectedItem, index) => {
            if (selectedItem === "m^2 - ft^2")
              return (
                <View
                  style={{
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  {writeInPowerInDropDown("m", "2")}
                  <Text style={{ textAlign: "center", fontSize: 20 }}>
                    {" - "}
                  </Text>
                  {writeInPowerInDropDown("ft", "2")}
                </View>
              );
            if (selectedItem === "Area in ft^2")
              return (
                <View
                  style={{
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ textAlign: "center", fontSize: 20 }}>
                    {"Area in "}
                  </Text>
                  {writeInPowerInDropDown("ft", "2")}
                </View>
              );
            if (selectedItem === "Area in m^2")
              return (
                <View
                  style={{
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ textAlign: "center", fontSize: 20 }}>
                    {"Area in "}
                  </Text>
                  {writeInPowerInDropDown("m", "2")}
                </View>
              );
            return (
              <Text style={{ textAlign: "center", fontSize: 20 }}>
                {selectedItem}
              </Text>
            );
          }}
          renderCustomizedRowChild={(item, index) => {
            if (item === "m^2 - ft^2")
              return (
                <View
                  style={{
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  {writeInPowerInDropDown("m", "2")}
                  <Text style={{ textAlign: "center", fontSize: 20 }}>
                    {" - "}
                  </Text>
                  {writeInPowerInDropDown("ft", "2")}
                </View>
              );
            if (item === "Area in ft^2")
              return (
                <View
                  style={{
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ textAlign: "center", fontSize: 20 }}>
                    {"Area in "}
                  </Text>
                  {writeInPowerInDropDown("ft", "2")}
                </View>
              );
            if (item === "Area in m^2")
              return (
                <View
                  style={{
                    justifyContent: "center",
                    flexDirection: "row",
                  }}
                >
                  <Text style={{ textAlign: "center", fontSize: 20 }}>
                    {"Area in "}
                  </Text>
                  {writeInPowerInDropDown("m", "2")}
                </View>
              );
            return (
              <Text style={{ textAlign: "center", fontSize: 20 }}>{item}</Text>
            );
          }}
          renderDropdownIcon={() => renderIcon()}
          statusBarTranslucent={true}
          dropdownStyle={{ backgroundColor: "#B0B4DE", borderRadius: 5 }}
          data={types}
          onSelect={(selectedItem, index) => {
            setType(selectedItem);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          defaultValue={types[0]}
        />
        {renderAccordingToType()}
      </KeyboardAwareScrollView>
    </SafeAreaProvider>
  );
}
