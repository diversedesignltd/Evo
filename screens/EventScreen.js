import React from "react";
import { styles } from "../style/stylesheet";
import { width } from "../constants/Layout";
import Slider from "react-native-slide-to-unlock";
import { ImageBackground, ScrollView, View, Text, Image } from "react-native";
import IconItem from "../components/EventCard/IconItem";

export default class EventScreen extends React.Component {
  state = {
    Card: {}
  };

  componentDidMount() {
    this.setState({ Card: this.props.navigation.getParam("item") });
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#1393F2" }}>
        <Image source={require("../assets/images/image-slide.png")}></Image>
        <ImageBackground
          source={require("../assets/images/lollo22.png")}
          style={{
            width: width + 40,
            height: 200,
            marginTop: -120,
            marginLeft: -30
          }}
        >
          <Slider
            onEndReached={() => {
              alert("Attention", "onEndReached!");
            }}
            containerStyle={{
              transform: [{ rotateZ: "-6deg" }],
              margin: 8,
              width: width,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center"
            }}
            sliderElement={
              <Image
                style={{
                  width: 50,
                  marginLeft: 20,
                  borderRadius: 5,
                  marginTop: 30,
                  height: 50
                }}
                source={require("../assets/images/button.png")}
              />
            }
          >
            <Text
              style={{
                marginTop: 30,
                marginLeft: 30,
                fontSize: 24,
                color: "white"
              }}
            >
              {"SLIDE TO JOIN"}
            </Text>
          </Slider>
        </ImageBackground>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            marginTop: -90,
            height: 60,
            backgroundColor: "#41A8F5"
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontSize: 25,
              margin: 10,
              color: "#F0EA8C"
            }}
          >
            {this.state.Card.name}
          </Text>
        </View>
        <View style={styles.cardShapeL}>
          <View style={styles.ItemInfoCard}>
            <IconItem name="ios-calendar" color="#F0EA8C" text="24/10" />
            <IconItem name="ios-time" color="#F0EA8C" text="20:30" />
          </View>
          <View style={styles.Hspace} />
          <View style={styles.Hspace} />
          <Text style={styles.ItemLocationCard}>
            <Text style={{ fontSize: 20 }}>@ </Text>
            <Text>{this.state.Card.location}</Text>
          </Text>
          <View style={styles.cardShapeS}>
            <Text style={styles.description}>
              {" "}
              sBla bla bla Bla bla bla Bla bla bla Bla bla blaBla bla blaBla bla
              bla{" "}
            </Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
