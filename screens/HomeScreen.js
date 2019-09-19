import React from "react";
import { ScrollView, Text } from "react-native";
import MenuBlock from "../containers/MenuBlock";
import CategoryPicker from "../components/CategoryPicker";
import { props } from "../dummy/dummy";
import { styles } from "../style/stylesheet";

export default class HomeScreen extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
      selected: [0, 1, 2, 3]
    };
  }

  addToState = selected => {
    this.setState(state => ({ selected: [...state.selected, selected] }));
  };

  removeFromState = selected => {
    this.setState(state => ({
      selected: state.selected.filter(i => i !== selected)
    }));
  };

  render() {
    return (
      <ScrollView>
        <Text styles={styles.h1}>Sort the category of events </Text>
        <CategoryPicker
          addToState={this.addToState}
          removeFromState={this.removeFromState}
        />
        <MenuBlock
          {...props}
          categories={this.state.selected}
          navigation={this.props.navigation}
        />
      </ScrollView>
    );
  }
}

HomeScreen.navigationOptions = {
  header: null
};
