import React from "react";
import { ImageBackground, View, Text, TouchableOpacity } from "react-native";
import { styles } from "../../style/stylesheet";
import IconItem from "./IconItem";
import Attending from "./Attending";

export default class ItemCard extends React.Component {
  constructor(props) {
    super();
    if (props) {
      const type = props.category;
      if (type === "chaplaincy") {
        this.state = {
          require: require("../../assets/images/chaplaincy_card.png")
        };
      } else if (type === "university") {
        this.state = {
          require: require("../../assets/images/university_card.png")
        };
      } else if (type === "union") {
        this.state = { require: require("../../assets/images/union_card.png") };
      } else {
        this.state = {
          require: require("../../assets/images/student_card.png")
        };
      }
    }
  }

  render() {
    return (
      <TouchableOpacity
        style={{ height: 250 }}
        onPress={() => {
          this.props.navigation.navigate("Item", {
            item: this.props,
            bg: this.props.category,
            transition: "collapseTransition"
          });
          this.props.scroll(this.props.id);
        }}
      >
        <ImageBackground
          style={styles.ItemContainer}
          source={this.state.require}
        >
          <Text style={styles.ItemTitle}> {this.props.name}</Text>
          <Text style={styles.ItemLocation}>
            <Text style={{ fontSize: 20 }}>@ </Text>
            <Text>{this.props.location}</Text>
          </Text>
          <View style={styles.ItemInfo}>
            <IconItem name="ios-calendar" color="#F0EA8C" text="24/10" />
            <IconItem name="ios-time" color="#F0EA8C" text="20:30" />
          </View>
          <View style={styles.ItemAttending}>
            <Attending color="#F0EA8C" number={122} />
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}
