import React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import styles from "./styles";

const Button = (props) => {
  const { text, customStyle, textCustomStyle, onPress, isDisabled } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        isDisabled
          ? [styles.button, customStyle, { backgroundColor: "#ccc" }]
          : [styles.button, customStyle]
      }
    >
      <Text style={[styles.buttonText, textCustomStyle]}> {text} </Text>
    </TouchableOpacity>
  );
};
export default Button;
