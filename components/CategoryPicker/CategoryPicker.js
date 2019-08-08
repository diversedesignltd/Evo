import React from "react";
import { ScrollView, View } from "react-native";
import CategoryPickerItem from "./CategoryPickerItem";
import { styles, colors } from "../../style/stylesheet";

export default class CategoryPicker extends React.Component {
  constructor() {
    super();
    this.state = {
      StudentUnionValue: true,
      StudentsValue: true,
      ChaplaincyValue: true,
      UniversityValue: true
    };
  }

  toggleStudentUnionValue = () => {
    this.state.StudentUnionValue = !this.state.StudentUnionValue;
  };

  render() {
    return (
      <View>
        <View style={styles.Hspace} />
        <View style={styles.Hspace} />
        <ScrollView style={styles.CategoryPicker} horizontal={true}>
          <CategoryPickerItem
            text={"Student Union"}
            color={colors.Student_union_color}
          />
          <CategoryPickerItem text={"Students"} color={colors.Students_color} />
          <CategoryPickerItem
            text={"Chaplaincy"}
            color={colors.Chaplaincy_color}
          />
          <CategoryPickerItem
            text={"University"}
            color={colors.University_color}
          />
        </ScrollView>
      </View>
    );
  }
}
