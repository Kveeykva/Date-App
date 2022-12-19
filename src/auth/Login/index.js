import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input";
import PhoneAuthScreen from "../PhoneAuth";

const LoginScreen = (props) => {
  return (
    <SafeAreaView>
      <View>
        <PhoneAuthScreen />
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
