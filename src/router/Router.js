import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import LoginScreen from "../auth/Login";
import RegisterScreen from "../auth/Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FirstScreen from "../auth/FirstScreen";
import PhoneAuthScreen from "../auth/PhoneAuth";
import HomeScreen from "../pages/Home";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="First"
      >
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="PhoneAuth" component={PhoneAuthScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Router;
