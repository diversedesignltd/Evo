import React from "react";
import { Animated, Easing, Platform } from "react-native";

import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import EventScreen from "../screens/EventScreen";

let CollapseTransition = (index, position) => {
  const opacity = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [0, 1, 1]
  });

  const scaleY = position.interpolate({
    inputRange: [index - 1, index, index + 1],
    outputRange: [0, 1, 1]
  });

  return {
    opacity,
    transform: [{ scaleY }]
  };
};

const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(9)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
      const { position, scene } = sceneProps;
      const { index, route } = scene;
      const params = route.params || {}; // <- That's new
      const transition = params.transition || "default"; // <- That's new
      return {
        collapseTransition: CollapseTransition(index, position)
      }[transition];
    }
  };
};

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Item: { screen: EventScreen }
  },
  {
    initialRouteName: "Home",
    headerMode: "screen",
    transitionConfig: TransitionConfiguration
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-information-circle"
      }
    />
  )
};

HomeStack.path = "";

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: "Links",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
    />
  )
};

LinksStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-options"}
    />
  )
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack
});

tabNavigator.path = "";

export default tabNavigator;
