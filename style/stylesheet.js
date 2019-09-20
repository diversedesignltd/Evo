import { StyleSheet } from "react-native";

export const colors = {
  Student_union_color: "#42BCC1",
  Students_color: "#705077",
  Chaplaincy_color: "#2B2B2B",
  University_color: "#1393F2"
};

export const styles = StyleSheet.create({
  cardShapeL: {
    height: 300,
    borderBottomRightRadius: 25,
    backgroundColor: "#5A88AA"
  },
  cardShapeS: {
    height: 200,
    margin: 10,
    borderBottomRightRadius: 25,
    backgroundColor: "#41A8F5"
  },
  description: {
    margin: 10,
    color: "white",
    fontSize: 18
  },
  h1: {
    fontSize: 25,
    margin: 10
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
  ItemLocationCard: {
    textAlign: "left",
    fontSize: 20,
    marginLeft: 10,
    color: "white"
  },
  ItemInfoCard: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 10
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
