import React from "react";
import { ScrollView } from "react-native";
import MenuBlock from "../containers/MenuBlock";
import { props } from "../dummy/dummy";
import { styles } from "../style/stylesheet";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <MenuBlock {...props} navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null
};
