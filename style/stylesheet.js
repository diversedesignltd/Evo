import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6F6F6F"
  },
  Linkscontainer: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  Hspace: {
    height: 5
  },
  FoodItemContainer: {
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
  FoodItemPrice: {
    textAlign: "right",
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 5,
    color: "white",
    fontWeight: "bold"
  },
  ItemAttending: {
    position: "absolute",
    bottom: 0
  },
  col: {
    flexDirection: "column"
  }
});
