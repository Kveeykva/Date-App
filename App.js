import React from "react";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Router from "./src/router/Router";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import Toast from "react-native-toast-message";

const App = () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <StatusBar
        style="dark"
        backgroundColor="transparent"
        translucent={true}
      />
      <Toast />
      <Router />
    </View>
  </Provider>
);

export default App;
