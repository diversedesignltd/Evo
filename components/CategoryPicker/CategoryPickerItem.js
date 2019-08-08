import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

const white = "#ffffff";
const black = "black";

export default class CategoryPickerItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      background: props.color,
      color: white
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    const background =
      this.state.background == this.props.color ? white : this.props.color;
    const color = this.state.color == white ? black : white;
    this.setState({ background, color });
  }

  render() {
    return (
      <TouchableOpacity onPress={this.changeColor}>
        <View
          style={{
            borderColor: "#707070",
            backgroundColor: this.state.background,
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
              color: this.state.color
            }}
          >
            {this.props.text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}
