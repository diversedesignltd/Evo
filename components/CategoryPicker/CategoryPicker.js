import React from "react";
import { ScrollView, View } from "react-native";
import CategoryPickerItem from "./CategoryPickerItem";
import { styles, colors } from "../../style/stylesheet";

export default class CategoryPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [0, 1, 2, 3]
    };
  }

  addToState = selected => {
    this.setState({ selected: [...this.state.selected, selected] });
  };

  removeFromState = selected => {
    this.setState({
      selected: this.state.selected.filter(i => i !== selected)
    });
  };

  render() {
    return (
      <View>
        <View style={styles.Hspace} />
        <View style={styles.Hspace} />
        <ScrollView
          style={styles.CategoryPicker}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <CategoryPickerItem
            addToState={this.addToState}
            removeFromState={this.removeFromState}
            text={"Student Union"}
            index={0}
            color={colors.Student_union_color}
          />
          <CategoryPickerItem
            text={"Students"}
            addToState={this.addToState}
            removeFromState={this.removeFromState}
            index={1}
            color={colors.Students_color}
          />
          <CategoryPickerItem
            addToState={this.addToState}
            removeFromState={this.removeFromState}
            text={"Chaplaincy"}
            index={2}
            color={colors.Chaplaincy_color}
          />
          <CategoryPickerItem
            addToState={this.addToState}
            removeFromState={this.removeFromState}
            text={"University"}
            index={3}
            color={colors.University_color}
          />
        </ScrollView>
      </View>
    );
  }
}
