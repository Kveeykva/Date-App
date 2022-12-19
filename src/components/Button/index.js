import React from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";

const Button = (props) => {
  const { text, customStyle, textCustomStyle, onPress, isDisabled } = props;
  return (
    <SafeAreaView>
      <Pressable
        onPress={onPress}
        style={
          isDisabled
            ? [styles.button, customStyle, { backgroundColor: "#ccc" }]
            : [styles.button, customStyle]
        }
      >
        <Text style={[styles.buttonText, textCustomStyle]}> {text} </Text>
      </Pressable>
    </SafeAreaView>
  );
};
export default Button;
