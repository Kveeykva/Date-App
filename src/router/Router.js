import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import LoginScreen from "../auth/Login";
import RegisterScreen from "../auth/Register";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FirstScreen from "../auth/FirstScreen";
import PhoneAuthScreen from "../auth/PhoneAuth";
import HomeScreen from "../pages/Home";
import NameSurnameAuthScreen from "../auth/NameSurname";
import MatchScreen from "../pages/Matches";
import MessageScreen from "../pages/Messages";
import ProfileScreen from "../pages/Profile";
import SettingsScreen from "../pages/Settings";
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="First" component={FirstScreen} />
        <Stack.Screen name="PhoneAuth" component={PhoneAuthScreen} />
        <Stack.Screen name="NameSurname" component={NameSurnameAuthScreen} />
        <Stack.Screen name="Matches" component={MatchScreen} />
        <Stack.Screen name="Message" component={MessageScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;
          if (route.name === "HomeTab") {
            iconName = focused ? "ios-home" : "ios-home-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Matches") {
            iconName = focused ? "heart" : "heart-outline";
          } else if (route.name === "Message") {
            iconName = focused ? "mail" : "mail-outline";
          }
          return <Ionicons name={iconName} size={24} color={colors.primary} />;
        },

        tabBarInactiveBackgroundColor: "white",
        tabBarActiveBackgroundColor: "white",
        headerShown: false,
        tabBarShowLabel: false,
      })}
      initialRouteName="HomeTab"
    >
      <Tab.Screen name="Matches" component={MatchScreen} />
      <Tab.Screen name="Message" component={MessageScreen} />
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
export default Router;
