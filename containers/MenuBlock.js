import React from "react";
import { View } from "react-native";
import ItemCard from "../components/EventCard";
import { styles } from "../style/stylesheet";
/* eslint-disable radix */
export default class MenuBlock extends React.Component {
  renderCards = () => {
    return this.props.EventCards.edges
      .filter(edge => this.props.categories.includes(parseInt(edge.node.id)))
      .map(edge => edge.node)
      .map((Card, index) => {
        return (
          <ItemCard
            id={index}
            key={Card.id}
            scroll={this.props.scroll}
            Card={Card}
            navigation={this.props.navigation}
          />
        );
      });
  };

  componentDidMount() {}

  render() {
    return <View style={styles.Categorycontainer}>{this.renderCards()}</View>;
  }
}
