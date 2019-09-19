import { StyleSheet } from "react-native";

export const colors = {
  union: "#42BCC1",
  student: "#705077",
  chaplaincy: "#2B2B2B",
  university: "#1393F2"
};

export const styles = StyleSheet.create({
  h1: {
    fontSize: 30
  },
  container: {
    flex: 1
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
    height: 15
  },
  ItemContainer: {
    flex: 1,
    flexDirection: "column",
    margin: 5,
    height: 230
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
    bottom: 0,
    left: -10
  },
  col: {
    flexDirection: "column"
  }
});
