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
  }

  changeColor = () => {
    if (this.state.background === this.props.color) {
      this.props.removeFromState(this.props.index);
    } else {
      this.props.addToState(this.props.index);
    }
    this.props.scroll(this.props.index);
    this.setState(state => ({
      background:
        state.background === this.props.color ? white : this.props.color,
      color: state.color === white ? black : white
    }));
  };

  render() {
    return (
      <TouchableOpacity onPress={this.changeColor}>
        <View
          style={{
            borderColor: "#707070",
            backgroundColor: this.state.background,
            borderBottomRightRadius: 25,
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            height: 75,
            width: "auto",
            margin: 5
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                margin: 8,
                textAlign: "center",
                marginTop: 2,
                color: this.state.color,
                fontSize: 25
              }}
            >
              {this.props.text}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
