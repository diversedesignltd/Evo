import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../style/stylesheet";
export default class UserScreen extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={["#413F3F", "#419BB9"]}
        style={{
          flex: 1
        }}
      >
        <View style={styles.container}>
          <Image source={require("../assets/images/lines.png")} />
          <Image
            style={{ borderRadius: 50 }}
            source={require("../assets/images/placeholder.jpeg")}
          />
        </View>
      </LinearGradient>
    );
  }
}

UserScreen.navigationOptions = {
  header: null
};
