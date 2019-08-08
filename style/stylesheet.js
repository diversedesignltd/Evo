import { StyleSheet } from "react-native";

export const colors = {
  Student_union_color: "#42BCC1",
  Students_color: "#705077",
  Chaplaincy_color: "#2B2B2B",
  University_color: "#1393F2"
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6F6F6F"
  },
  CategoryPicker: {
    margin: 10
  },
  Linkscontainer: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  Hspace: {
    height: 5
  },
  ItemContainer: {
    flex: 1,
    flexDirection: "column",
    margin: 10,
    height: 250
  },
  ItemTitle: {
    marginTop: 20,
    marginRight: 20,
    marginBottom: 5,
    fontSize: 25,
    textAlign: "right",
    fontWeight: "bold",
    color: "white"
  },
  ItemLocation: {
    textAlign: "right",
    fontSize: 20,
    marginRight: 20,
    color: "white"
  },
  ItemInfo: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  ItemAttending: {
    position: "absolute",
    bottom: 0
  },
  col: {
    flexDirection: "column"
  }
});
