import React from "react";
import { ScrollView, View } from "react-native";
import CategoryPickerItem from "./CategoryPickerItem";
import { styles, colors } from "../../style/stylesheet";

export default class CategoryPicker extends React.Component {
  scroll = selected => {
    this.scrollview.scrollTo({ x: 120 * selected });
  };

  render() {
    return (
      <View>
        <ScrollView
          ref={scrollview => {
            this.scrollview = scrollview;
          }}
          style={styles.CategoryPicker}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <CategoryPickerItem
            scroll={this.scroll}
            addToState={this.props.addToState}
            removeFromState={this.props.removeFromState}
            text="Student Union"
            index={0}
            color={colors.Student_union_color}
          />
          <CategoryPickerItem
            scroll={this.scroll}
            text="Students"
            addToState={this.props.addToState}
            removeFromState={this.props.removeFromState}
            index={1}
            color={colors.Students_color}
          />
          <CategoryPickerItem
            scroll={this.scroll}
            addToState={this.props.addToState}
            removeFromState={this.props.removeFromState}
            text="Chaplaincy"
            index={2}
            color={colors.Chaplaincy_color}
          />
          <CategoryPickerItem
            scroll={this.scroll}
            addToState={this.props.addToState}
            removeFromState={this.props.removeFromState}
            text="University"
            index={3}
            color={colors.University_color}
          />
        </ScrollView>
      </View>
    );
  }
}
