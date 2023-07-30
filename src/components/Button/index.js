import React from "react";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import styles from "./styles";

const Button = (props) => {
  const { text, customStyle, textCustomStyle, onPress, isDisabled, text2 } =
    props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={
        isDisabled
          ? [styles.button, customStyle, { backgroundColor: "#ccc" }]
          : [styles.button, customStyle]
      }
    >
      <Text style={[styles.buttonText, textCustomStyle]}>
        {text}
        {text2}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;
