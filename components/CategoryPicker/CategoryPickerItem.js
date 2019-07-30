import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const CategoryPickerItem = ({ color, text, isOn, handleToggle }) => {
  return (
    <TouchableOpacity onPress={handleToggle}>
      <View
        style={{
          borderColor: "#707070",
          background: isOn && color,
          borderRadius: 25,
          height: 25,
          width: "auto",
          margin: 5
        }}
      >
        <Text
          style={{
            margin: 8,
            textAlign: "center",
            marginTop: 2,
            color: "white"
          }}
        >
          {(isOn && "true") || "false"}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryPickerItem;
