import React from "react";
import { styles } from "../style/stylesheet";
import { ScrollView, View, Text, Image } from "react-native";
import IconItem from "../components/EventCard/IconItem";
export default class EventScreen extends React.Component {
  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: "#1393F2" }}>
        <Image source={require("../assets/images/image-slide.png")}></Image>
        <Image
          source={require("../assets/images/lollo22.png")}
          style={{ marginTop: -120, marginLeft: -20 }}
        ></Image>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            marginTop: -100,
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
            Invade The Union
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
            <Text>Zero's, Student Union</Text>
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
