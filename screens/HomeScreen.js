import React from "react";
import { ScrollView } from "react-native";
import MenuBlock from "../containers/MenuBlock";
import CategoryPicker from "../components/CategoryPicker";
import { props } from "../dummy/dummy";
import { styles } from "../style/stylesheet";
import { LinearGradient } from "expo-linear-gradient";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.addToState = this.updateState.bind(this);
    this.state = {
      selected: []
    };
  }

  updateState = selected => {
    console.log(selected);
    this.setState({ selected: selected });
  };

  render() {
    return (
      <LinearGradient
        colors={["#413F3F", "#419BB9"]}
        style={{
          flex: 1
        }}
      >
        <ScrollView>
          <CategoryPicker updateState={this.updateState} />
          <MenuBlock {...props} navigation={this.props.navigation} />
        </ScrollView>
      </LinearGradient>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null
};
