import React from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";

export default class IconItem extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: "row", marginRight: 20 }}>
        <Icon
          containerStyle={{
            marginRight:
              this.props.margin === undefined ? 10 : this.props.margin
          }}
          size={this.props.size === undefined ? 25 : this.props.size}
          color={this.props.color}
          name={this.props.name}
          type="ionicon"
        />
        <Text
          style={{
            color:
              this.props.textColor === undefined
                ? "white"
                : this.props.textColor,
            fontSize:
              this.props.fontSize === undefined ? 17 : this.props.fontSize,
            marginTop: 2.5
          }}
        >
          {this.props.text}
        </Text>
      </View>
    );
  }
}
