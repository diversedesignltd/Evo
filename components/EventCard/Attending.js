import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";

export default class Attending extends React.Component {
  render() {
    return (
      <View
        style={{ flexDirection: "column", marginLeft: 20, marginBottom: 30 }}
      >
        <Icon
          size={60}
          iconStyle={{ marginRight: 30 }}
          color={this.props.color}
          name="ios-people"
          type="ionicon"
        />
        <Text style={{ marginTop: -10, color: "white", fontSize: 15 }}>
          {this.props.number} Attending
        </Text>
      </View>
    );
  }
}
