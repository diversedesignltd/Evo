import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import AppNavigator from "./navigation/AppNavigator";

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>
  );
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
      require("./assets/images/chaplaincy_card.png"),
      require("./assets/images/student_card.png"),
      require("./assets/images/union_card.png"),
      require("./assets/images/university_card.png"),
      require("./assets/images/chaplaincy_card.png")
    ])
  ]);
}

function handleLoadingError(error: Error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
