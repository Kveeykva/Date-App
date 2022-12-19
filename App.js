import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Router from "./src/router/Router";

const App = () => (
  <View style={{ flex: 1 }}>
    <StatusBar style="light" translucent={false} />

    <Router />
  </View>
);

export default App;
