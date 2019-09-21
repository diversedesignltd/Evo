import React from "react";
import { ImageBackground, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { userImage, styles } from "../style/stylesheet";
import IconItem from "../components/EventCard/IconItem";
export default class UserScreen extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={["#413F3F", "#419BB9"]}
        style={{
          flex: 1
        }}
      >
        <View style={userImage.container}>
          <ImageBackground
            style={userImage.border}
            source={require("../assets/images/lines.png")}
          >
            <Image
              style={userImage.image}
              source={require("../assets/images/placeholder.jpeg")}
            />
          </ImageBackground>
        </View>
        <View style={userImage.container}>
          <Text style={userImage.userName}>Giovanni D'Amico</Text>
          <View style={styles.Hspace} />
          <View style={styles.Hspace} />
          <IconItem
            name={"ios-home"}
            color={"#FFB266"}
            margin={20}
            text={"Lord Thompson Hall"}
            textColor={"#FFB266"}
            fontSize={24}
            size={30}
          ></IconItem>
          <View style={styles.Hspace} />
          <View style={styles.Hspace} />
          <IconItem
            name={"ios-book"}
            color={"#FFB266"}
            margin={20}
            text={"Computer Science"}
            textColor={"#FFB266"}
            fontSize={24}
            size={30}
          ></IconItem>
          <View style={styles.Hspace} />
          <View style={styles.Hspace} />
          <IconItem
            name={"ios-alarm"}
            color={"#FFB266"}
            margin={20}
            text={"2018/2019"}
            textColor={"#FFB266"}
            fontSize={24}
            size={30}
          ></IconItem>
        </View>
      </LinearGradient>
    );
  }
}

UserScreen.navigationOptions = {
  header: null
};
