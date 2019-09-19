import React from "react";
import { View, Text } from "react-native";
import { styles, colors } from "../style/stylesheet";
export default class EventScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors[this.props.navigation.getParam("bg")]
        }}
      >
        <Text>Hello World</Text>
      </View>
    );
  }
}
