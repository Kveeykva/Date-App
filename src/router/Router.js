import { NavigationContainer, useNavigation } from "@react-navigation/native";
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
import EditProfileScreen from "../pages/EditProfile";
import { Ionicons } from "@expo/vector-icons";
import colors from "../colors";
import EditProfileAttribute from "../pages/EditProfile/editProfile";
import SettingsScreenAttribute from "../pages/Settings/settingsPageAttribute";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Router = (props) => {
  const title = props.title;
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Home"
          component={HomeTabs}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="First"
          component={FirstScreen}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="PhoneAuth"
          component={PhoneAuthScreen}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="NameSurname"
          component={NameSurnameAuthScreen}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen name="Matches" component={MatchScreen} />
        <Stack.Screen name="Message" component={MessageScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />

        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: true,
            title: "Ayarlar",
            animation: "slide_from_right",
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="SettingsAttributes"
          component={SettingsScreenAttribute}
          options={({ route }) => ({
            title: route.params.headerTitle,
            headerShown: true,
            animation: "slide_from_right",
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          })}
        />
        <Stack.Screen
          name="EditUserProfile"
          component={EditProfileScreen}
          options={{
            headerShown: true,
            title: "Profili Düzenle",
            animation: "slide_from_right",
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          }}
        />

        <Stack.Screen
          name="EditProfileAttributes"
          component={EditProfileAttribute}
          options={({ route }) => ({
            title: route.params.headerTitle,
            headerShown: true,
            animation: "slide_from_right",
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerTitleAlign: "center",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

function HomeTabs() {
  const navigation = useNavigation();

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
          return <Ionicons name={iconName} size={26} color={colors.primary} />;
        },

        tabBarInactiveBackgroundColor: "white",
        tabBarActiveBackgroundColor: "white",
        headerShown: false,
        tabBarShowLabel: false,
      })}
      initialRouteName="HomeTab"
    >
      <Tab.Screen name="Matches" component={MatchScreen} />
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="Message" component={MessageScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default Router;
