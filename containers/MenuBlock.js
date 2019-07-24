import React from "react";
import { View } from "react-native";
import ItemCard from "../components/ItemCard";
import { styles } from "../style/stylesheet";

export default class MenuBlock extends React.Component {
  renderCards = () => {
    return this.props.EventCards.edges
      .map(edge => edge.node)
      .map(Card => {
        return (
          <ItemCard
            {...Card}
            key={Card.id}
            category={Card.category}
            navigation={this.props.navigation}
          />
        );
      });
  };

  componentDidMount() {
    console.log(this.context);
  }

  render() {
    return <View style={styles.Categorycontainer}>{this.renderCards()}</View>;
  }
}
